# z/OS Dataset Writer - Overview


The z/OS Dataset Writer plug-in helps you copy text to a mainframe dataset.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

## History

### Version 4

* Enhancement to accept multiple datasets or files as input
* Minor Improvements
* Fixed security issue CVE-2021-29425
* Fixed Jettison Vulnerability

### Version 3

> __Note while upgrading plugin from older versions to version 3:__
> 
> Sequential output dataset must be enclosed in single quotes for a fully qualified dataset. If the single quotation marks are omitted, the user’s dataset prefix from the TSO profile is automatically appended to the front of the dataset name.

* Enhancement to accept source as PDS member or sequential dataset or USS File

### Version 2

* Fixed issue with GDG version creation

#### Version 1

* Initial release (November 11, 2021)

|          Back to ...          |                                |                                                                   Latest Version                                                                    | z/OS Dataset Writer ||||
|:-----------------------------:|:------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [4.1176024](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/zos-dataset-writer/ucd-plugins-zos-dataset-writer-4.1176024.zip) | [Readme](README.md) |[Steps](steps.md)|[Usage](usage.md)|[Downloads](downloads.md)|
