
Jira for IBM UrbanCode Release - Overview
=========================================

# Overview


### Overview



The JIRA Software plug-in for IBM UrbanCode Release provides visibility into JIRA Software work items
from the impact analysis view of IBM UrbanCode Release.

### Step palette

To access this plug-in in the palette,
click **Change**.

### Compatibility

* This plug-in requires version 6.2 or later of JIRA Software
* This plug-in
requires version 6.2.5.1 or later of IBM UrbanCode Release.

### Installation

No special steps are required for
installation. See [Installing plug-ins in UrbanCode products](https://www.urbancode.com/resource/installing-plug-ins-in-
urbancode-products/).

### History

#### Version 18

* Option to map Jira Status Category to UCR status

####
Version 17

* Resolved the Out of Memory error when running a full integration



#### Version 16

* Adding Jira
Project IDs field under Application Mapping for considering specified Projects for issue search.

#### Version 15

*
APAR PH17367 UCR application mapping select box to be scripted.

#### Version 14

* Custom Issue Types bug fixes; Now
can exclude Jira Issue Types from being imported

#### Version 13

* Custom Issue Types are now using a custom field


#### Version 12

* Custom Issue Types are now imported as initiatives, and this uses custom issue links to associate
changes.

#### Version 11

* Now imports Jira Releases as UCR Releases

#### Version 10

* Enhancements to Epics as
Initiatives

#### Version 9

* Added the ability to import Jira epics as UCR Initiatives. Child Jira tickets will be
imported and associated to the proper initiative.

#### Version 8

* All property lists are now alphabetically sorted.

* Resolved an error occurring when the mapped JIRA Release did not have a valid Release Date.

#### Version 7

*
Added support for mapping JIRA Projects and Components as UCR Applications.
* One Change in UrbanCode Release will be
created for every Project and Component found on an Issue.
* The Auto Map Applications checkbox has been removed. The
same functionality can be found using the value `Project` in Auto Map Applications dropdown value.
* In the Manual
Mapping selection boxes, to differentiate from Project or conflicting Component names, Components are named using the
following syntax: `Project: Component`.

#### Version 6

Added proxy support.

#### Version 5

* Resolve assignment
of the NONE severity.
* Mitigate NullPointerException for non existent JIRA Priority.

#### Version 4

Delete plug-in
created Initiatives with the Reset Button.

#### Version 3

Multiple updates have been made to the version 3 release:


* Update to Application resolves.
* Changes are only created in IBM UrbanCode Release when a mapped Release is found.

* JIRAs Fix Version/s property is now supported as a possible value. If more than one Fix Version is identified, the
closest Target Date will be mapped in UrbanCode Release.

#### Version 2

Support property file encryption.

####
Version 1

This is the initial release of the plug-in.


|Back to ...||Latest Version|Jira for IBM UrbanCode Release |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[18.1079383](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-jira/ucr-plugin-jira-18.1079383.zip)|[Readme](README.md)|[Settings](settings.md)|[Downloads](downloads.md)|
