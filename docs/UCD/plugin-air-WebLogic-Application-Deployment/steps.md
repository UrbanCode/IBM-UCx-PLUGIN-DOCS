
# Oracle WebLogic Application Deployment - Process Steps

* [Deploy](#deploy)
* [Redeploy](#redeploy)
* [Start](#start)
* [Stop](#stop)
* [Undeploy](#undeploy)


## Deploy

Use this step to deploy an application to the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments to be added to the command. Place each argument on a newline in the format: `-parameter value`. The value cannot have a space. Single arguments such as-debug are allowed. | No |
| Admin URL | String | The URL for WebLogic Server administrator. For example, `t3://hostname:port`. | Yes |
| Deployment Name | String | The name of the deployment. | No |
| Library Job | Boolean | The deployment is a shared J2EE library or optional package. | No |
| No Stage | Boolean | Deployment files are not copied to the target servers. | No |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Use SSL | Boolean | Check this box to use SSL Property. | No |
| Source | String | The source application to be deployed to the WebLogic server. | Yes |
| Targets | String | A list of targets where the applications are to be deployed. Separate each target with a comma. The target list must not contain any spaces. | No |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic JAR File | String | The path to the WebLogic JAR file that executes deployments. The `weblogic.jar` file is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogicServer_directory/server/lib/weblogic.jar`. | Yes |

## Redeploy

Use this step to redeploy an application on the WebLogic server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments to be added to the command. Place each argument on a newline in the format: `-parameter value`. The value cannot have a space. Single arguments such as-debug are allowed. | No |
| Admin URL | String | The URL for WebLogic Server administrator. For example, `t3://hostname:port`. | Yes |
| Deployment Name | String | Name of the deployment to be redeployed. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Use SSL | Boolean | Check this box to use SSL Property. | No |
| Source | String | Source application to be deployed to WebLogic Server. | Yes |
| Targets | String | A list of targets where the applications are to be redeployed.Separate each target with a comma. The target list must not contain any spaces. If no target is specified, the application is redeployed on all of its current target servers. | No |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic JAR File | String | The path to the WebLogic JAR file that executes deployments. The `weblogic.jar` file is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogicServer_directory/server/lib/weblogic.jar`. | Yes |

## Start

Use this step to start an application on the WebLogic Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments to be added to the command. Place each argument on a newline in the format: `-parameter value`. The value cannot have a space. Single arguments such as-debug are allowed. | No |
| Admin URL | String | The URL for WebLogic Server administrator. For example, `t3://hostname:port`. | Yes |
| Deployment Name | String | Name of the deployment to be started. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Use SSL | Boolean | Check this box to use SSL Property. | No |
| Targets | String | A list of targets where the applications are to be started.Separate each target with a comma. The target list must not contain any spaces. If you do not specify a target, the application is started on all of its current targets. | No |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic JAR File | String | The path to the WebLogic JAR file that executes deployments. The `weblogic.jar` file is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogicServer_directory/server/lib/weblogic.jar`. | Yes |

## Stop

Stop action to be performed on the WebLogic Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments to be added to the command. Place each argument on a newline in the format: `-parameter value`. The value cannot have a space. Single arguments such as-debug are allowed. | No |
| Admin URL | String | The URL for WebLogic Server administrator. For example, `t3://hostname:port`. | Yes |
| Deployment Name | String | Name of the deployment to be stopped. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Use SSL | Boolean | Check this box to use SSL Property. | No |
| Targets | String | A list of targets where the applications are to be stopped.Separate each target with a comma. The target list must not contain any spaces. If no target is specified the application will be stopped on all its current targets. | No |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic JAR File | String | The path to the WebLogic JAR file that executes deployments. The `weblogic.jar` file is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogicServer_directory/server/lib/weblogic.jar`. | Yes |

## Undeploy

Use this step to undeploy an applicaton on the WebLogic Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments to be added to the command. Place each argument on a newline in the format: `-parameter value`. The value cannot have a space. Single arguments such as-debug are allowed. | No |
| Admin URL | String | The URL for WebLogic Server administrator. For example, `t3://hostname:port`. | Yes |
| Deployment Name | String | The name of the deployment to be undeployed. | Yes |
| Password | Password | The password to use to authenticate with the WebLogic server. | Yes |
| Use SSL | Boolean | Check this box to use SSL Property. | No |
| Targets | String | A list of targets where the applications are to be undeployed.Separate each target with a comma. The target list must not contain any spaces. | No |
| User Name | String | The user name to use to authenticate with the WebLogic server. | Yes |
| WebLogic JAR File | String | The path to the WebLogic JAR file that executes deployments. The `weblogic.jar` file is located in the `/server/lib` directory. Specify the complete directory structure, for example: `WebLogicServer_directory/server/lib/weblogic.jar`. | Yes |


