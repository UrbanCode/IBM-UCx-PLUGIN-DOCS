
# IBM Security Access Manager (WebSEAL) - Process Steps

* [Reverse Proxy: Update Configuration Entry](#reverse_proxy:_update_configuration_entry)


## Reverse Proxy: Update Configuration Entry

Update one or more configuration entries by stanza on the Reverse Proxy Instances resource.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Entry ID | String | The name of the entry to set. | Yes |
| Entry Value | String | The value to set for the entry. Specify the full entry here or a path to the file containing the entry. | Yes |
| Hostname | String | Host name of the appliance. | Yes |
| Instance ID | String | Name of the instance to act on, which is a unique name that identifies the instance. | Yes |
| Password | Password | The password to log on to the ISAM server. | Yes |
| Stanza ID | String | The name of the resource stanza entry. For example, server. Note: This name cannot contain the string /entry\_name unless it is the start of the stanza name. ie /entry\_name/name is valid but /name/entry\_name is not. | Yes |
| Username | String | The user name to log on to the ISAM server. | Yes |



|Back to ...||Latest Version|IBM Security Access Manager (WebSEAL) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.769633](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/webseal/webseal-1.769633.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
