
Rake - Steps
============

# Steps


### Steps




### Process steps in the Rake plug-in

* [Run Rake File](#run_rake_file)


### Run Rake File

Run a Rakefile file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Rake Command | String | The fully-qualified path to the Rakefile file. The default is the agents GEM\_HOME environment variable. | Yes |
| Rake File Directory | String | The name of the directory containing the Rakefile files to execute. The default directory is `rakelib`. | No |
| Rake File Name | String | The name of the Rakefile file to execute. | Yes |
| Rake Properties | String | Arguments to pass to the Rake command, such as `-v` for verbose output. Enter each argument on a new line. | No |
| Script Content | String | The content of the Rakefile file. The content will be written to the Rake script file and then run. | No |
| Targets | String | The names of the targets to run in the Rakefile file. | Yes |



|Back to ...||Latest Version|Rake |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[3.752923](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Rake/Rake-3.752923.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
