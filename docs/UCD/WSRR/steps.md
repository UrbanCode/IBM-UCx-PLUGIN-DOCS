
# IBM WebSphere Service Registry and Repository - Process Steps

* [Activate Configuration Profile](#activate_configuration_profile)
* [Delete Configuration Profile](#delete_configuration_profile)
* [Load Configuration Profile](#load_configuration_profile)
* [Register Service](#register_service)


## Activate Configuration Profile

This step archives the currently active profile, and then makes the specified configuration profile active. The configuration profile that was previously active is saved in WSRR.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | In a stand-alone or federated node configuration, the name of the cell in which WSRR is deployed. | No |
| Cluster Name | String | In a cluster configuration, the name of the cluster on which WSRR is deployed. | No |
| Node Name | String | In a stand-alone or federated node configuration, the name of the node on which WSRR is deployed. | No |
| Password | Password | The password of the account that will interact with WSRR system. | Yes |
| Profile Name | String | The name given to the configuration profile created in WSRR.  | Yes |
| Server Name | String | In a stand-alone or federated node configuration, the name of the server on which WSRR is deployed. | No |
| WSRR Home | String | The WSRR\_INSTALL\_ROOT directory. This parameter is optional and, if omitted, defaults to the current directory. You must provide a value for this parameter if you are not running the script from the WAS\_INSTALL\_ROOT\WSRR\admin\scripts\_cell directory. | Yes |
| WSRR User | String | The user name of the account that will interact with WSRR system | Yes |

## Delete Configuration Profile

This script removes a configuration profile from WSRR.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | In a stand-alone or federated node configuration, the name of the cell in which WSRR is deployed. | No |
| Cluster Name | String | In a cluster configuration, the name of the cluster on which WSRR is deployed. | No |
| Node Name | String | In a stand-alone or federated node configuration, the name of the node on which WSRR is deployed. | No |
| Password | Password | The password of the account that will interact with WSRR system. | Yes |
| Profile Name | String | The name given to the configuration profile created in WSRR.  | Yes |
| Server Name | String | In a stand-alone or federated node configuration, the name of the server on which WSRR is deployed. | No |
| WSRR Home | String | The WSRR\_INSTALL\_ROOT directory. This parameter is optional and, if omitted, defaults to the current directory. You must provide a value for this parameter if you are not running the script from the WAS\_INSTALL\_ROOT\WSRR\admin\scripts\_cell directory. | Yes |
| WSRR User | String | The user name of the account that will interact with WSRR system | Yes |

## Load Configuration Profile

This step loads a configuration profile, from a configuration profile compressed file, into WSRR.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cell Name | String | In a stand-alone or federated node configuration, the name of the cell in which WSRR is deployed. | No |
| Cluster Name | String | In a cluster configuration, the name of the cluster on which WSRR is deployed. | No |
| File Name | String | The name of the configuration profile file.  | Yes |
| File Path | String | The file path to the configuration profile file.  | No |
| Node Name | String | In a stand-alone or federated node configuration, the name of the node on which WSRR is deployed. | No |
| Password | Password | The password of the account that will interact with WSRR system. | Yes |
| Profile Name | String | The name given to the configuration profile created in WSRR.  | Yes |
| Server Name | String | In a stand-alone or federated node configuration, the name of the server on which WSRR is deployed. | No |
| WSRR Home | String | The WSRR\_INSTALL\_ROOT directory. This parameter is optional and, if omitted, defaults to the current directory. You must provide a value for this parameter if you are not running the script from the WAS\_INSTALL\_ROOT\WSRR\admin\scripts\_cell directory. | Yes |
| WSRR User | String | The user name of the account that will interact with WSRR system | Yes |

## Register Service

This script registers service using WSDL document onto WSRR.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CSV File | String | The name of the CSV file which describes your services metadata. | Yes |
| Host Name | String | The host name of the server on which you want to register your service. | Yes |
| Password | Password | The password of the account that will interact with WSRR system. | Yes |
| Port Number | String | The port number of the server on which you want to register your service. | Yes |
| WSDL Path | String | The path which includes your WSDL files. | Yes |
| WSRR User | String | The user name of the account that will interact with WSRR system | Yes |


