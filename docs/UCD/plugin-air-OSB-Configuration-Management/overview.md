
# Oracle Service Bus Configuration Management - Overview

Oracle Service Bus connects, mediates, and manages interactions between services and applications.

The Oracle Service Bus Configuration Management plug-in provides self-contained steps to support applying and importing Oracle Service Bus configurations.

**Connection information file for accessing the Oracle WebLogic server** All steps in this plug-in require connection information for accessing the Oracle WebLogic server. The connection information is defined in a JavaBeans configuration file. You provide the path to the configuration file in the step properties. The `wlsMetadata.xml` file that is provided with the plug-in is a working example of a configuration file.

**Configuration files for objects** Objects are defined in Java Management Extensions (JMX) properties files. You provide the path to the JMX properties file in step properties. Example files are provided in the extras directory in the plug-in for roles and for users and groups.

**JAR file paths on the server** The steps rely on the following Java archive (JAR) files on the Oracle Service Bus server. Include the path to the JAR files in your class path.

* `*OracleServerDirectory*/Oracle_OSB1/lib/modules/oracle.servicebus.kernel-api.jar (on versions of Oracle Service Bus later than 11g)`
* `*OracleServerDirectory*/Oracle_OSB1/lib/sb-kernel-api.jar (on Oracle Service Bus versions 10g through 11g)`
* `*OracleServerDirectory*/Oracle_OSB1/modules/com.bea.common.configfwk_1.7.0.0.jar`

As well as the following build-time libraries:

* `wlclient.jar`
* `wljmxclient.jar`
* `wlthint3client.jar`

If no errors occur during a step, the plug-in activates the changes made to the Oracle Service Bus session. You do not need to activate the session manually.

## Compatibility

This plug-in requires version 6.0.1 of IBM DevOps Deploy.

This plug-in supports Oracle Service Bus versions 10g and 11g.

The steps in this plug-in run on any agents that the IBM DevOps Deploy server supports.

## Installation

No special steps are required for installation. See [Installing plug-ins in IBM DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in IBM DevOps Deploy").

## History

### Version 13

Fixes missing property exception in Import Configuration step.

### Version 12

Support property file encryption.

### Version 11

This version of the plug-in includes a step that imports configuration files and applies customization in the same step, which is a fix for APAR PI61865.

### Version 8

Initial release of the plug-in.


|Back to ...||Latest Version|Oracle Service Bus Configuration Management |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.914640](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/plugin-air-OSB-Configuration-Management/plugin-air-OSB-Configuration-Management-13.914640.zip)|[Readme](README.md)|[Steps](steps.md)|[Downloads](downloads.md)|
