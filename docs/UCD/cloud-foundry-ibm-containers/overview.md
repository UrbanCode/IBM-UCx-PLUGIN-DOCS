
# IBM Containers - Overview


The IBM Containers plug-in uses the Cloud Foundry IBM Containers command-line utility (cf ic) to work with containers that are running in IBM Bluemix.

To add the IBM Containers plug-in steps to processes, click **Cloud > Cloud Foundry Containers** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for IBM Containers works with the Cloud Foundry command-line utility versions 6.14.0 through 6.16.0.

This plug-in requires version 6.1 or later of IBM DevOps Deploy.

This plug-in supports agents running Microsoft Windows, Linux, and Mac OS.

## Installation

The Cloud Foundry command-line utility must be installed on the agent computer. Install the Cloud Foundry command-line utility from the [GitHub repository](https://github.com/cloudfoundry/cli/releases). No other special steps are required for installing the plug-in in IBM DevOps Deploy. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 3

Version 3 includes the following features:

* Added auto-discovery for Bluemix Registries.
* Updated incorrect Bind IP Address call.

### Version 2

Version 2 includes the following features:

* Create Group, Remove Group, and Update Group steps
* Improved logging of errors

### Version 1

Initial release of the plug-in.


|Back to ...||Latest Version|IBM Containers ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1103420](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry-ibm-containers/cloud-foundry-containers-6.1103420.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
