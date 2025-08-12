
# TeamCity

## Overview

TeamCity is a build management and continuous integration server from JetBrains.

The TeamCity plug-in automates downloading artifacts from TeamCity projects.

This plug-in includes one step which has no input properties:

* Import Version

### Step palette

To access this plug-in in the palette, click **Source and Repositories** > **TeamCity**.

### Compatibility

The TeamCity source configuration plug-in supports TeamCity version 5 and later.

This plug-in requires version 6.1.0.3 or later of IBM DevOps Deploy.

### Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, see [Installing plug-ins in DevOps Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

### History

#### Version 14

* Updated log4j dependencies

#### Version 14

* APAR 33793982: Update Jackson dependency.

#### Version 13

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

#### Version 12

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

#### Version 11

* Fixes APAR PI89928Now compatible with TeamCity version 10.
* RFE 104572Implemented support for the import of specific and all branches.
* New component version properties: id, buildTypeId, number, status, branchName, defaultBranch, href, and webUrl.

#### Version 10

* Removed the unused Project and Build Configuration properties.
* Build Type property has been renamed to Build Configuration ID.
* Update the Extensions of files to Convert and Preserve Execution Permissions descriptions.

#### Version 9

* Fixes APAR PI79380. Repository URLs will no longer have their extra paths removed.
* Fixes APAR PI79441. The NullPointerException error has been resolved on version-already-found imports.

#### Version 8

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

#### Version 7

* Support property file encryption.

#### Version 6

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

#### Version 5

* Fixes APAR PI47865. Clean up temp files after import.

#### Version 4

* Fixes APAR PI37770. Issues With Teamcity Plugin Recognizing Artifact.zip Files Due To Special Characters

#### Version 3

* Fixes APAR PI32240. Fixed issue causing version imports from builds with special characters to fail.
* Fixed download URL pattern to work with earlier versions of TeamCity 8.0.x

#### Version 2

* Fixes running a process after creating a version

#### Version 1

* Initial release of TeamCity source configuration plugin.

|Back to ...||Latest Version|TeamCity ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[20.1153959](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TeamCitySourceConfig/ucd-TeamCitySourceConfig-20.1153959.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
