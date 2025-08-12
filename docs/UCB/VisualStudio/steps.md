
Visual Studio - Steps
=====================

# Steps


### Steps




### Process steps in the Visual Studio plug-in

* [Run Visual Studio](#run_visual_studio)


### Run Visual Studio

Use this step to build a Visual Studio solution file in headless mode.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Command | Enumeration | The Visual Studio command to run. Specify one of the following: rebuild, build, clean, or deploy. | No |
| Command Line Properties | String | A list of properties that are used as if they were passed to the `devenv` executable on the command line. Enter each property on a separate line. | No |
| Command Path | String | The path to the `devenv` executable file in the Visual Studio Installation. | No |
| Environment Variables | String | A list of optional environment variables in the format: `*variable\_name*=*value*`. Environment variable values can contain references to existing values in the following format: `*variable\_name*=``${FOO}``;*value*`. If the value of FOO variable is `BAR`, then the above example expands to `*variable\_name*=BAR;*value*`. Using this technique, it is possible to add an entry to PATH in the following manner: `PATH=my/path/entry;0`. Case is significant even on Windows systems. | No |
| Mode | String | The build mode. Specify Debug or Release. | No |
| Solution File | String | The location of the solution file. | Yes |



|Back to ...||Latest Version|Visual Studio |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[9.1056675](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/VisualStudio/VisualStudio-9.1056675.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
