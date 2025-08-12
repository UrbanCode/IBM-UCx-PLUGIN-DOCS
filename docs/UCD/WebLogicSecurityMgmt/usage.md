
# Oracle WebLogic Server Security Management - Usage


* [Before you begin](#before_you_begin)
* [Step Palette](#palette)
* [About this plug-in](#about)


## **Before you begin**

To use this plug-in, the Oracle WebLogic Server version 10g or later and agent must be installed.


## **Step palette**

To access this plug-in in the palette, click **Application Server** > **WebLogic** > **WebLogic Security Management**.


## **About this plug-in**

All steps have a required property, which points to the location of a Java bean configuration file. The file contains information for accessing the WebLogic server. The plug-in contains a example file that you can use; however, you can use your own file. The example file is `wlsMetadata.xml`.

When you create an authentication provider or realm, use the **Create or Update** step for the object. Do not use the **Update** step to create objects.

After you deploy changes, you must restart the WebLogic server in order for the changes to take effect. The server does not detect changes until it is restarted.

Step properties also specify the following information.

**JAR file paths on the WebLogic server** The steps rely on the following files on the WebLogic server. You provide the path to them in step properties.

* `<OracleServerDirectory>/wlserver_version/server/lib/wlthint3client.jar`
* `<OracleServerDirectory>/wlserver_version/server/lib/wljmxclient.jar`
* `<OracleServerDirectory>/wlserver_version/server/lib/wlclient.jar`

**Connection information file for accessing the WebLogic server** All steps also require connection information for accessing the WebLogic server. Access information is defined in a Java beans configuration file. You provide the path to it in step properties. The `wlsMetadata.xml` file provided with the plug-in is a working example. You can provide your own file.

**Configuration information for security objects** You create JMX or XML properties files that define the security objects to create or modify. Objects such as role mapper, roles, realm, authentication provider, users and groups. You provide the path to it in step properties. Example files are provided with the plug-in for roles, users, and groups.

* `roles.xml`
* `users_groups.xml`
