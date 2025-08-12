
# System Information - Process Steps


* [Check Available Disk Space](#check_available_disk_space)
* [Check Connectivity](#check_connectivity)
* [Check Environment Variable](#check_environment_variable)
* [Check Regex](#check_regex)


## Check Available Disk Space

Ensure that there is enough available disk space.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Available Space(kB) | String | The minimum space in kilo-bytes for this step to pass. | Yes |
| Path | String | The path to check disk space for. (i.e. For Windows C:\, For \*nix /mntpoint | Yes |

## Check Connectivity

Ensure that a TCP connection can be made to a given host and port from this machine.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The hostname or IP of the machine to try to connect to. | Yes |
| Interval(seconds) | String | The inteval in seconds between retries. | Yes |
| Port | String | The port to try to connect to. | Yes |
| Retries | String | The number of time to retry the connection. | Yes |

## Check Environment Variable

Ensure that an environment variable is set to an expected value.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Value | String | The expected value of the variable. Leave blank if you just want to check the var is set without checking value. | No |
| Variable Name | String | The name of the variable to check for. | Yes |

## Check Regex

Check if a value matches a Regex. If it does the matched groups will be set as output properties with the names group0, group1, etc.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Regex | String | The regex to try to match. | Yes |
| Value | String | The value you want to check the regex against. | Yes |


