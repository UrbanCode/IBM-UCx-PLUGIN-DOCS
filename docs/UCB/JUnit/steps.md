
JUnit for IBM UrbanCode Build - Steps
=====================================

# Steps


### Steps




### Process steps in the JUnit plug-in

* [JUnit Report](#junit_report)


### JUnit Report

Use this step to publish JUnit results as a report.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Patterns | String | A list of patterns used to determine which JUnit XML files to exclude from the report. Specify each pattern on a new line. Files that match the specified patterns are unconditionally excluded from the report. Patterns can include ?, \*, or \*\*. | No |
| Include Patterns | String | A list of patterns used to determine which JUnit XML files to include in the report. Specify each pattern on a new line.Patterns can include ?, \*, or \*\*. | Yes |
| Report Name | String | The name of the report. | No |
| Request Timeout | String | The timeout value in milliseconds to use for the HTTP requests sent to the UCB server. | No |
| Source Directory | String | The directory that contains the test output. | Yes |
| Truncate Test Suite Name | Boolean | Remove the package name from the published test suite name. If this property is not enabled, the full class name of the test suite is included. | No |



|Back to ...||Latest Version|JUnit for IBM UrbanCode Build |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[10.1071521](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/JUnit/JUnit-10.1071521.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
