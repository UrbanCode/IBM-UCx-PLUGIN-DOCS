
AccuRev - Overview
==================

# Overview


### Overview




AccuRev provides version control of source code. It contains features that allow developers to work independently, share code, maintain separate code branches for parallel projects and at the same time use a base stream containing the latest updates.

The AccuRev plug-in integrates IBM UrbanCode Build with AccuRev and automates populating a AccuRev workspace as part of a build process.. The plug-in provides integration properties, that define the connection between the UrbanCode Build server and AccuRev repository. For details, see [Repositories](http://www.ibm.com/support/knowledgecenter/SS8NMD_6.1.2/com.ibm.ucbuild.doc/topics/settings_project_repo_cpt.html).

The repository is configured based on a workflow.

### Compatibility

The plug-in runs on any agents that the IBM UrbanCode Build server supports.

This plug-in run on all supported IBM UrbanCode Build platforms.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode") products.

### History

#### Version 6.752929 released on March 9, 2016

Version 6.752929 includes the following features and fixes:

* Added RPX dependency.
* Translation for step information.
* Added support for using the transaction ID in the Changelog step.

#### Version 5.669681

Version 5.669681 includes the following features and fixes:

* Updated to append the depot name to all change IDs. This prevents an issue where multiple depots can have the same change ID causing issues to get picked up for depots that do not contain them.

#### Version 4.604289

Version 4.604289 includes the following features and fixes:

* Fixed a communication issue where the UrbanCode Build server would fail if it was running with an IBM JDK or JRE.

|Back to ...||Latest Version|AccuRev |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[6.752929](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/AccuRev/AccuRev-6.752929.zip)|[Readme](README.md)|[Settings](settings.md)|[Downloads](downloads.md)|
