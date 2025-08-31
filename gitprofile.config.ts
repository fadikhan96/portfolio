// gitprofile.config.ts — revised for clarity, SEO, and Upwork-ready portfolio

const CONFIG = {
  github: {
    username: 'fadikhan96',
  },

  /**
   * Base path: since you deploy at https://<USERNAME>.github.io/portfolio/ keep this as '/portfolio/'.
   */
  base: '/portfolio/',

  projects: {
    github: {
      display: true, // Show GitHub projects for social proof
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated', // Show recent activity
        limit: 6,
        exclude: {
          forks: true,
          projects: [],
        },
      },
      manual: {
        // If you prefer to curate, switch mode to 'manual' and list repos below
        projects: [
          'fadikhan96/skills_within_hoop',
          // 'fadikhan96/your-other-repo',
        ],
      },
    },

    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'Yalla Super App',
          description:
            'Super app offering payments, bills, e‑commerce, pharmacy, transport, vouchers, offers & rewards. Contributed to payments and feature development.',
          imageUrl:
            'https://play-lh.googleusercontent.com/WbIkg2734q-_c4rPZhULjgm-mpBRomGhRcLmChI3PfOI_p_mIeZQ_rmZ64_frK911C8',
          link: 'https://apps.apple.com/sk/app/the-super-app-global/id6465695846',
        },
 {
      title: 'Yalla Super Mall',
      description:
        'Full-fledged e-commerce store builder & marketplace within the Yalla ecosystem—lets merchants launch online stores and customers shop via Yalla Mall inside the Super App (Egypt & UAE).',
      imageUrl: 'https://yallasupermall.com/apple-touch-icon.png',
      link: 'https://yallasupermall.com',
    },
{
  title: 'K-Optra Rider',
  description:
    'In-house driver app for managing daily delivery routes with real-time navigation and backend tracking. Drivers can view assigned orders, scan items to confirm pickup, capture customer signatures, and update statuses (complete/cancel/reject). The app also supports suspending and resuming routes for flexible logistics workflows, ensuring accurate proof-of-delivery and operational efficiency.',
  imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
  link: '#',
},

        {
          title: 'AdvoLocate',
          description:
            'Legal-aid marketplace for South Asia connecting at‑risk users to vetted pro‑bono/paid/on‑demand lawyers. Implemented maps, onboarding, and UX flows.',
          imageUrl:
            'https://play-lh.googleusercontent.com/MdeNa8NiIY6NY1fmGSKp2T59G4ArTfZf4DRdveMCQYu44YYx6Vvd1pupXmoQlRsagAMf=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.advolocate',
        },
        {
          title: 'ELBC News',
          description:
            'State media app for Liberia Broadcasting System. Worked on content delivery and updates for radio/TV network.',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/68/e8/80/68e880b3-a0f5-7a76-0f86-5aed7573c170/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
          link: 'https://apps.apple.com/pk/app/elbc-news/id6444584622',
        },
        {
          title: 'Xoom Academy',
          description:
            'E‑learning platform for medical lectures. Migrated to latest Flutter, added payments & Firebase, deployed to both stores.',
          imageUrl:
            'https://play-lh.googleusercontent.com/AR1h2Rydh6QWlD8l6Ai9iz890yyCzE3jvlYdxIfJOoTbHM-zcm8Go_rqX0WP4OwWSQ=s96-rw',
          link: 'https://play.google.com/store/apps/details?id=com.xoomm.academy&hl=en',
        },
        {
          title: 'Wager — Social Bets',
          description:
            'Social betting with custom rules, participants, proofs, and outcomes. Built user flows and data models.',
          imageUrl:
            'https://play-lh.googleusercontent.com/OhiZ12Wpl60EeDklZfzRr9gb10A-uM8-6FGuLizD6wXOp-3vrcw7jcwBI9RHvCsL2JI=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.anursidae.wager&hl=en_ZA',
        },
        {
          title: 'Fvast Taxi Booking',
          description:
            'Ride types, driver details, ETA, and real‑time tracking. Nearby drivers receive requests and accept with full trip details.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
          link: '#', // TODO: add store/site link if available
        },
        {
          title: 'Impact Collective',
          description:
            'Weather for major cities + current location, 5‑level MCQs for learning, and a daily posts module with admin CMS.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
          link: '#', // TODO: add link
        },
        {
          title: 'Bargain Enterprise INC',
          description:
            'Admin panel for product uploads, categories, discounts; user app for browsing, cart, checkout; order notifications with address/phone for admins.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
          link: '#', // TODO: add link
        },
      ],
    },
  },

  seo: {
    title: 'Fahad Amin — Flutter Developer (4.8+ yrs)',
    description:
      'Flutter developer with 4.8+ years building cross‑platform apps: payments (Apple Pay/Google Pay/3DS), Firebase, Maps, CI/CD, and App Store/Play Store deployment.',
    imageURL: '', // Optional: add an Open Graph image URL
  },

  social: {
    linkedin: 'https://www.linkedin.com/in/fahad-amin-43916b135/',
    youtube: 'https://www.youtube.com/@fadikhan1931',
    stackoverflow: '',
    skype: '',
    telegram: '',
    phone: '+923315700545',
    email: 'fahadamin1234@gmail.com',
  },

  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Ud5o2OOX-Gxce1E73uxCBcaXI9gMCXC9/view?usp=drive_link',
  },

  skills: [
    'Flutter',
    'Dart',
    'Flutter Web',
    'RESTful APIs', // fixed spelling
    'State Management (Riverpod, Bloc, GetX,Provider)',
    'Responsive Design',
    'Payment Integration (3DS & non‑3DS)', // clearer
    'Apple Pay',
    'Google Pay',
    'Google Maps',
    'Version Control (Git)',
    'Google Play Console Configuration',
    'Apple App Store Configuration',
    'Testing (Unit & Widget)',
    'Firebase (Auth, FCM, Dynamic Links)',
    'CI/CD (GitHub Actions, Fastlane)',
  ],

  experiences: [
{
      company: 'Global Financial Media',
      position: 'Flutter Developer',
      from: 'Aug 2025',
      to: 'Present',
      companyLink: 'https://www.globalfinancialmedia.com/',
    },
    {
      company: 'PaySky',
      position: 'Flutter Developer',
      from: 'Aug 2023',
      to: 'Aug 2025',
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
      company: 'Excellence Delivered',
      position: 'Flutter Lab Engineer (Part‑Time)',
      from: 'Jan 2022',
      to: 'Aug 2023',
      companyLink: 'https://www.exdnow.com/',
    },
    {
      company: 'CodeBreakers Technology',
      position: 'Jr. Flutter Developer',
      from: 'Mar 2021',
      to: 'Dec 2021',
      companyLink: 'https://codebreakerstech.com/',
    },
  ],

  certifications: [
    {
      name: 'Certificate of Appreciation',
      body: 'Service to IT Industry Readiness BootCamp — Techlift',
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

  googleAnalytics: {
    id: '', // Add UA-XXXX or G-XXXX for analytics
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
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
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  enablePWA: true,
};

export default CONFIG;
