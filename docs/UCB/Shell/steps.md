
Shell for IBM UrbanCode Build - Steps
=====================================

# Steps


### Steps




### Process steps in the Shell plug-in

* [Shell](#shell)
* [Shell (with xargs)](#shell_(with_xargs))


### Shell

Run a shell or batch script.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Daemon | Boolean | Select to run the command in the background while permitting the step to complete immediately. The output is not captured if the command is running as a daemon. | No |
| Interpreter | String | Optionally specify the interpreter to use to evaluate the command. If left blank, the .bat file interpreter on Microsoft Windows and the .com file interpreter on VMS are used. On other systems the shell specified by the air/shell agent variable is used, if the variable is present. UNIX and Linux systems can override this setting by starting the script with a #! sequence. | No |
| Output File | String | Set this value only if Daemon is selected. Enter the path of a file to direct command output to. Leave blank to discard the output. The output is not captured if an output file is specified. | No |
| Shell Script | String | Enter the script code to run. | Yes |

### Shell (with xargs)

Run a shell or batch script a number of times equal to a multi-valued input.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Daemon | Boolean | Select to run the command in the background while permitting the step to complete immediately. The output is not captured if the command is running as a daemon. | No |
| Interpreter | String | Optionally specify the interpreter to use to evaluate the command. If left blank, the .bat file interpreter on Microsoft Windows and the .com file interpreter on VMS are used. On other systems the shell specified by the air/shell agent variable is used, if the variable is present. UNIX and Linux systems can override this setting by starting the script with a #! sequence. | No |
| Once Per Arg | Boolean | Run the script once per argument in xargs. | No |
| Output File | String | Enter the path of a file to direct command output to. Leave blank to discard the output. The output is not captured if an output file is specified. | No |
| Shell Script | String | Enter the script code to run. | Yes |
| xargs | String | The comma-separated values to use as input to the script. The values are passed as input to the script. | Yes |



|Back to ...||Latest Version|Shell for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[7.913337](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Shell/Shell-7.913337.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
