
# IBM DevOps Plan - Overview

## Overview

The plug-in imports work items as issues from IBM DevOps Plan server into IBM DevOps Velocity. The data between IBM DevOps Velocity and IBM DevOps Plan synchronizes for every 5 minutes by default. For quick sync up of data, you must disable and enable the integration in Integration page.

## Compatibility

Must be running IBM DevOps Velocity version 2.5.0 and later and IBM DevOps plan server 1.0.14 or later.

## Prerequisites

You must have completed the following tasks before you integrate the IBM DevOps Plan plug-in in:
1. Created an application in a teamspace.
2. Created a project in IBM DevOps Plan with the following work statuses:
* Submitted
* Backlog
* Active
* Resolved
* Closed
3. Generated a personal access token in your IBM DevOps Plan account.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-compass/tags).

### History

### Version 1.1.57

* **Feature enhancement**: Enhanced the DevOps Plan plug-in integration with Velocity by automating field mapping. This eliminates the need for manual configuration, ensuring a smoother and more efficient integration experience.

### Version 1.1.55

* Updated plug-in log messages.

#### Version 1.1.52

* Initial release

|Back to ...||Latest Version|IBM DevOps Plan |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.1.57-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-compass/ucv-ext-compass%3A1.1.57.tar.7z.001)[and 1.1.57-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-compass/ucv-ext-compass%3A1.1.57.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
