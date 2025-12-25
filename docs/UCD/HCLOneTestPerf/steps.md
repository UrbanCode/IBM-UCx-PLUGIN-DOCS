# HCL OneTest Performance - Process Steps

* [Run an HCL OneTest Performance test](#run_an_hcl_onetest_performance_test)
## Run an HCL OneTest Performance test

Run test using HCL OneTest Performance

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workspace | textBox | Complete path to Eclipse workspace, required if configfile is not specified. | Yes |
| Project | textBox | The path, including the file name,of the project relative to workspace, required if configfile is not specified. | Yes |
| Test Suite Name | textBox | The path, including the file name, of the test to run relative to the project, required if configfile is not specified. | Yes |
| IMShared Location | textBox | Complete path to HCLIMShared location, if it is not at default location. | Yes |
| Config File | textBox | The complete path to a file that contains the parameters for a test or schedule run. | Yes |
| Custom Report Format Files | textBox | Optional. You can use this option to specify a comma-separated list of report IDs along with 'Exported Statistical Report Data File' or 'Exported Statistical Report in html' to list the reports that you want to export in place of the default reports, or the reports selected under Preferences. To retrieve the report IDs, navigate to Window > Preferences > Test > Performance Test Reports > Export Reports from HCL OneTest Performance and under Select reports to export, select the required reports, and click Copy ID to clipboard. | Yes |
| Dataset Override | textBox | Use this option to replace dataset values during a test or schedule run. You must ensure that both original and new datasets are in the same workspace and have the same column names. You must also include the path to the dataset. For example, /project_name/ds_path/ds_filename.csv:/project_name/ds_path/new_ds_filename.csv | Yes |
| Duration | textBox | Optional. You can use this argument to specify the duration of the stages in the Rate Schedule | Yes |
| Exported HTTP Test log File | textBox | The complete path to a file in which to store the exported HTTP test log. | Yes |
| Exportstatshtml | textBox | Optional. The complete path to a directory where you want to export the web analytic results. You can then analyze the results on a web browser without using the test workbench. | Yes |
| Exportstatsformat | textBox | Optional. Use this field to enter one or more formats for the reports that you want to export by using a comma as a separator. The options are simple.csv, full.csv, simple.json, full.json, csv, and json. When you want to export both simple and full reports in json or csv format, you can specify json or csv as the options. The reports are saved to the location specified in the 'Exported Statistical Report Data File' field. This field must be used in conjunction with 'Exported Statistical Report Data File' field. | Yes |
| Exported Statistical Report Data File | textBox | The complete path to a directory in which to store exported statistical report data. | Yes |
| History | textBox | Optional. Use this command when you want to view a record of all events that occurred during a test or schedule run, For example - jaeger,testlog. | Yes |
| Labels | textBox | Use this option to add labels to test results. To add multiple labels to a test result, you must separate each label by using a comma. | Yes |
| Number of Virtual Users | textBox | Overrides the default number of virtual users in the run. For a schedule, the default is the number of users specified in the schedule editor. For a test, the default is one user. This option creates a new copy of the schedule that contains the specified number of users. | Yes |
| Overwrite Results file | checkBox | Determines whether a results file with the same name is overwritten. The default value, true, means that the results file is overwritten. | Yes |
| Publish | textBox | Optional. You can use this option to publish test results to HCL OneTest Server. The format is: serverURL#project.name=projectName&teamspace.name=teamspaceName. Example: https://localhost:5443/#project.name=test&teamspace.name=ts1 | Yes |
| Publish_for | textBox | Optional. You can use this option to publish the test results based on the completion status of the tests, supported values are FAIL,PASS,INCONCLUSIVE,ERROR,ALL. | Yes |
| Publishreports | textBox | Optional. You can use this option to specify the reports to be published to HCL OneTest Server. The supported values are STATS,TESTLOG. | Yes |
| Rate | textBox | Optional. You can use this argument to specify a rate that you want to achieve for a workload in the Rate Runner group, The Rate Runner group name must match with the name in the Rate Schedule | Yes |
| Results File | textBox | The name of the results file. The default result file is the test or schedule name with a time stamp appended. | Yes |
| Resource Monitoring Labels Override | textBox | Use this field to enter one or more Resource Monitoring labels by using a comma as a separator. When you use this field, the Resource Monitoring from Service option is enabled for the performance schedule if it was not enabled. The Resource Monitoring sources that were set in the schedule are ignored and it is changed to the label matching mode. The new set of labels that you enter overrides the Resource Monitoring labels that were set in the schedule. | Yes |
| User Comments | textBox | Add text within double quotation mark to display it in the User Comments row of the report. | Yes |
| Var File | textBox | The complete path to the XML file that contains the variable name and value pairs | Yes |
| VM Args | textBox | Java virtual machine arguments to pass in. | Yes |

