
# OpenShift for IBM DevOps Deploy - Overview


The OpenShift plug-in includes steps to interact with OpenShift applications in IBM DevOps Deploy.

## Compatibility

This plug-in works with [OpenShift CLI 3.1](https://docs.openshift.com/enterprise/3.1/cli_reference/get_started_cli.html) and later.

The OpenShift server must be accessible from the IBM DevOps Deploy agent.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 25

* Updating Jettison library to 1.5.4 for CVE-2023-1436

### Version 23

* Fixes APAR : PH61399 oc create object from template command fails when a warning is received

### Version 22

* Updates fix to APAR :  PH54821

### Version 21

* Fixes APAR : PH54821 Fix login issue with the Create Object From Template step

### Version 20

* Log4j and Jettison dependency updated

### Version 19

* Fixes APAR PH44354 - Informational/Warning Messages causing plugin steps to fail

### Version 18

* Added a restart option to the Rollout step
* Added the Process Template and Check Pod Status steps
* Fixes APAR PH32712. Openshift warning handled as an error causing the step to fail

### Version 17

* Added the Expose step and change implementation for Patch Secret from REST API to oc command

### Version 16

* Allow using oc apply or oc create in Create Object From Template step. Indicate \deploy\ command is deprecated for later versions of Openshift. Introduces the New-App, Set Triggers, Set Image, Set Env, New Build, Start Build, Cancel Build, Create, Delete and Login steps. Remove login operation for every plugin step execution and if login parameters are given include them as part of the oc command

### Version 14

* Introduces token support for Create Secret, Patch Secret and Replace DeploymentConfig.

Version 13

* Introduces the Rollout step which fixes APAR PH02968 OpenShift plug-in does not support oc rollout command.

### Version 12

* Add the Apply step.

### Version 11

* Updated to ensure all response texts are zOS compatible.

### Version 10

* Remove oc version check before oc login.

### Version 9

* Fix to parameter passing in Create Object From Template step.
* Allows for pull secrets and app secrets to be patched at once.

### Version 8

* Create Object From Template step now allows for parameter file to be passed in.

### Version 7

* Fixes to Create Object from Template step. Plugin collects token automatically when using REST steps. JSON files can be passed in as well as JSON.

### Version 6

* Added step Create Object from Template.

### Version 5

* Added steps Create Secret, Patch Secret, Replace DeploymentConfig and Patch DeploymentConfig.

### Version 4

* Support property file encryption.

### Version 3

* Updated to work with oc CLI 3.1.
* Changed Resource Type in Scale step to dropdown.

### Version 2

* A fix for an issue related to setting the `oc` script home.
* The **Resource Type** field in the Scale step is now a drop-down list.

### Version 1

* The initial release of the plug-in includes steps to deploy, roll back, scale and tag an application in OpenShift.

