
NAnt - Steps
============

# Steps


### Steps




### Process steps in the NAnt plug-in

* [Run NAnt](#run_nant)


### Run NAnt

Execute a NAnt script


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Line Properties | String | These properties are used as if they were passed to the nant executable on the command line.Enter each property on a separate line in the following format: -D:name=value | No |
| Environment Variables | String | Optional environment variables in name=value format. Environment variable values may contain references to existing values in the following format: name=``${FOO}``;value. If the value of FOO variable is BAR in the current environment, then the above example will be expanded to: name=BAR;value. Using this technique, it is possible to add anentry to PATH in the following manner: PATH=my/path/entry;0. Case is significant even on Windows systems. | No |
| Mono Location | String | The pat4h to the version of mono to run NAnt with. If this is empty or evaluates to nothing on the agent, mono will not be used. | No |
| NAnt Location | String | The path to the version of nant that will be used to run the build script | Yes |
| NAnt Properties | String | NAnt-specific arguments, such as -ext | No |
| NAnt Script File | String | The name of the nant script file. | Yes |
| Script Content | String |  | No |
| Target Name | String | The name of the target(s) to run in the nant script file. | No |



|Back to ...||Latest Version|NAnt |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[3.752793](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/NAnt/Nant-3.752793.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
