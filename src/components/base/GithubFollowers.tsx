import { useEffect, useState } from 'react'

interface Props {
  username: string
  label?: string
}

export default function GithubFollowers({ username, label = 'دنبال‌کننده' }: Props) {
  const [followers, setFollowers] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error('GitHub request failed')
        return response.json() as Promise<{ followers: number }>
      })
      .then((data) => setFollowers(data.followers))
      .catch(() => setFollowers(null))
  }, [username])

  return <span className="inline-block tabular-nums">{followers === null ? '—' : `${new Intl.NumberFormat('fa-IR').format(followers)} ${label}`}</span>
}
