
# Docker Compose - Overview

This plug-in provides steps for running Docker Compose.

To add the Docker Compose plug-in steps to processes, click **Cloud > Docker** in the step palette of the process editor.

### Compatibility

The IBM DevOps Deploy automation plug-in for Docker Compose works with Docker Compose Version 4.0 and later.

This plug-in requires version 6.2 or later of IBM DevOps Deploy.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

### History

#### Version 23

* Add dependency on version 30 of the DevOps Versioned File Storage plug-in.

#### Version 22

* Add support for Compose v3 files.
* Removed references to unset component property named docker-compose from component template processes.
* Fixed problem where overrides file was not being generated correctly by plugin step Create Child Resources.

#### Version 20

Create a compose.service.scale component environment property on the Docker Compose component and update with new service names.

#### Version 19

Error discovered when trying to update a deployed version in the Create Child Resources step. Added catch in Create Child Resources step for unsupported IBM DevOps Deploy versions.

#### Version 18

Support property file encryption.

#### Version 17

Implemented new Run Docker Compose step. Renamed Compose Up step to Launch Docker Compose Application Renamed Compose Scale step to Scale Docker Compose Application

* Added Timeout property.

#### Version 16

Implemented new Compose Scale step.

#### Version 15

New docker-compose Command Path property to specify the location of the docker-compose executable for the Compose Up step. New Do Not Delete Script property to save the plugins generated script following execution of the Compose Up step. Default interpreter now used for \*nix operating system.

#### Version 14

Updated bug when sourcing Environment Script file. Functionality only for \*nix machines. Added Text Area Box for specifying indiviual environment value pairs for both Windows and \*nix.

#### Version 13

Update to Create Resource Tree step to match updates made to a dependency.

#### Version 12

This version of the plug-in includes changes related to internal refactoring.

#### Version 9

The following features are included in the initial release of the plug-in:

* Create an environment based on a Compose file.
* Run the Docker Compose up command.

|Back to ...||Latest Version|Docker Compose |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[24.1174442](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/docker-compose/ucd-docker-compose-24.1174442.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
