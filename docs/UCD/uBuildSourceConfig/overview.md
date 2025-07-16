
# IBM DevOps Build - Overview

The DevOps Build plug-in automates uploading artifacts from a DevOps Build server.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Build**.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, follow the [installation instructions](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 16

* Rebrand UrbanCode Build to DevOps Build

### Version 15

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 14

* Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 13

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 12

* Update udclient and uDeployRestClient

### Version 11

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 10

* Allow specifying custom java opts

### Version 9

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 8

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 7

* Fixes APAR PI67556. Added missing "Preserve Execution Permissions" option

### Version 6

* Fixes APAR PI79127. Added missing VFS dependency.

### Version 5

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

### Version 4

* Support property file encryption.

### Version 3

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 2

* Fixes running a process after creating a version

### Version 1

* Initial release of the uBuild source configuration plugin.

|Back to ...||Latest Version|IBM DevOps Build ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[16.1176344](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uBuildSourceConfig/ucd-uBuildSourceConfig-16.1176344.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
