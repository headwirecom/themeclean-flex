const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    tailwind('./tailwind.config.js'),
    new purgecss({
      content: ['./src/main/content/jcr_root/**/*.vue', './src/main/content/jcr_root/**/dialog.json', './src/main/content/jcr_root/**/*html'],
      extractors: [
        {
          extractor: TailwindExtractor,

          // Specify the file extensions to include when scanning for
          // class names.
          extensions: ["html", "js", "vue", "json"]
        }
      ]
    })
  ]
}
