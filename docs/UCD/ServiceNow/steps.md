
# ServiceNow - Process Steps

* [Check Change Request Approval](#check_change_request_approval)
* [Check Change Request State](#check_change_request_state)
* [Check Change Requests Child Tasks States](#check_change_request's_child_tasks_states)
* [Check Deployment Window](#check_deployment_window)
* [Check Records](#check_records)
* [Create Records](#create_records)
* [Delete Multiple Table Records with Query](#delete_multiple_table_records_with_query)
* [Delete Records](#delete_records)
* [Run Encoded Query](#run_encoded_query)
* [Set Change Request State](#set_change_request_state)
* [Set Task Status](#set_task_status)
* [Update Records](#update_records)


## Check Change Request Approval


Check that the Approval field of a record.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Approval | String | The Change Requests Approval field value you are checking against (approved, rejected, requested, not yet requested). | Yes |
| Change Request Number | String | The value of the Number field for the relevant Change Request. | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Check Change Request State


Check that the State field of a change record.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Request Number | String | The value of the Number field for the relevant Change Request. | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| State integer | String | The state you want to ensure the Change Request has. This is an integer key corresponding to the state value-key pair used by ServiceNow. By default -5 is Pending, 1 is Open, 2 is Work in Progress, 3 is Closed Complete, 4 is Closed Incomplete, and 7 is Closed Skipped. You can find your particular key-value pairs by opening a task in ServiceNow, clicking on Additional actions button by the title, Configure->Form Design, and then clicking the edit this field settings button that appears when selecting the state field. | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Check Change Requests Child Tasks States

Check the states of the tasks related to a given Change Request.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Request Number | String | The value of the Number field for the relevant Change Request. | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| State integer | String | The state you want to ensure that the children Change Tasks of the Change Request request have. To specify multiple acceptable states, use a comma , delimited list. This is an integer key corresponding to the state value-key pair used by ServiceNow. By default -5 is Pending, 1 is Open, 2 is Work in Progress, 3 is Closed Complete, 4 is Closed Incomplete, and 7 is Closed Skipped. You can find your particular key-value pairs by opening a task in ServiceNow, clicking on Additional actions button by the title, Configure->Form Design, and then clicking the edit this field settings button that appears when selecting the state field. | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Check Deployment Window


Check that the current time falls within the start and end date of the change request.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Request Number | String | The value of the Number field for the relevant Change Request. | Yes |
| End Date Field | String | The ServiceNow field name for the end date to check between. Defaults to end\_date. | No |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| Start Date Field | String | The ServiceNow field name for the start date to check between. Defaults to start\_date. | No |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Check Records

Check records in a specified table against specified field values.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check Fields | String | Newline seperated list of field value pairs. You may use the Name, what you see in the XML export, of the field. The record(s) will be checked to ensure that the values of the inputed field match and that the fields exist. For example: description=This is a high valued task . IF you want to use OR operations on Check fields , first please select checkbox OR for Check Fileds.  Now you can provide multiple value using OR operator inside Check fields . For example : Type= emergency OR emergency1 | Yes |
| OR for Check Fileds | Boolean | Select to implement OR opertions for Check fields. | No |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | Yes |
| Record Number | String | Newline separated list of unique IDs of record to check. Represents the record number (ex. CHG0040001). | Yes |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| Table Name | String | The Name, what you see in the XML export, of the table to be updated. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | Yes |

## Create Records

Creates records by table name and specified fields.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Row Fields | String | The Fields to insert for this row. Each name-value pair should be on a separate line. A = separates the name and value. Example: name=value | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| ServiceNow password | Password | Provide the password to authenticate with ServiceNow. | Yes |
| ServiceNow user name | String | Provide the user name to authenticate with ServiceNow. | Yes |
| Table Name | String | The Name (not the Label) of the table to be updated. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |

## Delete Multiple Table Records with Query

Deprecated. Please use the Run Encoded Query and Delete Records step instead.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CMDB Row Condition | String | The Encoded Query a row must match for deletion. See http://wiki.servicenow.com/index.php?title=Embedded:Encoded\_Query\_Strings for examples | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| ServiceNow Password | Password | Provide the password to authenticate with ServiceNow. | Yes |
| ServiceNow User name | String | Provide the user name to authenticate with ServiceNow. | Yes |
| Table Name | String | The name of the table to update. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |

## Delete Records

Deletes records by table name and record number.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Record Number | String | Newline separated list of unique IDs of record to check. Represents the record number (ex. CHG0040001). | Yes |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| ServiceNow Password | Password | Provide the password to authenticate with ServiceNow. | Yes |
| ServiceNow User name | String | Provide the user name to authenticate with ServiceNow. | Yes |
| Table Name | String | The Name (not the Label) of the table to update. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |

## Run Encoded Query

Run an encoded query and receive a newline list of record system IDs to pass to subsequent steps.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Encoded Query | String | The query value of your encoded query. Use the copy query function in ServiceNow. | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | Yes |
| ServiceNow URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| Table Name | String | The Name, what you see in the XML export, of the table to be updated. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | Yes |

## Set Change Request State


Set the status field of a change request.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Request Number | String | The value of the Number field for the relevant Change Request. | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| State integer | String | The state you want to set on the Change Request. This is an integer key corresponding to the state value-key pair used by ServiceNow. By default -5 is Pending, 1 is Open, 2 is Work in Progress, 3 is Closed Complete, 4 is Closed Incomplete, and 7 is Closed Skipped. You can find your particular key-value pairs by opening a task in ServiceNow, clicking on Additional actions button by the title, Configure->Form Design, and then clicking the edit this field settings button that appears when selecting the state field. | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Set Task Status


Update the state of a task item.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | No |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| State integer | String | The state you want apply to the listed Tasks. This is an integer key corresponding to the state value-key pair used by ServiceNow. By default -5 is Pending, 1 is Open, 2 is Work in Progress, 3 is Closed Complete, 4 is Closed Incomplete, and 7 is Closed Skipped. You can find your particular key-value pairs by opening a task in ServiceNow, clicking on Additional actions button by the title, Configure->Form Design, and then clicking the edit this field settings button that appears when selecting the state field. | Yes |
| Task ID List | String | A comma-separated list of the Task Number field value of the Change Tasks to be updated. (ex. CTASK0010071) | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | No |

## Update Records

Update records by specifying field values.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fields to Update | String | Newline separated list of field value pairs. You may use the Name, what you see in the XML export, of the field. Fields described here will be updated on each record to specified value. If the field does not exist the step will fail. For example: description=This is a high valued task | Yes |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No |
| HTTP Proxy Password | Password | Provide the password to authenticate with HTTP proxy. | No |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy to use to connect to ServiceNow. | No |
| HTTP Proxy User name | String | Provide the user name to authenticate with HTTP proxy. | No |
| Password | Password | The password to be used to connect to the ServiceNow server. | Yes |
| Record Number | String | Newline separated list of unique IDs of record to check. Represents the record number (ex. CHG0040001). | Yes |
| Server URL | String | The URL of your ServiceNow portal. Example: https://myaccount.service-now.com | Yes |
| Table Name | String | The Name, what you see in the XML export, of the table to be updated. Example: change\_request | Yes |
| Trust All Certificates | Boolean | Select to trust all unsecure certificates. | No |
| User Name | String | The user name to be used to connect to the ServiceNow server. | Yes |


