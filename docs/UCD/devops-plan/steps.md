
# Process Steps

## Create Plan Record

Use this step to create a new Plan Record in DevOps Plan. This may represent a Release,Project,Work Item,Sprint.


| Name                       | Type     | Description                                                                                                                                                  | Required |
|----------------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Plan Base Url              | String   | The Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                                          | Yes      |
| API Token                  | String   | API Token for the Plan server..                                                                                                                              | Yes      |
| Trust All SSL Certificates | Checkbox | If checked,Trust all SSL certificates.                                                                                                                       | Yes      |
| Teamspace Id               | String   | Go to My Applications → Tenant Management → select your teamspace → Details tab → Enable Show connection properties -> Copy the ID from the Data Base field. | Yes      |
| Application Name           | String   | Enter the name of the Application..                                                                                                                          | Yes      |
| Record Type Name           | String   | Enter the type of record to create.                                                                                                                          | Yes      |
| Additional Fields (JSON)   | String   | Supply additional fields or Mandatory Fields as a JSON object.Refer to usage tab                                                                             | Yes      |


## Update Sprint

Use this step to update a Sprint record in the DevOps Plan.


| Name                        | Type     | Description                                                                                                                                                    | Required |
|-----------------------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Plan Base Url               | String   | The Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                                            | Yes      |
| API Token                   | String   | API Token for the Plan server..                                                                                                                                | Yes      |
| Trust all SSL certificates. | Checkbox | If checked,Trust all SSL certificates.                                                                                                                         | Yes      |
| Teamspace Id                | String   | Go to My Applications → Tenant Management → select your teamspace → Details tab → Enable Show connection properties -> Copy the ID from the Data Base field.   | Yes      |
| Application Name            | String   | Enter the name of the Application.                                                                                                                             | Yes      |
| Current Sprint Name         | String   | Enter the name of Sprint to update.                                                                                                                            | Yes      |
| Name                        | String   | Enter the new Sprint Name.Leave empty to keep current name..                                                                                                   | No       |
| Description                 | String   | Enter the new Description.Leave empty to keep current Description.                                                                                             | No       |
| Start Date                  | String   | Enter the new Start Date (MANDATORY for Sprint/Release) Format: YYYY-MM-DD.                                                                                    | No       |
| End Date                    | String   | Enter the new End Date (MANDATORY for Sprint/Release) Format: YYYY-MM-DD.                                                                                      | No       |
| Additional Fields (JSON)    | String   | Supply advanced fields or custom fields not listed above.                                                                                                      | No       |


## Update WorkItem

Use this step to update a WorkItem record in the DevOps Plan.


| Name                        | Type     | Description                                                                                                                                          | Required |
|-----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Plan Base Url               | String   | Enter the Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                            | Yes      |
| API Token                   | String   | API Token for the Plan server.                                                                                                                       | Yes      |
| Trust all SSL certificates. | Checkbox | If checked,Trust all SSL certificates.                                                                                                               | Yes      |
| Teamspace Id                | String   | To find the Teamspace ID: Go to My Applications → Tenant Management → select your teamspace → Details → Enable Show connection properties → copy ID. | Yes      |
| Application Name            | String   | Enter the name of the Application.                                                                                                                   | Yes      |
| Work Item Id                | String   | Enter the WorkItem ID to update. e.g. AppName00000006                                                                                                | Yes      |
| Title                       | String   | The summary/Headline of the work Item.                                                                                                               | No       |
| Type                        | String   | Enter the Work Item Type.e.g. Defect, Task, Story, Epic                                                                                              | No       |
| State                       | String   | Enter the State of the Work Item State e.g. Submitted, Active, Resolved, Closed                                                                      | No       |
| Owner                       | String   | The user ID of the owner.                                                                                                                            | No       |
| Severity                    | String   | Enter the Severity of the Work Item.e.g. Critical, High, Medium, Low                                                                                 | No       |
| Priority                    | String   | Enter the Priority value.                                                                                                                            | No       |
| Resolution                  | String   | Enter the Resolution e.g. Fixed, Duplicate, Invalid                                                                                                  | No       |
| Tags                        | String   | Enter the Comma-separated tags.                                                                                                                      | No       |
| Project                     | String   | Enter the Project Name.                                                                                                                              | No       |
| Component                   | String   | Enter the Component name.                                                                                                                            | No       |
| Story Points                | String   | Enter the Story points value.                                                                                                                        | No       |
| Planned Release             | String   | The name of the target Release.                                                                                                                      | No       |
| Sprint                      | String   | The Name/ID of the assigned Sprint.                                                                                                                  | No       |
| Parent ID                   | String   | The ID of the parent work item.                                                                                                                      | No       |
| Description                 | String   | Enter the Description .                                                                                                                              | No       |
| Additional Fields (JSON)    | String   | Supply advanced fields or custom fields not listed above.                                                                                            | No       |


