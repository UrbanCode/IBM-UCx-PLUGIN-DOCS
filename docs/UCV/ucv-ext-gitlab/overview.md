
GitLab - Overview
=================

# Overview


### Overview


The GitLab plug-in provides for integration with a GitLab server. This plug-in imports issues,
commits, merge requests and builds from a GitLab server and provides a single view of GitLab data in UrbanCode Velocity
value stream map. Data between the GitLab server and the UrbanCode Velocity server is synchronized every five minutes.


Compatibility
-------------

* This plug-in requires UrbanCode Velocity version 1.2.1 or higher
* The plug-in
version 2.0.3 or higher requires UrbanCode Velocity version 1.5.5 or higher
* This plug-in supports GitLab version 9 or
higher
* This plug-in supports Cloud and On-Premises platform

**Note:** For integrations created before upgrading to
version 2.4.0 of UrbanCode Velocity, Auto-generated User Access Key is not present, so the integration will fail after
upgrading. In this case, you have to manually add a new User Access Key in the hidden property named ***UrbanCode
Velocity User Access Key.***

Versions
--------

There is no install process for this plug-in. The GitLab plug-in is
identified to UrbanCode Velocity as a value stream integration. UrbanCode Velocity plug-in images are located in
DockerHub and the UrbanCode Velolcity code accesses the version that you select. To view available versions, see the
[UrbanCode DockerHub](https://hub.docker.com/r/urbancode/ucv-ext-gitlab/tags).

History
-------

### Version 2.1.57


* Added project names. Instead of using project IDs project names are used. 
Also implemented wildcard functionality for project names.
### Version 2.0.36


* Support for priority using Gitlab labels.

### Version 2.0.31

* ReSync support added (support starts with UrbanCode
Velocity version 2.4.4 or later).

### Version 2.0.30

* Auto-generated User Access Key support added (support starts
with UrbanCode Velocity version 2.4.0 or later).

### Version 2.0.28

* Minor bug fix

### Version 2.0.25

* Added
history to Issue and PR

### Version 2.0.10

* Update plug-in to incorporate bug fixes

### Version 2.0.9

* Added
HTTP proxy support

### Version 2.0.7

* Imports GitLab issues

### Version 2.0.3

* Performance Improvements for
Build Feature (Requires Velocity Version 1.5.5 or above)

### Version 2.0.2

* Performance Improvements

### Version
2.0.1

* Added support for multiple project IDs (Renamed **projectId** field to **projectIds**)
* Build data will be
pulled from GitLab into Value Stream

### Version 1.0.6

* Customize integration from the user interface.

###
Version 1.0.5

* Update plugin version from 0.x.x to 1.x.x format.

### Version 0.0.4

* Initial release


|Back to ...||Latest Version|GitLab |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[2.0.50](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-gitlab/ucv-ext-gitlab-2.0.50.tar.zip)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
