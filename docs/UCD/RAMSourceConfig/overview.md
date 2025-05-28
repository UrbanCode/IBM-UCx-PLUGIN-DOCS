
IBM Rational Asset Manager for IBM DevOps Deploy - Overview
==============================================================

# Overview


## Overview




The IBM Rational Asset Manager plug-in automates importing of artifacts from a RAM repository. For more information about IBM Rational Asset Manager, see the [product documentation](https://www.ibm.com/support/knowledgecenter/SSUS84).

This plug-in includes one step which has no input properties:

* [Import Version](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/FileSystemSourceConfig/steps.html#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Rational Asset Manager**.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, see [Installing plug-ins in DevOps Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 14

* Updated log4j and jettison dependencies.

### Version 10

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 9

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

* Fixes APAR PI99336. Version Pattern property will be set to a star (\*) by default.

### Version 7

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

### Version 6

* Support property file encryption.

### Version 5

* Fixes APAR PI61961, Adding compatibility for later versions of Rational Asset Manager.

### Version 4

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 3

* When an error occurs looking for files for a version, the import will fail and the version will be cleaned up in DevOps Deploy. Fixes APAR PI43548

### Version 2

* Release Rational Asset Manager connections after import
* Fixes running a process after creating a version

### Version 1

* Initial release of Rational Asset Manager source configuration plugin for DevOps Deploy

|Back to ...||Latest Version|IBM Rational Asset Manager for IBM DevOps Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[14.1153919](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RAMSourceConfig/ucd-RAMSourceConfig-14.1153919.zip)|[Readme](README.md)|[Usage](usage.md)|[Settings](settings.md)|[Downloads](downloads.md)|
