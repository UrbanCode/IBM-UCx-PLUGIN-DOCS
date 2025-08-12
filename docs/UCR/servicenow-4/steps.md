
ServiceNow - Steps
==================

# Steps


### Steps



### Process steps in the Service Now Plugin plug-in

* [Close Service Now
Ticket](#close_service_now_ticket)
* [Create SNOW Record when Deployment is
Created](#create_snow_record_when_deployment_is_created)
* [Fetch SNOW Records and Create
Deployments](#fetch_snow_records_and_create_deployments)
* [GetUCRPhaseModels](#getucrphasemodels)
* [Open Service Now
Ticket](#open_service_now_ticket)
* [ServiceNowUpdate](#servicenowupdate)
* [Wait for Approval of Service Now
Ticket](#wait_for_approval_of_service_now_ticket)
* [groups](#groups)
* [states](#states)
* [workflows](#workflows)



### Close Service Now Ticket

Closes


| Name | Type | Description | Required | Property Name |
| --- | --- | --- |
--- | --- |
| Close Service Now ticket Properties |  | This task closes a Service Now ticket. If the record ID field is
provided, that ticket is closed; otherwise, the ticket opened in a previous Open Service Now Ticket task is closed. If
multiple Open Service Now Ticket(s) exist, then reference the one for which you intend to close by using a direct
prerequisite task dependency. If no such task exists, this task is skipped. | No | OpenServiceNowTicketDescription |
|
Close Ticket Notes | String | Notes that are required to close the ticket | No | closeTicketNotes |
| New Ticket State |
| ID of the state that the ticket will move to ex: -5 to 5 | No | newStatus |
| Record Id | String | The record ID for
which this task will wait for its approval (Example: CHG0030037). | No | record\_id |



### Create SNOW Record when
Deployment is Created

The ServiceNow plugin allows for the easy automation of CRUD operations on ServiceNow records.



| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Additional Properties |
String | If there are required custom fields, you may provide the values for them here. This is a line-delimited set of
properties. (key=value) | No | additionalProperties |
| Approval Configuration |  | When a scheduled deployment is
created with an approval with that name, the integration will handle its completion by looking at the corresponding
approval in ServiceNow | No | approvalConfiguration |
| Approval Name | String | Approval with this name will be handled
in Service Now | No | approvalName |
| Authentication Configuration |  |  | No | authentication |
| Change Information
|  | Change information fields can be defined in this section | No | changeInformation |
| Create SNOW Record when
Deployment is Created |  | <div style=” margin-left: 25px; “><ul style=”list-style-type: disc;”><li>Create record of a
specified type when a deployment to specified phase is created </li><li>Updates the record’s state when deployment
starts and finishes</li><li>Uses SNOW approvals to complete phase approvals (optional)</li></ul></div> | No |
createSNOWRecordLabel |
| HTTP Proxy Host | String | Provide the hostname of the HTTP proxy to use to connect to
ServiceNow. Eg proxy.domain.com | No | proxyHost |
| HTTP Proxy Password | Password | Provide the password to
authenticate with HTTP proxy. | No | proxyPass |
| HTTP Proxy Port | String | Provide the port number of the HTTP proxy
to use to connect to ServiceNow. | No | proxyPort |
| HTTP Proxy User name | String | Provide the user name to
authenticate with HTTP proxy. | No | proxyUser |
| Phases to Trigger Work Item Creation |  | The lifecycle phases for
which deployments will create Service Now work items. This is broken out into phases per lifecycle, so as to select
lifecycles used by specfic releases. Example: PROD – Mobile Team Lifecycle, would be selected so as to trigger work
items created for deployments to the PROD phase for any release using the lifecycle named Mobile Team Lifecycle. | No |
phasesSelected |
| Release Configuration |  | Defines what release and what phases will trigger the creation of a ticket
| No | releaseConfiguration |
| Service Now Assigned Group |  | Group assigned to this work item in ServiceNow | No |
serviceNowAssignedGroup |
| ServiceNow Server Url | String | Service-now Server Url | Yes | serverUrl |
| ServiceNow
password | Password | Provide the password to authenticate with ServiceNow. | Yes | password |
| ServiceNow user name |
String | Provide the user name to authenticate with ServiceNow. | Yes | username |
| Table Name | String | The name of
the table to update when deployments are started and ended (Example: change\_request). To find this value, search for
System Definition > Table and Columns in the left navigation pane in ServiceNow. Once there, find the name column and
enter that value here. The most common use case for this plugin is to create change\_request items. | Yes | table |
|
Type Worflow |  | ex: standard or normal (with approvals) | Yes | workflow |
| When deployment is created |  | ID of the
state that the ticket will move to ex: -5 to 5 | No | deploymentCreatedState |
| When deployment is ended |  | ID of
the state that the ticket will move to ex: -5 to 5 | No | deploymentEndedState |
| When deployment is started |  | ID of
the state that the ticket will move to ex: -5 to 5 | No | deploymentStartedState |
| Workflow Configuration |  | This
section defines what state the ServiceNow work item should change to when the scheduled deployment is created, started,
completed | No | stateConfiguration |



### Fetch SNOW Records and Create Deployments

The ServiceNow plugin allows
for the easy automation of CRUD operations on ServiceNow records.


| Name | Type | Description | Required | Property
Name |
| --- | --- | --- | --- | --- |
| Approval Configuration |  | When a scheduled deployment is created with an
approval with that name, the integration will handle its completion by looking at the corresponding approval in
ServiceNow | No | approvalConfiguration |
| Approval Name | String | Approval with this name will be handled in Service
Now | No | approvalName |
| Authentication Configuration |  |  | No | authentication |
| Custom Field Configuration |  |
In Service Now, it is best to create custom fields to indicate for which release and environment a deployment will be
made. This section allows you to input the names of those fields for UCR to retrieve. | No | customFieldSection |
|
Default environment if none is specified in SNOW | String | This environment will be used if a release is specified but
an environment is not. | No | defaultEnv |
| Fetch SNOW Records and Create Deployments |  | <div style=” margin-left:
25px; “><ul style=”list-style-type: disc;”><li>Creates UCR Deployment when a SNOW record reaches a specified
state</li><li>Updates the record’s state when deployment starts and finishes</li><li>Uses SNOW approvals to complete
phase approvals (optional)</li></ul></div> | No | createSNOWRecordLabel |
| Field to use for environemnt | String | This
field in SNOW will contain the name of the UCR environment to which this integration will create a deployment. | No |
envField |
| Field to use for release | String | This field in SNOW will contain the name of the UCR release for which
this integration will create a deployment. | No | releaseField |
| HTTP Proxy Host | String | Provide the hostname of
the HTTP proxy to use to connect to ServiceNow. Eg proxy.domain.com | No | proxyHost |
| HTTP Proxy Password | Password
| Provide the password to authenticate with HTTP proxy. | No | proxyPass |
| HTTP Proxy Port | String | Provide the port
number of the HTTP proxy to use to connect to ServiceNow. | No | proxyPort |
| HTTP Proxy User name | String | Provide
the user name to authenticate with HTTP proxy. | No | proxyUser |
| ServiceNow Server Url | String | Service-now Server
Url | Yes | serverUrl |
| ServiceNow password | Password | Provide the password to authenticate with ServiceNow. | Yes |
password |
| ServiceNow user name | String | Provide the user name to authenticate with ServiceNow. | Yes | username |

| Table Name | String | The name of the table to update when deployments are started and ended (Example:
change\_request). To find this value, search for System Definition > Table and Columns in the left navigation pane in
ServiceNow. Once there, find the name column and enter that value here. The most common use case for this plugin is to
create change\_request items. | Yes | table |
| When deployment is ended |  | ID of the state that the ticket will move
to ex: -5 to 5 | No | deploymentEndedState |
| When deployment is started |  | ID of the state that the ticket will move
to ex: -5 to 5 | No | deploymentStartedState |
| When record is in this state, the deployment will be created |  | ID
of the state that the ticket must be in to create a deplopyment ex: -5 to 5 | No | deploymentCreatedState |
| Workflow
Configuration |  | This section defines what state the ServiceNow work item needs to to reach to trigger the creation of
a deployment. This section also defines the state the Service Now work item should change to when the scheduled
deployment is started and completed | No | stateConfiguration |



### GetUCRPhaseModels

Check Connection

This
step has no input properties.



### Open Service Now Ticket

Creates a Service Now change request


| Name | Type
| Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Description | String | The name of the
table to update when deployments are started and ended (Example: change\_request). To find this value, search for System
Definition > Table and Columns in the left navigation pane in ServiceNow. Once there, find the name column and enter
that value here. The most common use case for this plugin is to create change\_request items. | No | description |
|
Open Service Now Ticket Properties |  | This task will open a Service Now ticket. If these fields are not provided, the
default values will be retrieved from the integration provider that was created for this plugin. For instance, if you do
not provide a value for table, it will default to the value provided in the integration provider. | No |
OpenServiceNowTicketDescription |
| Service Now Assigned Group |  | Group assigned to this work item in ServiceNow | No
| serviceNowAssignedGroup |
| Short Description | String | The name of the table to update when deployments are started
and ended (Example: change\_request). To find this value, search for System Definition > Table and Columns in the left
navigation pane in ServiceNow. Once there, find the name column and enter that value here. The most common use case for
this plugin is to create change\_request items. | No | shortDescription |
| Table Name | String | The name of the table
to update when deployments are started and ended (Example: change\_request). To find this value, search for System
Definition > Table and Columns in the left navigation pane in ServiceNow. Once there, find the name column and enter
that value here. The most common use case for this plugin is to create change\_request items. | No | table |
| Type
Worflow |  | ex: standard or normal (with approvals) | No | workflow |
| When deployment is created |  | ID of the state
that the ticket will move to ex: -5 to 5 | No | deploymentCreatedState |



### ServiceNowUpdate

Service Now
Update

This step has no input properties.



### Wait for Approval of Service Now Ticket

Wait for the approval of
the Service Now ticket


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
|
New Ticket State (optional) |  | ID of the state that the ticket will move to ex: -5 to 5 | No | newStatus |
| Record Id
| String | The record ID for which this task will wait for its approval (Example: CHG0030037). | No | record\_id |
|
Wait for the approval of the Service Now ticket Properties |  | This task will complete when the field ‘approval’ equals
‘approved’ in a Service Now ticket. If the record ID field is provided, it will search for that ticket; otherwise, it
will wait for the ticket opened in a previous ‘Open Service Now Ticket’ task. If multiple ‘Open Service Now Ticket(s)’
exist, then reference the one for which you intend to wait for approval by using a direct prerequisite task dependency.
If no such task exists, this task will skip. | No | OpenServiceNowTicketDescription |



### groups

Groups

This
step has no input properties.



### states

Gets available states for workflows

This step has no input
properties.



### workflows

Gets available states for workflows

This step has no input properties.



|Back to ...||Latest Version|ServiceNow |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[0]()|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|
