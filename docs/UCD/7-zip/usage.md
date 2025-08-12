# 7-Zip - Usage

7-Zip is an open source file compression and expansion utility that uses a variety of compression algorithms.

## **Providing Example Usage for 7-Zip Plug-in Step:**

- [Extract archive](#extract-archive)

### Extract archive

Here is how to use the plugin:

1. Install the agent on the computer that houses the 7zip archive(s) needing extraction.
2. Upload the downloaded 7zipPlugin compressed archive(.zip) file as a plugin into Deploy UI, under "Settings" tab -> "Automation Plugins" -> "Load Plugin".
3. Click the "Processes" tab.
4. Press the "Create New Process" button.
5. Give the process a name.
6. Press the "Save" button.
7. Under the "Design" tab of the process, locate the "Extract archive" step under System Utility -> 7zip.
8. Drag over the "Extract archive" step.
9. Enter a value for "Extract Directory" and edit any other parameters as needed.
10. Press the "Save" button.
11. Drag an arrow from "Start" to "Extract archive" and from "Extract archive" to "Finish".
12. Press the "Save" button under Tools.
13. Press the "Close" button on the dialog box that opens.
14. On your file system, place the 7zip archive(s) into the agent's current working directory + the process name from step 5) + the directory offset optionally enter in step 9). For example, it could be: The current working directory of the agent is "C:\Program Files\agent\var\work" The name of the process is "7zipProcess" The value of the directory offset is "MyOffset" The name of the archive is "MyArchive.7z" Meaning the absolute path is C:\Program Files\agent\var\work\7zipProcess\MyOffset\MyArchive.7z Note: This step may require you to create folders.
15. Go back to the "Processes" tab.
16. Press "Run" on the row of your newly created process.
17. Select your resource from the drop down menu.
18. Press the "Submit" button.


|          Back to ...          |                                |                                                          Latest Version                                                          |                     |                         |                         |               |
|:-----------------------------:|:------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------:|:-------------------:|:-----------------------:|:-----------------------:|:-------------:|
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [2](https://github.com/UrbanCode/7-Zip-UCD/releases/download/2.38a023d/7-Zip-UCD-v2.38a023d.zip)  | [Readme](README.md) | [Downloads](downloads.md) | [Overview](overview.md) | [Steps](steps.md) |
