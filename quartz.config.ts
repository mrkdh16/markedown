import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Natural Philosophy",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Lora",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light:      "#faf9f6",   // airy background
          lightgray:  "#ececec",   // barely‑there borders/cards
          gray:       "#c4c8cf",   // soft metadata & outlines
          darkgray:   "#565b66",   // body text (still AA compliant)
          dark:       "#2e3138",   // headings/icons
          secondary:  "#6d8da7",   // desaturated slate‑blue link
          tertiary:   "#c4b07a",   // muted sand‑gold hover
          highlight:  "rgba(109,141,167,0.10)", // subtler block tint
          textHighlight: "#c4b07a55",           // faint text mark
        },
        darkMode: {
          light:      "#1c1c1c",   // panel background
          lightgray:  "#404349",   // gentle card edge
          gray:       "#71757f",   // subdued labels
          darkgray:   "#d6d9e1",   // body text
          dark:       "#f4f5f7",   // headings
          secondary:  "#a3bdd3",   // softened blue for dark bg
          tertiary:   "#d1be86",   // mellow gold accent
          highlight:  "rgba(131,161,187,0.10)", // subtle block tint
          textHighlight: "#d1be8655",           // faint text mark
        },
      }       
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
