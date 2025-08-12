
Maven for IBM UrbanCode Build - Steps
=====================================

# Steps


### Steps




### Process steps in the Maven plug-in

* [Maven Build](#maven_build)


### Maven Build

Run a Maven build


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Goals | String | The names of the goals to run. If blank, the default goal is run. | No |
| JAVA\_HOME | String | The path to the Java installation to use to run Maven. Default is the JAVA\_HOME environment variable of the agent. | Yes |
| JVM Arguments | String | JVM-specific arguments. For example, specify -Xmx=512m to set the maximum heap size. Enter each argument on a new line. | No |
| Maven Concurrent Local Repo | String | A directory that holds a set of local concurrent repositories. Each repository is used by, at most, one of these steps at a time. If blank, standard Maven repository logic is used. | No |
| Maven Flags | String | Maven-specific arguments. For example, specify -o or offline to work offline. | No |
| Maven Home | String | The location of the Maven installation, where the Maven executable is located in the bin subdirectory. If the Maven executable program is not on the system path, the Maven Home field is used to locate the Maven executable program. | No |
| Maven POM File | String | The name of the POM script file. | Yes |
| Maven Version | Enumeration: | The version of Maven to run. | Yes |
| Properties | String | The properties to pass to Maven. Enter each argument on a separate line in the following format: name=value | No |
| Script Content | String | Optional: Specify the content of the Maven script. The content is written to the file specified by the Maven POM File field, and then run. | No |



|Back to ...||Latest Version|Maven for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[9.913233](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Maven/Maven-9.913233.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
