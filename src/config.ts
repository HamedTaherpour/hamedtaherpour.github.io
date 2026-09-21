import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'حامد طاهرپور',
  description: 'وب‌سایت شخصی حامد طاهرپور؛ یادداشت‌هایی از مسیر یادگیری توسعه فرانت‌اند و کار با Shopify.',
  website: 'https://hamedtaherpour.github.io/',
  lang: 'fa-IR',
  base: '/',
  author: 'حامد طاهرپور',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'نوشته‌ها',
    url: '/posts',
  },
  {
    name: 'پروژه‌ها',
    url: '/projects',
  },
  {
    name: 'عکس‌ها',
    url: '/photos',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'خانه',
    url: '/',
  },
  {
    name: 'نوشته‌ها',
    url: '/posts',
  },
  {
    name: 'پروژه‌ها',
    url: '/projects',
  },
  {
    name: 'برچسب‌ها',
    url: '/tags',
  },
  {
    name: 'عکس‌ها',
    url: '/photos',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/HamedTaherpour',
    icon: 'icon-[ri--github-fill]',
  },
  {
    name: 'twitter',
    url: 'https://twitter.com/hamed_taherpour',
    icon: 'icon-[ri--twitter-x-fill]',
  },
  {
    name: 'telegram',
    url: 'https://t.me/HamedTaherpour',
    icon: 'icon-[ri--telegram-fill]',
  },
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'React',
          icon: 'icon-[logos--react]',
          url: 'https://react.dev/',
        },
        {
          name: 'Remix',
          icon: 'icon-[thesvg-color--remix-dark]',
          url: 'https://remix.run/',
        },
         {
          name: 'Vue',
          icon: 'icon-[logos--vue]',
          url: 'https://vuejs.org/',
        },
        {
          name: 'Nuxt',
          icon: 'icon-[logos--nuxt-icon]',
          url: 'https://nuxt.com/',
        },
        {
          name: 'Astro',
          icon: 'icon-[logos--astro-icon]',
          url: 'https://astro.build/',
        },
        {
          name: 'Shopify',
          icon: 'icon-[logos--shopify]',
          url: 'https://shopify.dev/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
         {
          name: 'TypeScript',
          icon: 'icon-[skill-icons--typescript]',
          url: 'https://www.typescriptlang.org/',
        },
         {
          name: 'JavaScript',
          icon: 'icon-[logos--javascript]',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Polaris',
          icon: 'icon-[logos--shopify]',
          url: 'https://polaris.shopify.com/',
        },
        {
          name: 'GraphQL',
          icon: 'icon-[logos--graphql]',
          url: 'https://graphql.org/',
        },
        {
          name: 'Prisma',
          icon: 'icon-[skill-icons--prisma]',
          url: 'https://www.prisma.io/',
        },
        {
          name: 'shadcn/ui',
          icon: 'icon-[thesvg-color--shadcn-ui-dark]',
          url: 'https://ui.shadcn.com/',
        },
        {
          name: 'TanStack',
          icon: 'icon-[thesvg-color--tanstack]',
          url: 'https://tanstack.com/',
        },
        {
          name: 'Highcharts',
          icon: 'icon-[logos--highcharts]',
          url: 'https://www.highcharts.com/',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'Tailwind CSS',
          icon: 'icon-[logos--tailwindcss-icon]',
          url: 'https://tailwindcss.com/',
        },
        {
          name: 'Git',
          icon: 'icon-[skill-icons--git]',
          url: 'https://git-scm.com/',
        },
        {
          name: 'WebStorm',
          icon: 'icon-[thesvg-color--jetbrains-webstorm]',
          url: 'https://www.jetbrains.com/webstorm/',
        },
        {
          name: 'Visual Studio Code',
          icon: 'icon-[thesvg-color--visual-studio-code]',
          url: 'https://code.visualstudio.com/',
        },
        {
          name: 'Cursor',
          icon: 'icon-[thesvg-color--cursor-dark]',
          url: 'https://cursor.com/',
        },
        {
          name: 'Codex',
          icon: 'icon-[thesvg-color--codex-light]',
          url: 'https://openai.com/codex/',
        },
        {
          name: 'Zustand',
          icon: 'icon-[devicon--zustand]',
          url: 'https://zustand.docs.pmnd.rs/',
        },
        {
          name: 'Zod',
          icon: 'icon-[logos--zod]',
          url: 'https://zod.dev/',
        },
        {
          name: 'Turbopack',
          icon: 'icon-[thesvg-color--turbopack-light]',
          url: 'https://turborepo.tools/pack',
        },
        {
          name: 'Vitest',
          icon: 'icon-[logos--vitest]',
          url: 'https://vitest.dev/',
        },
         {
          name: 'pnpm',
          icon: 'icon-[logos--pnpm]',
          url: 'https://pnpm.io/',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'HamedTaherpour',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'نوشته‌ها',
  description: 'یادداشت‌ها و تجربه‌های حامد طاهرپور',
  introduce: 'اینجا درباره‌ی توسعه وب، تجربه‌های کاری و چیزهایی که یاد می‌گیرم می‌نویسم.',
  author: 'حامد طاهرپور',
  homePageConfig: {
    size: 2,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'ادامه مطلب',
  prevPageText: 'قبلی',
  nextPageText: 'بعدی',
  tocText: 'فهرست مطالب',
  backToPostsText: 'بازگشت به نوشته‌ها',
  nextPostText: 'نوشته بعدی',
  prevPostText: 'نوشته قبلی',
  recommendText: 'پیشنهاد ویژه',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: false,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'gitalk-comment',
    owner: 'HamedTaherpour',
    admin: ['HamedTaherpour'],
    language: 'fa-IR',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'برچسب‌ها',
  description: 'برچسب‌های نوشته‌ها',
  introduce: 'نوشته‌ها را بر اساس موضوع دنبال کن.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'پروژه‌ها',
  description: 'پروژه‌ها و کارهایی که ساخته‌ام.',
  introduce: 'منتخبی از پروژه‌ها و تجربه‌های فنی من.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'عکس‌ها',
  description: 'تصویرهایی از روزمرگی‌ها و سفرها.',
  introduce: 'گوشه‌ای از زندگی بیرون از کد.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: 'Your websiteId in umami',
    serverUrl: 'https://cloud.umami.is/script.js',
  },
}
