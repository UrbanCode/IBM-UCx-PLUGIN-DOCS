
CA Nolio - Overview
===================

# Overview


### Overview



The UrbanCode Release CA Nolio plug-in provides steps to integrate with CA Release Automation Server.
This plug-in supports both full and delta synchronization between the UrbanCode Release and CA Release Automation
servers. A full synchronization compares all objects in the CA Release Automation server with all integration objects in
the UrbanCode Release server. Delta synchronization only compares objects that have changed since the last
synchronization occurred.


### Compatibility

This plug-in requires IBM UrbanCode Release version 6.2.2.6 or later.


This plug-in runs on all operating systems that UrbanCode Release supports.

### Installation

No special steps are
required for installation. See [Installing plug-ins in UrbanCode
Release](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins#ucr "Installing plug-ins in
UrbanCode Release").

### History

#### Version 4

* Improved sync to remove applications and templates that no
longer exist in Nolio.
* Check for paused state of deployments and subsequent comment.
* Comments for percentage
completed of an active deployment.
* Parameter passing to deployment task execution.
* Add ‘Project Name’ field to
integration properties.
* Syncing of components and component versions.
* Customizable full sync interval in minutes to
define when items will be imported.

#### Version 3

* Support pattern options for build name and deployment name.


#### Version 2

* Add update pipeline view checkbox to task dialog.

#### Version 1

* The initial release of the
plug-in.


|Back to ...||Latest Version|CA Nolio ||
| :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[4.1036957](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-nolio/ucr-plugin-nolio-4.1036957.zip)|[Readme](README.md)|[Downloads](downloads.md)|
