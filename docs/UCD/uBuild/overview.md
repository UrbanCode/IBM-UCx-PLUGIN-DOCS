
# IBM DevOps uBuild - Overview

The uBuild plug-in provides steps to run uBuild processes automatically within the deploy process.

This plug-in includes these steps:

* [Assign Label](#assign_label)
* [Assign Status](#assign_status)
* [Download Artifacts](#download_artifacts)
* [Run Secondary Process](#run_secondary_process)

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in runs on all operating systems that DevOps Deploy supports.

## Installation

No special steps are required for installation. This plug-in is included with the installation of IBM Urban Code Deploy.If you need to install the plug-in again, see [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 8

Fixes APAR PI80964Run Secondary Process step with org/apache/log4j/Logger NoClassDefFoundError failure.

### Version 7

Support property file encryption.

### Version 6

Fixes APAR PI35342Compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

