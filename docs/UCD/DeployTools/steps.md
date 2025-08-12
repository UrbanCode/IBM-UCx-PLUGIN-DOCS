
# IBM DevOps Deploy Tools - Process Steps

* [Check Total Application Process Execution Time](#check_total_application_process_execution_time)
* [Check Total Component Process Execution Time](#check_total_component_process_execution_time)
* [Verify Deployment](#verify_deployment)
* [Wait for web page](#wait_for_web_page)


## Check Total Application Process Execution Time

Check the run time of the application process and fail if the time is greater than the specified threshold.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Process Request ID | String |  | Yes |
| Timeout | String | The number of seconds that the application process is allowed to run. | Yes |

## Check Total Component Process Execution Time

Check the run time of the component process and fail if the time is greater than a specified threshold.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component Process Request ID | String |  | Yes |
| Timeout | String | The number of seconds that the component process is allowed to run. | Yes |

## Verify Deployment

Verify the deployment of an application by using the HTTP interface.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Charset | String | The character encoding for the file. The default value is UTF-8. | No |
| Fail if match found | Boolean | If selected, the process fails if a match is found. | No |
| Password | Password | The password to use for authentication. | No |
| Password Script | String | A script that returns the password to use for authentication. | No |
| Timeout | String | The time, in milliseconds, after which to fail the process. | No |
| URL | String | The URL to use to verify the deployment. | Yes |
| User Name | String | The user name to use for authentication. | No |
| Verification String | String | The string to search for in the response to verify the correct deployment. | Yes |

## Wait for web page

Wait for a web page to become accessible and to contain specified text.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail if match found | Boolean | If selected, the process fails if a match is found. | No |
| Maximum wait time (s) | String | The maximum number of seconds to wait for the conditions to be met. | Yes |
| Password | Password | The password to use for authentication. | No |
| Password Script | String | A script that returns the password to use for authentication. | No |
| Proxy Hostname | String | If you are connecting to a website through a proxy, specify the host name or IP address of the proxy server. For example: 192.0.2.8 | No |
| Proxy Password | String | If authentication is required, specify the password to use to authenticate with the proxy server. | No |
| Proxy Port Number | String | Specify the port number used by the proxy server for client connections. For example: 80 | No |
| Proxy Username | String | If authentication is required, specify the user name to use to authenticate with the proxy server. | No |
| Retry wait time (ms) | String | The number of milliseconds to wait between retries. | Yes |
| Timeout | String | The request timeout, in milliseconds. Use this field if the default wait time is too long. | No |
| URL | String | The URL to use to verify deployment. | Yes |
| User Name | String | The user name to use for authentication. | No |
| Verification String | String | The string to search for in the response to verify the correct deployment. | Yes |


