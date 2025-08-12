
# Azure DevOps - Overview

The Azure DevOps (formerly *Microsoft Team Foundation Server or TFS*) plug-in provides for integration with an Azure DevOps server. This plug-in imports work items, commits, pull requests and deployment data from an Azure DevOps server and saves them as DevOps Velocity issues. Data between the Azure DevOps server and the DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running DevOps Velocity version 1.2.1 and later to use the plug-in.

## Versions

There is no install process for this plug-in. The Azure DevOps plug-in is identified to DevOps Velocity as a value stream integration. DevOps Velocity plug-in images are located in DockerHub and the IBM DevOps Velocity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-azure/tags).

## History

### Version 4.0.45

* Performance Improvements: Implemented context-less application, enhanced performance,
and removed unnecessary VSM history for improved efficiency.

### Version 4.0.44

* Uploading builds with respect to repository

### Version 4.0.43

* Uploading builds with respect to branch
* Merged syncBuildEvent into syncPipelines to maintain order of resources to sync
* Uploading builds in ascending order of start time.

### Version 4.0.40

* Minor Bug Fix

### Version 4.0.38

* Minor Enhancements

### Version 4.0.37

* Minor Enhancements
* Pipelines issue fixed

### Version 4.0.36

* **Removed Manual User Access Key:** From current version onwards this plugin will only support Auto Generated User Access Key feature of HCL DevOps Velocity.

### Version 4.0.35

* **Clarifying delimitation** : For the properties used in index.js file clarified delimitation problem . Updated label information and description as comma separated list must be used. So that it is more clear while integrating.

### Version 4.0.29

* Optional feature of pushing pipeline runs with predefined tags as builds to HCL DevOps Velocity.
* Bug fix related to build status


### Version 4.0.26

* Auto generated User Access Key Related Changes.(For DevOps velocity version 3.0.0 we started supporting auto generated user access key. For version prior to 3.0.0 manually add user access key in the hidden field.)

### Version 4.0.16

* UAK Changes.

### Version 4.0.15

* Adding logger and UCV functionality.

### Version 4.0.3

* ReSync support added. Applies to IBM DevOps
Velocity version 2.4.4 or later.

### Version 4.0.1

* Added orchestration support for Azure yaml pipelines.

### Version 3.0.1

* Added release pipeline orchestration support.

### Version 2.0.4

* Minor enhancements.

### Version 2.0.2

* Syncs deployment data.

### Version 1.0.41

* Added support for pulling commits from non master
branch.

### Version 1.0.39

* Minor bug fix.

### Version 1.0.38

* Minor bug fix.

### Version 1.0.37

* Minor
bug fix.

### Version 1.0.34

* Added http proxy support

### Version 1.0.30

* Update plugin version from 0.x.x to
1.x.x format.

### Version 0.0.15

* Get string representation of trackerId.

### Version 0.0.14

* Initial release



|Back to ...||Latest Version|Azure DevOps |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[4.0.45-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-azure/ucv-ext-azure%3A4.0.45.tar.7z.001)[and 4.0.45-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-azure/ucv-ext-azure%3A4.0.45.tar.7z.002)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|
