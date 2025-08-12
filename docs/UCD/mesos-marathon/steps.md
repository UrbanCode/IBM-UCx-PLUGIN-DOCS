
# Mesos Marathon - Process Steps

* [Kill Tasks](#kill_tasks)
* [Launch Application](#launch_application)
* [Remove Application](#remove_application)
* [Scale Application](#scale_application)


## Kill Tasks

End all tasks in an application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to wait for. | Yes |
| Marathon URL | String | The base URL where Marathon is running. | Yes |



## Launch Application

Start an application on Marathon.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Path to a file that contains the apps JSON definition. For a detailed description, see https://mesosphere.github.io/marathon/docs/rest-api.html#post-/v2/apps. | Yes |
| Marathon URL | String | The base URL where Marathon is running. | Yes |



## Remove Application

Remove an application from Marathon.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application | String | Path to a file or HTTP(S) URL that contains the apps JSON definition. If omitted, the definition is read from stdin. For a detailed description, see https://mesosphere.github.io/marathon/docs/rest-api.html#post-/v2/apps. | Yes |
| Marathon URL | String | The base URL where Marathon is running. | Yes |



## Scale Application

Scale an application within Marathon.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application Name | String | The name of the application to scale. | Yes |
| Instances | String | The number of instances. | Yes |
| Marathon URL | String | The base URL where Marathon is running. | Yes |



