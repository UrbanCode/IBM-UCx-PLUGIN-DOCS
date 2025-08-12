
# F5 BIG-IP - Overview


This plug-in includes steps that work with nodes and pools in the F5 BIG-IP family of products. The plug-in communicates with the F5 BIG-IP systems by using the iControl API.

To add the F5 BIG-IP plug-in steps to processes, click **Infrastructure > Load Balancing > F5** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for F5 BIG-IP works with all versions of F5 BIG-IP that support version 11.1 of the iControl Java client. Version 11.1 of the iControl Java client is included with the plug-in. To use the plug-in with newer versions of F5 products, in the hidden **iControl Jar Location** property specify the complete path to the iControl Java client that is installed on your F5 server. If you have not yet upgraded to F5 BIG-IP version 11.0 or greater, use version 10 or version 8 of the plugin.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is compatible with agents running on operating systems that are supported by both IBM DevOps Deploy and the iControl Java client. This plug-in does not support agents running on z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 22

* Fixes APAR PH00560The Enable Pool Members step with Force Online checkbox selected would fail if the monitors did not start up quickly.

### Version 21

* Fixes APAR PI99227 ContinuedDisable Pool Members step now correctly identifies that the Pool Member is in an offline state.
* Added the Force Online checkbox to the Enable Pool Member step to set a Pool Member to an online state.
* RFE 97454Added Enable Node Monitors checkbox to the Enable Node step.

### Version 20

Fixes APAR PI99227The Force Offline checkbox in the Disable Pool Members step will immediately closes all connections to pool members.

### Version 19

Fixes APAR PI93685Adds partition name to the Disable Pool Member steps check connection logic.

### Version 18

Added check that confirms the total number of Node Names and Node Ports specified matches.

### Version 17

Support property file encryption.

### Version 16

Version 16 adds functionality for iRules and Data Groups.

### Version 15

Version 15 moved four class files into their own class package and folder. Create Node step now uses the timeout property instead of an arbitrary timer.

### Version 14

Version 14 includes multiple updates:

* Supports only F5 BIG-IP Versions 11 and later.
* Nodes must now be referenced by name, not by IP address.
* Added the following steps: Create Node, Delete Node, and Confirm Disabled Node.
* You can now create, delete, enable, and disable multiple pool members and nodes in a single step.
* Updated step names and descriptions to correspond to their F5 names.
* Removed functions that were deprecated in F5 v11.0.0.

### Version 10

Version 10 includes a fix for a compatibility defect with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 9

Version 9 includes a hidden **iControl Jar Location** property for some steps. You can use this property to specify the complete path to the iControl Java client that is installed on your F5 server, if you do not want to use the version of the iControl Java client that is bundled with the plug-in.

### Version 8

Version 8 is the initial release of the plug-in.


|Back to ...||Latest Version|F5 BIG-IP ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1107123](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/F5/F5-24.1107123.zip)|[Readme](README.md)|[Troubleshooting](troubleshooting.md)|[Steps](steps.md)|[Downloads](downloads.md)|
