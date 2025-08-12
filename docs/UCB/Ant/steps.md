
Ant - Steps
===========

# Steps


### Steps




### Process steps in the Ant plug-in

* [Ant](#ant)


### Ant

Run an Ant script.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| ANT\_HOME | String | The path to the Ant installation to use to run the Ant script. By default, the path is the ANT\_HOME environment variable on the agent. | Yes |
| ANT\_OPTS | String | Ant-specific arguments, which are used in the ANT\_OPTS environment variable. Enter each argument on a new line. For example: -Xmx1024m or -XX:MaxPermSize=512m | No |
| Ant Properties | String | Ant-specific arguments, such as -v for verbose output. Enter each argument on a new line. | No |
| Ant Script File | String | The name of the Ant script file. | Yes |
| JAVA\_HOME | String | The path to the Java installation to use to run Ant. By default, the path is the JAVA\_HOME environment variable on the agent. | Yes |
| Properties | String | Properties to pass to Ant. These properties are available by name in the Ant script. Enter each argument on a new line in the following format: name=value | No |
| Script Content | String | Optional: Specify the content of the Ant script. The content is written to the file specified by the Ant Script File field, and then run. | No |
| Targets | String | The names of the targets to run in the Ant script file. If blank, the default target is used. | No |



|Back to ...||Latest Version|Ant |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[10.1165571](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Ant/Ant-10.1165571.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
