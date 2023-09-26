import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://lordofthedocs.vercel.app/',
  integrations: [starlight({
    title: 'Lord of the docs'
  })],
  integrations: [starlight({
    title: "Lord of the docs",
    logo: {
      light: "./src/assets/logo/light.svg",
      dark: "./src/assets/logo/dark.svg",
      replacesTitle: true
    },
    favicon: './src/assets/logo/logo_icon.svg',
    social: {
      github: "https://github.com/sandyeveliz/lordofthedocs",
      discord: "https://discord.gg/anWb4upY"
    },
    editLink: {
      baseUrl: 'https://github.com/sandyeveliz/lordofthedocs/edit/'
    },
    defaultLocale: "es",
    locales: {
      en: {
        label: "English"
      },
      es: {
        label: "Español"
      }
    },
    sidebar: [{
      label: "Empezar por aquí",
      translations: {
        en: "Start here"
      },
      autogenerate: {
        directory: "start"
      }
    }, {
      label: "Fundamentos",
      translations: {
        en: "Funtamentals"
      },
      items: [{
        label: "Programación",
        translations: {
          en: "Programing"
        },
        autogenerate: {
          directory: "fundamentals/programing"
        }
      }, {
        label: "Diseño UX/UI",
        translations: {
          en: "UX/UI Design"
        },
        autogenerate: {
          directory: "fundamentals/design"
        }
      }]
    }, {
      label: "Front End",
      items: [{
        label: "Angular",
        autogenerate: {
          directory: "front-end/angular"
        }
      }, {
        label: "React",
        autogenerate: {
          directory: "front-end/react"
        }
      }, {
        label: "Vue",
        autogenerate: {
          directory: "front-end/vue"
        }
      }, {
        label: "Qwik",
        autogenerate: {
          directory: "front-end/qwik"
        }
      }, {
        label: "Svelte",
        autogenerate: {
          directory: "front-end/svelte"
        }
      }, {
        label: "Astro",
        autogenerate: {
          directory: "front-end/astro"
        }
      }, {
        label: "Deployment",
        autogenerate: {
          directory: "front-end/deployment"
        }
      }]
    }, {
      label: "Back End",
      items: [{
        label: "Django",
        autogenerate: {
          directory: "back-end/django"
        }
      }, {
        label: "Laravel",
        autogenerate: {
          directory: "back-end/laravel"
        }
      }, {
        label: "Nodejs",
        autogenerate: {
          directory: "back-end/nodejs"
        }
      }, {
        label: "Spring boot",
        autogenerate: {
          directory: "back-end/springboot"
        }
      }]
    }, {
      label: "Móvil",
      translations: {
        en: "Mobile"
      },
      items: [{
        label: "Android",
        autogenerate: {
          directory: "mobile/android"
        }
      }, {
        label: "IOS",
        autogenerate: {
          directory: "mobile/ios"
        }
      }, {
        label: "Flutter",
        autogenerate: {
          directory: "mobile/flutter"
        }
      }, {
        label: "React Native",
        autogenerate: {
          directory: "mobile/react'native"
        }
      }]
    }, {
      label: "DevOps",
      autogenerate: {
        directory: "devops"
      }
    }, {
      label: "Diseño UX/UI",
      translations: {
        en: "UX/UI Design"
      },
      items: [{
        label: "UI",
        autogenerate: {
          directory: "design/ui"
        }
      }, {
        label: "UX",
        autogenerate: {
          directory: "design/ux"
        }
      }]
    }],
    customCss: [
    // Relative path to your custom CSS file
    "./src/styles/custom.css"]
  })],
  output: 'static',
  adapter: vercel()
});