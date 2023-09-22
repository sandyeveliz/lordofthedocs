import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Lord of the docs",
      social: {
        github: "https://github.com/sandyeveliz/lordofthedocs",
        discord: "https://discord.gg/anWb4upY",
      },
      defaultLocale: "es",
      locales: {
        en: {
          label: "English",
        },
        es: {
          label: "Español",
        },
      },
      sidebar: [
        {
          label: "Empezar por aquí",
          translations: {
            en: "Start here",
          },
          autogenerate: { directory: "start"},
        },
      ],
      customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			],
    }),
  ],
});
