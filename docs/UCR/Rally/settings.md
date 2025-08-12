
Rally - Settings
================

# Settings


### Settings




The following integration settings are available when you install the Rally plug-in.


| Name |
Type | Description | Required |
| --- | --- | --- | --- |
| API Key | Password | Login into the App Manager and generate
an API Key for your Rally Instance | No |
| Change Type |  | The change type that will be applied to the changes that
are imported from Rally | No |
| Check Authentication |  | Button to verify the API Key and Rally Authentication | No |

| Configuring an integration provider for Rally Entities |  | This Rally Plugin can import a number of Rally objects
including defects, test cases, tasks, and more. Select the Rally object type you want to import, select the resulting
UCR change type, and then select the Rally fields used to associate Releases, Applications, and Initiatives. | No |
|
Create Initiative if Necessary | Boolean | Check this box if the initiative does not yet exist. Initiative will be
imported. | No |
| Field for Application Association |  | This will associate an application to the imported change if
that applications name is the same as the value for this key in the Rally JSON | No |
| Field for Initiative Association
|  | This will associate an initiative to the imported change if that initiatives name is the same as the value for
this key in the Rally JSON | No |
| Field for Release Association |  | This will associate a release to the imported
change if that releases name is the same as the value for this key in the Rally JSON | No |
| Ping the Rally Server |  |
Button to check if the connection can be established with the Rally Server | No |
| Rally WSAPI Type | Enumeration |
This is the Rally entity for which the plugin will query, for example: testcase or defect. Specify one of these values:
TestCase, Milestone, Defect, DefectSuite, Blocker, Change, Task, or HierarchicalRequirement. | No |
| Rally server URL |
String | The Rally server URL | No |
| Reset |  | Button to delete all items retrieved from that integration | No |
|
Sample JSON |  | Button to get sample JSON from the first result of the specified WSAPI type | No |


|Back to ...||Latest Version|Rally ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[2.690437](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/Rally/ucr-plugin-rally-2.690437.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
