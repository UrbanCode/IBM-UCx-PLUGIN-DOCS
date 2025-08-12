
Microsoft Team Foundation Server (TFS) - Overview
=================================================

# Overview


### Overview




The Microsoft TFS plugin for UrbanCode Release provides visibility into work items from the impact
analysis view of UrbanCode Release. Visual Studio Team Services (formerly VSO) is also supported.

### Compatibility


* This plug-in requires version Microsoft TFS 2015 or later.
* This plug-in requires version 6.1.0 or later of IBM
UrbanCode Release.

### Installation

No special steps are required for installation. See [Installing plug-
ins](http://www.ibm.com/support/knowledgecenter/SS4GCC_6.1.1/com.ibm.urelease.doc/topics/settings_plugins.html
"Installing plug-ins") in the IBM UrbanCode Release help.

### History

#### Version 5

* Updated TFS SDK library to
v14.118.0. Resolves error when using IBM Java.
* Resolved edge case where the TFS Types value is too large and prevents
plug-in configuration and execution.
* Added missing slash (/) between the TFS URL and Collection Name when constructing
the TFS Servers URL.

#### Version 4

* Added CheckConnection button.
* Added HTML Description to Changes.

####
Version 3

* Updated TFS SDK library to v14.111.1.
* Added support for property file encryption.

#### Version 2

*
Run Integration is now faster and more robust.

#### Version 1

* This is the initial release of the plug-in.

|Back to ...||Latest Version|Microsoft Team Foundation Server (TFS) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[5.953540](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-tfs/ucr-plugin-tfs-5.953540.zip)|[Readme](README.md)|[Settings](settings.md)|[Downloads](downloads.md)|
