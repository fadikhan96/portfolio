const CONFIG = {
  github: {
    username: 'fadikhan96',
  },

  base: '/portfolio/',

  projects: {
    github: {
      display: false,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Products and Apps',
      projects: [
        {
          title: 'Tadawuly / Mubasher.Info',
          description:
            'Real-time financial market app with market overview, company profiles, announcements, watchlists, predictions, AI features, and portfolio insights.',
          imageUrl:
            'https://play-lh.googleusercontent.com/1ib_zivxoiFdCutSxRO9InUfDrQpqMOKHq8pmrqqAqIvJaaU41jcEX1xrNOaVU4c8A2V=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.gfm.tadawuly',
        },
        {
          title: 'Mubasher Trade (mTrade)',
          description:
            'Trading-focused app with market watch, symbol details, trading flows, portfolio features, and real-time financial data.',
          imageUrl:
            'https://play-lh.googleusercontent.com/ECjdPjcPleLWNDrxhkcz3sz0g8hmOGS75XRRhhrt8Zbg9cs2SjwBFlvAWC4fs9cdjds=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.mfs.mtrade.twsl',
        },
        {
          title: 'Yalla Super App',
          description:
            'A large-scale super app that combines payments, bills, shopping, pharmacy, transport, vouchers, and rewards. Contributed to payment and feature delivery in production.',
          imageUrl:
            'https://play-lh.googleusercontent.com/WbIkg2734q-_c4rPZhULjgm-mpBRomGhRcLmChI3PfOI_p_mIeZQ_rmZ64_frK911C8',
          link: 'https://apps.apple.com/sk/app/the-super-app-global/id6465695846',
        },
        {
          title: 'Yalla Super Mall',
          description:
            'Marketplace and store-builder platform in the Yalla ecosystem where merchants launch storefronts and customers shop in-app across Egypt and UAE.',
          imageUrl: 'https://yallasupermall.com/apple-touch-icon.png',
          link: 'https://yallasupermall.com',
        },
        {
          title: 'AdvoLocate',
          description:
            'Legal-aid marketplace that connects users with verified lawyers through a reliable onboarding and discovery flow.',
          imageUrl:
            'https://play-lh.googleusercontent.com/MdeNa8NiIY6NY1fmGSKp2T59G4ArTfZf4DRdveMCQYu44YYx6Vvd1pupXmoQlRsagAMf=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.advolocate',
        },
        {
          title: 'ELBC News',
          description:
            'News and media streaming app for Liberia Broadcasting System with smooth content delivery and update workflows.',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/68/e8/80/68e880b3-a0f5-7a76-0f86-5aed7573c170/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
          link: 'https://apps.apple.com/pk/app/elbc-news/id6444584622',
        },
        {
          title: 'Xoom Academy',
          description:
            'E-learning mobile platform for medical lectures with Flutter upgrades, payment integration, and Firebase-backed features.',
          imageUrl:
            'https://play-lh.googleusercontent.com/AR1h2Rydh6QWlD8l6Ai9iz890yyCzE3jvlYdxIfJOoTbHM-zcm8Go_rqX0WP4OwWSQ=s96-rw',
          link: 'https://play.google.com/store/apps/details?id=com.xoomm.academy&hl=en',
        },
        {
          title: 'Wager - Social Bets',
          description:
            'Social betting app with custom rules, participant management, proofs, and outcomes built for clear user flows.',
          imageUrl:
            'https://play-lh.googleusercontent.com/OhiZ12Wpl60EeDklZfzRr9gb10A-uM8-6FGuLizD6wXOp-3vrcw7jcwBI9RHvCsL2JI=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.anursidae.wager&hl=en_ZA',
        },
      ],
    },
  },

  seo: {
    title: 'Fahad Amin - Flutter Developer | Mobile App Engineer',
    description:
      'Fahad Amin is a Flutter Developer with 5+ years of experience building cross-platform mobile apps using Flutter and Dart, including payments, maps, Firebase, and CI/CD.',
    imageURL: 'https://avatars.githubusercontent.com/u/27143233?v=4',
    keywords: [
      'Fahad Amin',
      'Fahad Amin Flutter Developer',
      'Flutter Developer',
      'Flutter Developer Pakistan',
      'Dart Developer',
      'Mobile App Developer',
      'Cross Platform App Developer',
      'Flutter Engineer',
      'Firebase Flutter',
      'Flutter Portfolio',
    ],
    siteUrl: 'https://fadikhan96.github.io/portfolio/',
    author: 'Fahad Amin',
    jobTitle: 'Flutter Developer',
    location: 'Pakistan',
  },

  social: {
    linkedin: 'fahad-amin-43916b135',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '@fadikhan1931',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: 'https://www.linkedin.com/in/fahad-amin-43916b135/',
    phone: '+923315700545',
    email: 'fahadamin1234@gmail.com',
  },

  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/1kKJQCKvYo0D2UWdGD9dJuVU-3LYjMIlt',
  },

  skills: [
    'Flutter',
    'Dart',
    'Flutter Web',
    'Cross-Platform Mobile Development',
    'Clean Architecture',
    'MVC and MVVM',
    'REST APIs',
    'WebSockets',
    'Dio and HTTP',
    'State Management (Riverpod, Bloc, GetX, Provider)',
    'Firebase (Auth, FCM, Dynamic Links)',
    'Payment Integration (Apple Pay, Google Pay, 3DS)',
    'In-App Payments (3DS and Non-3DS)',
    'Google Maps and Geolocation',
    'GPS Tracking and Geofencing',
    'Pagination, Search, and Filtering',
    'Responsive UI and UX',
    'Reusable Component Design',
    'UAT and Production Support',
    'CI/CD (GitHub Actions, Fastlane)',
    'App Store and Play Store Releases',
    'Firebase App Distribution and TestFlight',
    'Unit and Widget Testing',
  ],

  experiences: [
    {
      company: 'Global Financial Media / Mubasher Information Group',
      position: 'Senior Mobile Engineer / Flutter Developer',
      from: 'Jul 2025',
      to: 'Present',
      companyLink: 'https://www.globalfinancialmedia.com/',
    },
    {
      company: 'PaySky',
      position: 'Flutter Developer',
      from: 'Aug 2023',
      to: 'Jul 2025',
      companyLink: 'https://paysky.io/',
    },
    {
      company: 'Xoom Academy',
      position: 'Flutter Developer (Remote)',
      from: 'Jan 2022',
      to: 'Aug 2023',
      companyLink:
        'https://www.linkedin.com/company/xoomacademy/?originalSubdomain=uk',
    },
    {
      company: 'CodeBreakers Technology',
      position: 'Junior Flutter Developer',
      from: 'Jan 2020',
      to: 'Dec 2020',
      companyLink: 'https://codebreakerstech.com/',
    },
  ],

  certifications: [
    {
      name: 'Certificate of Appreciation',
      body: 'Service to IT Industry Readiness BootCamp - Techlift',
      year: 'Sep 2022',
      link: 'https://techlift.pk',
    },
  ],

  educations: [
    {
      institution: 'COMSATS University Islamabad, Abbottabad Campus',
      degree: 'BS Software Engineering',
      from: '2016',
      to: '2020',
    },
  ],

  publications: [],

  blog: {
    source: 'dev',
    username: '',
    limit: 3,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'corporate',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#0d6e6e',
      secondary: '#1f4c7a',
      accent: '#d97706',
      neutral: '#1f2937',
      'base-100': '#f8fafc',
      '--rounded-box': '1rem',
      '--rounded-btn': '0.75rem',
    },
  },

  footer: '',

  enablePWA: true,
};

export default CONFIG;
