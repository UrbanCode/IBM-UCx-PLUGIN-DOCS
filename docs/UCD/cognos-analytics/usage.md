
# IBM Cognos Analytics - Usage

The IBM Cognos Analytics plug-in contains two steps:

* The **Export** step exports content from the Cognos content store into a ZIP file. The ZIP file can be found in the `*Cognos\_installation\_directory*/deployment` directory.
* The **Import** step imports the content from a ZIP file into the content store. Any existing content with the same name is overwritten and the new content is owned by the specified user. The ZIP file must be in the`*Cognos\_installation\_directory*/deployment` directory.

## **Step palette**

To access this plug-in in the palette, click **Reporting > Cognos Analytics**.

## Use cases

The following use cases describe simple use of the plug-in export and import functions.

### Export

Below are the steps for a typical export process.

1. Use the **Export** step to put content into a ZIP file.
2. Copy the ZIP file from the `/deployment` directory to the agent working directory. You can use a shell command step to perform this step.
3. Create a new component version using the ZIP file as the version artifact.

### Import

Below are the steps for a typical import process.

1. Download component artifacts from the DevOps Deploy server to the agent working directory.
2. Use a shell command step to copy the ZIP file to the `deployment` directory.
3. Use the **Import** step to import the content from the zip archive into the specified Cognos content store.

|Back to ...||Latest Version|IBM Cognos Analytics ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.1107117](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cognos-analytics/Cognos-Analytics-1.1107117.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
