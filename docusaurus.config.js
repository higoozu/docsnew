// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AsoBear Docs',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.asobear.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'higoozu', // Usually your GitHub org/user name.
  projectName: 'docsnew', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
          routeBasePath: '/',
          editUrl:
            'https://github.com/higoozu/docsnew/blob/main/',
        },
        blog: false,
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
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DOCS',
        logo: {
          alt: 'AsoBear Logo',
          src: 'https://cdn.jsdelivr.net/gh/higoozu/images-bed@master/20240222/icon-100px.205w2vncb36o.webp',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'codeSidebar',
            position: 'left',
            label: 'Code',
          },
          {
            type: 'docSidebar',
            sidebarId: 'toolSidebar',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'docSidebar',
            sidebarId: 'courseSidebar',
            position: 'left',
            label: 'Courses',
          },
          {
            type: 'docSidebar',
            sidebarId: 'fragmentSidebar',
            position: 'left',
            label: 'Fragments',
          },
          { href: 'https://space.asobear.com', label: 'Space', position: 'right' },
          {
            label: "Social",
            position: "right",
            items: [
              {
                label: "Mastodon",
                href: "https://aso.moe/@asobear",
              },
              {
                label: "GitHub",
                href: "https://github.com/higoozu/",
              },
            ],
          },
        ],
        // 下滑隐藏navbar
        hideOnScroll: true,
      },
      footer: {
        style: 'light',
        copyright: `© ${new Date().getFullYear()} <a target="_blank" rel="noopener noreferrer" href="https://www.asobear.com">AsoBear.com</a> Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🚧 网站正在测试 <a target="_blank" rel="noopener noreferrer" href="https://docs-old.asobear.com">回到旧版</a>',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

};

export default config;
