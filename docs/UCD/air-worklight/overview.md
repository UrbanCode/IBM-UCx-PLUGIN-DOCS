
# IBM MobileFirst Platform (formerly Worklight) - Overview


The IBM MobileFirst Platform plug-in provides functionality for deploying artifacts, including mobile application artifacts, to an IBM MobileFirst Server. IBM MobileFirst Platform was previously known as IBM Worklight.

To add the IBM MobileFirst Platform plug-in steps to processes, click **Mobile > IBM MobileFirst** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for IBM MobileFirst Platform is compatible with IBM MobileFirst Platform Foundation versions 6.3, 7.0, 7.1, 8.0, Bluemix-Hosted and with IBM Worklight versions 6.0 through 6.2.

IBM Worklight prior to version 8 require the [worklight-ant-deploy.jar](https://www.ibm.com/support/knowledgecenter/SSZH4A_6.1.0/com.ibm.worklight.deploy.doc/devref/r_ant_tasks_buld_deploy_adapters.html). Follow the link to find the jar on your on-premise Worklight server. This is required and must be available for the agent to use.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 13

Fixing CVE:CVE-2019-4233

### Version 12

* Updated server path descriptionspecifying respective server path for different versions of MobileFirst.

### Version 11

* RFE 115145Support for web resource deployments on IBM MobileFirst Platform v8.0

### Version 10

* RFE 98468Support for IBM MobileFirst Platform v8.0.
* Updated Step names, descriptions, and default property values to match IBM MobileFirst v8.0.

### Version 9

Secure property file encryption.

### Version 8

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 7

Version 7 of the plug-in adds support for deploying multiple wlapp or adapters within a single step.

### Version 6

Version 6 of the plug-in adds support for IBM MobileFirst Platform Foundation version 6.3, 7.0, and 7.1

### Version 5

Version 5 of the plug-in includes a fix for a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.


|Back to ...||Latest Version|IBM MobileFirst Platform (formerly Worklight) |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1174444](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-worklight/ucd-ibm-mobilefirst-13.1174444.zip)|[Readme](README.md)|[Steps](steps.md)|[Usage](usage.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
