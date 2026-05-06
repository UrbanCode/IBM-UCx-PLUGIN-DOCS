
# Overview

The Perforce Helix source configuration plug-in includes a step to import artifacts from a Perforce server as component versions in IBM DevOps Deploy.

## Compatibility

This plug-in requires version 6.1.0.3 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 9

* Fixing CVE:CVE-2019-4233

### Version 8

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 7

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 6

* Succeed if most recent version is already imported.
* Use working directory instead of temp directory for temporary files.

### Version 5

Support property file encryption.

### Version 4

Version 4 includes a fix for APAR PI57417. The plug-in now checks the agent settings for acceptance of self-signed certificates.

### Version 3

Initial release of the plug-in.

