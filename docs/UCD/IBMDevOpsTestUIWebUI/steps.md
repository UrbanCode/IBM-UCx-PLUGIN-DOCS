# IBM DevOps Test UI - Web UI - Process Steps

## Run an IBM DevOps Test UI - UI Test

Run test using IBM DevOps Test UI - UI Test

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Workspace | textBox | Complete path to Eclipse workspace, required if configfile is not specified. | Yes |
| Project | textBox | The path, including the file name,of the project relative to workspace, required if configfile is not specified. | Yes |
| Test Suite Name | textBox | Specify the relative path from the project to the test including the file name of the test. A test can be WebUI test, Compound test, Performance schedule or Accelerated Functional Test (AFT) suite. The test suite name must contain the file extension when it is an AFT suite, required if configfile is not specified. | Yes |
| IMShared Location | textBox | Complete path to IBMIMShared location, if it is not at default location. | Yes |
| Config File | textBox | The complete path to a file that contains the parameters for a test or schedule run. | Yes |
| Custom Report Format Files | textBox | A comma-separated list of absolute paths to custom report format files (.view files) to use when exporting statistical report data with the Exported Statistical Report Data File option. | Yes |
| Dataset Override | textBox | Use this option to replace dataset values during a test or schedule run. You must ensure that both original and new datasets are in the same workspace and have the same column names. You must also include the path to the dataset. For example, /project_name/ds_path/ds_filename.csv:/project_name/ds_path/new_ds_filename.csv | Yes |
| Exported HTTP Test log File | textBox | The complete path to a file in which to store the exported HTTP test log. | Yes |
| Export Report | textBox | Use this option to export the unified report that is generated for UI tests to any of the formats - PDF, XML or HTML. For example, type=unified;format=pdf;folder=path;filename=report1 | Yes |
| Exported Statistical Report Data File | textBox | The complete path to a directory in which to store exported statistical report data. | Yes |
| Exportstatshtml | textBox | You can use this option if you want to export web analytic results only. | Yes |
| Exportstatsformat | textBox | Use this option to set the report type json or csv | Yes |
| Import | textBox | Complete path to project location | Yes |
| Labels | textBox | Label of a UI test | Yes |
| Number of Virtual Users | textBox | Overrides the default number of virtual users in the run. For a schedule, the default is the number of users specified in the schedule editor. For a test, the default is one user. This option creates a new copy of the schedule that contains the specified number of users. | Yes |
| Overwrite Results file | checkBox | Determines whether a results file with the same name is overwritten. The default value, true, means that the results file is overwritten. | Yes |
| Protocol Input | textBox | Use this argument to run a UI test in parallel on different browsers. | Yes |
| Publish | textBox | You can use this parameter to publish test results to the Server | Yes |
| Publish_for | textBox | You can use this option to publish the test results based on the completion status of the tests | Yes |
| Publishreports | textBox | You can use this option to publish specific test results to the Server | Yes |
| Results File | textBox | The name of the results file. The default result file is the test or schedule name with a time stamp appended. | Yes |
| User Comments | textBox | Add text within double quotation mark to display it in the User Comments row of the report. | Yes |
| Var File | textBox | The complete path to the XML file that contains the variable name and value pairs | Yes |
| VM Args | textBox | Java virtual machine arguments to pass in. | Yes |

