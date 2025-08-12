
# IBM InfoSphere Optim - Process Steps

* [Convert Request](#convert_request)
* [Extract Request](#extract_request)
* [Insert Request](#insert_request)


## Convert Request

Runs an convert request against a database to mask values.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail On Warning | Boolean | If checked, and the request returns one or more Warnings, this step will fail. | No |
| Optim CMD Location | String | The location of the Optim pr0cmnd file. | Yes |
| Optim Directory | String | The name of the Optim directory to run against. | Yes |
| Output File | String | If specified, the output will be written to this file. | No |
| Override / Override File | String | Either the file name of an override file or the contents of an override file. | No |
| Request Name | String | The name of the convert request stored in Optim. | Yes |

## Extract Request

Runs an extract request against a database.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail On Warning | Boolean | If checked, and the request returns one or more Warnings, this step will fail. | No |
| Optim CMD Location | String | The location of the Optim pr0cmnd file. | Yes |
| Optim Directory | String | The name of the Optim directory to run against. | Yes |
| Output File | String | If specified, the output will be written to this file. | No |
| Override / Override File | String | Either the file name of an override file or the contents of an override file. | No |
| Request Name | String | The name of the extract request stored in Optim. | Yes |

## Insert Request

Runs an insert request against a database.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Fail On Warning | Boolean | If checked, and the request returns one or more Warnings, this step will fail. | No |
| Optim CMD Location | String | The location of the Optim pr0cmnd file. | Yes |
| Optim Directory | String | The name of the Optim directory to run against. | Yes |
| Output File | String | If specified, the output will be written to this file. | No |
| Override / Override File | String | Either the file name of an override file or the contents of an override file. | No |
| Request Name | String | The name of the insert request stored in Optim. | Yes |



|Back to ...||Latest Version|IBM InfoSphere Optim |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[3.868971](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/optim/optim-3.868971.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
