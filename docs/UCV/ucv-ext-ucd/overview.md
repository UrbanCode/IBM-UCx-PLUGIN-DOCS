
# IBM DevOps Deploy - Overview

The IBM DevOps Deploy plugin for DevOps Velocity synchronizes applications, processes, components, versions, snapshots, teams, environments, and more from IBM DevOps Deploy. A Deploy application can be configured as an application in an DevOps Velocity pipeline and the IBM DevOps Deploy processes can be configured in the DevOps Velocity pipeline. The DevOps Velocity Pipeline can then display the latest version of the application deployed to different environments.

## Compatibility

The IBM DevOps Deploy plug-in requires DevOps Velocity version 2.3 or later.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-ucd/tags).

## History

### Version 4.0.4

* **Rebranding**: Name of the plugin is changed from UrbanCode Deploy to IBM DevOps Deploy.

### Version 3.4.5

* **Bug Fix**: In previous version - plugin was not syncing more than 100 applications and it was resulting in Snapshot Upload failure.
* **Sync All Applications at First Sync**: Now UCD plugin is syncing all the applications, environments, processes, and components data even if an initial sync date is given.
* **Deployment Plan Fix**: In previous version of plugin deployment plan was not getting completed if we have parallel and sequential tasks with UCD app.
* **Removing Deleted Applications**: In the previous version of plugin the deleted Application processes were also available while selecting the process in the pipeline.


### Version 3.3.56

* **Removed IBM DevOps Deploy Status Task**: Assign status task is removed and made part of main IBM DevOps Deploy Task as post deployment success or failure step for assigning Snapshot or Component Version status.


### Version 2.3.52

* **Internal Server Error Fix**: The IBM DevOps Deploy plugin was giving internal server error while syncing the application processes from the UCD server.

### Version 2.3.51

* Major Enhancements

### Version 1.0.16

* **Corrected incorrectly spelled plugin name**: In IBM DevOps Deploy plugin, display name was incorrectly spelled as Ubrancode deploy. Now corrected to IBM DevOps Deploy.

### Version 1.0.12

* Importing failed application deployment history.

### Version 1.0.11

* User AccessKey Related Changes.

### Version 1.0.10

* Initial release.


|Back to ...||Latest Version|IBM DevOps Deploy |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[4.0.4 -File 1](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ucd/ucv-ext-ucd%3A4.0.4.tar.7z.001) [and 4.0.4 -File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-ucd/ucv-ext-ucd%3A4.0.4.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
