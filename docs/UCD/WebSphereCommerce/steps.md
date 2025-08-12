
# IBM WebSphere Commerce - Process Steps

* [Configure server deployment settings (Deprecated)](#configure_server_deployment_settings_(deprecated))
* [Install server deployment package (Deprecated)](#install_server_deployment_package_(deprecated))
* [Run server deployment process](#run_server_deployment_process)


## Configure server deployment settings (Deprecated)

Configures the customization package deployment settings (Deprecated)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ANT home | String | The ANT installation directory on the runtime machine | No |
| Deployment settings | String | Comma separated list of properties to apply as deployment settings. Each property must be of the form propName=propValue. | Yes |
| Deployment settings private properties file | String | The name of the properties file that contains runtime server user credentials | No |
| Deployment settings properties file | String | The name of the properties file corresponding to the deployment settings | No |
| Private deployment settings | String | Comma separated list of properties to apply as private deployment settings. Each property must be of the form propName=propValue. | No |
| Target Environment/Customization name | String | The name of the customization to deploy. This is also referred to as the Target Environment. | Yes |
| WAS home | String | The WAS installation directory on the runtime machine | No |

## Install server deployment package (Deprecated)

Extracts the customization package archive (ZIP) on the target machine (Deprecated)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Label | String | The build label or name of the customization to deploy | Yes |

## Run server deployment process

Triggers the customization package deployment process on the target machine


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ANT build script | String | The name of the ANT built script file containing the deployment instructions | No |
| ANT executable | String | The name of the ANT executable | No |
| Deployment batch or script file | String | The name of the batch file or the script file that triggers the deployment | No |
| Target Environment/Customization name | String | The name of the customization to deploy. This is also referred to as the Target Environment. | Yes |


