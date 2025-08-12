
# IBM DevOps uBuild - Process Steps

* [Assign Label](#assign_label)
* [Assign Status](#assign_status)
* [Download Artifacts](#download_artifacts)
* [Run Secondary Process](#run_secondary_process)


## Assign Label

Use this step to assign a label to a build life in uBuild.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Life | String | The build life to assign the status to. | Yes |
| Label Dependency | Enumeration | The label dependency applied to the label. Specify either None, Direct, or All. | Yes |
| Label Name | String | The name of the label to be applied. | Yes |

## Assign Status

Use this step to assign a status to a build life in uBuild.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Life | String | The build life to assign the status to. | Yes |
| External Message | String | The external message for the status. | Yes |
| Status Name | String | The name of the status to be applied. | Yes |

## Download Artifacts

Use this step to download artifact set files from uBuild.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Life | String | The build life identifier to download artifacts from. | No |
| Build Life with Label | String | The label name to use for selecting a build life to download | No |
| Build Life with Stamp | String | The stamp pattern to use for selecting a build life to download. | No |
| Permissions | Enumeration | Select how you would like the Codestation to handle setting file permissions on download: NoneDo not copy any permissions Set AllSet all permissions from the original file Set Execute Bits OnlySet only the execute bits from the original file. | Yes |

## Run Secondary Process

Use this step to run a secondary process in uBuild.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Build Life | String | The build life identifier for the secondary process to run. | Yes |
| Delay Time | String | The time to start a secondary process. Specify in the following format `MM/dd/yyyy hh:mm z`.For hours specify an integer 0-23. Specify the timezone for the `z` variable.If this property is left blank, the process will start immediately. | No |
| Process | String | The process identifier for the secondary process to run. | Yes |
| Properties | String | Additional properties to pass to the workflow. These are sets of name, value, and secure.For example, `[{"name": "user", "value": "admin", "secure": "true"}``]`. | No |


