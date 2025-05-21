
# Microsoft TFS (Team Foundation Server) - Overview

The Microsoft TFS plug-in automates importing of version artifacts from a TFS server. This plug-in includes one step:

* [Import Version](#import_version)


## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **Team Foundation Server**.

## Compatibility

This plug-in supports Team Foundation Server 20102017 using XAML builds. **Note:** XAML builds have been deprecated since TFS 2015 and new ones cannot be created. If using a different TFS build type, please use the VSTS plug-in. The VSTS plug-in supports all build types.

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

For DevOps Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For DevOps Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

The agent computer must have access to the Microsoft Team Foundation Server. Microsoft .NET Framework 3.5 must be installed on the agent computer.

## Installation

This plug-in is installed when installing IBM DevOps Deploy. When new plug-in versions are available, follow the [installation instructions](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy") to update the plug-in.

## History

### Version 26

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 25

* Updating log4j dependencies

### Version 24

* Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 23

* Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 22

* Update udclient and uDeployRestClient

### Version 21

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 20

* Fixing CVE:CVE-2021-4104

### Version 19

* Allow specifying custom java opts

### Version 18

* Fixing CVE:CVE-2019-4233

### Version 17

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 16

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 15

* Added support for default credentials and improved the error handling of invalid credentials.

### Version 14

* Fixes APAR PI67556. Added missing "Preserve Execution Permissions" option

### Version 13

* Fixes APAR PI40551. Now uses working directory for temporary artifact storage.

### Version 12

* Supports 2015 and 2017.

### Version 11

* Loops through TFTool jars in order to delete tfsVersion input property.

### Version 10

* Support property file encryption.

### Version 9

* Fixes APAR PI70294. Fixes errors during automatic version import.

### Version 8

* Fixes false positive when run on Linux.
* Fixes false negatives  on automatic imports when there are no new versions.
* Fixes muiltiple bugs with the muitiple build definition feature.
* Small improvements to plug-in helper descriptions.

### Version 7

* Add functionality to create multiple verisons based on the number of build definitions in a single import.

### Version 6

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 5

* Use correctly formatted paths in xcopy, and fix the property type of the excludes field for importing versions

### Version 4

* Fix reversion of 2013 to 2012 in UI

### Version 3

* Add support for TFS 2013

### Version 2

* Fixes running a process after creating a version

### Version 1

* Initial release of the TFS source configuration plugin.

|Back to ...||Latest Version|Microsoft TFS (Team Foundation Server) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1155758](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/TFS-SourceConfig/ucd-TFS-SourceConfig-26.1155758.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