## Update Release

Use this step to update a Release record in the DevOps Plan.


| Name                        | Type     | Description                                                                                                                                          | Required |
|-----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Plan Base Url               | String   | Enter the Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                            | Yes      |
| API Token                   | String   | API Token for the Plan server.                                                                                                                       | Yes      |
| Trust all SSL certificates. | Checkbox | If checked,Trust all SSL certificates.                                                                                                               | Yes      |
| Teamspace Id                | String   | To find the Teamspace ID: Go to My Applications → Tenant Management → select your teamspace → Details → Enable Show connection properties → copy ID. | Yes      |
| Application Name            | String   | Enter the name of the Application.                                                                                                                   | Yes      |
| Current Release Name        | String   | Enter the name of Release to update.                                                                                                                 | Yes      |
| New Release Name            | String   | Leave empty to keep the current name.                                                                                                                | No       |
| Start Date                  | String   | Enter the new Start Date Format: YYYY-MM-DD HH:MM:SS                                                                                                 | No       |
| End Date                    | String   | Enter the new End Date Format: YYYY-MM-DD HH:MM:SS                                                                                                   | No       |
| Delivered                   | String   | Set to 'Yes' or 'No'.                                                                                                                                | No       |
| Frozen                      | String   | Set to 'Yes' or 'No'.                                                                                                                                | No       |
| Description                 | String   | Enter the Description.                                                                                                                               | No       |
| Additional Fields (JSON)    | String   | Supply advanced fields or custom fields not listed above.                                                                                            | No       |


## Update Any Record

Use this step to update any type of record in the DevOps Plan.


| Name                        | Type     | Description                                                                                                                                          | Required |
|-----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Record Type                 | String   | Enter the Record Type.                                                                                                                               | Yes      |
| Plan Base Url               | String   | Enter the Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                            | Yes      |
| API Token                   | String   | API Token for the Plan server.                                                                                                                       | Yes      |
| Trust all SSL certificates. | Checkbox | If checked,Trust all SSL certificates.                                                                                                               | Yes      |                                                                                                            |
| Teamspace Id                | String   | To find the Teamspace ID: Go to My Applications → Tenant Management → select your teamspace → Details → Enable Show connection properties → copy ID. | Yes      |
| Application Name            | String   | Enter the name of the Application.                                                                                                                   | Yes      |
| Current Record Name         | String   | Enter the name of Record to update.                                                                                                                  | Yes      |
| New Record Name             | String   | Leave empty to keep current name.                                                                                                                    | No       |
| Description                 | String   | Leave empty to keep current description.                                                                                                             | No       |
| Start Date                  | String   | Enter the new Start Date Format: YYYY-MM-DD (e.g. 2025-10-01)                                                                                        | No       |
| End Date                    | String   | Enter the new End Date Format Format: YYYY-MM-DD (e.g. 2025-10-31)                                                                                   | No       |
| Additional Fields (JSON)    | String   | Supply advanced fields or custom fields not listed above.                                                                                            | No       |


## Delete Record


Use this step to delete a record in the DevOps Plan.

| Name                        | Type     | Description                                                                                                                                          | Required |
|-----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Plan Base Url               | String   | Enter the Base Url for Devops Plan Server (Example: https://&lt;plan-server-url&gt;/plan)                                                            | Yes      |
| API Token                   | String   | API Token for the Plan server.                                                                                                                       | Yes      |
| Trust all SSL certificates. | Checkbox | If checked,Trust all SSL certificates.                                                                                                               | Yes      |
| Teamspace Id                | String   | To find the Teamspace ID: Go to My Applications → Tenant Management → select your teamspace → Details → Enable Show connection properties → copy ID. | Yes      |
| Application Name            | String   | Enter the name of the Application.                                                                                                                   | Yes      |
| Record Type                 | String   | The Entity Definition Name (e.g., WorkItem, Sprint, Release).                                                                                        | Yes      |
| Record Name/Record Id       | String   | The Name of the record you want to delete. For WorkItem use the WorkItem Id                                                                          | Yes      |

