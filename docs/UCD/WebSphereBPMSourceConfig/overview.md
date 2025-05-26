
# IBM Business Process Manager (WebSphere BPM) - Overview

The IBM Business Process Manager source configuration plug-in imports Process Application snapshots as component versions.


## Compatibility


This plug-in requires version 6.0.1 of IBM DevOps Deploy.

The IBM DevOps Deploy plug-in for WebSphere Business Process Manager supports Business Process Manager versions 8.5 and later. Standard and Advanced editions are supported.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.


## Installation


No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").


## History

### Version 6

* Fixes APAR PH08149: MultipleCompilationErrorsException: The current scope already contains a variable of the name props.
* Fixes MissingPropertyException: No such property: Colections for class: import

### Version 3

* Fixes APAR PI98195Adds activeSince parameter to Snapshot object.

### Version 2

* Updated Version name to match the names in WebSphere BPM and avoid conflicts between branches.
* Added Track property. If left blank, all snapshots in each track/branch will be imported.
* Updated Snapshot artifact name from export.zip to export.twx.

### Version 1

Initial release of the IBM WebSphere BPM source configuration plug-in.


|Back to ...||Latest Version|IBM Business Process Manager (WebSphere BPM) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1056527](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereBPMSourceConfig/WebSphereBPMSourceConfig-8.1056527.zip)|[Readme](README.md)|[Usage](usage.md)|[Settings](settings.md)|[Downloads](downloads.md)|
