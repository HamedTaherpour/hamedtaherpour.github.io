'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '~/lib/utils'
import Tooltip, { TooltipProvider } from './Tooltip.tsx'

// API from https://github.com/grubersjoe/github-contributions-api
interface Contribution {
  date: string
  count: number
  level: number
}

interface Response {
  total: {
    [year: number]: number
    [year: string]: number // 'lastYear'
  }
  contributions: Array<Contribution>
}

interface ErrorData {
  error: string
}

interface Props {
  username: string
  tooltipEnabled: boolean
  initialData?: Response
}

// 生成默认占位数据
function generatePlaceholderContributions(): Response {
  const contributions = Array.from(
    { length: 371 },
    (_, index): Contribution => ({
      date: new Date(Date.now() - (371 - index) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      count: 0,
      level: 0,
    })
  )

  return {
    contributions,
    total: {
      lastYear: 0,
    },
  }
}

async function fetchContributions(username: string): Promise<Response> {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
  const data: Response | ErrorData = await response.json()

  if (!response.ok) {
    throw Error(`Fetching GitHub contribution data for "${username}" failed: ${(data as ErrorData).error}`)
  }

  return data as Response
}

export default function GithubContributions({ username, tooltipEnabled, initialData }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [data, setData] = useState<Response | null>(initialData?.contributions?.length ? initialData : generatePlaceholderContributions())
  const [errorVisible, setErrorVisible] = useState(!initialData?.contributions?.length)

  const scrollToRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth
    }
  }, [])

  const fetchData = useCallback(() => {
    if (initialData?.contributions?.length) return
    fetchContributions(username)
      .then(setData)
      .then(scrollToRight)
      .then(() => {
        setErrorVisible(false)
      })
      .catch(() => {
        // Never show fabricated contribution activity when the data source is unavailable.
        setData(generatePlaceholderContributions())
      })
  }, [initialData, username])

  useEffect(fetchData, [fetchData])

  // 将贡献数据按周分组
  const weeks =
    data?.contributions.reduce<Contribution[][]>((acc, day, index) => {
      const weekIndex = Math.floor(index / 7)
      if (!acc[weekIndex]) {
        acc[weekIndex] = []
      }
      acc[weekIndex].push(day)
      return acc
    }, []) || []

  return (
    <TooltipProvider>
      <div ref={containerRef} dir="ltr" className="grid grid-flow-col gap-1 overflow-x-auto py-2 px-2 max-md:px-0 scroll-smooth">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-rows-7 gap-1">
            {week.map((contribution, dayIndex) => {
              const { date, count } = contribution
              const formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })

              const tooltipContent = `${formattedDate} — ${
                count === 1 ? '۱ مشارکت' : count === 0 ? 'بدون مشارکت' : `${count} مشارکت`
              }`

              return (
                <Tooltip key={dayIndex} content={tooltipContent} disabled={!tooltipEnabled || errorVisible}>
                  <div
                    className={cn(
                      'size-2 relative transition-colors duration-500 rounded-[1px]',
                      count === 0
                        ? 'bg-zinc-200/70 dark:bg-zinc-900'
                        : count < 5
                          ? 'bg-zinc-400/70 dark:bg-zinc-700'
                          : count < 10
                            ? 'bg-zinc-500'
                            : 'bg-zinc-900 dark:bg-zinc-50'
                    )}
                  />
                </Tooltip>
              )
            })}
          </div>
        ))}
      </div>
    </TooltipProvider>
  )
}
