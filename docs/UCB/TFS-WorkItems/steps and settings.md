
TFS Work Items - Steps and Settings
===================================

# Steps and Settings


### Steps and Settings




>
>
>
>
>
> ### Process steps in the Team Foundation Server (TFS) Work Items plug-in
>
>
> * [Add Comment](#add_comment)
> * [Change Work Item State](#change_work_item_state)
> * [Create Work Item](#create_work_item)
> * [Publish Work Item Report](#publish_work_item_report)
>
>
>
>
> ### Add Comment
>
>
> Use this step to add comments from the current changelog to matching TFS defects.
>
>
>
>
>
> | Name | Type | Description | Required |
> | --- | --- | --- | --- |
> | Additional Comment | String | Information to be added to the TFS work item comment in addition to the commit comment. You can include HTML. | No |
> | TFS Repository |  | The TFS repository to connect to. | Yes |
> | Work Item ID Pattern | String | A regular expression to locate work item IDs in changelog comments. You can add parentheses around the part of the pattern that identifies the work item ID. For example, the pattern Workitem:([0-9]+) matches Workitem:123 using 123 as the work item ID. Enter a value here only if you are not using the TFS source control plug-in. | No |
>
>
> ### Change Work Item State
>
>
> Use this step to change the state of a TFS work item.
>
>
>
>
> | Name | Type | Description | Required |
> | --- | --- | --- | --- |
> | Defect ID | String | A comma-separated list of work item IDs for the state of. To update all issues in the current build life, use the **``${p:buildlife/issueIds}``** property. | Yes |
> | New State | String | The state to change the selected work items to. For example: Active and Resolved. | Yes |
> | Reason for State Change | String | The reason for the state change. For example: Cannot Reproduce, Duplicate, Fixed, or Obsolete. | Yes |
> | TFS Repository |  | The TFS repository to connect to. | Yes |
>
>
> ### Create Work Item
>
>
> Use this step to create a TFS work item.
>
>
>
>
> | Name | Type | Description | Required |
> | --- | --- | --- | --- |
> | Assigned To | String | The user to assign the work item to. | No |
> | Description | String | A description of the work item. | No |
> | Project | String | The name of the TFS project to associate the work item with. | Yes |
> | TFS Repository |  | The TFS repository to connect to. | Yes |
> | Title | String | The title of the work item. | Yes |
> | Type | String | The type of the work item. For example: Bug, Issue, Task, User Story, or Test Case. | Yes |
>
>
> ### Publish Work Item Report
>
>
> Use this step to create an issue report for the work items.
>
>
>
>
> | Name | Type | Description | Required |
> | --- | --- | --- | --- |
> | TFS Repository |  | The TFS repository to connect to. | Yes |
> | Work Item ID Pattern | String | A regular expression to locate work item IDs in changelog comments. You can add parentheses around the part of the pattern that identifies the work item ID. For example, the pattern Workitem:([0-9]+) matches Workitem:123 using 123 as the work item ID. Enter a value here only if you are not using the TFS source control plug-in. | No |
>
>
>
>
> ### Roles in the TFS Work Items plug-in
>
>
>
>
> | Name | Type | Description |
> | --- | --- | --- |
> | Password | Password | The password to use to connect to the TFS Server. |
> | Server URL | String | The TFS server URL. |
> | TFS Version | Enumeration:
>  | The version of TFS to use. |
> | User Name | String | The user name to use to connect to the TFS Server. |
>
>
>
>


|Back to ...||Latest Version|TFS Work Items |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[4.752909](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/TFS-WorkItems/TFS-WorkItems-4.752909.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
