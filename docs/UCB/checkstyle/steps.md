
Checkstyle - Steps
==================

# Steps


### Steps




### Process steps in the Checkstyle plug-in

* [Publish Checkstyle Results](#publish_checkstyle_results)


### Publish Checkstyle Results

Use this step to publish Checkstyle results to a buildlife. The Checkstyle results must be generated with XML specified as the output formatter type.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Include Description | Boolean | Include a description for each Checkstyle finding in the report. Enabling this option, might consume large amounts of storage in the database. | No |
| Include Patterns | String | File patterns that are used to identify the checkstyle output files to include in the report. Patterns can include the following wildcards: ?, \*, or \*\*. | Yes |
| Report Name | String | The name of the report published to the buildlife. | Yes |
| Summary Counts | Boolean | Include the number of occurrences for each finding in the report. Individual finding details are not included. The default value for this property is enabled. | No |



|Back to ...||Latest Version|Checkstyle |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[3.753093](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/checkstyle/checkstyle-3.753093.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
