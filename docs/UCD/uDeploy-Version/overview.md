
# IBM DevOps Deploy Versions - Overview

This plug-in contains steps that manipulate versions on the IBM DevOps Deploy server, including creating versions and assigning statuses to versions.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## Release Notes

### Version 76
Fix an issue with certain steps on z/OS

### Version 75
Adds a new step "Get Version Status Information" for retrieving Version Status information with an option to fail the step unless a Status is present on the Version.

### Version 74
Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 73
Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 72
Updating jettison library for CVE-2022-40150 CVE-2022-40149 

### Version 71
Update for java 17 compatibility

### Version 70
Update udclient and uDeployRestClient

### Version 69
Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 68

Added option to version links that allows users to prioritize links. (Available in UCD 7.1.1.1 and beyond).

### Version 67

Fixing CVE:CVE-2019-4233.

### Version 66

Plugin name changed.

### Version 65

Add default values to componentName and versionName for “Create Version” step.

Set componentName and versionName to required.

### Version 64

Support property file encryption.

### Version 63

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.


|Back to ...||Latest Version|IBM DevOps Deploy Versions |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[76.1176673](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Version/ucd-uDeploy-Version-76.1176673.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
