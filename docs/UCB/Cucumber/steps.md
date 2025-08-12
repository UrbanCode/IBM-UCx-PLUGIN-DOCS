
Cucumber - Steps
================

# Steps


### Steps




### Process steps in the Cucumber plug-in

* [Compile Step Definition](#compile_step_definition)
* [Run Testing](#run_testing)


### Compile Step Definition

Compile the step definitions.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Classpath Include | String | The directories to include. Use the double-astrick(\*\*) to include all directories and the astrick(\*) to include all files. For example, the pattern dist/\*\*/\*.jar would retrieve the all JAR files. | No |
| Implementation Base | String | The implementation base directory, for example:/opt/myProjectName/src/. | No |
| Implementation Include | String | List of implementation files to include. Use the double-astrick(\*\*) to indicate include all directories and the astrick(\*) to include all files. For example, the pattern dist/\*\*/\*.java retrieves the all JAVA files. | No |
| JAVA\_HOME | String | The fully-qualified path to the Java installation for the javac compiler. The default is the value specified in the JAVA\_HOME environment variable of the agent. | No |
| Java ClassPath Base | String | The base directory of the Java class path, for example: /jars/. | No |
| Step Definitions Base | String | The bases directory of the step definitions. For example, /opt/step\_definitions/. | Yes |
| Step Definitions Include | String | The step definitions to include. Use the double-astrick(\*\*) to include all directories and the astrick(\*) to include all files. For example, the pattern dist/\*\*/\*.java retrieves the all JAVA files. | Yes |

### Run Testing

Run the test scenarios.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Dry-run | Boolean | Skip execution of the Glue code. | No |
| Features | String | The directory containing the feature files. Feature files contain the test scenarios. | Yes |
| JAVA\_HOME | String | The fully-qualified path to the Java installation. The default is the value specified in the JAVA\_HOME environment variable for the agent. | No |
| Java ClassPath | String | The directory of the Java classpath, such as: /jars/. | No |
| Name Regexp | String | Run test scenarios with the name that matches REGEXP. | No |
| Plugin Type | String | A reporting plug-informat links tags to external tools, such as: junit, html, pretty, progress, json, usage, and rerun. Built-in plug-ins include default\_summary andnull\_summary. Third-party plug-ins can also be included by specifying thefully qualified class name of the plug-in. The default value is pretty. | No |
| Step Definitions | String | The directory containing the step definitions. | Yes |
| Strict | Boolean | Undefined and pending steps are treated as errors. | No |
| Tags | String | Run test scenarios with the same tag as TAG\_EXPRESSION. | No |



|Back to ...||Latest Version|Cucumber |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[1.922549](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Cucumber/Cucumber-1.922549.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
