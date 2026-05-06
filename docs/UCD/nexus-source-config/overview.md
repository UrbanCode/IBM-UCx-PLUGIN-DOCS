
# Overview

The Nexus Source Config plug-in for IBM DevOps Deploy enables the import of Maven artifacts from Release and Snapshot repositories.


Adding the Nexus source configuration plug-in occurs during component configuration. If this concept is new, follow the steps outlined in the [IBM Knowledge Center](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=components-creating).


## Compatibility


The IBM DevOps Deploy automation plug-in for Nexus works with all releases of Nexus version 2. If you are using Nexus version 3, please use the Maven Source Config plug-in.

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in runs on all operating systems that IBM DevOps Deploy supports.


## Installation


No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").


## History

### Version 4

* A version's importing field will be correctly set and marked as finished importing when creating versions that aren't copied to codestation.

### Version 3

* Fixing CVE:CVE-2019-4233

### Version 2

* APAR PI89045: add support for setting isFinished flag flag when importing versions.

### Version 1

* Initial release of the Nexus Source Configuration plug-in.
