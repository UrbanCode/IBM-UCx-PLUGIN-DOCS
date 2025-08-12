
Sonargraph - Steps
==================

# Steps


### Steps




### Process steps in the Sonargraph plug-in

* [Publish Results](#publish_results)


### Publish Results

Publish Sonargraph results to a build life. This reads the XML output of Sonargraph


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Patterns | String | Patterns for excluded files from the report, one per line. Files matching these patterns are unconditionally exluded from the report. Patterns can include ?, \*, or \*\*. | No |
| Include Description | Boolean | Include a description with each Sonargraph finding. This is optional because it may consume large amounts of space in the database. | No |
| Include Patterns | String | Patterns for including Sonargraph XML in the report, one per line. Patterns can include ?, \*, or \*\*. | Yes |
| Only Summary Counts | Boolean | Only publish the counts of findings to the report and not individual finding details. | No |
| Report Name | String | The name of the report published to the build life | Yes |



|Back to ...||Latest Version|Sonargraph |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[5.752915](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/Sonargraph/Sonargraph-5.752915.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
