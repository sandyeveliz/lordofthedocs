import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config

export const locales = {
	root: { label: 'Español', lang: 'es' },
	en: { label: 'English', lang: 'en' },
};
export default defineConfig({
  site: "https://lordofthedocs.vercel.app/",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  integrations: [starlight({
    title: "Lord of the docs",
    logo: {
      light: "./src/assets/logo/light.svg",
      dark: "./src/assets/logo/dark.svg",
      replacesTitle: true
    },
    favicon: "/favicon.svg",
    social: {
      github: "https://github.com/sandyeveliz/lordofthedocs",
      discord: "https://discord.gg/anWb4upY"
    },
    editLink: {
      baseUrl: "https://github.com/sandyeveliz/lordofthedocs/edit/"
    },
    locales: locales,
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
      autogenerate: {
        directory: "fundamentals"
      }
    }, {
      label: "Front End",
      collapsed: false,
      items: [{
        label: "Angular",
        collapsed: true,
        autogenerate: {
          directory: "front-end/angular"
        }
      }, {
        label: "React",
        collapsed: true,
        autogenerate: {
          directory: "front-end/react"
        }
      }, {
        label: "Vue",
        collapsed: true,
        autogenerate: {
          directory: "front-end/vue"
        }
      }, {
        label: "Qwik",
        collapsed: true,
        autogenerate: {
          directory: "front-end/qwik"
        }
      }, {
        label: "Svelte",
        collapsed: true,
        autogenerate: {
          directory: "front-end/svelte"
        }
      }, {
        label: "Astro",
        collapsed: true,
        autogenerate: {
          directory: "front-end/astro"
        }
      }, {
        label: "Deployment",
        collapsed: true,
        autogenerate: {
          directory: "front-end/deployment"
        }
      }]
    }, {
      label: "Back End",
      items: [{
        label: "Django",
        collapsed: true,
        autogenerate: {
          directory: "back-end/django"
        }
      }, {
        label: "Laravel",
        collapsed: true,
        autogenerate: {
          directory: "back-end/laravel"
        }
      }, {
        label: "Nodejs",
        collapsed: true,
        autogenerate: {
          directory: "back-end/nodejs"
        }
      }, {
        label: "Spring boot",
        collapsed: true,
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
        collapsed: true,
        autogenerate: {
          directory: "mobile/android"
        }
      }, {
        label: "IOS",
        collapsed: true,
        autogenerate: {
          directory: "mobile/ios"
        }
      }, {
        label: "Flutter",
        collapsed: true,
        autogenerate: {
          directory: "mobile/flutter"
        }
      }, {
        label: "React Native",
        collapsed: true,
        autogenerate: {
          directory: "mobile/react'native"
        }
      }]
    }, {
      label: "DevOps",
      collapsed: true,
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
        collapsed: true,
        autogenerate: {
          directory: "design/ui"
        }
      }, {
        label: "UX",
        collapsed: true,
        autogenerate: {
          directory: "design/ux"
        }
      }]
    }],
    lastUpdated: true,
    customCss: [
    // Relative path to your custom CSS file
    "./src/styles/custom.css"]
  })]
});