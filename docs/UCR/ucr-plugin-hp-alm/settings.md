
HP Quality Center (ALM) - Settings
==================================

# Settings


### Settings




### Process steps in the HP ALM Plugin plug-in

* [ALM Integration](#alm_integration)
*
[ALMCheckAuthenticationButton](#almcheckauthenticationbutton)
* [ALMDefectSeverities](#almdefectseverities)
*
[ALMDefectStatuses](#almdefectstatuses)
* [ALMDeleteAllChanges](#almdeleteallchanges)
* [ALMDomains](#almdomains)
*
[ALMPingServerButton](#almpingserverbutton)
* [ALMProjects](#almprojects)
* [ALMReleases](#almreleases)
*
[ALMReleases](#almreleases)
* [ALMReqSeverities](#almreqseverities)
* [ALMReqStatuses](#almreqstatuses)
*
[ALMTypes](#almtypes)


### ALM Integration

Integration


| Name | Type | Description | Required |
| --- | --- |
--- | --- |
| ALM Domain |  | Domain on ALM server | No |
| ALM Project |  | Project on ALM server | No |
| ALM User
Login | String | User Login | No |
| ALM User Password | Password | User Password | No |
| ALM server URL | String | The
ALM server URL | No |
| Automap Releases | Boolean | Check this box to automap any releases on the HP ALM server that
exist with the same name of a release on the Urbancode Release server.
| No |
| Check Authentication |  | Button to
check if the connection can be established with the HP ALM Server | No |
| Configuring an Integration Provider for HP
ALM using the HP ALM Rest API |  | Run this integration to import any requirements or defects from the HP ALM server.
Only the specified requirement types or defects will be imported, and only items that have been modified since the last
exectuion are imported. However, running the integration for the first time can take a long time if there are many items
to import.
| No |
| Delete All Changes |  | Button to and delete all existing HP ALM changes on the Urbancode Release
server.
| No |
| Ping the ALM Server |  | Button to check if the connection can be established with the HP ALM Server
| No |
| Query Types |  | Check all requirement types or defects that you want to query for. | No |

###
ALMCheckAuthenticationButton

Check authentication credentials with the HP ALM Server

This step has no input
properties.

### ALMDefectSeverities

Generate a list of defect severities that exist on the ALM server.

This step
has no input properties.

### ALMDefectStatuses

Generate a list of defect statuses that exist on the ALM server.


This step has no input properties.

### ALMDeleteAllChanges

Delete all existing HP ALM changes on the UCR server.


This step has no input properties.

### ALMDomains

Generate a list of domains on the ALM server.

This step has no
input properties.

### ALMPingServerButton

Ping the ALM Server

This step has no input properties.

### ALMProjects


Generate a list of projects on the ALM server.

This step has no input properties.

### ALMReleases

Generate a
list of releases in a given Domain and Project on an ALM server.

This step has no input properties.

### ALMReleases


Generate a list of releases in a given Domain and Project on an ALM server.

This step has no input properties.


### ALMReqSeverities

Generate a list of requirement severities that exist on the ALM server.

This step has no input
properties.

### ALMReqStatuses

Generate a list of requirement statuses that exist on the ALM server.

This step has
no input properties.

### ALMTypes

Generate a list of all requirement types and/or defects on the HP ALM server.


This step has no input properties.



|Back to ...||Latest Version|HP Quality Center (ALM) |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[5.942932](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-hp-alm/HP-ALM-5.942932.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
