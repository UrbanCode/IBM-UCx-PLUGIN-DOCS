
# IBM Operational Decision Manager (ODM) Source Config - Overview


The IBM Operational Decision Manager source configuration plug-in supports creating component versions from Decision Center RuleApps. It supports two types of authentication Basic Authentication and oAuth Authentication .

## Compatibility

* IBM DevOps Deploy version 6.0.1 or later
* **Version 3:** IBM Operational Decision Manager 7.5 or later
* **Version 4+:** IBM Operational Decision Manager 8.6 or later
* **Version 10+:** IBM Operational Decision Manager 8.9.1 or later

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

### Special note for ODM version 8.9.0 and earlier

ODM version 8.9.1 introduces a REST API which is used by version 10 of this plugin. For older ODM versions which do not offer the REST API, several jars from the ODM server must be made available to the plugin in order for the plugin steps to run properly. The jars are listed below and can be found in the following location on the ODM server in the directory: $ODM\_SERVER\_LOCATION$/teamserver/lib. The jars must either be copied to the UCD agents lib directory, or specified in the Jar Path of the plug-in configuration. The plugin requires the following ODM jars:

* jrules-engine.jar
* jrules-language.jar
* jrules-ruleartifacts.jar
* jrules-teamserver.jar
* jrules-dataaccess-rs4j.jar
* jrules-model-dataaccess.jar
* jrules-synchronization.jar
* wbemodel.jar

## History


### Version 15

DVOPS -I-751 - Added capability to fetch artifacts from nested branch.

### Version 14

Fixed issue to support both oauth and basic auth .

### Version 13

RFE - URBANCODE-I-395 - Implement oAuth .

### Version 10

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.
* Fixes APAR PH00399Plugin now only shows warning when Manage Properties permission not set.
* Fixes APAR PI81075ODM Source Config plug-in creating unnecessary snapshots when redeploying from existing snapshots.
* Adds support for the REST API introduced in ODM 8.9.1.

### Version 7

Fixes APAR PI87636Next Version Number not auto-incrementing is now fixed.

### Version 6

Fixes APAR PI85260Plug-in no longer throws NullPointerException when auto import is set.

### Version 5

* Fixes APAR PI79804Plugin failing to extract non-deployment snapshots.
* Removed need to name Rule App Archive.
* Updated error catching and logging.

### Version 4

Added the ability to export RuleApps with Deployment Configurations from Decision Services.

### Version 3

Added jar path field and eliminated need to copy open-source supporting jars when importing RuleApps from ODM Classic Rule Projects.

### Version 2

Support property file encryption.

### Version 1

Initial release of the plug-in.



|Back to ...||Latest Version|IBM Operational Decision Manager (ODM) Source Config ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[15.1178699](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-odm-source-config/devops-deploy-ibm-odm-source-config-15.1178699.zip)|[Readme](README.md)|[Settings](settings.md)|[Usage](usage.md)|[Downloads](downloads.md)|
