
MSBuild - Steps
===============

# Steps


### Steps




### Process steps in the MSBuild plug-in

* [Run MSBuild](#run_msbuild)


### Run MSBuild

Invoke MSBuild


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build File | String | The name of the build file to execute. | Yes |
| Command Path | String | The full path to msbuild.exe including msbuild.exe (blank if it is on the path). | No |
| Environment Variables | String | Optional environment variables in name=value format. Environment variable values may contain references to existing values in the following format: name=``${FOO}``;value. If the value of FOO variable is BAR in the current environment, then the above example will be expanded to: name=BAR;value. Using this technique, it is possible to add anentry to PATH in the following manner: PATH=my/path/entry;0. Case is significant even on Windows systems. | No |
| MSBuild Parameters | String | These parameters are directly passed to the MSBuild executable. It is not necessary to escape spaces or use quoted strings. Enter each parameter on a separate line. Eg. /clp:PerformanceSummary | No |
| MSBuild Properties | String | These properties are passed to the MSBuild executable. It is not necessary to escape spaces or use quoted strings. Enter each property on a separate line in the following format: name=value. Eg. WarningLevel=2 will become /p:WarningLevel=2 on the command line. | No |
| Script Content | String |  | No |
| Targets | String | The name of the targets to run. Multiple targets can be separated with semi-colons or commas. | No |
| Verbosity Level | Enumeration:
* quiet
* minimal
* normal
* detailed
* diagnostic
| The verbosity level. | No |



|Back to ...||Latest Version|MSBuild |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[2.752736](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/MSBuild/MSBuild-2.752736.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
