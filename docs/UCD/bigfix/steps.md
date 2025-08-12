
# IBM BigFix - Process Steps

* [Start Action](#start_action)


## Start Action

Create and start an action


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the IBM BigFix server. For example: https://bigfix-server:8080 | Yes |
| Password | Password | The password used to access the IBM BigFix server. | Yes |
| Username | String | The user name used to access the IBM BigFix server. | Yes |
| XML Action | String | The XML action to create and start, in BES.xsd format. Alternately, specify the full path to a file that contains the XML action in BES.xsd format. | Yes |



