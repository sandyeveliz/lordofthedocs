import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Lord of the docs",
      logo: {
        light: "./src/assets/logo/light.svg",
        dark: "./src/assets/logo/dark.svg",
        replacesTitle: true,
      },
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
          autogenerate: { directory: "start" },
        },
        {
          label: "Fundamentos",
          translations: {
            en: "Funtamentals",
          },
          items: [
            {
              label: "Programación",
              translations: {
                en: "Programing",
              },
              autogenerate: { directory: "fundamentals/programing" },
            },
            {
              label: "Diseño UX/UI",
              translations: {
                en: "UX/UI Design",
              },
              autogenerate: { directory: "fundamentals/design" },
            },
          ],
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
    }),
  ],
});
