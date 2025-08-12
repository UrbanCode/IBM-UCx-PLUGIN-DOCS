
# Apache Tomcat - Process Steps

* [Check Application Status](#check_application_status)
* [Deploy Application](#deploy_application)
* [Start Application](#start_application)
* [Start Tomcat](#start_tomcat)
* [Stop Application](#stop_application)
* [Stop Tomcat](#stop_tomcat)
* [Undeploy Application](#undeploy_application)


## Check Application Status

Check the status of a deployed application against an expected status.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Expected Status | Enumeration | The expected status of the application. If the application does not have this status, this step will fail. | Yes |
| Tomcat Application | String | The path of the application to check the status of. This is case-sensitive. For example: /docs | Yes |
| Tomcat Manager Password | Password | The password to use to log in to the Tomcat Manager interface. | Yes |
| Tomcat Manager URL | String | The URL of the Tomcat Manager interface. | Yes |
| Tomcat Manager User Name | String | The user name to use to log in to the Tomcat Manager interface. | Yes |

## Deploy Application

Deploy a web application to Tomcat.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | The context that is being deployed. | Yes |
| Context XML path | String | The path of the context configuration file for this application, if any. | No |
| Tomcat Manager Password | Password | The password to use to log in to the Tomcat Manager interface. | Yes |
| Tomcat Manager URL | String | The URL of the Tomcat Manager interface. | Yes |
| Tomcat Manager User Name | String | The user name to use to log in to the Tomcat Manager interface. | Yes |
| War File Path | String | The path to the WAR file to be deployed. | Yes |

## Start Application

Start a web application that is deployed on Tomcat.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | The context that is being deployed. | Yes |
| Tomcat Manager Password | Password | The password to use to log in to the Tomcat Manager interface. | Yes |
| Tomcat Manager URL | String | The URL of the Tomcat Manager interface. | Yes |
| Tomcat Manager User Name | String | The user name to use to log in to the Tomcat Manager interface. | Yes |

## Start Tomcat

Start Tomcat on the agent machine.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Catalina Base | String | The path name of the Tomcat instance to be used. Provide a value if you want to overwrite the CATALINA\_BASE environment variable or no value is available. | No |
| Catalina Home | String | The path name to the Tomcat installation directory. Provide a value if you want to overwrite the CATALINA\_HOME environment variable or no value is available. | No |
| Hostname | String | The host server that the specified Tomcat instance is listening on. If the instance is not listening on localhost, provide the hostname where the host server can be reached when it is running. Use this property only if you are waiting for Tomcat to complete the boot sequence. The default value of localhost is used if no value is specified. | No |
| Java Home | String | The location of the Java installation. Provide a value if you want to overwrite the JAVA\_HOME environment variable or no value is available. | No |
| Launcher | String | The location of the Tomcat startup script, for example, `/opt/tomcat/bin/startup.sh`. | Yes |
| Options | String | A new line separated list of additional options to pass to the startup script. | No |
| Port | String | The port that the step uses to detect when the Tomcat instance is running. You can specify any of the connector ports that your instance is configured with. | No |
| Startup timeout (in seconds) | String | The value that the step uses to wait for the Tomcat instance to complete the boot process before continuing. You must provide a port value, which is used to detect when the boot process is complete. | No |

## Stop Application

Stop a deployed web application on Tomcat.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | The context that is being stopped. | Yes |
| Tomcat Manager Password | Password | The password to use to log in to the Tomcat Manager interface. | Yes |
| Tomcat Manager URL | String | The URL of the Tomcat Manager interface. | Yes |
| Tomcat Manager User Name | String | The user name to use to log in to the Tomcat Manager interface. | Yes |

## Stop Tomcat

Stop Tomcat on the agent computer.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Catalina Base | String | Provide a value if you want to overwrite the CATALINA\_BASE environment variable or if one is not available. | No |
| Catalina Home | String | Provide a value if you want to overwrite the CATALINA\_HOME environment variable or if one is not available. | No |
| Hostname | String | If your Tomcat instance is not listening on localhost then provide the hostname where it can be reached when its running. Use this property only if you are waiting for Tomcat to complete the shutdown sequence. The default value of localhost is used if no value is specified. | No |
| Java Home | String | Provide a value if you want to overwrite the JAVA\_HOME environment variable or if one is not available. | No |
| Launcher | String | The location of the shutdown executable file, for example, `/opt/tomcat/bin/shutdown.sh`. | Yes |
| Options | String | A new line separated list of command line options to pass to the launcher. | No |
| Port | String | Enter a port for the step to use to detect when the Tomcat instance is stopped. You can specify any of the connector ports that your instance is configured with. | No |
| Shutdown timeout (in seconds) | String | Enter a value to have the step to wait for the Tomcat instance to complete the shutdown sequence before continuing. You have to provide a port value lower than the port value used to detect when the shutdown process is complete. | No |

## Undeploy Application

Undeploy a web application on Tomcat.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Context Name | String | The context that is being deployed. | Yes |
| Tomcat Manager Password | Password | The password to use to log in to the Tomcat Manager interface. | Yes |
| Tomcat Manager URL | String | The URL of the Tomcat Manager interface. | Yes |
| Tomcat Manager User Name | String | The user name to use to log in to the Tomcat Manager interface. | Yes |


