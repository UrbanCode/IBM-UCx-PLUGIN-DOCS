
# IBM DevOps Deploy Configuration Management - Overview

This plug-in includes steps that install configuration templates and import properties.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, including z/OS with UNIX System Services.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 20

Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 19

Updating jettison library for CVE-2022-45693 and CVE-2022-45685

### Version 18

Updating jettison library for CVE-2022-40150 CVE-2022-40149

### Version 17

Update for java 17 compatibility

### Version 16

Update log4j 2.17 and uDeployRestClient libraries

### Version 15

Fixes APAR PH45332 - Restore file permissions after token substitution.

### Version 14

Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307

### Version 13

Fixing CVE:CVE-2019-4233

### Version 12

Plugin Name updated.

### Version 11

Fixes APAR PI82806Batch Import Properties and Import Properties no longer add an extra .-1 to the PropSheetDef URLS.

### Version 10

Support property file encryption.

### Version 9

Fixes APAR PI70531. Install Template step now works on IBM DevOps Deploy 6.2.2.

### Version 8

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

### Version 6

This release includes functionality to import resource properties from a file.

### Version 4

This release includes a fix for a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

