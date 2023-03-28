
IBM Rational ClearCase - Overview
=================================

# Overview


### Overview


The ClearCase plug-in automates importing versions from a ClearCase repository.

This plugin includes one or more steps, click **Steps** for step details and properties.

### Compatibility

This plug-in requires version 6.0 or later of IBM UrbanCode Deploy.

This plug-in runs on all operating systems that are supported by both the IBM UrbanCode Deploy agent (except for z/OS) and the cleartool.

For UrbanCode Deploy 6.0, both the agent and the server must be installed on Microsoft Windows. For UrbanCode Deploy 6.0.1 or later, only the agent is required to be on a system running Microsoft Windows.

This plug-in runs against all supported versions of ClearCase leveraging cleartool.

### Installation

This plug-in is installed when installing IBM UrbanCode Deploy. When new plug-in versions are available, see [Installing plug-ins in UrbanCode Products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in UrbanCode Deploy") to update the plug-in.

### History

#### Version 16

* Log4j and Jettison dependency updated

#### Version 11

* Allow specifying custom java opts

- #### Version 10

* Fixing CVE:CVE-2019-4233#### Version 9

* Updates property descriptions.#### Version 8

* APAR PI89045: add support for setting isFinished flag flag when importing versions.#### Version 7

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.#### Version 6

* Support property file encryption.#### Version 5

* Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.#### Version 4

* Fixes APAR PI32513 where the plugin would only update the whole snapshot instead of the current view.#### Version 3

* Fixes multiple issues around the plugin, and renames plugin from ClearCaseUCM to ClearCase.#### Version 2

* Fixes running a process after creating a version.#### Version 1

* Initial release of the ClearCaseUCM source configuration plugin .

|Back to ...||Latest Version|IBM Rational ClearCase ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[16.1154103](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ClearCaseSourceConfig/ucd-ClearCaseSourceConfig-16.1154103.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps and Roles](steps and roles.md)|[Downloads](downloads.md)|
