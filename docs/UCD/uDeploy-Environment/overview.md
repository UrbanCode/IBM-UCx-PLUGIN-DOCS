
# IBM DevOps Deploy Environments - Overview


This plug-in includes steps that create and manage environments on the IBM DevOps Deploy server.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, including z/OS with UNIX System Services.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 89

Fixes APAR PH55636 - Create Multiple Environments not creating with expected color.

### Version 88

Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 87

Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 86

Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 85

Update for java 17 compatibility

### Version 84

Update udclient and uDeployRestClient

### Version 83

Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 82

Fixing CVE:CVE-2019-4233

### Version 81

Add "Secure Value" field to "Create Environment Property" step.

### Version 80

Fixed APAR PI97913 - Create Environment can accept more than 20 properties

### Version 79

RFE 121148 Removed isSecure property from Set Component Environment Property to support property definition type.

### Version 78

Plug-in name changed.

### Version 77

Update for API changes in server.

### Version 76

Fixed typo in Create Multiple Environments description.

### Version 75

* RFE 100937 Added Create Multiple Environments step to create multiple environments using json.
* RFE 100937 Altered Add Environment to Team step to allow for multiple environments.

### Version 74

RFE 83705Added Create Environment from Template step.

### Version 73

Support property file encryption.

### Version 72

Version 72 includes a fix for APAR PI45948, Set environment property step may fail if run simultaneously.

### Version 68

* This version includes a step that retrieves basic information about an environment.
* The Create Environment step can now provision environments with blueprints.
* You can specify an environment profile when you create an environment.
