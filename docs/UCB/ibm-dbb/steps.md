
IBM Dependency Based Build - Steps
==================================

# Steps


### Steps




Process steps in the IBM DBB plug-in
------------------------------------

* [Build](#build)


### Build

Run a build using IBM Dependency Based Build.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Build Script Path | String | Specify the location of the build script to be used by IBM DBB in order to conduct the build. | Yes | buildScriptPath |
| DBB Home Directory | String | The home directory of IBM Dependency Based Build. For example: /usr/lpp/IBM/dbb. If not specified, the value of the environment variable DBB\_HOME will be used. | Yes | DBB\_HOME |
| Groovy Arguments | String | Specify any arguments to be passed to Groovy when executing the build script. Enter each argument in a separate line. | No | groovyArgs |
| Groovy Options | String | Specify any options to be passed to Groovy when executing the build script. Enter each option in a separate line. | No | groovyOptions |
| Reports Directory | String | Specify the directory where the IBM DBB build script places the report files. Leave empty to skip uploading reports. | No | reportsDir |




|Back to ...||Latest Version|IBM Dependency Based Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[2.1053929](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/ibm-dbb/ibm-dbb-2.1053929.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
