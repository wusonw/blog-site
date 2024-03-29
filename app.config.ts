// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Wusonw\'s Blog',
    description: 'My personal blog site',

    // image: {
    //   src: '/social-card-preview.png',
    //   alt: 'An image showcasing my project.',
    //   width: 400,
    //   height: 300
    // },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'wusonw' // alt of the logo
      }
    },

    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Find me' // string that will be displayed in the footer (leave empty or delete to disable)
    },

    // form: {
    //   successMessage: 'Message sent. Thank you!'
    // }
    socials: {
      // twitter: 'nuxtlabs',
      // instagram: 'atinuxt',
      // linkedin: {
      //   icon: 'uil:linkedin',
      //   label: 'LinkedIn',
      //   href: 'https://www.linkedin.com/company/nuxtlabs'
      // }
      github:'wusonw'
    },

    image: {
      src: '/hello-world.png'
    }
  }
})