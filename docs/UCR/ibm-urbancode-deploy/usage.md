
IBM UrbanCode Deploy - Usage
============================

# Usage


### Usage




The UrbanCode Deploy plug-in simplifies integration with the UrbanCode Deploy server. Integration
with IBM UrbanCode Deploy allows you to import and monitor deployment of applications defined in UrbanCode Deploy. After
communication is established between the two servers, you can import UrbanCode Deploy objects into UrbanCode Release,
such as applications, components, component versions, snapshots, environments, and deployment processes. You can also
schedule automatic execution of UrbanCode Deploy deployment processes from UrbanCode Release deployments.

Initially, a
full synchronization is needed to import all objects from IBM UrbanCode Deploy. Subsequent imports can be scheduled for
a regular interval and only objects that have changed since the last import are updated. Subsequent imports run in the
background. The initial full synchronization will take several minutes and subsequent synchronizations a few seconds.
After the data is imported into UrbanCode Release, you can monitor the lifecycle for the UrbanCode Deploy applications.



|Back to ...||Latest Version|IBM UrbanCode Deploy |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[10.1175503](https://github.com/UrbanCode/IBM-UCR-PLUGINS/blob/main/files/ucr-plugin-deploy/ucr-plugin-deploy-10.1175503.zip)|[Readme](README.md)|[Overview](overview.md)|[Settings](settings.md)|
