
# WebSphere Application Server - Install - Overview

The IBM WebSphere Application ServerInstall plug-in includes a sample application that automates a standard installation of WebSphere Application Server Network Deployment. This application is provided as an example and must be modified or used as a guide for creating your own installation process. The plug-in also includes steps that are related to installing WebSphere Application Server.

## Prerequisites

IBM Installation Manager must be installed on the target system. The [IBM WebSphere Application Server -Deployment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/) plug-in version 76 or later must be installed, and the [IBM Installation Manager](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/ibm-installation-manager/) plug-in version 3 or later must be installed.

## Compatibility

* This plug-in requires version 6.1.1.2 or later of IBM DevOps Deploy.
* The sample application supports IBM WebSphere Application Server Network Deployment version 8.0 and later.

**Note:** The sample application demonstrates installing IBM WebSphere Application Server Network Deployment on Linux.

## Installation

No special steps are required for installing the plug-in. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 11

* Updated jettison and log4j dependencies.

### Version 10

* Change dependency on DevOps Deploy Versioned File Storage plug-in to version 30 and DevOps Deploy Resources plug-in to version 75.

### Version 9

* Support for encrypted input and output properties.
* Fixes APAR PI89623Added support for handling optional CLI arguments used by the create deployment manager and node profile steps.

### Version 8

* Fixes APAR PI86445Allow specification of user.wasjava property during installation

### Version 7

* Fixes APAR PI79100WAS 9 install through UCD fails

### Version 6.878008

With this version, the `imcl.bat` batch file and `**imcl.exe**` command can be used on Windows.

### Version 4.810170

Version 4 of the plug-in includes a fix for APAR PI66942. A new step property controls whether the profile directory is deleted after the Remove Deployment Manager Profile plug-in step runs. In previous versions of the plug-in, the Remove Deployment Manager Profile plug-in step always deleted the profile directory, which can cause problems if the directory is on a mounted drive.

### Version 3.703859

This version of the plug-in includes the following features:

* New properties for the Create Deployment Manager Profile and Create Node Profile steps that specify `manageprofiles` command arguments `-cellName`, `-nodeName`, `-hostName`, and `-portsFile`. These properties are optional and hidden.
* A new property for the Install WebSphere Application Server step that specifies the `imcl` command argument `-sharedResourceDirectory`. This property is optional and hidden.

### Version 2.651735

This version of the plug-in includes a new Start Node step, updates to the component template, and defect fixes.

