
FindBugs - Steps
================

# Steps


### Steps




### Process steps in the FindBugs plug-in

* [Publish Results](#publish_results)


### Publish Results

Publish FindBugs results to a build life. This reads the XML output of FindBugs.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Patterns | String | Patterns for excluded files from the report, one per line. Files matching these patterns are unconditionally exluded from the report. Patterns can include ?, \*, or \*\*. | No |
| Include Description | Boolean | Include a description with each FindBugs finding. Results will be generated with an output type of xml:withMessages. This is optional because it may consume large amounts of space in the database. | No |
| Include Patterns | String | Patterns for including FindBugs XML in the report, one per line. Patterns can include ?, \*, or \*\*. | Yes |
| Only Summary Counts | Boolean | Only publish the counts of findings to the report and not individual finding details. | No |
| Report Name | String | The name of the report published to the build life | Yes |



|Back to ...||Latest Version|FindBugs |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[11.753113](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/FindBugs/FindBugs-11.753113.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
