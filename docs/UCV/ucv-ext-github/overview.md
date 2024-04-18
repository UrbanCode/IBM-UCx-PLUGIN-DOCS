
# GitHub - Overview

The GitHub plug-in provides for integration with a GitHub server. This plug-in imports issues, pull request and commit data from a GitHub server and saves them as DevOps Velocity issues. Data between the GitHub server and the DevOps Velocity server is synchronized every five minutes.

## Compatibility

Must be running DevOps Velocity version 1.2.1 and later to use the plug-in.

**Note:** For integrations created before upgrading to version 2.4.0 of DevOps Velocity, Auto-generated User Access Key is not present, so the integration will fail after upgrading. In this case, you have to manually add a new User Access Key in the hidden property named ***DevOps Velocity User Access Key.***

##  Upgrade impact

When migrating to version 1.0.30 of this plug-in, you must make an update to your integration. The **Name** property has been removed. Use the Repositories property to identify one or more GitHub repositories to be used to import data. Additionally, you must specify a value for the **DevOps Velocity User Access Key** property.

## Versions

DevOps Velocity plug-in images are located in DockerHub. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-github/tags).

## History

### Version 1.4.16

* **Enhancement**: This enhancement modifies the plugins synchronization behavior following a failure. Previously, the plugin would resume syncing from the date of the last successful synchronization. Now, it has been updated to continue syncing commits, pull-requests, and issues from the point where it last synced before the failure. This change ensures more accurate and efficient data synchronization by reducing the likelihood of missing or duplicating data in cases where the plugin had partially synced before encountering an issue.

### Version 1.4.7

* Wild Card feature for additional branches field in GitHub Plugin

### Version 1.4.5

* **Feature**: Syncing Yaml files from different repositories
Note - This feature is only supported in DevOps Velocity versions 4.0.11 or above .

### Version 1.3.46

* **Bug Fix** : previous version was failing to upload commit of large size.
### Version 1.3.35

* Minor Enhancements
### Version 1.3.34

* **Removed Manual User Access Key**: From current version onwards this plugin will only support Auto Generated User Access Key feature of DevOps Velocity.
* **Added Category**:ALM | SCM | BUILD are the categories of Github plugin . Also added global regex pattern to generate default link rule.

### Version 1.2.25

* Global Initial Sync date feature

### Version 1.2.24

* Primary and secondary API rate limit fix
* Labels Updated
* Additional branch error fix
* Wildcard functionality added
* Initail sync date added
* Debug logs added

### Version 1.1.22

* UAK changes

### Version 1.1.20

* **Bug fix**: UAK support for older versions

### Version 1.1.18

* ReSync support added (support starts with DevOps Velocity version 2.4.4 or later).
* Auto-generated User Access Key support added (support starts with DevOps Velocity version 2.4.0 or later).

### Version 1.1.15

* Labels bug fix

### Version 1.1.1

* Added support to pull commits from additional branches.

### Version 1.0.49

* Added history to GitHub issues

### Version 1.0.40

* Imports GitHub issues

### Version 1.0.36

* Support Non Master Branch Information

### Version 1.0.34

* Added HTTP proxy support

### Version 1.0.32

* Fix for repository URL

### Version 1.0.31

* Removed redundant URL field

### Version 1.0.30

* Removed the **Name** property in the configuration properties
* Improved logging
* DevOps Velocity User Access Key is added as a mandatory field forintegration

### Version 1.0.29

* Updated to handle a null commit author in the repository

### Version 1.0.28

* Update plug-to incorporate bug fixes

### Version 1.0.27

* Update plug-to incorporate bug fixes

### Version 1.0.26

* Update plug-to incorporate bug fixes

### Version 1.0.25

* Update plug-to incorporate bug fixes

### Version 1.0.24

* Update plug-to incorporate bug fixes

### Version 1.0.23

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.21

* Support for multiple repositories

### Version 0.0.11

* Initial release

|Back to ...||Latest Version|GitHub |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.4.16-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-github/ucv-ext-github%3A1.4.16.tar.7z.001)[and 1.4.16-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-github/ucv-ext-github%3A1.4.16.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
