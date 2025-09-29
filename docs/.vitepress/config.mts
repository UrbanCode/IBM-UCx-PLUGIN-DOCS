import { defineConfig } from 'vitepress'
import { BUILD_BASE_DIR, DEPLOY_BASE_DIR, RELEASE_BASE_DIR, VELOCITY_BASE_DIR } from './constants';
import { ucb } from './sidebar/ucb';
import { ucd } from './sidebar/ucd';
import { ucr } from './sidebar/ucr';
import { ucv } from './sidebar/ucv';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/IBM-UCx-PLUGIN-DOCS/",
  title: "DevOps Plugins",
  description: "UrbanCode related Plug-In documentation site",
  appearance: "dark",
  lastUpdated: true,
  vite: {
    build: {
      chunkSizeWarningLimit: 6000, // Set your desired limit in KB
    },
    assetsInclude: ['**/*.PNG', '**/*.png']
  },
  themeConfig: {
    nav: [{
      text: 'Product',
      items: [
        { text: 'DevOps Build', link: `/${BUILD_BASE_DIR}/index.md` },
        { text: 'DevOps Deploy', link: `/${DEPLOY_BASE_DIR}/index.md` },
        { text: 'DevOps Release', link: `/${RELEASE_BASE_DIR}/index.md` },
        { text: 'DevOps Velocity', link: `/${VELOCITY_BASE_DIR}/index.md` }
      ]
    }],
    editLink: {
      pattern: 'https://github.com/UrbanCode/IBM-UCx-PLUGIN-DOCS/edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    sidebar: {
      ...ucb,
      ...ucd,
      ...ucr,
      ...ucv
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/UrbanCode/IBM-UCx-PLUGIN-DOCS' }
    ],
    footer: {
      copyright: "©️ IBM Corp. 2011, 2017. <br> ©️ HCL Technologies Limited 2018, 2025.",
    }
  }
})