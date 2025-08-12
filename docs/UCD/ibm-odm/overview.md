
# IBM Operational Decision Manager (ODM) - Overview


IBM Operational Decision Manager provides a development environment and a dedicated user interface for automating and governing frequently occurring, repeatable business decisions. The Operational Decision Manager plug-in includes steps to deploy data models and rule sets to the Rule Execution Server.

It supports two types of authentication Basic Authentication and oAuth Authentication .

To add the Operational Decision Manager plug-in steps to processes, click **Application Server > Java > ODM** in the step palette of the process editor.

## Compatibility

This plug-in requires version 6.1.1.1 or later of IBM DevOps Deploy.

This plug-in was developed and tested with IBM Operational Decision Manager version 8.8.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 15

* Fixed issue to support both oauth and basic auth .

### Version 14

* RFE - URBANCODE-I-395 - Implement oAuth .

### Version 13

* RFE 123201 - Added support to run test suites using a decision service name.

### Version 12

* Version 12 of the plug-in uses apiauth in the REST path rather than api.

### Version 11

Version 11 of the plug-in includes updates from RFE 104196:

* Added steps to delete Rule Archive and XOMs from Rule Execution Server.
* Added automatic capture of properties in fetch steps to output properties.
* Added ability to pull the latest Rule App, Set, or XOM when version number is not specified.

### Version 8

* Version 8 of the plug-in includes a fix for APAR PI74332, where Deploy Data Model was not properly accepting response codes.

### Version 7

* Version 7 of the plug-in includes support for property file encryption.

### Version 6

* Version 6 of the plug-in includes a step to create or update RuleApp or RuleSet properties on Rule Execution Server.

### Version 5

* Deploy RuleApps implicitly by merging and versioning policy instead of deploying just RuleSets with explicit version and names.

### Version 4

* Converted Deploy Rule Set step from an Ant to a REST-based implementation.

### Version 3

* Version 3 of the plug-in includes a step to fetch a RuleApp or XOM resource from Rule Execution Server.

### Version 2

* Version 2 of the plug-in includes a step to deploy an XOM resource.

### Version 1

* Initial release of the plug-in, which includes a step to deploy a rule set.

|Back to ...||Latest Version|IBM Operational Decision Manager (ODM) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[15.1174432](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ibm-odm/ucd-ibm-odm-15.1174432.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
