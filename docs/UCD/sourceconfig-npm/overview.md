
# Overview

The Node Package Manager (NPM) source configuration plug-in automates the importing of NPM packages. It uses the NPM `Pack` command to import a package as a TAR file. You can then imported the TAR file into other NPM projects.

This plug-in includes one step:

* [Import Version](#import_version)

## Step palette

To access this plug-in in the palette, click **Utilities** > **NPM**.

## Compatibility

This plug-in requires that NPM be installed on the DevOps Deploy agent.

## Installation

See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") for installation information.

## History

### Version 3

* A versions importing field will be correctly set and marked as finished importing when creating versions that aren't copied to codestation.

### Version 2

* Fixing CVE:CVE-2019-4233

### Version 1

* Initial release of this plug-in.
