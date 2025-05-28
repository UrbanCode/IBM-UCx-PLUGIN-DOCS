
# IBM DevOps Deploy Resources - Overview

This plug-in contains steps that work with resources, such as agents.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, including z/OS with UNIX System Services.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 86

Updating Jettison library to 1.5.4 for CVE-2023-1436.

### Version 85

Updating jettison library for CVE-2022-45693 and CVE-2022-45685.

### Version 84

Updating jettison library for CVE-2022-40150 CVE-2022-40149.

### Version 83

Update uDeployRestClient for new SSH Install Agent API.

### Version 82

Update for java 17 compatibility.

### Version 81

Update udclient and uDeployRestClient.

### Version 80

 Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307.

### Version 79

Fixed 'Install Agent with SSH' and it now installs web agents.

### Version 78

‘Install Agent with SSH’ step does not work.

### Version 77

Fixing CVE:CVE-2019-4233.

### Version 76

Add “Secure Value” field to “Set Agent Property” and “Set Resource Property” steps.

### Version 75

Plugin step updated.

### Version 74

Update for API changes in server.

### Version 73

RFE 100937 Added Create Multiple Resources step to create multiple applications using json.

### Version 72

Added a step to map component tag to a resource.

### Version 71

Support property file encryption.

### Version 70

Wait for Resources step treats Upgrade Recommended status as online..

### Version 69

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 68

This version of the plug-in includes steps to add and remove tags on resources.

### Version 67

The Java Home default value was changed to clarify that shell variables are not allowed.

### Version 64

The contextual help was updated to reflect the new resource model.


|Back to ...||Latest Version|IBM DevOps Deploy Resources ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[86.1155708](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Resource/ucd-uDeploy-Resource-86.1155708.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
