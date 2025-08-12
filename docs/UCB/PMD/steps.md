
PMD - Steps
===========

# Steps


### Steps




### Process steps in the PMD plug-in

* [Publish PMD Results](#publish_pmd_results)


### Publish PMD Results

Publish PMD results to a build life. The step reads the XML output gathered by the PMD analyzer.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Exclude Patterns | String | A list of patterns used ot determine which PMD XML files to exclude from the report. Specify each pattern on a separate line. Patterns can include the following wildcards: ?, \*, or \*\*. | No |
| Include Patterns | String | A list of patterns to determine which PMD XML files to include in the report. Specify each pattern on a separate line. Patterns can include the following wildcards: ?, \*, or \*\*. | Yes |
| Report Name | String | The name of the report to published to the build life. | Yes |



|Back to ...||Latest Version|PMD |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[5.752822](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/PMD/Pmd-5.752822.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
