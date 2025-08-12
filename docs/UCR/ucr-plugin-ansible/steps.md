
Ansible Tower - Steps
=====================

# Steps


### Steps



Process steps in the Ansible Tower Plugin plug-in
-------------------------------------------------

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

Integration



| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Authentication Token | Password | The authentication token to use to connect to the Ansible Tower server which is created on Ansible Tower | Yes | deployToken |
| Check Authentication |  | Click to check whether a connection can be established with the Ansible Tower | No | checkConnectionButton |
| HTTP Request Timeout | String | Timeout in seconds for requests made to UrbanCode Release or Ansible Tower to avoid the integration to hang indefinitely. The default is none. | No | timeout |
| Server Host Name | String | The fully-qualified URL of the Ansible Tower server. | Yes | deployHostName |


|Back to ...||Latest Version|Ansible Tower ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[3.1145832](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-ansible/ucr-plugin-ansible-tower-3.1145832.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
