
# Oracle WebLogic Application Deployment - Overview

The Oracle WebLogic Application Server plug-in automates the deployment and management of applications on the Oracle WebLogic Server.

The plug-in includes these steps:

* [Deploy](#deploy)
* [Redeploy](#redeploy)
* [Start](#start)
* [Stop](#stop)
* [Undeploy](#undeploy)

**Note:** Deployment of .jar files is not supported.

All of the steps include the **Admin URL** property and the **Classpath** property. The administrative URL might use the tc3 or tc3s protocol, as opposed to http or https. For example, `t3://server.example.com:7001`. The classpath property must point to a file, not to a link.

The plug-in also includes a component template as an aid in setting up deployment automation. When you create a component from the template, you provide the following information:

* The location of the artifacts to deploy
* The Oracle WebLogic server to use

## Compatibility

This plug-in requires Oracle WebLogic Server.

This plug-in requires IBM DevOps Deploy version 6.0.1.

This plug-in supports WebLogic Server versions 10g or later.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 8 released on July 14, 2020

Version 8 includes the following features and fixes:

* Fixes APAR PH25731 – SSL URL DESTINATION UNREACHABLE.

### Version 6.657204 released on April 15, 2015

Version 6.657204 includes the following features and fixes:

* Fixes a command failure when a single argument is provided in **Additional Arguments** property for all steps except the Deploy step.

### Version 5.640918

Version 5.640918 includes the following features and fixes:

* Fixes a compatibility problem with IBM DevOps Deploy version 6.1.0.4 and later.

### Version 4.596018

Version 4.596018 includes the following features and fixes:

* Added the **No Stage** and **Library** properties to the Deploy step.
* The **Additional Arguments** property in the Deploy step updated to allow arguments that do not require values.
