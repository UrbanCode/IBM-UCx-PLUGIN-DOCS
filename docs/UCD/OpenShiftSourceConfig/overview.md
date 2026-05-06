
# Overview

The OpenShift source configuration plug-in supports creating component version from OpenShift.

## Compatibility

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in works with [OpenShift CLI 3.1](https://docs.openshift.com/enterprise/3.1/cli_reference/get_started_cli.html) and later.

The OpenShift server must be accessible from the IBM DevOps Deploy agent or the agent must be installed on the OpenShift server.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 6

* Fixes APAR PH17739 - Invalid value for namingConvention property.

### Version 5

* Fixing CVE:CVE-2019-4233

### Version 4

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 3

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 2

* Support property file encryption.

### Version 1

* Initial release of the OpenShift Source Configuration plug-in.


