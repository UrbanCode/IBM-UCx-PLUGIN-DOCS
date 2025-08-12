
XL Deploy - Steps
=================

# Steps


### Steps




### Process steps in the XL Deploy plug-in

* [CheckConnectionButton](#checkconnectionbutton)
*
[ExecuteTask](#executetask)
* [Integration](#integration)


### CheckConnectionButton

Check Connection Button

This
step has no input properties.

### ExecuteTask

Execute Automated Task.


| Name | Type | Description | Required |

| --- | --- | --- | --- |
| Update Pipeline View upon completion of this task | Boolean |  | No |

### Integration


Integration


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check Authentication |  | Button to
check if the connection can be established with the XL Deploy Server, and the UCR Server.
| No |
| Full Sync Interval
| String | The hourly interval to run a full sync. A full sync will check if any XL Deploy objects have been deleted
and delete them from UrbanCode Release as well. This process will take longer. Set to -1 to never run a full sync, or 0
to always run a full sync. If no value is provided, this field defaults to 24 hours.
| No |
| Log4j Logging Level |
Enumeration:
* INFO
* ALL
* TRACE
* DEBUG
* WARN
* ERROR
* FATAL
* OFF
| Configure the level of Log4j messages to
output to the console. | No |
| XL Deploy Password | Password | The XL Deploy Password. | No |
| XL Deploy URL | String
| The XL Deploy URL. Example: https://my.server.com:4516 | No |
| XL Deploy User | String | The XL Deploy User. | No |



|Back to ...||Latest Version|XL Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[6.1039808](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-xl-deploy/plugins-ucr-xl-deploy-6.1039808.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
