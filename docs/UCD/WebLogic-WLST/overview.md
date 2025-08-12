
# Oracle WebLogic Scripting Tool (WLST) - Overview

The Oracle WebLogic Scripting Tool (WLST) plug-in automates the deployment and management of applications on Oracle WebLogic Server.

The plug-in includes the following steps:

* [Check Server Status](#check_server_status)
* [Deploy](#deploy)
* [Execute Script](#execute_script)
* [Resume Server](#resume_server)
* [Shutdown Server](#shutdown_server)
* [Start Application](#start_application)
* [Start Server](#start_server)
* [Suspend Server](#suspend_server)
* [Undeploy](#undeploy)

To add the Oracle WebLogic Scripting Tool (WLST) plug-in steps to processes, click **Application Server > Java > WebLogic** in the step palette of the process editor.

## Compatibility

This plug-in requires Oracle WebLogic Server versions 11g or later.


This plug-in requires IBM DevOps Deploy version 6.0.1.


The steps in this plug-in run on any agents that IBM DevOps Deploy supports.


## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 8.939089

* Password is now a secure field on all steps.
* Application Name is now required.
* Default timeout for deploy command lengthened.
* Updated Deploy step path to use identifiers in the deploy script (appName=, path=)

### Version 7.928077

* RFE 100050Added userConfigFile and userKeyFile options to all applicable steps.
* Added hostname, port, nmType, userConfigFile, and userKeyFile to Start Server properties.
* Updated descriptions for WLST Path to specify a directory, not a file.

### Version 5.923555

* Add targets field to deploy step.
* Add Dockerfile for WebLogicUCD Agent with install.properties to be modified as needed.
* Allow two separate URLs in the Deploy SOA Composite Application step.

### Version 4.868925

Support for property file encryption.

### Version 3.779371

Version 3 includes the Deploy SOA Composite Application step.

### Version 2.773986

Version 2 of the plug-in includes a defect fix.

### Version 1.748102

Initial release of the plug-in.

