
# IBM DevOps Release - Process Steps

* [Add Comment to Task](#add_comment_to_task)
* [Add Snapshot Status](#add_snapshot_status)
* [Check Gate Status](#check_gate_status)
* [Get Release for Environment](#get_release_for_environment)
* [Sync Snapshot](#sync_snapshot)
* [Update Application](#update_application)


## Add Comment to Task

Use this step to add a comment to an automated task that was started from a scheduled deployment.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Comment | String | The text to add as a comment to the task execution. | No |
| Password | String | The password to access IBM DevOps Release. | Yes |
| Post Message | String | The post message that is sent from IBM DevOps Release containing the taskID. Create the taskPostMessage property at the component process level without a default value. The application process sets the taskPostMessage property during execution with ``${p:post-deploy-message}`` property value. | Yes |
| URL | String | The URL to the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |

## Add Snapshot Status

Use this step to add a version status to a snapshot.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Attachment Description | String | A description of the file to be uploaded as attachment to the snapshot status. | No |
| Attachment Path | String | The path of the file to be uploaded as attachment to the snapshot status. | No |
| Comment | String | The comment text to be added to the snapshot status. | No |
| Password | String | The password to access IBM DevOps Release. | Yes |
| Snapshot ID | String | The unique ID of the snapshot. To obtain the snapshot ID that is being deployed, you can create a component process property called snapshotId. Specify ``${p:snapshot.id}`` as the default value in the component process property. | Yes |
| Status Name | String | The name of the status to be applied to the snapshot. | Yes |
| URL | String | The URL of the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |

## Check Gate Status

Use this step to check if a snasphot is passing the gates for a specific lifecycle and phase.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Lifecycle Name | String | The name of the lifecycle in IBM DevOps Release | Yes |
| Password | String | The password to access IBM DevOps Release. | Yes |
| Phase Name | String | The name of the lifecycle phase to check against in IBM DevOps Release. | Yes |
| Snapshot ID | String | The snapshot ID to check gates for. | Yes |
| Timeout Value | String | The time in seconds to wait for a response from the IBM DevOps Release server. | Yes |
| URL | String | The URL of the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |

## Get Release for Environment

Use this step to find the active release for the current environment and save the name as an output property.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Environment ID | String | The unique environment identifier that the process step is running against. | Yes |
| Output Property For Phase Name | String | The name of the property containing the phase name to be passed to the next step as this value: ``${p:actualStepName/propertyName}``. | Yes |
| Output Property for Release Name | String | The name of the property that contains the release name to be passed to the next step as this value:``${p:actualStepName/propertyName}``. | Yes |
| Password | String | The password to access IBM DevOps Release. | Yes |
| URL | String | The URL of the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |

## Sync Snapshot

Use this step to create or update a snapshot in IBM DevOps Release.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application ID | String | The application unique ID of the inventory to update in IBM DevOps Release. | Yes |
| Password | String | The password to access IBM DevOps Release. | Yes |
| Snapshot ID | String | The snapshot unique ID to create or update in IBM DevOps Release. | Yes |
| URL | String | The URL of the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |

## Update Application

Use this step to update the inventory for an application in IBM DevOps Release.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application ID | String | The unique IBM DevOps Deploy application ID (UUID), for the inventory to be updated. | Yes |
| Password | String | The password to access IBM DevOps Release. | Yes |
| URL | String | The base URL of the IBM DevOps Release server web user interface. | Yes |
| User Name | String | The user name to access IBM DevOps Release. | Yes |


