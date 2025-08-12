
Make - Steps
============

# Steps


### Steps




### Process steps in the Make plug-in

* [Run Make File](#run_make_file)


### Run Make File

Execute a Make script


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Line Args | String | Specify any additional command line arguments to pass to Make. Enter them exactly as they would appear on the command line. | No |
| Environment Variables | String | Optional environment variables in name=value format. Environment variable values may contain references to existing values in the following format: name=``${FOO}``;value. If the value of FOO variable is BAR in the current environment, then the above example will be expanded to: name=BAR;value. Using this technique, it is possible to add anentry to PATH in the following manner: PATH=my/path/entry;0. Case is significant even on Windows systems. | No |
| Make File Name | String | The name of the Make file in the source repository. This only needs to be set if you use a non-standard Make file name. (optional). | No |
| Make Targets | String | The target(s) to execute in the Make file. The default target will be executed if you do not specify any here. If entering multiple targets, separate each target with a space just as you would on the command line. (optional). | No |



|Back to ...||Latest Version|Make |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[3.752874](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Make/Make-3.752874.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
