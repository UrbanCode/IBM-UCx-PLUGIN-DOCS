
# IBM Rational Performance Tester (RPT) - Process Steps

* [Run RPT Test](#run_rpt_test)


## Run RPT Test

Execute Web UI Tests from IBM Rational Test Workbench


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Config File | String | The complete path to a file that contains the parameters for a test or schedule run. | No |
| Custom Report Format Files | String | A comma-separated list of absolute paths to custom report format files (.view files) to use when exporting statistical report data with the-exportstatsoption. | No |
| Exported HTTP Test log File | String | The complete path to a file in which to store the exported HTTP test log. | No |
| Exported Statistical Report Data File | String | The complete path to the directory in which to store exported statistical report data. | No |
| Installation Manager Location | String | Complete path to Installation Manager. | Yes |
| Number of Virtual Users | String | Overrides the default number of virtual users in the run. For a schedule, the default is the number of users specified in the schedule editor. For a test, the default is one user. This option creates a new copy of the schedule that contains the specified number of users. | No |
| Overwrite Results file | Boolean | Determines whether a results file with the same name is overwritten. The default value, true, means that the results file is overwritten. | No |
| Project | String | The path, including the file name,of the project relative to workspace. | Yes |
| Quiet | Boolean | Turns off any message output from the launcher and returns to the command shell when the run or the attempt is complete | No |
| Results File | String | The name of the results file. The default result file is the test or schedule name with a time stamp appended. | No |
| Test Suite Name | String | The path, including the file name, of the test to run relative to the project | Yes |
| User Comments | String | Add text within double quotation mark to display it in the User Comments row of the report. | No |
| VM Args | String | Java virtual machine arguments to pass in. | No |
| Var File | String | The complete path to the XML file that contains the variable name and value pairs | No |
| Workspace | String | Complete path to Eclipse workspace. | Yes |



|Back to ...||Latest Version|IBM Rational Performance Tester (RPT) ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[9.3](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RPT-UCD/RPT-UCD-9.3.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
