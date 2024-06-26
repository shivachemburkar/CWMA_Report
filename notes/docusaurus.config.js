// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CWMA Water Quality Improvements',
  tagline: 'Streamlined version of WQIP Goals for the CWMA',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://report.ogawa.us/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Mikhail Ogawa Engineering', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es-ES'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'fullReportSidebar',
            position: 'left',
            label: 'Watershed Goals',
          },
          
          {
            type: 'docSidebar',
            sidebarId: 'LASidebar',
            docId: 'Appendices/overview',
            position: 'left',
            label: 'Loma Alta',
          },
          {
            type: 'docSidebar',
            sidebarId: 'BuenaVistaSidebar',
            docId: 'Attachments/Attachments',
            position: 'left',
            label: 'Buena Vista Creek',
          },
          {
            type: 'docSidebar',
            sidebarId: 'AguaHediondaSidebar',
            position: 'left',
            label: 'Agua Hedionda',
          },

          {
            type: 'docSidebar',
            sidebarId: 'EncinasSidebar',
            position: 'left',
            label: 'Encinas',
          },
          {
            type: 'docSidebar',
            sidebarId: 'SanMarcosSidebar',
            position: 'left',
            label: 'San Marcos Creek',
          },
          {
            type: 'docSidebar',
            sidebarId: 'EscondidoCreekSidebar',
            position: 'left',
            label: 'Escondido Creek',
          },

          // {to: '/wqipgoals', label: 'Goals Progress', position: 'left'},
          {
            href: 'https://projectcleanwater.org/download/carlsbad-wma-wqip-updated-2021/',
            label: 'Report PDF',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'CWMA Report',
            items: [
              {
                label: 'Report Breakdown',
                to: '/docs/intro',
              },
              {
                label: 'Water Quality Improvement Results',
                to: '/wqipgoals',
              },
              {
                label: 'Appendices',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Current Accepted WQIP',
            items: [
              {
                label: 'Current WQIP',
                href: 'https://projectcleanwater.org/download/carlsbad-wma-wqip-updated-2021/',
              },
              {
                label: 'Project Clean Water',
                href: 'https://projectcleanwater.org/watersheds/carlsbad-wma/',
              },
              
            ],
          },
          {
            title: '3rd Party Information',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'MOE Website',
                href: 'https://mogawaeng.com/index.html',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mikhail Ogawa Engineering`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
