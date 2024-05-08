import { defineConfig } from 'vitepress'
import { sidebarRuminations, sidebarExpeditions, sidebarManifesto, sidebarShowcase } from './sidebarConfig'
import { navbar } from './navbarConfig'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Odysseus Ambrosia",
  description: "The search for knowledge",
  ignoreDeadLinks: true,
  lastUpdated: true,
  appearance: 'force-dark',

  // Configure Meta Tags in the HTML Head Section
  head: [
    ['meta', { name: 'author', content: 'Patrick Ambrose' }],
    ['meta', { name: 'keywords', content: 'digital-garden, pkm, second brain' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  ],

  // Markdown configurations
  markdown: {
    lineNumbers: false,
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    },
  },

  // Theme Configurations
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // configure Site Title
    siteTitle: "Odysseus Ambrosia",

    // Configure Site Logo
    logo: '/favicon.png',

    // Configure Search
    search: {
      provider: 'local'
    },

    // Outline levels to show
    outline: {
      label: "On this Page",
      level: [2, 3]
    },

    // Differentiate External Links
    externalLinkIcon: true,

    // Set up Navbar
    nav: navbar(),

    // Sidebar Configuration
    sidebar: {
      '/Ruminations/': sidebarRuminations(),
      '/Expeditions/': sidebarExpeditions(),
      '/Manifesto/': sidebarManifesto(),
      '/Showcase/': sidebarShowcase()
    },

    // Social Media Links Configurations
    socialLinks: [
      { icon: 'instagram', link: 'https://www.instagram.com/patrickambrosso/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/patrickambrosso/' },
      { icon: 'github', link: 'https://github.com/PatrickAmbrosso/' },
    ],

    // Page Last Updated
    lastUpdated: {
      text: 'Updated on',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    // Document Page Navigation
    docFooter: {
      prev: 'Last Page',
      next: 'Next Page'
    },

    // Footer Configurations
    footer: {
      copyright: '© 2024 <a href="https://github.com/PatrickAmbrosso">Patrick Ambrose</strong></a><br>Crafted with ❤️ and published under the <a href="/license-notice/">MIT License</a>'
    }
  }
})
