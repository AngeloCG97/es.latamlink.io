/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Red Blockchain EOSIO para LAC Chain BID Labs", // Title for your website.
  tagline: "Documentación Técnica",
  url: "https://es.latamlink.io", // Your website URL
  baseUrl: "/", // Base URL for your project */

  // Used for publishing and more
  projectName: "es.latamlink.io",
  organizationName: "LatamLink",
  favicon: "img/favicon.ico",

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          editUrl: 'https://github.com/LatamLink/es.latamlink.io/tree/master',
          // Equivalent to `docsUrl`.
          routeBasePath: 'docs/',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: ' ',
      hideOnScroll: true,
      logo: {
        alt: 'LatamLink Logo',
        src: 'https://raw.githubusercontent.com/LatamLink/es.latamlink.io/master/static/images/latamlink_logo-h-full-color-overwhite.svg',
        srcDark: 'https://raw.githubusercontent.com/LatamLink/es.latamlink.io/master/static/img/footerlogo.png'
      },
      
      items: [
        // {
        //   href: 'https://medium.com/@latam_link',
        //   label: ' Noticias',
        //   position: 'right',
        // },
        {
          type: 'localeDropdown',
          position: 'left'
        },
        {
          href: 'https://dashboard.latamlink.io/',
          label: 'Monitor de Red',
          position: 'right',
        },
        {
          href: 'http://explorer.latamlink.io/',
          label: 'Explorador de Bloques',
          position: 'right',
        },
        {
          to: 'docs/testnet/eosio',
          label: 'Documentación',
          position: 'right',
        },
        {
          href: 'https://latamlink.io/',
          label: 'English',
          position: 'right',
        },
        {to: 'search'}
      ]
    },
    footer: {
      links: [
        {
          title: 'Herramientas',
          items: [
            {
              label: 'Monitor de Red',
              to: 'http://dashboard.latamlink.io/',
            },
            {
              label: 'Explorador de Bloques',
              to: 'http://explorer.latamlink.io/',
            },
            {
              label: 'APIs',
              to: 'https://es.latamlink.io/docs/api.html',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://eosio.stackexchange.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/LatamLink',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Medium',
              href: 'https://medium.com/@latam_link',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/LatamLink_EOS',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LACChain`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      apiKey: '63254e86059566be7b401497c9484166',
      indexName: 'latamlink_es',
      placeholder: 'Buscar',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    //Google Analytics
    googleAnalytics: {
      trackingID: "UA-173987-71",
    },
  },
  scripts: [
    {
      src:
        'https://buttons.github.io/buttons.js',
      async: true,
    },
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js',
    'https://kit.fontawesome.com/6c84ac616f.js',
    'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js',
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    localeConfigs: {
      es: {
        label: 'Español',
        direction: 'ltr',
      },
      en: {
        label: 'English',
        direction: 'ltr',
      }
    },
  }  
};

module.exports = siteConfig;
