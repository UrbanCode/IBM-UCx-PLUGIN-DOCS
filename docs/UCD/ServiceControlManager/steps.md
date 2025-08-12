
# Microsoft Windows Services - Process Steps

* [Check If Service Exists](#check_if_service_exists)
* [Check Service Status](#check_service_status)
* [Create Service](#create_service)
* [Delete Service](#delete_service)
* [Disable Service](#disable_service)
* [Enable Service](#enable_service)
* [Start Service](#start_service)
* [Stop Service](#stop_service)


## Check If Service Exists

Checks to see if one or more services exists.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Services | String | A comma-separated list of services to check for. | Yes |

## Check Service Status

Gets the status of one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Service Name | String | A comma-separated list of services to check for. | Yes |

## Create Service

Create a service.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /start=\nauto\n/binpath=\nC:\temp\n/ | No |
| Service Name | String | The name of the service to create. | Yes |

## Delete Service

Delete one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /start=\nauto\n/binpath=\nC:\temp\n/ | No |
| Services | String | A comma-separated list of services to delete. | Yes |

## Disable Service

Disable one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /error=\nsevere\n/binpath=\nC:\temp\n/ | No |
| Services | String | A comma-separated list of services to disable. | Yes |

## Enable Service

Enable one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /error=\nsevere\n/binpath=\nC:\temp\n/ | No |
| Service Name | String | A comma-separated list of services to enable. | Yes |
| Start Type | Enumeration:
* boot
* system
* auto
* demand
* delayed-auto
| Start-up type for the service. | Yes |

## Start Service

Start one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /start=\nauto\n/binpath=\nC:\temp\n/ | No |
| Services | String | A comma-separated list of services to start. | Yes |
| Wait for Started | Boolean | When selected, the step waits for the service to run before proceeding. | No |

## Stop Service

Stop one or more services.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Arguments | String | A newline-separated list of arguments to add to the sc.exe call. For example: /start=\nauto\n/binpath=\nC:\temp\n/ | No |
| Services | String | A comma-separated list of services to stop. | Yes |
| Set Timeout | String | If you enter a value for Set Timeout, the step terminates the service after the specified time interval. Specify the value in milliseconds. | No |
| Wait for Stopped | Boolean | When selected, the step waits for the service to stop before proceeding. | No |


