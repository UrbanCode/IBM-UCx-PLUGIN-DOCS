
# Oracle WebLogic WLDeploy - Overview

The Oracle WLDeploy plug-in automates managing and deploying applications to one or more WebLogic servers. You can complete the following tasks with the plug-in:

* Start and stop a WebLogic server
* Check the status of an application
* Determine the available applications on a WebLogic server
* Deploy an application to a WebLogic server

The plug-in includes the following steps:

* [Check Application Status](#check_application_on_targets "Ant")
* [Check Target Status](#check_targets "Ant")
* [List Applications on Targets](#list_applications_on_targets "Ant")
* [Run WLDeploy](#run_wldeploy "Ant")
* [Start Targets](#start_targets "Ant")
* [Stop Targets](#stop_targets "Ant")
* [Wait for Application](#wait_for_application_on_targets "Ant")

### Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

This plug-in supports Oracle WebLogic server version 10.3 and later.

This plug-in runs on all operating systems that DevOps Deploy supports.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

### History

#### Version 26

* Fixed issue with Groovy 3.x.

#### Version 25

* Fixed CVE:CVE-2019-4233.

#### Version 24.971637

* Fixed APAR PI93543 List Applications on Target step resulting in JSONException.
* Removed all unnecessary stream handling of input properties files.

#### Version 23.971404

* Updated auto-discovery to search the MW\_HOME environment variable for a weblogic installation.
* Changed the wldeploy.path and wldeploy.mwHome Auto Discovery fields to derive from agent properties.

#### Version 22.947258

* Fixed APAR PI90465 UCD encrypted output properties require decryption key.

#### Version 21.909738

* Removed unused URLs from steps.
* Fixed NullPointer issue on auto discovery.
* Stop Target step now fails when given invalid target name.
* Run WLDeploy step will not throw error when given unexpected parameters.
* List Applications step now returns correct applications.
* Wait For Application step now avoids infinite loop.

#### Version 19.897205

Version 19.897205 includes the following features and fixes:

* Added timeout property to Stop Targets step.
* Fixed Run WLDeploy step so System Properties can be passed in.

#### Version 18.891315

Version 18.891315 includes the following features and fixes:

* Fixed bug in start/stop steps involving starting and stopping clusters that are already in desired state.

#### Version 17.885521

Version 17.885521 includes the following features and fixes:

* Fixed infinite loop errors in starting/stopping clusters.

#### Version 16.868519

Version 16.868519 includes the following features and fixes:

* Added support for property file encryption.
* Added support for different inputs of JMX URL.

#### Version 15.844984

Version 15.844984 includes the following features and fixes:

* Fixed problem involving mismatched Groovy versions causing java errors.

#### Version 14.830557

Version 14.830557 includes the following features and fixes:

* Added auto-discovery of a WebLogic installation and auto-configuration of all domains, servers, and clusters managed by the administration server.

#### Version 13.799123 of the plug-in was released on June 21, 2016

#### Version 13.712081

Version 13.712081 includes the following features and fixes:

* Added ability to fail or warn when Start Targets step fails to start one or more targets.
* Fixed defect in **Stop Target** step. The step no longer fails when a target is already in SHUTDOWN state.

#### Version 12.699360

Version 12.699360 includes the following features and fixes:

* Fixes APAR PI48310. Added a property on Start Targets step to set timeout length for starting targets.
* A new output property is set for each target in the step and contains the value of the state of the target.
* Added a property to the **Run WLDeploy** step that contains the path to the configuration file where the encrypted user name and password are stored.
* Added ability to set JAVA\_HOME system environment variable.

|Back to ...||Latest Version|Oracle WebLogic WLDeploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1175365](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WLDeploy/ucd-WLDeploy-26.1175365.zip)|[Readme](README.md)|[Steps](steps.md)|[Usage](usage.md)|[Downloads](downloads.md)|
