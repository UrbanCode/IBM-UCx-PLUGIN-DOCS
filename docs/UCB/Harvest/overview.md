
CA Harvest SCM - Overview
=========================

# Overview


### Overview




CA Harvest Software Change Manager (CA Harvest SCM) manages source files and software build history for your organization. It automates the change management lifecycle, source code versioning and streamlines workflows.

The plug-in provides integration properties, that define the connection between the UrbanCode Build server and a CA Harvest server. The integration automates populating a Harvest workspace and publishing source changes to the Changes tab of the build life. For details about repositories in IBM UrbanCode Build, see [Repositories](http://www.ibm.com/support/knowledgecenter/SS8NMD_6.1.2/com.ibm.ucbuild.doc/topics/settings_project_repo_cpt.html) in the product documentation.

### Compatibility

This plug-in requires IBM UrbanCode Build version 6.1 and later.

The plug-in runs on any agents that the IBM UrbanCode Build server supports.

### Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode").

### History

#### Version 7

Fix APAR PH10867Use includeFiles source property in quiet period step.

#### Version 6

Fix changelog parser logic to correctly handle empty data columns.

#### Version 5

Version 5 includes the following features and fixes:

* Added RPX dependency.
* Translation for step information.

#### Version 4

Version 4 includes the following features and fixes:

* Fixed a communication issue where the UrbanCode Build server would fail if it was running with an IBM JDK or JRE.

#### Version 3

Version 3 includes the following features and fixes:

* Update to a newer version of a library for HTTP communication.

|Back to ...||Latest Version|CA Harvest SCM |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[7.1098511](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Harvest/Harvest-hcl-7.1098511.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
