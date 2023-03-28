
# File System - Overview

The File System plug-in imports artifacts from a local filesystem. The imported artifacts are stored in a single folder. If you want to store artifacts into versioned folders, you must manually create the version folders.

This plug-in includes one step which has no input properties:

* [Import Version](#import_version)


### Step palette

To access this plug-in in the palette, click **Source and Repositories** > **File System**.

### Compatibility

This plug-in requires version 6.0 or later of IBM UrbanCode Deploy.

For UrbanCode Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For UrbanCode Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

### Installation

This plug-in is installed when installing IBM UrbanCode Deploy. When new plug-in versions are available, see [Installing plug-ins in UrbanCode Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode Deploy") to update the plug-in.

### History

#### Version 12

Jettison dependency updated.

#### Version 4

Preserve Execution Permissions option.

#### Verion 3

* Support property file encryption.

#### Verion 2

* Fixes added for running a process after creating a version.

#### Verion 1

* Initial Release of File System source configuration plug-in.

|Back to ...||Latest Version|File System ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[12.1150687](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileSystemSourceConfig/ucd-FileSystemSourceConfig-12.1150687.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
