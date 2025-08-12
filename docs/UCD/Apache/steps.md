
# Apache HTTP Server - Process steps

* [Start](#start)
* [Stop](#stop)


## Start

This step starts the Apache HTTP server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Windows Service name | String | Specify the name of the Windows service that is used to control the Apache HTTP server. | No |
| apachectl executable path | String | Specify the full path including the executable file name, to the **apachectl** script if the script is not in the PATH statement. | No |

## Stop

This steps stops the Apache HTTP server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Windows Service name | String | Specify the name of the Windows service that is used to control the Apache HTTP server. | No |
| apachectl executable path | String | Specify the full path, including the executable file to the **apachectl** script if the script is not in the PATH statement. | No |


