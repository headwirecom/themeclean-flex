# ui.apps module

This module contains the components and content for the themeclean-flex project, as well as some build scripts to help set up and validate the sample content

## Generating Sample Content

To generate the samples, run the following command from this directory:

`npm run build:componentlibrary`

This will recreate the content structure under **ui.apps/src/main/content/jcr_root/content/themecleanflex/pages/library**.

To install the themeclean-flex components and sample content, run:

`mvn clean install -PautoInstallPackage`

The samples can be viewed on your peregrine instance at /content/themecleanflex/pages/library.html.

## Comparison Screenshots

This module now comes with a tool for generating screenshots to compare the current version of the components with approved versions. To run the screenshot generation script on the default peregrine host/port (localhost:8080), run the following command from this directory;

`npm run build:screenshots`

You may change the host and port by specifying command line arguments as follows:

`npm run build:screenshots --build:host=remotehost --build:port=8088`

The generated screenshots and HTML files with organized versions of those screenshots can be found in **ui.apps/target/out**. The "approved" versions that the screenshots are compared against will be automatically generated the first time the tool is run in **ui.apps/approved**. Screenshots for future runs will be compared against this folder.