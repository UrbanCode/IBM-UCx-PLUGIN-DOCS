
Jenkins for IBM UrbanCode Release - Steps
=========================================

# Steps


### Steps



Process steps in the Jenkins Plugin plug-in
-------------------------------------------

*
[CheckConnectionButton](#checkconnectionbutton)
* [ExecuteTask](#executetask)
* [Integration](#integration)



CheckConnectionButton
---------------------

Check Connection

This step has no input properties.

ExecuteTask

-----------

Execute Automated Task.

This step has no input properties.

Integration
-----------

Use this step to
integrate with the Jenkins server.


| Name | Type | Description | Required | Property Name |
| --- | --- | --- | ---
| --- |
| Check Authentication |  | Check that the connection can be established with the Jenkins Server. | No |
checkConnectionButton |
| HTTP Request Timeout | String | The number of seconds to wait before a timeout occurrs for
requests made to UrbanCode Release or Jenkins to avoid the integration to hang. The default is none.
| No | timeout |

| Jenkins API Token | Password | The Jenkins API token. | Yes | jenkinsAPIToken |
| Jenkins Host Name | String | The
host name of the Jenkins server. | Yes | jenkinsHostName |
| Jenkins Password | Password | The password used to
authenicate with the Jenkins server. | Yes | jenkinsPassword |
| Jenkins User | String | The user name to authenicate
with the Jenkins server. | Yes | jenkinsUser |



|Back to ...||Latest Version|Jenkins for IBM UrbanCode Release ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[2.1124702](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-jenkins-ci/plugins-ucr-jenkins-ci-2.1124702.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
