
MSTest - Steps
==============

# Steps


### Steps




### Process steps in the MSTest plug-in

* [MSTest Report Publisher](#mstest_report_publisher)


### MSTest Report Publisher

Publish MSTest results as a report.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Base Directory | String | Base directory for resolving MSTest XML files. Unless absolute, this is relative to the job working directory. | Yes |
| Exclude Patterns | String | A list of patterns to determine which XML report files to exclude. Specify each on a separte line. Patterns can include ?, \*, or \*\*. | No |
| Include Patterns | String | A list of patterns to determine which XML report files to include. Specify each on a separte line. Patterns can include ?, \*, or \*\*. | No |
| Report Name | String | The name of the report published by the Anthill build life. | Yes |


