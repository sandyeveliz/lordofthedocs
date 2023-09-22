import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Lord of the docs',
			social: {
				github: 'https://github.com/sandyeveliz/lordofthedocs',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Front-End',
					autogenerate: { directory: 'reference' },
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Frameworks', 
						items: [
							// Each item here is one entry in the navigation menu.
							{ label: 'JS', 
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: 'React', link: '/guides/frontend/react/' },
							],
						 },
						],
					 },
					],
				},
			],
		}),
	],
});
