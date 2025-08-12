
Jenkins for IBM UrbanCode Release - Usage
=========================================

# Usage


### Usage


To use the Jenkins plug-in it must be loaded and an integration created. From the Home page, click
**Integrations**. If the plug-in is not listed click **Upload Plugin**. Complete the information needed to load the
plug-in onto the UrbanCode Release server. After the plug-in is loaded, click the **Integrations** tab to define the
connection to the Jenkins server. See the **Integration** step on the Steps page for property descriptions.


Initially, a full synchronization occurs to import all jobs from Jenkins. Subsequent imports can be scheduled for a
regular interval and only objects that have changed since the last import are updated. Subsequent imports run in the
background. After an import is complete, the Jenkins jobs can included in a deployment by selecting the **Add Task** >
**Plugin Task**. Click the drop-down arrow for the **Task** field to select a job.


|Back to ...||Latest Version|Jenkins for IBM UrbanCode Release ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[2.1124702](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-jenkins-ci/plugins-ucr-jenkins-ci-2.1124702.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
