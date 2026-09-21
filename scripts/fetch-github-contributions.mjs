import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const outputPath = path.join(root, 'src', 'data', 'github-contributions.json')

async function loadDotEnv() {
  try {
    const contents = await fs.readFile(path.join(root, '.env'), 'utf8')
    for (const line of contents.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/)
      if (!match || process.env[match[1]]) continue
      process.env[match[1]] = match[2].replace(/^['"]|['"]$/g, '')
    }
  } catch {
    // GitHub Actions provides the token through the environment.
  }
}

await loadDotEnv()

const token = process.env.GITHUB_CONTRIBUTIONS_TOKEN
const login = process.env.GITHUB_USERNAME || 'HamedTaherpour'

if (!token || token.startsWith('your-')) {
  console.warn('GITHUB_CONTRIBUTIONS_TOKEN is not set; keeping the existing contribution dataset.')
  process.exit(0)
}

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { contributionCount date } }
      }
    }
  }
}`

const response = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'X-GitHub-Api-Version': '2022-11-28',
  },
  body: JSON.stringify({ query, variables: { login } }),
})

const body = await response.json()
if (!response.ok || body.errors?.length || !body.data?.user) {
  const details = body.errors?.map((error) => error.message).join('; ') || body.message || `HTTP ${response.status}`
  throw new Error(`GitHub contribution query failed for ${login}: ${details}`)
}

const calendar = body.data.user.contributionsCollection.contributionCalendar
const contributions = calendar.weeks.flatMap((week) =>
  week.contributionDays.map(({ date, contributionCount }) => ({
    date,
    count: contributionCount,
    level: 0,
  }))
)
await fs.writeFile(outputPath, JSON.stringify({ total: { lastYear: calendar.totalContributions }, contributions }, null, 2) + '\n')
console.log(`Fetched ${calendar.totalContributions} GitHub contributions for ${login}.`)
