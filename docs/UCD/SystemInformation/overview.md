
# System Information - Overview

The steps in this plug-in provide information about the system on which the agent is running. You can use these steps to verify that a deployment can succeed or has succeeded by verifying the amount of disk space and the environment variables on the system.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent.

**Note:** The Check Available Disk Space is not supported on the Solaris operating system

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 9

Updating commons-io library to 2.17.0 for CVE-2024-47554.

### Version 8

Updating Jettison library to 1.5.4 for CVE-2023-1436.

### Version 7

Updating jettison library for CVE-2022-45693 and CVE-2022-45685.

### Version 6

Updating jettison library for CVE-2022-40150 CVE-2022-40149.

### Version 5

Fixes APAR PI94880Updated from Apache Commons IO 1.4 to latest (2.2 as of now).

### Version 4

Support property file encryption.

### Version 3

Fixes APAR PI35342compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 2

Add a step to check if a value matches a regex and create output properties based on the matching groups.

### Version 1

Initial release of the System Information plugin.


|Back to ...||                                                             Latest Version                                                              |System Information |||
| :---: | :---: |:---------------------------------------------------------------------------------------------------------------------------------------:| :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.1171671](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SystemInformation/ucd-SystemInformation-9.1171671.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
