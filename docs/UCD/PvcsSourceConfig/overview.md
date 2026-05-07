
# Overview

The PVCS source configuration plug-in imports artifacts from Serena PVCS Version Manager as component versions in IBM DevOps Deploy.

## Compatibility

This plug-in requires version 6.1 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 7

* Fixing CVE:CVE-2019-4233

### Version 6

* APAR PI89045: add support for setting isFinished flag when importing versions.

### Version 5

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 4

* Support property file encryption.

### Version 3

* Fix for APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

### Version 2

* Fixes running a process after creating a version

### Version 1

* Initial release of PVCS source configuration plugin.

