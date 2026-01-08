# Siebel - Process Steps

## Configure ImportSiebelMessage_single

Import XML file that contains a SiebelMessage tag (Data Maps, WebServices, etc). For Workflows, please use the special Workflow import.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Path to XML file | textBox |  | Yes |

## Configure BusinessService_ImportBSFromXML

Import XML file that contains a business service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Path to XML file | textBox |  | Yes |

## Configure BusProc_WorkfImport_single

Import XML Workflow

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Path to XML file | textBox |  | Yes |

## Configure BusProc_WorkfDeploy_single

Business Process - Workflow Deploy/Activate/Export

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Choose Action Method | selectBox | What action should be used for the Wokflow Admin Service? | Yes |
| Workflow Search Spec (for all actions) | textBox | This is the SQL where clause to apply when we search for the workflow. An example is shown in the default value. | Yes |
| Dir Path (for Export only) | textBox |  | Yes |

## Configure Data_LOV_single

Data - List of Values

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Type | textBox |  | Yes |
| Display Value | textBox |  | Yes |
| LIC | textBox |  | Yes |
| Order | textBox |  | Yes |
| Low | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Group_Position_single

Group - Positions

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Division | textBox |  | Yes |
| Position | textBox |  | Yes |
| Parent Position | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Group_InternalDivision_single

Group - Internal Divisions

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Internal Division | textBox |  | Yes |
| Organization Type | textBox |  | Yes |
| Parent Division | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure OrderManagement_Signals_single

Order Management - Signals

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Signal (VOD) Name | textBox |  | Yes |
| Signal Description | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Enterprises_ProfileConfiguration_single

Enterprises - Profile Configuration

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Profile | textBox |  | Yes |
| Alias | textBox |  | Yes |
| SubsystemType | textBox |  | Yes |
| Parameters | textAreaBox | Please add the parameters of the component you want to add or update. Add them in the form &lt;name&gt;=&lt;value&gt;; (don't forget the ; at the end of each pair) all in one line. &lt;b&gt;NOTE: IT IS VERY IMPORTANT TO HAVE NO NEW LINES (ENTER) IN THE TEXT BOX.&lt;/b&gt; | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Shell Import Repository File

Import a repository file (rpd)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Siebel Home Dir | textBox | The Siebel Home Directory on the target server. | Yes |
| SiebelODBCDataSource | textBox | The Siebel ODBC Data Source. | Yes |
| Siebel DB Table Owner | textBox | The Siebel DB Table Owner. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Repository Name | textBox |  | Yes |
| Path to Repository file | textBox | Path to the repository file(RPD). Relative path if Download artifacts were used | No |

## Shell Start or Stop Servers

Start or stop a server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server Home Directory | textBox | The Siebel Home Directory on the target machine | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| GatewayServer | textBox | The GatewayServer hostname or IP adress where we will connect to. | Yes |
| GatewayPort | textBox | The port we will connect to for the GW server. | Yes |
| SiebelCBServer | textBox | The Siebel Server hostname where we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Choose Action Method | selectBox | Start or Stop | Yes |
| Choose Server | selectBox | Which Type of Server to start or stop | Yes |

## Shell Copy or Move File

Copy or move a file from one location to another

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Choose Action | selectBox | Copy the file | Yes |
| From: | textBox | Initial (From) Location | Yes |
| To: | textBox | Final (To) Location | Yes |

## Configure RuntimeEvents_Events_single

Runtime Events - Events

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Event | textBox |  | Yes |
| Event LOV Type | textBox |  | Yes |
| Sequence | textBox |  | Yes |
| Object Type | textBox |  | Yes |
| Object Name | textBox |  | Yes |
| Condition Expression | textAreaBox |  | Yes |
| Action Set Name | textBox |  | Yes |
| Sub Event | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Applications_Views_create_single

Create a View in the Feature Access Business Object (pre-requisite to associate View with Responsibility)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| View Name | textBox |  | Yes |
| View Description | textBox |  | Yes |
| View Local Access | selectBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Applications_Responsibilities_create_single

Create a View in the Feature Access Business Object (pre-requisite to associate View with Responsibility)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Responsibility Name | textBox |  | Yes |
| Responsibility Description | textBox |  | Yes |
| Responsibility Organization | textBox |  | Yes |
| Web Access | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure Application_Responsibility_View_associate_single

Create a View in the Feature Access Business Object (pre-requisite to associate View with Responsibility)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Responsibility Name | textBox |  | Yes |
| View Name | textBox |  | Yes |

## Configure Application_PredefinedQueries_single

Data - List of Values

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Query Object | textBox |  | Yes |
| Query Name | textBox |  | Yes |
| Query | textAreaBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Configure ServerConfiguration_JobTemplates_single

Server Configuration - Job Templates

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Job Template Name | textBox |  | Yes |
| Job Template Component | textBox |  | Yes |
| Job Template Short Name | textBox |  | Yes |
| Job Template Description | textBox |  | Yes |
| Job Template Enabled? | textBox |  | Yes |
| Parameters | textAreaBox | Please add the parameters of the component you want to add or update. Add them in the form &lt;name&gt;=&lt;value&gt;; (don't forget the ; at the end of each pair) all in one line. &lt;b&gt;NOTE: IT IS VERY IMPORTANT TO HAVE NO NEW LINES (ENTER) IN THE TEXT BOX.&lt;/b&gt; | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

## Shell Generate Browser Scripts

Generater Browser Scripts on Siebel server

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server Home Directory | textBox | The Siebel Home Directory on the target machine | Yes |

## Configure Integration_SymbolicURLList_single

Integration - Symbolic URL List

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| SiebelCBServer | textBox | The Siebel Server hostname or IP adress where we will connect to. | Yes |
| SiebelEnt | textBox | The Siebel Enterprise we will connect to. | Yes |
| SiebelCBPort | textBox | The port we will connect to. | Yes |
| SiebelUser | textBox | Siebel Admin Username | Yes |
| SiebelPass | secureBox | Siebel Admin User password. | Yes |
| Name | textBox |  | Yes |
| Virtual Name | textBox |  | Yes |
| Authentication Type | textBox |  | Yes |
| Authentication Value | textBox |  | Yes |
| Connect Timeout | textBox |  | Yes |
| Data Timeout | textBox |  | Yes |
| TT Symptom | textBox |  | Yes |
| Is this an update? | checkBox | Is this an update? If the record is not found, the step will fail. If you leave this unchecked then if the record is not found, it will be created,. If it is found, it will be updated. | No |

