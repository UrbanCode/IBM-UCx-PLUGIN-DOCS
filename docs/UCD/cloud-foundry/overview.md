
# Cloud Foundry

## Overview

The Cloud Foundry plug-in uses the Cloud Foundry command-line utility to interact with applications in a target Cloud Foundry system.

To add the Cloud Foundry plug-in steps to processes, click **Cloud > CloudFoundry** in the step palette of the process editor.

### Compatibility

The IBM DevOps Deploy automation plug-in for Cloud Foundry works with the Cloud Foundry command line interface version 6.0 and later. The cf interface can be downloaded [here](https://github.com/cloudfoundry/cli).

This plug-in requires version 6.0 or later of IBM DevOps Deploy.

This plug-in supports agents running on Linux, Microsoft Windows, and Mac OS.

### Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

### History

#### Version 35

* On upgrade to v34 , cli version was not picking up correctly that has been fixed in v35.

#### Version 34

* Add property  -  nowait, strategy, endpoint to Step - Push Application.

#### Version 33

* Add default version property reference to process's resource path.

#### Version 32

* RFE 148034 - Add support for cli 7 - required upgrade in steps - push app, create route.

#### Version 31

* Updated 'application' property default values to check for both component/cf.appName and resource/cf.app.

#### Version 30

* Fixed APAR PH05332 Cloud Foundry Plugin v23 or v27 Create or Update Service step is failing. Refactored the way of fetching them from cli only.

#### Version 27

* Fixed APAR PI97459 default CF_HOME is now created as a new temporary child of the working directory.
* Updated all default application values to reference the auto-configured application resources.

#### Version 26

* Fixed APAR PI96390 Added CF_COLOR environment property to not colorize CF output.
* Fixed APAR PI96391 Removed component template modifications and created applications as resources.
* Fixed API Endpoint discovery to correctly parse the output of the cf api command.
* Added check to confirm CloudFoundryController role and provided error output upon failure.

#### Version 25

* Updated copyright.

#### Version 24

* Added Cloud Foundry CLI Path property as a hidden variable to all automation steps.

#### Version 23

* Fixes NullPointerException when using the CF Auto-Configure step.

#### Version 22

* Added a hidden Environment Variables property to all steps.
* CUPS and UUPS step now has optional username and password fields.
* CUPS and UUPS steps CF_HOME property now has a default value.

#### Version 21

* Add create-user-provided-service and update-user-provided-service functionality.

#### Version 20

* Support property file encryption.

#### Version 19

* Username and Password properties are now optional. Allows possible authentication outside of the plugin.
* Added an optional default value resource property to CF_HOME.

#### Version 18

* Add ability to specify shell interpreter for cf commands.

#### Version 17

* Adds ability to specify an explicit CF_HOME for each step.
* Fixed APAR PI65656: Updated Execute CF Script and Execute CF Bash File steps.
* Updated Create Service step error with the incorrect declaration of variables.

#### Version 16

* Fixes APAR PI57417: Plug-in now checks the agent settings for acceptance of self signed certificates.

#### Version 15

* Added auto-discovery of cloud foundry environment on UCD and auto-configuration.

#### Version 14

* Added steps for deleting services and creating/deleting subdomains.

#### Version 13

* Version 13 is the first release of the standard plug-in (as opposed to the community plug-in).

|Back to ...||Latest Version|Cloud Foundry |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[35.1122072](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry/cloud-foundry-35.1122072.zip)|[Readme](README.md)|[Usage](usage.md)|[Troubleshooting](troubleshooting.md)|[Steps](steps.md)|[Downloads](downloads.md)|
