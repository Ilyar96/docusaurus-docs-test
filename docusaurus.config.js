// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Hash2Cash",
	tagline: "Тестовая документация проекта hash2cash",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://github.com/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/docusaurus-docs-test/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "Ilyar96", // Usually your GitHub org/user name.
	projectName: "docusaurus-docs-test", // Usually your repo name.
	deploymentBranch: "gh-pages",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: "./sidebars.js",
					routeBasePath: "/",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/logo-black.svg",
			navbar: {
				logo: {
					alt: "Hash2Cash Logo",
					src: "img/logo-black.svg", // логотип для светлой темы
					srcDark: "img/logo-white.svg", // логотип для темной темы
					href: "https://hash2cash.io", // ссылка на главную страницу
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Tutorial",
					},
				],
			},
			metadata: [
				{ name: "keywords", content: "hash2cash, hash2cash docs" },
				{ name: "description", content: "Hash2Cash docs" },
			],
			// footer: {
			// 	style: "dark",
			// 	links: [
			// 		{
			// 			title: "Docs",
			// 			items: [
			// 				{
			// 					label: "Tutorial",
			// 					to: "/docs/intro",
			// 				},
			// 			],
			// 		},
			// 		{
			// 			title: "Community",
			// 			items: [
			// 				{
			// 					label: "Stack Overflow",
			// 					href: "https://stackoverflow.com/questions/tagged/docusaurus",
			// 				},
			// 				{
			// 					label: "Discord",
			// 					href: "https://discordapp.com/invite/docusaurus",
			// 				},
			// 				{
			// 					label: "X",
			// 					href: "https://x.com/docusaurus",
			// 				},
			// 			],
			// 		},
			// 		{
			// 			title: "More",
			// 			items: [
			// 				{
			// 					label: "GitHub",
			// 					href: "https://github.com/facebook/docusaurus",
			// 				},
			// 			],
			// 		},
			// 	],
			// 	copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			// },
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
