
# Salesforce - Overview

The Salesforce plug-in includes steps that use the Force.com Migration Tool to deploy metadata changes and Apex classes.For a detailed tutorial and example use-cases, refer to the [Usage](#usage) page.

To add the Salesforce plug-in steps to processes, click **CRM > Salesforce** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for Salesforce works with Force.com Summer 14 and later, and with Metadata API version 33 and later.

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 10

Resolved property validation issue due to which plugin was unable to load in some UCD versions.

### Version 9

Added hidden fields for pollWaitMillis and maxPoll parameters to various steps.

### Version 8

Fix issue with build listeners finding more element types than expected.

### Version 7

RFE 104828Added ability to run and specify tests.

### Version 6

Fixes APAR PI80241Setting a directory as Deploy Root causes failure.

### Version 5

Version 5 of the plug-in includes the following enhancements:

* Added checkOnly option to Deploy step.
* Added step Deploy Recent Validation.
* Logging improvements.

### Version 4

Version 4 of the plug-in adds support for property file encryption.

### Version 3

Version 3 of the plug-in adds hidden properties for each step, which support using a proxy.

### Version 2

Version 2 of the plug-in includes the following steps: List Metadata, Describe Metadata, and Bulk Retrieve.

### Version 1

Version 1 is the initial release of the plug-in.

|Back to ...||Latest Version|Salesforce ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[10.1138575](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SalesForce/ucd-salesforce-10.1138575.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
