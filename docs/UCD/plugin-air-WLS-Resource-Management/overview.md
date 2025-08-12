
# Oracle WebLogic Server Resource Management - Overview

The WebLogic Server Resource Management plug-in provides steps to work with beans on an Oracle WebLogic server.You can automate the creation, modification, and deletion of quotas, templates, queues, JDBC, and more. Each plug-in step provides a single function and contains properties to connect with the WebLogic server.

**Connection information for accessing the WebLogic server** A Java configuration file that contains information to access the WebLogic server is required.You must provide the path to the file in the **Metadata File Path** property. The plug-in contains an example of this file that you can use. The file is named `wlsMetadata.xml` and is located in the `extras` folder of the plug-in `.zip` file. You can provide your own configuration file and provide its location using the **Metadata File Path** property.

**Configuration files for objects** A JMX properties file must be created to define the objects and the path to the file that is included in the **JMX Properties Path** property. The plug-in contains an example of this file that is located in the `extras` folder of the plug-in `.zip` file.


## Step palette

To access this plug-in in the palette, click **Application Server** > **WebLogic** > **WLS Resource Management**.

## Compatibility

This plug-in requires IBM DevOps Deploy version 6.0.1 or later.

This plug-in supports Oracle WebLogic server version 10g and later.

This plug-in runs on all operating systems that DevOps Deploy supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 5.767528 released on March 30, 2016

Version 5.767528 includes the following features and fixes:

* Refactored plug-in for IBM DevOps Release. No new steps were added.
* Fixed APAR PI27734: Errors using the Update JDBC Data Source step in the WebLogic Server Resource Management plug-in with DevOps Deploy.
* Fixed APAR PI27734: Correction to the bean attributes.
* Updates to the documentation.
