
# Jenkins Publisher - Overview

Jenkins is a continuous integration server that supports interactions with other technologies by using a plug-in model. This plug-in is installed into the Jenkins server and provides the ability to publish artifacts into an IBM DevOps Deploy component.

## Compatibility

The plug-in supports:

* Jenkins 1.424 and later.
* IBM DevOps Deploy 6.1 and later.

For earlier versions of IBM DevOps Deploy, download version 1.0.2 of the plug-in.

## History

### Version 1.16

* Fixed : UI Issue compatible for save and apply button.

### Version 1.15

* Fixed APAR PH28324 – Fail the Jenkins job if nothing is found to push to UCD( avoid false positive).

### Version 1.14

* APAR PH24835 – Update dependencies for compatibility for jenkins 2.2

### Version 1.13

* Fixing CVE:CVE-2019-4233

### Version 1.12

* Added option to skip waiting for a successful deployment from UCD.

### Version 1.11

* APAR PI99495 Update dependencies for compatibility with UCD 6.2.7.1+

### Version 1.10

* Removed admin user and administrative mode check for maintenance mode.
* Maintenance mode is removed in UCD 6.2.4, so weve removed it in the Jenkins plugin too.

### Version 1.9

* APAR PI84771 Invalid versionName property upgrade path originating from v1.2.10.

### Version 1.8

* RFE 104275 Support for Description and Application Request Properties on deployments. Going forward, all Application Process must have all required application request properties specified.

### Version 1.7

* Use Global and Alternative credentials appropriately.
* Continue build process if Component Version link assignment fails.

### Version 1.6

* Fixed PI77548 Unable to resolve component process properties.

### Version 1.5

* Fixed unserializable error when publishing versions.

### Version 1.4

* Added checkbox to configure administrative user.
* Added per job user credential configuration.

### Version 1.3

* Fixed APAR PI72572 Cannot find slave node workspace.
* Fixed APAR PI70948 Process continues in maintenance mode.
* Fixed APAR PI61971 Connection pool leak.
* Fixed Application process accepting all statuses.

### Version 1.2.10

### Version 1.2.9

Fix issue where single build updated properties on all versions. Fixed exception handling.

|Back to ...||Latest Version|Jenkins Publisher |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.16.1107398](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/jenkins-ud-plugin/ibm-ucdeploy-publisher-1.16.1107398.hpi)|[Readme](README.md)|[Usage](usage.md)|[Downloads](downloads.md)|
