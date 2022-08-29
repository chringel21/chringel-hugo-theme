# chringel - Privacy focused theme for Hugo 🕵️

Based on the **awesome** [Hugo Starter Theme with Tailwind CSS](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter). Go check it out! 🚀

![chringel](https://user-images.githubusercontent.com/6780575/155966743-3c1a3a47-d6e8-42b9-97e4-d862e8edb1e3.png)

This theme was created with privacy in mind. By default, Disqus and Google Analytics are disabled, but you are free to use them, if you want. Instead this theme comes with configuration options for [Isso](https://posativ.org/isso/) and [umami](https://umami.is/).

## Quickstart

### For a new site

```bash
# Create a new site
hugo new site my-site

# Change into your themes folder
cd my-site/themes

# Clone this theme
git clone https://github.com/chringel21/chringel-hugo-theme.git

```

- Don't forget to edit your `config.toml` to use your new theme

```toml
# config.toml
theme = "chringel-hugo-theme"
```

### Create a new post

Included is an [`archetype`](./archetypes/post-bundle/) to help you get started with creating content. It's a [post bundle](https://gohugo.io/content-management/page-bundles/#leaf-bundles). Create it with:

```shell
hugo new --kind post-bundle post/my-post
```

### Create a new note

If you want to dive into the IndieWeb, chances are you want to create notes. They are like tweets/toots/status updates, or can contain comments, likes and reposts. Take a look at the [`archetype`](./archetypes/notes.md). I would recommend creating notes like this:

```shell
hugo new notes/`date +'%Y/%m/%d/%H%M'`.md
```

This will create a note in your content folder at `content/notes/YYYY/mm/dd/HHMM.md`.

## Features

- 🌝 /🌚 Automatic dark mode based on device setting
- 💬 Isso commenting server similar to Disqus ([self-hosted](https://posativ.org/isso/docs/install/))
- 📈 umami - simple, easy to use, web analytics solution ([self-hosted](https://umami.is/docs/install))
- 🐦 SVG (social) icons powered by [ionicons](https://ionic.io/ionicons), currently Twitter, Github, Mastodon and RSS are available, but more can be downloaded with a simple shell script
- 🧑‍💻 Syntax highlighting with copy function
- 🔗 Deeplinks to headings in a blog post
- 📄 Resume from JSON data based on [JsonResume schema](https://jsonresume.org/schema/)
- 🕸 [IndieWeb](https://indiewebify.me/) implementation of [microformats2](http://microformats.org/) `h-card` and `h-entry`

## Full `config.toml` example

```toml
title = "chringel - Privacy focused theme for Hugo"
languageCode = "en-us"
baseurl = "http://example.com/"
theme = "chringel"
themesDir = "../.."

author = "Christian Engel"
copyright = "Copyright © 2022, Christian Engel, all rights reserved."

pluralizelisttitles = false
paginate = 10
enableEmoji = true

[Params]
    name = "chringel"
    description = "A privacy focused theme for Hugo"

    github_user = "chringel21"
    github_repo = "https://github.com/chringel21/chringel-hugo-theme"
    github_banner = true

    favicon = "favicon.ico"

    # Title to be displayed in header
    headerTitle = 'chringel@dev: ~/$'
    # User image
    titleImage = 'images/index.png'
    # Copyright text displayed in footer
    footerCopyrightText = 'Christian Engel 2022'

# Favicons config
# Get your favicons from https://realfavicongenerator.net/
# Put them in the 'static' folder
[Params.favicons]
  appleTouchIcon = '/apple-touch-icon.png'
  icon32 = '/favicon-32x32.png'
  icon16 = '/favicon-16x16.png'
  manifest = '/site.webmanifest'
  maskIcon = '/safari-pinned-tab.svg'
  msApplicationTileColor = '#5bbad5'
  themeColor = '#ffffff'

# Isso configuration
# https://posativ.org/isso/docs/configuration/client/
[Params.isso]
  enabled = true
  data = "https://comments.exmaple.com/"
  id = "thread-id"
  css = true
  lang = "en"
  replyToSelf = true
  requireAuthor = true
  requireEmail = false
  avatar = true
  avatar-bg = "#f0f0f0"
  jsLocation = "https://comments.example.com/js/embed.min.js"

# Umami configuration
# https://umami.is/docs/install
[Params.umami]
  enabled = true
  websiteId = "1234567-abcd-efgh-0000-abcdefg1234"
  jsLocation = "https://analytics.example.com/umami.js"

# microformat2 h-card configuration
# All params except 'fullName' are optional
[Params.hcard]
  avatar = "/images/index.png"
  fullName = "Christian Engel"
  pronouns = [ "he", "him" ]
  nickname = "chringel"
  showLocation = true
  city = "My Town"
  region = "My State"
  country = "My Country"

[Params.indieweb]
  authorizationEndpoint = "https://indieauth.com/auth"
  tokenEndpoint = "https://tokens.indieauth.com/token"

[Params.webmention]
  webmentionUrl = "https://webmention.io"
  webmentionEndpoint = "/webmention"
  webmentionPingbackEndpoint = "/xmlrcp"

# Social icons to be displayed on the front page
[[menu.social]]
  name = "GitHub"
  url = "https://github.com/chringel21"

[[menu.social]]
  name = "Twitter"
  url = "https://twitter.com/DeEgge"

[[menu.social]]
  name = "RSS"
  url = "http://example.com/index.xml"

# To make purging of CSS classes work in production
[build]
  writeStats = true

# syntax highlight settings
[markup]
  [markup.highlight]
    style = "dracula"
```

## Development

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

Change into the theme's folder and install the dependencies.

```bash
cd themes/chringel
npm install
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

Set the `writeStats` option in your Hugo `config` file, so that purging of CSS classes works in production. See `/exampleSite/config.toml` as a guideline.

```toml
[build]
  writeStats = true
```

Run the `hugo server` using the following command:

```bash
HUGO_THEME_DEVELOPMENT=true hugo server --disableFastRender --buildDrafts --buildFuture
```

The theme will pick up the environment variable and use Hugo's [PostCSS pipe](https://gohugo.io/hugo-pipes/postcss/) to build CSS files.

Check out the [Tailwind CSS docs](https://tailwindcss.com/docs/installation).

### Building shippable CSS

```bash
postcss assets/css/styles.css --config assets/css/postcss.config.js > assets/css/build.css
```
