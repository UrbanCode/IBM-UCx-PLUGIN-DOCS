
XL Deploy - Usage
=================

# Usage


### Usage




You can use the XL Deploy plug-in IBM UrbanCode Release to create an integration with an XL Deploy
server. The plug-in imports applications, environments, deployment packages, and deployment tasks from the XL Deploy
server as objects into the UrbanCode Release server.

Use the plug-in steps to automate the integration and
synchronization task between the two servers. The first time the plug-in executes, a full synchronization is performed.
Subsequent full synchronizations are performed based on the **Full Sync Interval** step property for the plug-in. The
default value is to run a full synchronization every 24 hours. You can change this value.

Delta synchronizations are
based on objects that were modified since the last time the plug-in ran. When a delta synchronization executes only
objects that have been modified since the last time the plug-in ran are imported. A delta synchronization does not
detect items that have been deleted from the XL Deploy server, which is why it is useful to run a full synchronization
on an interval.

You can also execute XL Deploy deployment tasks from UrbanCode Release using this plug-in.

###
Demonstration

View a [demonstration](https://youtu.be/FJ5Ta2dSTm4) of the UrbanCode Release XL Deploy plug-in.


|Back to ...||Latest Version|XL Deploy ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[6.1039808](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-xl-deploy/plugins-ucr-xl-deploy-6.1039808.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
