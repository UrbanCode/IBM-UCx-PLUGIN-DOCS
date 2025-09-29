
# Oracle Service Bus Configuration Management

Oracle Service Bus connects, mediates, and manages interactions between services and applications.

The plug-in provides steps to support automated application and import of Oracle Service Bus configurations. Use the provided steps in your processes. They are self-contained.

**Connection information file for accessing the WebLogic server** All steps also require connection information for accessing the WebLogic server. It is defined in a JavaBeans configuration file. You provide the path to it in step properties. The `wlsMetadata.xml` file provided with the plug-in is a working example. You may provide your own.

**Configuration files for objects** You create Java™ Management Extensions (JMX) properties files that define the objects. You provide the path to the file in step properties. Example files are provided in the plug-in for roles and users/groups. See the `extras` directory.

**JAR file paths on the server** The steps rely on the following Java archive (JAR) files on the Oracle Service Bus server. Include the path to them in your classpath.

* `<OracleServerDirectory>`/Oracle\_OSB1/lib/modules/oracle.servicebus.kernel-api.jar (on versions of Oracle Service Bus later than 11g)
* `<OracleServerDirectory>`/Oracle\_OSB1/lib/sb-kernel-api.jar (on Oracle Service Bus versions 10g through 11g)
* `<OracleServerDirectory>`/Oracle\_OSB1/modules/com.bea.common.configfwk\_1.7.0.0.jar

For information on platform requirements, see the [plug-in documentation](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/plugin-air-OSB-Configuration-Management/).


## Available Steps

Refer to the linked documentation for a comprehensive list of available steps.


