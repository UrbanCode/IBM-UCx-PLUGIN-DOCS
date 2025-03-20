
# Oracle WebLogic WLDeploy - Process Steps

* [Check Application on Targets](#check_application_on_targets)
* [Check Targets](#check_targets)
* [List Applications on Targets](#list_applications_on_targets)
* [Run WLDeploy](#run_wldeploy)
* [Start Targets](#start_targets)
* [Stop Targets](#stop_targets)
* [Wait for Application on Targets](#wait_for_application_on_targets)


### Check Application on Targets

Check the status of an application on target servers and clusters


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| Application Name | String | The name of the application. | Yes |
| Expected Status | String | The status string to check against. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The jmx administration URL of the WebLogic server. This is used when starting, stopping, and checking status of targets. | No |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | A comma-separated list of target servers to deploy to. For example: target1,target2. | Yes |
| User Config File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |

### Check Targets

Examine target servers for the RUNNING status. This step will only succeed if all specified servers are RUNNING.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | Specify a comma-separated list of servers to check for a RUNNING status. For example: target1,target2. | Yes |
| User Configuration File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |

### List Applications on Targets

List all AppDeployments for each target and set as output properties.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | A comma-separated list of target servers to deploy to. For example: target1,target2. | Yes |
| User Configuration File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |

### Run WLDeploy

Run a WLDeploy Ant task.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Properties | String | A new-line separated list of additional properties to be used as part of the wldeploy Ant task. Use this format: property\_name=value\nname=value\n. | No |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property\_name=value. The property is added to the command line as follows: -Dproperty\_name=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| Alternate Application Descriptor | String | The alternate application descriptor file name. | No |
| Alternate WLS Application Descriptor | String | The alternate WebLogic server application descriptor file name. | No |
| Application Name | String | The name of the application. | Yes |
| Application Version | String | The version of the application that is specified in the Alternate WLS Application Description property. | No |
| Deployment Plan | String | The name of the deployment plan. | No |
| Deployment Plan Version | String | The version of the deployment plan that is specified in the Deployment Plan property. | No |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| Operation | Enumeration:
* deploy
* undeploy
* distribute
* redeploy
* start
* stop
| The wldeploy Ant task action to perform. | Yes |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Remote | Boolean | Enable this property if you are deploying to a remote computer that is not the same computer that this agent runs on. | No |
| Retire Timeout | String | The timeout value that specifies when to retire the currently running version. Specify this property if the wldeploy task is start, redeploy, or deploy. | No |
| Source to deploy | String | The fully qualified path of the source to deploy. | No |
| Targets | String | A comma-separated list of the names of target servers to deploy to. For example: target1,target2. | Yes |
| Task ID | String | The id for looking up the task. | No |
| User Config File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start and stop the WebLogic server. | Yes |

### Start Targets

Start the target server and clusters


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| On Failure | Enumeration:
* fail
* warn
| Choice of action when any of the targets fail to start. (Fail: Step will attempt to start all targets, and will fail at the end if any of the targets failed to start. Warn: Step will continue on if an override failure occurs, and print a warning declaring the target that failed to start.) | Yes |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | A comma-separated list of the names of the target servers to deploy to. For example: target1,target2. | Yes |
| Timeout | String | The time after which the attempt to start the targets times out. Specify the value in seconds. The default value is 2 minutes. | Yes |
| User Configuration File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |

### Stop Targets

Stop the target server and clusters


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| Force | Boolean | Use the force shutdown command instead of a simple shutdown command. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | A comma-separated list of target servers to deploy to. For example: target1,target2. | Yes |
| User Configuration File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |

### Wait for Application on Targets

Wait for the status of application on target servers and clusters to be running


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional System Properties | String | A new-line separated list of Java system properties to be added on the command line. Specify each property in this format: property=value. The property is added to the command line as follows: -Dprop=value. | No |
| Administration URL | String | The administration URL of the WebLogic server. | Yes |
| Application Name | String | The name of the application. | Yes |
| Expected Status | String | The status string to should check against. | Yes |
| JAVA\_HOME | String | The fully qualified path to the Java installation. Provide a value to overwrite the JAVA\_HOME environment variable. If this property is not specified, the default value is the system environment variable. | No |
| JMX Administration URL | String | The JMX administration URL of the WebLogic server. This URL is used when you start, stop, and check the status of targets. | No |
| Password | Password | The password to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| Targets | String | A comma-separated list of target servers to deploy to. For example: target1,target2. | Yes |
| User Configuration File | String | The path to the configuration file where the encrypted user name and password are stored. | No |
| User Key File | String | The path to the key file where the decryption key for the user name and password are stored. | No |
| User Name | String | The user name to use to connect to the WebLogic server. If the user name and password are encrypted, leave this property blank and specify the User Configuration File and User Key File properties. | No |
| WLDeploy Ant Task JAR | String | The fully-qualified path to the WebLogic WLDeploy Ant Task JAR file or full client JAR file. This property is required when you start, stop, and check the status of targets. | Yes |



|Back to ...||Latest Version|Oracle WebLogic WLDeploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1175365](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WLDeploy/ucd-WLDeploy-26.1175365.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
