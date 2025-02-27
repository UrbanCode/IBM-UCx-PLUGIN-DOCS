
# File System (Versioned) - Overview


The File System (Versioned) plug-in automates importing artifacts with versions and maintaining the versioning structure.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


### Step palette

To access this plug-in in the palette, click **Source and Repositories** > **File System Versioned**.

### Compatibility

This plug-in is supported to run on all operating systems supported by the IBM DevOps Deploy agent, except for z/OS.

### Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, follow the [installation instructions](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

### History

#### Version 19

*  Updating Jettison library to 1.5.4 

#### Version 18

* Jettison dependency updated.

#### Version 8

* Fixes APAR PI69494. Allows running application process when not copying artifacts to codestation.

#### Version 7

* Support property file encryption.

#### Version 6

* Add support for encrypted input and output properties.

#### Version 5

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

#### Version 4

* Fixed defect where older components configured with this plugin could not import new versions after upgrading to 6.2.0.2.

#### Version 3

* Added include and exclude files when creating a version.

#### Version 2

* Fixes running a process after creating a version.

#### Version 1

* Initial Release of File System Versioned source configuration.

|Back to ...||Latest Version|File System (Versioned) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[19.1155762](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemVersionedSourceConfig/ucd-FileSystemVersionedSourceConfig-19.1155762.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
