
# Shell - Process Steps

* [Shell](#shell)
* [Shell (with xargs)](#shell_(with_xargs))


## Shell

Use this step to run a shell or batch script.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Daemon | Boolean | If this property is enabled, the command runs in the background while it permits the step to complete immediately. The output is not captured if the command runs as a daemon. | No |
| Directory Offset | String | The working directory to use when you execute this command. This directory is relative to the current working directory. | Yes |
| Interpreter | String | The interpreter to use to evaluate the command.If this property is left blank the following platform-specific interpreters are used: Windows:`.bat` file interpreter VMS: `.com` file interpreter Other:The shell that is specified by the **air/shell** agent variable if it is present. Linux and UNIX systems might override this setting by having the command line start with a #! sequence. | No |
| Output File | String | Specify this property only if the **Daemon** property is enabled.The path of the file to which the command output is directed. To discard the output, leave this property blank. The output is captured if an output file is specified. | No |
| Shell Script | String | The script code to execute. | Yes |

## Shell (with xargs)

Use this step to run a shell or batch script a number of times equal to a multi-valued input.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Daemon | Boolean | If this property is enabled, the command runs in the background while permitting the step to complete immediately. The output is not captured if it runs as a daemon. | No |
| Directory Offset | String | The working directory to use when you execute this command. This directory is relative to the current working directory. | Yes |
| Interpreter | String | The interpreter to use to evaluate the command.If this property is left blank the following platform-specific interpreters are used: Windows:`.bat` file interpreter VMS: `.com` file interpreter Other:The shell that is specified by the **air/shell** agent variable if it is present. Linux and UNIX systems might override this setting by having the command line start with a #! sequence. | No |
| Once Per Arg | Boolean | Run the script once for each argument in the **xargs** property. | No |
| Output File | String | The path of the file to which the command output is directed. To discard the output, leave this property blank. The output is captured if an output file is specified. | No |
| Shell Script | String | The shell script code to execute. | Yes |
| xargs | String | The list input value to the script. Separate each value with the delimiter that is specified in the **delimiter** property. | Yes |
| xargs delimiter | String | The delimiter that is used to separate the input values to the script. The default delimiter used is the comma (,). | Yes |



|Back to ...||Latest Version|Shell ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[21.1167618](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Shell/ucd-Shell-21.1167618.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
