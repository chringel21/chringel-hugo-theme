# chringel - Privacy focused theme for Hugo 🕵️

Based on the **awesome** [Hugo Starter Theme with Tailwind CSS](https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter). Go check it out! :rocket:

![chringel](https://user-images.githubusercontent.com/6780575/155966743-3c1a3a47-d6e8-42b9-97e4-d862e8edb1e3.png)

This theme was created with privacy in mind. By default, Disqus and Google Analytics are disabled, but you are free to use them, if you want. Instead this theme comes with configuration options for [Isso](https://posativ.org/isso/) and [umami](https://umami.is/).

## Quickstart

### Prerequisites

Make sure to install `postcss-cli` and `autoprefixer` globally in your environment, as Hugo Pipe’s PostCSS requires it. This is mentioned in the [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/).

```bash

npm install -g postcss-cli
npm install -g autoprefixer
```

Make sure to use a minimum Hugo version of v0.69.0 and above.

Set the `writeStats` option in your Hugo `config` file, so that purging of CSS classes works in production. See `/exampleSite/config.toml` as a guideline.

```toml
[build]
  writeStats = true
```

### For a new site

```bash
# Create a new site
hugo new site my-site

# Change into your themes folder
cd my-site/themes

# Clone this theme
git clone https://github.com/chringel21/chringel-hugo-theme.git

# Change into your new theme's folder and install dependencies
cd chringel && npm install
```

* Don't forget to edit your `config.toml` to use your new theme

```toml
# config.toml
theme = "chringel-hugo-theme"
```

## Features

* 🌝 /🌚 Automatic dark mode based on device setting
* 💬 Isso commenting server similar to Disqus ([self-hosted](https://posativ.org/isso/docs/install/))
* 📈 umami - simple, easy to use, web analytics solution ([self-hosted](https://umami.is/docs/install))
* 🐦 SVG (social) icons powered by [ionicons](https://ionic.io/ionicons), currently Twitter and Github are available, but more can be downloaded with a simple shell script
* 🧑‍💻 Syntax highlighting with copy function
* 🔗 Deeplinks to headings in a blog post
* 📄 Resume from JSON data based on [JsonResume schema](https://jsonresume.org/schema/)

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
paginate = 5
enableEmoji = true

[Params]
    name = "chringel"
    description = "A privacy focused theme for Hugo"
    keywords = ['some', 'key', 'words']

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

# Social icons to be displayed on the front page
[[menu.social]]
  name = "GitHub"
  url = "https://github.com/chringel21"

[[menu.social]]
  name = "Twitter"
  url = "https://twitter.com/DeEgge"

# To make purging of CSS classes work in production
[build]
  writeStats = true

# syntax highlight settings
[markup]
  [markup.highlight]
    style = "dracula"
```
