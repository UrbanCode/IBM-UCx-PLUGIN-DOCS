
# IBM DevOps Deploy Tools - Overview


The Deploy Tools plug-in provides automated post deployment verification steps to verify that applications are deployed to web sites. You can use the plug-in to determine whether a deployment succeeded or failed. You can also specify application and component threshold processing time.

This plug-in includes the following steps.

* [Check Total Application Process Execution Time](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DeployTools/steps.html#check_total_application_process_execution_time)
* [Check Total Component Process Execution Time](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DeployTools/steps.html#check_total_component_process_execution_time)
* [Verify Deployment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DeployTools/steps.html#verify_deployment)
* [Wait for web page](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/DeployTools/steps.html#wait_for_web_page)

To add the Deploy Tools plug-in steps to processes, click **Quality > Functional Testing > Simple Web Test** in the step palette of the process editor

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0 or later.

This plug-in runs on all operating systems that the DevOps Deploy agents supports, except for IBM z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 10

Updated log4j and Jettison libs.

### Version 9

Support property file encryption.

### Version 8

This version adds proxy compatibility, and includes a fix for a build issue related to a missing log4j library.

### Version 7

This version includes a fix for APAR PI35342compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 6

This version includes a Character Encoding property for the Verify Deployment Step. This property specifies the character encoding to use when reading the response body from a website.


|Back to ...||Latest Version|IBM DevOps Deploy Tools |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[10.1177004](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/DeployTools/ucd-DeployTools-10.1177004.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
