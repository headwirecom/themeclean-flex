# build thumbnails for components

note: not all images created with this tool are perfect and they can only be created after
the vue components have been compiled. As of now, this tool is here to help create a version
of a thumbnail for each component variation. 

```
npm install
npm run build
```

Will take all sample*.json files from the `../fragments` using the components compiled scripts
in `../ui.apps/target` and the images from `../ui.apps/**/content/assets`. It then builds a
html file (index.html) in this folder and opens it up with google chrome and then takes a 
screenshot. The images are then downsized and stored in the ./target folder. 

To use one of the images, copy it over into the appropriate component folder.

You can also limit the creation of the thumbnails by using:

```
node makethumbnails.js <componentName>

# example:
# node makethumbnails.js cards
```
