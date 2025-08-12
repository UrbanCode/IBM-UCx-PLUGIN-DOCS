
Rational Team Concert v6 - Settings
===================================

# Settings


### Settings




The following integration settings are available when you install the Rational Team Concert plug-
in.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check Authentication |  | Button to check
if the connection can be established with the RTC Server | No |
| Configuring an integration provider for Rational Team
Concert |  | Importing many work items from Rational Team Concert can take a significant amount of time. When IBM
UrbanCode Release polls Rational Team Concert to import work items, only items that are modified are imported. For this
reason, the first time the import process runs, it can take a long time if there are many work items to import.
Subsequent import processes can take less time. By default, a maximum of 1,000 work items are returned by a Rational
Team Concert query. | No |
| Consumer Key | Password | Consumer Key | No |
| Consumer Secret | Password | Consumer
Secret | No |
| Initiatives |  | Check all work item types that you want to convert into Initiatives in UrbanCode
Release. | No |
| Ping the RTC Server |  | Button to check if the connection can be established with the RTC Server | No
|
| RTC Project Area |  | Project Area | No |
| RTC Query |  | Query | No |
| RTC server URL | String | The RTC server
URL | No |
| Remove all items imported |  | Button to delete all items retrieved from that integration | No |


| Name
| Type | Description | Required |
| --- | --- | --- | --- |
| Check Authentication |  | Button to check if the
connection can be established with the RTC Server | No |
| Configuring an Integration Provider for Rational Team Concert
using the RTC Client Plain API |  | Importing many work items from Rational Team Concert can take a significant amount
of time. Nevertheless performances are better than the OSLC Integration. When IBM UrbanCode Release polls Rational Team
Concert to import work items, only items that are modified are imported. For this reason, the first time the import
process runs, it can take a long time if there are many work items to import. Subsequent import processes can take less
time. There is no limit in the number of workitems to import for the RTC Client Integration, while the OSLC Integration
is limited to 1000 items per query. | No |
| Initiatives |  | Check all work item types that you want to convert into
Initiatives in UrbanCode Release. | No |
| Ping the RTC Server |  | Button to check if the connection can be established
with the RTC Server | No |
| RTC Project Area |  | Project Area | No |
| RTC Query |  | Query | No |
| RTC server URL |
String | The RTC server URL | No |
| Remove all items imported |  | Button to delete all items retrieved from that
integration | No |
| User Login | String | User Login | No |
| User Password | Password | User Password | No |


|
Name | Type | Description | Required |
| --- | --- | --- | --- |
| Application Mapping |  | Map Applications to the
selected RTC Concept | No |
| Associate applications to the release automatically | Boolean | If a change imported is
mapped to an application and a release and that application has not been added to the release yet, it will add that
application to the list of participating applications for that release. | No |
| Check Authentication |  | Button to
check if the connection can be established with the RTC Server | No |
| Configuring an Integration Provider for Rational
Team Concert using the RTC Client Plain API |  | Importing many work items from Rational Team Concert can take a
significant amount of time. Nevertheless performances are better than the OSLC Integration. When IBM UrbanCode Release
polls Rational Team Concert to import work items, only items that are modified are imported. For this reason, the first
time the import process runs, it can take a long time if there are many work items to import. Subsequent import
processes can take less time. There is no limit in the number of workitems to import for the RTC Client Integration,
while the OSLC Integration is limited to 1000 items per query. | No |
| Import if Unassigned | Boolean | Import if
Unassigned | No |
| Import if Unassigned | Boolean | Import if Unassigned | No |
| Initiatives |  | Check all work item
types that you want to convert into Initiatives in UrbanCode Release. | No |
| Mapping IBM UrbanCode Release Concepts to
Rational Team Concert Concepts |  | Releases and Applications can be mapped automatically by name to any custom field
defined in RTC. | No |
| Ping the RTC Server |  | Button to check if the connection can be established with the RTC
Server | No |
| RTC Project Area |  | Project Area | No |
| RTC Query |  | Query | No |
| RTC server URL | String | The
RTC server URL | No |
| Release Mapping |  | Map Releases to the selected RTC Concept | No |
| Remove all items imported
|  | Button to delete all items retrieved from that integration | No |
| User Login | String | User Login | No |
| User
Password | Password | User Password | No |


|Back to ...||Latest Version|Rational Team Concert v6 ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[3.969559](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/RTC/ucr-plugin-rtc-3.969559.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
