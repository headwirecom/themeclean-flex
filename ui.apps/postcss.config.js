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
      whitelist: ['body', 'w-auto', 'w-full', "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-2/4", "w-3/4", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-1/12", "w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12"],
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

