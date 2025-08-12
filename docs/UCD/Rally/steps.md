
# Rally for IBM DevOps Deploy - Process Steps

* [Add Comments](#add_comments)
* [Change Rally Artifact Property](#change_rally_artifact_property)
* [Change Status](#change_status)
* [Create Defect](#create_defect)


## Add Comments

Add comments to Rally defects, tasks, and stories.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Api Key | Password | The Api Key to use as an authorization token in place of username/password to connect to the Rally Server. | No |
| Comment | String | The text of the comment to add. | No |
| Defect IDs | String | A list of defect IDs, separated by commas, to add a comment to. | No |
| Password | Password | The password for the Rally server. | No |
| Proxy Host | String | The proxy host name, if there is a proxy between the agent and the Rally server. | No |
| Proxy Password | Password | The proxy password, if there is a proxy between the agent and the Rally server. | No |
| Proxy Port | String | The proxy port number, if there is a proxy between the agent and the Rally server. | No |
| Proxy Username | String | The proxy user name, if there is a proxy between the agent and the Rally server. | No |
| Rally Base URL | String | The Rally server URL. For example: https://trial.rallydev.com | Yes |
| Rally Version | String | The version of Rally web services that your Rally server supports. For example: 1.16 | Yes |
| Rally Workspace Name | String | The Rally workspace to use. | Yes |
| Task IDs | String | A list of task IDs, separated by commas, to add a comment to. | No |
| User Name | String | The user name for the Rally server. | No |
| User Story IDs | String | A list of user story IDs, separated by commas, to add a comment to. | No |

## Change Rally Artifact Property

Update a Rally artifact property.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Api Key | Password | The Api Key to use as an authorization token in place of username/password to connect to the Rally Server. | No |
| Artifact IDs | String | A list of artifact IDs, separated by commas, to update. | Yes |
| New Value | String | The new values for the artifact properties. Specify one value for all artifacts or a comma-separated list of values, where the number of values matches the number of artifact IDs. If the artifact is an option list in Rally, then the value must match one of the options exactly. This field is case sensitive. | Yes |
| Object Type | String | Specify a list of the type of artifacts to update, separated by commas. The artifact types must match the types in the Rally REST API documentation at <Rally\_server\_URL>/slm/doc/webservice/index.jsp, where <Rally\_server\_URL> is the Rally url such as https://trial.rallydev.com. Artifact types include Task, Defect, HierarchicalRequirement, and so on. | Yes |
| Password | Password | The password for the Rally server. | No |
| Property | String | The property to update. This field is case sensitive, and must match the documented Rally property name. | Yes |
| Proxy Host | String | The proxy host name, if there is a proxy between the agent and the Rally server. | No |
| Proxy Password | Password | The proxy password, if there is a proxy between the agent and the Rally server. | No |
| Proxy Port | String | The proxy port number, if there is a proxy between the agent and the Rally server. | No |
| Proxy Username | String | The proxy user name, if there is a proxy between the agent and the Rally server. | No |
| Rally Base URL | String | The Rally server URL. For example: https://trial.rallydev.com | Yes |
| Rally Version | String | The version of Rally web services that your Rally server supports. For example: 1.16 | Yes |
| Rally Workspace Name | String | The Rally workspace to use. | Yes |
| User Name | String | The user name for the Rally server. | No |

## Change Status

Update the status of a Rally defect


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Api Key | Password | The Api Key to use as an authorization token in place of username/password to connect to the Rally Server. | No |
| Defect IDs | String | A list of defect IDs to update, separated by commas. | No |
| New State | Enumeration:
* Submitted
* Open
* Fixed
* Closed
| The new state for the artifacts. | Yes |
| Password | Password | The password for the Rally server. | No |
| Proxy Host | String | The proxy host name, if there is a proxy between the agent and the Rally server. | No |
| Proxy Password | Password | The proxy password, if there is a proxy between the agent and the Rally server. | No |
| Proxy Port | String | The proxy port number, if there is a proxy between the agent and the Rally server. | No |
| Proxy Username | String | The proxy user name, if there is a proxy between the agent and the Rally server. | No |
| Rally Base URL | String | The Rally server URL. For example: https://trial.rallydev.com | Yes |
| Rally Version | String | The version of Rally web services that your Rally server supports. For example: 1.16 | Yes |
| Rally Workspace Name | String | The Rally workspace to use. | Yes |
| User Name | String | The user name for the Rally server. | No |

## Create Defect

Create a defect in Rally.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Api Key | Password | The Api Key to use as an authorization token in place of username/password to connect to the Rally Server. | No |
| Defect Description | String | The description of the defect. | No |
| Defect Name | String | The name of the defect. | Yes |
| Environment | Enumeration:
* Development
* Test
* Staging
* Production
| The environment of the defect. | No |
| Found in Build | String | The build where the defect was found. | No |
| Password | Password | The password for the Rally server. | No |
| Priority | Enumeration:
* Resolve Immediately
* High Attention
* Normal
* Low
| The priority of the defect. | No |
| Project Name | String | Specify a Rally project key to create a defect for the project, and not for a specific user story. You must specify a project key or a requirement key in the User Story ID field. | No |
| Proxy Host | String | The proxy host name, if there is a proxy between the agent and the Rally server. | No |
| Proxy Password | Password | The proxy password, if there is a proxy between the agent and the Rally server. | No |
| Proxy Port | String | The proxy port number, if there is a proxy between the agent and the Rally server. | No |
| Proxy Username | String | The proxy user name, if there is a proxy between the agent and the Rally server. | No |
| Rally Base URL | String | The Rally server URL. For example: https://trial.rallydev.com | Yes |
| Rally Version | String | The version of Rally web services that your Rally server supports. For example: 1.16 | Yes |
| Rally Workspace Name | String | The Rally workspace to use. | Yes |
| Severity | Enumeration:
* Crash/Data Loss
* Major Problem
* Minor Problem
* Cosmetic
| The severity of the defect. | No |
| State | Enumeration:
* Submitted
* Open
* Fixed
* Closed
| The state of the defect. | Yes |
| Submitted By | String | The name of the defect submitter. This name must match a user name in Rally. | No |
| User Name | String | The user name for the Rally server. | No |
| User Story ID | String | Specify a Rally user story to create a defect for a specific user story. You must specify a user story ID or a project key in the Project Name field. | No |


