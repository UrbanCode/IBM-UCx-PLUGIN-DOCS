
# Oracle WebLogic Server Security Management - Process Steps

- [Oracle WebLogic Server Security Management - Steps](#oracle-weblogic-server-security-management---steps)
- [Steps](#steps)
    - [Steps](#steps-1)
    - [Process steps in the WLS Security Management plug-in](#process-steps-in-the-wls-security-management-plug-in)
    - [Create Role Mapper](#create-role-mapper)
    - [Create or Update Authentication Provider](#create-or-update-authentication-provider)
    - [Create or Update Realm](#create-or-update-realm)
    - [Manage Users and or Groups](#manage-users-and-or-groups)
    - [Manages Roles](#manages-roles)
    - [Update Authentication Provider](#update-authentication-provider)
    - [Update Realm](#update-realm)


## Create Role Mapper

Use this step to create a role mapper on a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Realm | String | The name of the security realm for which the role mapper is created. | Yes |
| Role Mapper Name | String | The name of the role mapper to be created. | Yes |
| Role Mapper Properties | String | The path of the role mapper properties file. | Yes |
| Role Mapper Type | Enumeration | The type of role mapper to be created. Specify either `DefaultRoleMapper` or `XACMLRoleMapper`. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Create or Update Authentication Provider

Use this step to create an authentication provider on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authentication Provider Name | String | The name of the authentication provider to be created. | Yes |
| Authentication Provider Properties | String | The path to the authentication provider properties file. | Yes |
| Authentication Provider Type | String | The type of authentication provider to be created. | Yes |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Realm | String | The name of the security realm for which the authentication provider is created. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| Weblogic Port | String | The port number of the WebLogic server. | Yes |

## Create or Update Realm

Use this step to create or update a realm on a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Realm | String | The name of the realm to be created on the WebLogic server. | Yes |
| Realm Properties Path | String | The path to the realm properties file. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Manage Users and or Groups

Use this step to manage users and groups that are associated with a security realm by using an XML file.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |
| XML File Path | String | The path to the XML file that defines the actions to take for the specified users and groups. An example XML file, which is named `users_groups.xml`, is located in the `/extras` directory. | Yes |

## Manages Roles

Use this step to manages roles on a WebLogic server using an XML file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file which is located in the `server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Role Operations | String | The path to the XML file that contains the role operations. This file describes the operations that are associated with each properties. An example XML file, which is named `roles.xml`, is located in the `/extras` directory. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Authentication Provider

Use this step to update an authentication provider on a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authentication Provider Name | String | The name of the authentication provider to be updated. | Yes |
| Authentication Provider Properties | String | The path to the authentication provider properties file. | Yes |
| Authentication Provider Type | String | The type of authentication provider to be updated. | Yes |
| JMX JAR Path | String | The path to the `wlfullclient.jar` file, which is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Realm | String | The name of the security realm for which the authentication provider is updated. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |

## Update Realm

Use this step to update a security realm on a WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| JMX JAR Path | String | The path to the wlfullclient.jar file which is location in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogic_home_directory/server/lib/wlfullclient.jar`. | Yes |
| Metadata File Path | String | The path to the `wlsMetadata.xml` file. The file contains connection information for the WebLogic server. An example file is located in the `/extras` directory. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Realm | String | The name of the security realm to be updated. | Yes |
| Realm Properties Path | String | The path to the realm properties file. | Yes |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic Hostname | String | The host name of the computer where the WebLogic server is installed. | Yes |
| WebLogic Port | String | The port number of the WebLogic server. | Yes |


