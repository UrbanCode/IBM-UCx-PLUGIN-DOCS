
# GitLab - Overview

The GitLab plug-in provides for integration with a GitLab server. This plug-in imports issues, commits, merge requests and builds from a GitLab server and provides a single view of GitLab data in DevOps Velocity value stream map. Data between the GitLab server and the DevOps Velocity server is synchronized every five minutes.


## Compatibility

* This plug-in requires DevOps Velocity version 1.2.1 or higher
* The plug-in version 2.0.3 or higher requires DevOps Velocity version 1.5.5 or higher
* This plug-in supports GitLab version 9 or higher
* This plug-in supports Cloud and On-Premises platform

**Note:** For integrations created before upgrading to version 2.4.0 of DevOps Velocity, Auto-generated User Access Key is not present, so the integration will fail after upgrading. In this case, you have to manually add a new User Access Key in the hidden property named ***DevOps Velocity User Access Key.***

## Versions

There is no install process for this plug-in. The GitLab plug-in is identified to DevOps Velocity as a value stream integration. DevOps Velocity plug-in images are located in DockerHub and the IBM DevOps Velocity code accesses the version that you select. To view available versions, see the [UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-gitlab/tags).

## History

### Version 2.2.69

* **Bug fix**: Fixed approvers/reviews data not present in the pullRequest data.

### Version 2.2.68

* **Minor Bug Fix**: Dynamically getting type of issue.

### Version 2.2.66

* **Fix for Project Name Field**: Previous version of Gitlab plugin was not able to import data for some projects.
* **Project IDs Field Added**: To import the source data you need to provide a list of GitLab Project IDs. Please note that you must provide at least one of either Project Names or Project IDs and can provide both if needed.

### Version 2.1.63

* Minor Bug Fix: Previous version of plugin was giving Cannot read property status of null error.

### Version 2.1.62

* Resolved 502 Bad Gateway Error: Previous version of plugin was giving a 502 Bad Gateway error for GitLab Server.

### Version 2.1.58

* Removed Manual User Access Key: From current version onwards this plugin will only support Auto Generated User Access Key feature of DevOps Velocity.
* Preventing Installation on Older Versions: This version of GitLab Plugin can only be installed on DevOps Velocity version 2.5.0 and later.
* Resolved Previous Version Issue: Previous Version of plugin had some defect related to Project Names field. The plugin was syncing data only for those projects which were owned by the user. Now the plugin syncs data for the projects in which user is a member at any level.
* Added Category: ALM, SCM, Build, Deploy are the categories of GitLab plugin.

### Version 2.1.57

* Added project names :Removed project IDs property and added project names property. Instead of using array of Project IDs , an array of project names are used. While integrating user must provide comma separated list of project names.
* Wild card implementation :Supports wildcard functionality for project names. Example : *Sample, *Sample*, Sample*.

### Version 2.0.36

* Support for priority using Gitlab labels.

### Version 2.0.31

* ReSync support added (support starts with DevOps Velocity version 2.4.4 or later).

### Version 2.0.30

* Auto-generated User Access Key support added (support starts with DevOps Velocity version 2.4.0 or later).

### Version 2.0.28

* Minor bug fix

### Version 2.0.25

* Added history to Issue and PR

### Version 2.0.10

* Update plug-in to incorporate bug fixes

### Version 2.0.9

* Added HTTP proxy support

### Version 2.0.7

* Imports GitLab issues

### Version 2.0.3

* Performance Improvements for Build Feature (Requires DevOps Velocity Version 1.5.5 or above)

### Version 2.0.2

* Performance Improvements

### Version 2.0.1

* Added support for multiple project IDs (Renamed **projectId** field to **projectIds**)
* Build data will be pulled from GitLab into Value Stream


### Version 1.0.6

* Customize integration from the user interface.

### Version 1.0.5

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.4

* Initial release


|Back to ...||Latest Version|GitLab |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.2.69-File 1 ](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-gitlab/ucv-ext-gitlab%3A2.2.69.tar.7z.001)[and 2.2.69-File 2](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-gitlab/ucv-ext-gitlab%3A2.2.69.tar.7z.002)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
