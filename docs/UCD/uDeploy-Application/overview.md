
# IBM DevOps Deploy Applications - Overview


This plug-in manipulates applications on the IBM DevOps Deploy server. For example, the steps in this plug-in can create applications, add applications to teams, and add components to applications.

## Compatibility

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, including z/OS with UNIX System Services.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## Release Note

### Version 87

 Updating Jettison library to 1.5.4.

### Version 77

Update for API changes in server.

### Version 76

Retry the Remove Component From Application step if a StaleObjectStateException occurs due to the application changing while the process is running.

### Version 75

RFE 57976 Added Request Properties property field to the Run Application Process step.

### Version 74

* RFE 111221. Added hidden Process Timeout property for the Run Application Process step. Specify this value to modify how long the step will wait for a valid process status.
* RFE 100937 Added Create Multiple Applications step to create multiple applications using json.
* RFE 100937 Added Create Multiple Applications step to create multiple applications using json.
* RFE 100937 Altered Add Application to Team step to allow for multiple applications.

### Version 73

Add a step to create an application from a template. Feature only available in UCD v6.2.3.1 and greater.

### Version 72

Support property file encryption..

### Version 71

sAdds five minute timeout and fault-tolerance to running application processes.

### Version 70

Fixes APAR PI57417. Plug-in now checks the agent settings for acceptance of self signed certificates.

