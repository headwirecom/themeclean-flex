var SVGSpriter = require("svg-sprite"),
  mkdirp = require("mkdirp"),
  path = require("path"),
  fs = require("fs"),
  File = require("vinyl"),
  glob = require("glob"),
  spriter = new SVGSpriter({
    dest: "out",
    mode: {
      symbol: {
        inline: true,
      },
    },
  });

var basePath = path.resolve("./src/main/content/jcr_root");
var iconPath = basePath + "/content/themecleanflex/assets/icons";

// Find SVG files recursively via `glob`
glob.glob("**/*.svg", { cwd: iconPath }, function (err, files) {
  files.forEach(function (file) {
    // Create and add a vinyl file instance for each SVG
    spriter.add(
      new File({
        path: path.join(iconPath, file), // Absolute path to the SVG file
        base: iconPath, // Base path (see `name` argument)
        contents: fs.readFileSync(path.join(iconPath, file)), // SVG file contents
      })
    );
  });

  spriter.compile(function (error, result, data) {
    fs.writeFileSync(
      basePath + "/apps/themecleanflex/components/page/iconsprites.html",
      result.symbol.sprite.contents
    );
  });
});
