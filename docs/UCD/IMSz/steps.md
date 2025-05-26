
# IBM IMS - Steps


## Process steps in the IMS plug-in

* Execute IMS Command


## Execute IMS Command

Allows execution of IMS type-1 and type-2 commands.


*Input properties for the Execute IMS Command step*| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| IMS Command | String | IMS command, followed by parameters. For example: UPDATE PGM NAME(*name*) START(SCHD) | Yes |
| IMS ID | String | A 4-character IMS ID name used to identify the target IMS system the command is directed to within a given IMSplex. | Yes |
| IMS PLEX | String | The 1-to-5 character suffix of the IMSplex name. | Yes |
| IMS RESLIB | String | Name of a z/OS library that contains the IMS nucleus and all the action modules necessary to run IMS and its utilities. | Yes |
| Max Lines | String | Maximum number of lines to display in the log. | No |
| Max Return Code | String | Fail the step if return code is greater than the maximum return code. | Yes |
| Show Output | String | The output data set to display in the log. Use a comma to separate multiple data sets. Specify ALL for all data sets. | No |
| Timeout | String | Number of seconds to wait for the command to complete before terminating.  | No |
| Wait For Command | Boolean | Whether to wait for the command to complete. If Wait for Command is unchecked, the input for Timeout, Show Output, Max Lines, and Max Return Code are ignored. | No |



|Back to ...||Latest Version|IBM IMS |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/IMSz/IMS_Plugin_v1.zip)|[Readme](README.md)|[Overview](overview.md)|[Troubleshooting](troubleshooting.md)|[Usage](usage.md)|[Downloads](downloads.md)|
