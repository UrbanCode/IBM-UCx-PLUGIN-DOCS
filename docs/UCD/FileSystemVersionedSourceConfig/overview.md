
# File System (Versioned) - Overview


The File System (Versioned) plug-in automates importing artifacts with versions and maintaining the versioning structure.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **File System Versioned**.

## Compatibility

This plug-in is supported to run on all operating systems supported by the IBM DevOps Deploy agent, except for z/OS.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, follow the [installation instructions](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 19

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 18

* Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 17

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 16

* Update udclient and uDeployRestClient

### Version 15

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305,
  CVE-2022-23307

### Version 14

* Allow specifying custom java opts

### Version 13

* New versions not copied to codestation will call finishImporting to allow executing deployment triggers.

### Version 12

* Fixing CVE:CVE-2019-4233

### Version 11

* Update property descriptions.

### Version 10

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 9

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 8

* Fixes APAR PI69494. Allows running application process when not copying artifacts to codestation.

### Version 7

* Support property file encryption.

### Version 6

* Add support for encrypted input and output properties.

### Version 5

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 4

* Fixed defect where older components configured with this plugin could not import new versions after upgrading to
  6.2.0.2.

### Version 3

* Added include and exclude files when creating a version.

### Version 2

* Fixes running a process after creating a version.

### Version 1

* Initial Release of File System Versioned source configuration.

|Back to ...||Latest Version|File System (Versioned) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[19.1155762](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemVersionedSourceConfig/ucd-FileSystemVersionedSourceConfig-19.1155762.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
