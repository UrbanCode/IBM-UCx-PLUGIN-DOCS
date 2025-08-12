# z/OS File Source Config - Overview



The z/OS File Source Config plugin automates uploading data sets, UNIX files, and generic artifacts from a z/OS system into a component version.
New component versions are created based on [ship list](https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=platform-ship-list-files) files.


## Compatibility

This plug-in requires DevOps Deploy version 7.1.2 or later and an DevOps Deploy agent on z/OS.
This plug-in works with IBM z/OS version 2.4 or later.

## Installation

See [Installing plug-ins](https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=installing-plug-ins) for installing and removing plugins.

## History


### Version 8

* Update udclient and uDeployRestClient.
* Fixed NoClassDefFoundError for StringUtils.

### Version 7

* Update udclient and uDeployRestClient.
  
### Version 6

* Remove log4j functionality related to: CVE-2019-17571, CVE-2020-9488. CVE-2021-4104, CVE-2022-23302, CVE-2022-23305, CVE-2022-23307.
  
### Version 5

* Allow specifying custom java opts.
  
### Version 4

* Fixing CVE:CVE-2019-4233.
  
### Version 3

* Fixes APAR PI87707, a regression where the user who requested a manual version import was not being tracked.

### Version 2

* Support Run Process after a Version is Created. UrbanCode Deploy server 6.2.5 is required to change the Run Process after a Version is Created setting for a zOS component.

### Version 1

* Initial Release of zOS File source configuration.


