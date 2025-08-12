
File Utils for IBM UrbanCode Build
==================================

The File Utils plug-in includes steps that automate folder and file tasks as part of a deployment process.

For example, this plug-in includes steps for deleting or creating directories and for replacing tokens in a file.


Available Steps
---------------

Copy DirectoryCopies the contents of one directory to one or more other directories overwriting files, but not deleting any.

Create DirectoriesCreate a set of directories including parent directories.

Create FileCreate a file.

Create .zip FileCreate a .zip file.

Delete Files and DirectoriesDelete a set of files/directories.

Flip Line EndingsA step that allows you to flip line endings for all files that match the includes.

Monitor File ContentsMonitors a file for a token and continue when token appears or fail if not found in allotted time. The step ignores content that was present before the start of the step.

Move DirectoryMoves files to a destination.

Read Properties From XML FileParse an XML file to search for properties defined by element names.

Read Property FileRead properties from a file and sets them as output properties for this step.

Replace TokensReplace tokens in files using properties.

Synchronize DirectoriesMoves new files in source to destination and deletes files in destination not in source. Synchronization is based on the file time stamp.

Untar TarballExtract .tar file.

UnzipExtract .zip file.

Update INI FileUpdate Windows style INI file. This step can handle sections of properties.

Update Java Properties FileAdd, remove, and update properties in a Java properties file.

Update XML File with XPathUpdate XML files using XPath to locate items to edit.



|Back to ...||Latest Version||||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[44.754293](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/FileUtils/FileUtils-44.754293.zip)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
