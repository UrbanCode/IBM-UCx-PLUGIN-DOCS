
# IBM InfoSphere DataStage - Overview


This plug-in includes steps to import and export .isx and .dsx files, list a .dsx file contents, and compile DataStage projects. This plug-in communicates with various command-line tools, such as: istool and dscc. Each step will require one DataStage tool. Please consult the Knowledge Center if you do not know where the required executable is located on your system.

To add the IBM InfoSphere DataStage plug-in steps to processes, click **InfoSphere> DataStage** in the step palette of the process editor.

## Compatibility

The IBM DevOps Deploy automation plug-in for IBM InfoSphere DataStage versions 8.1 and higher. This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

## History

### Version 10

*Made correction for default values of few attributes
*URBANCODE-I-486: Enhancing plugin to handle false import error from DataStage.

### Version 9

Fixes APAR PH02989 - Delete asset not working.

### Version 8

* Fixes APAR PI99404Added options to configure the -qs and -qspa flags for the dscc command in the Compile Job or Routine step.
* RFE 103645Added the Delete Assets step.
* The Default value of the Abort After # Errors property in all istool steps will no longer cause errors.
* The Export ISX Project will create archives with the timestamp instead of a random number.

### Version 7

* Fixes APAR PI8647Export ISX Project and Import ISX Project steps fail with Unknown Operation error.

### Version 6

The following update has been made to the Export and Import DSX Project steps:

* RFE 94749Allow the user to enable the creation of a log file, to which the DataStage script output will be written.

### Version 5

The following updates have been made to the Export and Import ISX Project steps:

* Fixes APAR PI79600Updated spacing and quotations.
* All properties are now trimmed.
* Updated success and error responses.

The following updates have been made to the Export ISX Project steps:

* Removed extraneous maxArchiveSize property.
* Updated how the archive file names are generated.
* Generated archive file names are saved as Output Properties.
* If the -nodesign flag is set, -includeexecutable will be set automatically.

### Version 4

Fixed the following bugs with the Export and Import ISX Project steps:

* Fixes APAR PI76696Invalid spacing for additional arguments.
* The istool path is now used properly to run the istool script.
* Small updates to reading in .dsx, .xml, or .isx files.

### Version 3

Support property file encryption.

### Version 2

Added functionality for importing and exporting .isx files. Support added to either warn or crash if a file is not found for DSX Import Service step. MissingMethodException error has been resolved for the DSX Import Service step.

### Version 1

Initial Release. Added functionality for importing and export .dsx files, listing .dsx contents, and compiling DataStage projects.


|Back to ...||Latest Version|IBM InfoSphere DataStage ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[10.1164467](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/datastage/ucd-datastage-10.1164467.zip)|[Readme](README.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
