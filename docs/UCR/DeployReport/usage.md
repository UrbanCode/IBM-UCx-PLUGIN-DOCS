
Deployment Reports - Usage
==========================

# Usage


### Usage




This plug-in is intended primarily as an example for plug-in developers. Select one of the two report
types, and then provide a comma-separated list of email addresses where the report should be sent. Finally, select
whether the report should be sent **Weekly**, **Monthly**, or **Unrestricted** (whenever the integration is run). If you
select **Weekly** or **Monthly**, the plug-in logic checks the time of the previous report and sends email only if
sufficient time has elapsed, regardless of the frequency at which the plug-in is run. When you test the plugin, set the
report frequency to **Unrestricted**, so that reports are sent whenever the plug-in is run.

To demonstrate the
capabilities of the plug-in, two additional functions are provided to generate a sample data set and to remove the
previously generated data. To use these functions, open the configuration window for the plug-in and then click **Create
Sample Data** or **Delete Sample Data**.


|Back to ...||Latest Version|Deployment Reports ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[7.1018228](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/DeployReport/ucr-plugin-deployment-reports-7.1018228.zip)|[Readme](README.md)|[Overview](overview.md)|[Settings](settings.md)|[Downloads](downloads.md)|
