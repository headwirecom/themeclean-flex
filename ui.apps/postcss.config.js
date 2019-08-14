const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss');
const atImport = require('postcss-import')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

module.exports = {
  plugins: [
    atImport(),
    tailwind('./tailwind.config.js'),
    new purgecss({
      content: ['./src/main/content/jcr_root/**/*.vue', './src/main/content/jcr_root/**/dialog.json', './src/main/content/jcr_root/**/*html'],
      whitelist: [
        'body', 'w-auto', 'w-full', "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-2/4", "w-3/4", "w-1/5", "w-2/5", "w-3/5", "w-4/5", "w-1/6", "w-2/6", "w-3/6", "w-4/6", "w-5/6", "w-1/12", "w-2/12", "w-3/12", "w-4/12", "w-5/12", "w-6/12", "w-7/12", "w-8/12", "w-9/12", "w-10/12", "w-11/12",
        'sm:w-auto', 'sm:w-full', "sm:w-1/2", "sm:w-1/3", "sm:w-2/3", "sm:w-1/4", "sm:w-2/4", "sm:w-3/4", "sm:w-1/5", "sm:w-2/5", "sm:w-3/5", "sm:w-4/5", "sm:w-1/6", "sm:w-2/6", "sm:w-3/6", "sm:w-4/6", "sm:w-5/6", "sm:w-1/12", "sm:w-2/12", "sm:w-3/12", "sm:w-4/12", "sm:w-5/12", "sm:w-6/12", "sm:w-7/12", "sm:w-8/12", "sm:w-9/12", "sm:w-10/12", "sm:w-11/12",
        'md:w-auto', 'md:w-full', "md:w-1/2", "md:w-1/3", "md:w-2/3", "md:w-1/4", "md:w-2/4", "md:w-3/4", "md:w-1/5", "md:w-2/5", "md:w-3/5", "md:w-4/5", "md:w-1/6", "md:w-2/6", "md:w-3/6", "md:w-4/6", "md:w-5/6", "md:w-1/12", "md:w-2/12", "md:w-3/12", "md:w-4/12", "md:w-5/12", "md:w-6/12", "md:w-7/12", "md:w-8/12", "md:w-9/12", "md:w-10/12", "md:w-11/12",
        'lg:w-auto', 'lg:w-full', "lg:w-1/2", "lg:w-1/3", "lg:w-2/3", "lg:w-1/4", "lg:w-2/4", "lg:w-3/4", "lg:w-1/5", "lg:w-2/5", "lg:w-3/5", "lg:w-4/5", "lg:w-1/6", "lg:w-2/6", "lg:w-3/6", "lg:w-4/6", "lg:w-5/6", "lg:w-1/12", "lg:w-2/12", "lg:w-3/12", "lg:w-4/12", "lg:w-5/12", "lg:w-6/12", "lg:w-7/12", "lg:w-8/12", "lg:w-9/12", "lg:w-10/12", "lg:w-11/12",
      ],
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

