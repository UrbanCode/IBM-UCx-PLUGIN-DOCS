
# File Utils - Troubleshooting


* [Copy Directory on Windows](#copy-directory-on-windows)


## Copy Directory on Windows



Due to the innate case insensitivity of the Windows OSs file system, the Copy Directory step cannot support the renaming of files or folders when the same case-insensitive file or folder name exists in the destination directory. This inability holds true whether the file or folder is being renamed in place or in a different destination directory. This issue is documented in [Apache Ants Copy step](https://ant.apache.org/manual/Tasks/copy.html).

## Work Arounds

If you intend to rename a file or folder in a destination folder, then delete the file first in the destination directory before the files and folders are copied.

If you intend to rename a file or folder in place, then you cannot delete first otherwise the source item will be gone. In this case, you will need to use a temporary directory. First copy the files into the temporary directory, delete the source files, and then move the temporary directory files back into the original location. You can rename the files in either the first or second copy step.


|          Back to ...          |                                |                                                         Latest Version                                                          |     File Utils      |||||
|:-----------------------------:|:------------------------------:|:-------------------------------------------------------------------------------------------------------------------------------:|:-------------------:| :---: | :---: | :---: | :---: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [100.1176430](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/FileUtils/ucd-FileUtils-100.1176430.zip) | [Readme](README.md) |[Overview](overview.md)|[Usage](usage.md)|[Steps](steps.md)|[Downloads](downloads.md)|
