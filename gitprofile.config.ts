// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fadikhan96', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Yalla Super App',
          description:
            'Yalla Super App - Pay, Send, Receive, Save, Invest, Donate & order anything you want! The first true Super App in the Middle East that offers fast, convenient, accessible & secure digital services. Below are the Super features in Yalla Super App are Yalla Money,Yalla Bills, Yalla Offer, Yalla Mall, Yalla Pharmacy, Yalla Transport, Yalla Gift Vouchers, Yalla Offers, Yalla Rewards',
          imageUrl:
            'https://play-lh.googleusercontent.com/WbIkg2734q-_c4rPZhULjgm-mpBRomGhRcLmChI3PfOI_p_mIeZQ_rmZ64_frK911C8',
          link: 'https://apps.apple.com/sk/app/the-super-app-global/id6465695846',
        },
        {
          title: 'Advolocate',
          description:
            'AdvoLocate is an online solution that aims at connecting at-risk users (civil society organizations and individual human rights defenders, activists and media professionals) to Pro-Bono, Paid, and/or On-Demand legal aid services.The main mission of the app is to create vetted, secure and on-demand access to legal aid resources around South Asia (Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan and Sri Lanka).The map will pinpoint where the services are available near the user or a particular location and will include their contact details.',
          imageUrl:
            'https://play-lh.googleusercontent.com/MdeNa8NiIY6NY1fmGSKp2T59G4ArTfZf4DRdveMCQYu44YYx6Vvd1pupXmoQlRsagAMf=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.advolocate',
        },
 {
          title: 'ELBC NEWS',
          description:
            'The Liberia Broadcasting System (LBS) is a state-owned radio and television network in Liberia. Founded as a Corporation in 1960, the network was owned and operated by Rediffusion, London until 1968, when management passed to the Government of Liberia',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/68/e8/80/68e880b3-a0f5-7a76-0f86-5aed7573c170/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.webp',
          link: 'https://apps.apple.com/pk/app/elbc-news/id6444584622',
        },

 {
          title: 'Xoom Academy',
          description:
            'Learning medicine made easy with Xoom Academy medical lectures.The all-in-one medical education platform where instructors teach effectively using innovative methods and students learn efficiently in organized way on their own pace, anytime anywhere.',
          imageUrl:
            'https://play-lh.googleusercontent.com/AR1h2Rydh6QWlD8l6Ai9iz890yyCzE3jvlYdxIfJOoTbHM-zcm8Go_rqX0WP4OwWSQ=s96-rw',
          link: 'https://play.google.com/store/apps/details?id=com.xoomm.academy&hl=en',
        },

 {
          title: 'Wager- Social Bets, Track Bets',
          description:
            'Wager is a social betting app for making all kinds of fun and crazy bets with your friends.Make the terms for the bet,add all the participants, and add their predictions and what their prizes will be if they win. Set up whatever rules and edge cases you can think of. Upload photographic proof of people agreeing to the bet so they cant wiggle out of their prediction later',
          imageUrl:
            'https://play-lh.googleusercontent.com/OhiZ12Wpl60EeDklZfzRr9gb10A-uM8-6FGuLizD6wXOp-3vrcw7jcwBI9RHvCsL2JI=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=com.anursidae.wager&hl=en_ZA',
        },

 {
          title: 'Fvast Taxi Booking',
          description:
            'The app allows users to select different ride types, view detailed driver information, and track the estimated time of arrival. Nearby drivers receive notifications for ride requests, enabling them to accept rides and view relevant details. Additionally, real-time tracking of pick-up and drop-off locations is provided through location services.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
   link: '',
        },
{
          title: 'Impact Collectective',
          description:
            'Developed a versatile app that provides real-time weather updates for multiple major cities and the users current location. Implemented an interactive multiple-choice question (MCQ) section, featuring five levels of difficulty, designed for educational use. Additionally, designed and integrated a dynamic daily posts section, enabling administrators to upload and display content directly within the app.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
   link: '',
        },
{
          title: 'Bargain Enterprise INC',
          description:
            'Designed and developed an admin interface that enables product uploads, category selection, and tagging of sales or discounts, with real-time visibility for users. Implemented user functionalities for product browsing, cart management, and order placement, including the integration of discount displays and category filtering. Additionally, created an order notification system for admins, providing user details like address and phone number to ensure efficient order processing.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s',
   link: '',
        },

      ],
    },
  },
  seo: {
    title: 'Portfolio of Fahad Amin',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/fahad-amin-43916b135/',
    youtube: 'fadikhan1931',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    phone: '+923315700545',
    email: 'fahadamin1234@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1Ud5o2OOX-Gxce1E73uxCBcaXI9gMCXC9/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Flutter',
    'Dart',
    'Flutter Web',
    'RESTFULL APIs',
    'StateManagement(Provider,Riverpod)',
    'Responsive Design',
    'Payment Integration(3DS,Non 3DS)',
    'Google Map',
    'Version Control(GIT)',
    'Google Play Console Configuration',
    'Apple Store Configuration',
    'Testing (Unit & Widget Testing)'
  
  ],
  experiences: [
    {
      company: 'PaySky',
      position: 'Flutter Developer',
      from: 'August 2023',
      to: 'Present',
      companyLink: 'https://paysky.io/',
    },
    {
      company: 'Xoom Academy',
      position: 'Flutter Developer(REMOTE)',
      from: 'Jan 2022',
      to: 'August 2023',
      companyLink: 'https://www.linkedin.com/company/xoomacademy/?originalSubdomain=uk',
    },
  {
      company: 'Excellence Delivered',
      position: 'Flutter Lab Engineer(Part Time)',
      from: 'Jan 2022',
      to: 'August 2023',
      companyLink: 'https://www.exdnow.com/',
    },
  {
      company: 'CodeBreakers Technology',
      position: 'Jr. Flutter Developer',
      from: 'March 2021',
      to: 'Dec 2021',
      companyLink: 'https://codebreakerstech.com/',
    },
  ],
  certifications: [
    {
      name: 'Certificate for Appreciation',
      body: 'Certificate for service to IT Industry Readiness BootCamp-Techlift',
      year: 'Sep 2022',
      link: 'https://techlift.pk',
    },
  ],
  educations: [
    {
      institution: 'COMSATS University Islamabad, Abbottabad Campus',
      degree: 'Software Engineering',
      from: '2016',
      to: '2020',
    },
   
  ],
  
  
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
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
