const purgecss = require('@fullhuman/postcss-purgecss')
const tailwind = require('tailwindcss');

module.exports = {
  plugins: [
    tailwind('./tailwind.config.js'),
    // purgecss({ content: ['./src/main/content/jcr_root/**/*.vue']})
  ]
}
