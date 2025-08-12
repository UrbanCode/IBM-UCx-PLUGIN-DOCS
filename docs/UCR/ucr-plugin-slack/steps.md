
Slack for IBM UrbanCode Release - Steps
=======================================

# Steps

### Resources

—-

To use the Slack plug-in you must define the integration and configure the
notification messages to be sent to the channel.

### **Step palette**

To access this plug-in in the palette, click **Tools** > **Notification**.

Process steps in the Slack Plugin plug-in
-----------------------------------------

* [EventNotification](#eventnotification)
* [Notification](#notification)

*
[SlackPluginConfiguration](#slackpluginconfiguration)

EventNotification
-----------------

Slack Event Notification

This step has no input properties.

Notification
------------

Use this step to send Slack notifications.

|
Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Message | String | The message
to post on the Slack channel. | No | message |
| Slack Hook URL | String | The Slack webhook URL. For example:
<https://hooks.slack.com/services/xxxx>. | No | hookUrl |

SlackPluginConfiguration
------------------------

Use this
step to configure Slack notifications.

| Name | Type | Description | Required | Property Name |
| --- | --- | --- | --- | --- |
| Deployment Cancellation Message | String | The message to post when the deployment is canceled. | No | AtDeploymentAbort |
| Deployment Creation Message | String | The message to post when the deployment is created. | No | AtDeploymentCreated |
| Deployment End Message | String | The message to post when the deployment ends. | No | AtDeploymentEnd |
| Deployment Failure Message | String | The message to post when the deployment fails. | No | AtDeploymentFailure |
| Deployment Start Message | String | The message to post when the deployment starts. | No | AtDeploymentStart |
| HTTP Proxy Host | String | The hostname of the HTTP proxy used to connect to Slack. For example: proxy.domain.com. | No | proxyHost |
| HTTP Proxy Password | Password | The password to authenticate with the HTTP proxy. | No | proxyPass |
| HTTP Proxy Port | String | The port number of the HTTP proxy to use to connect to Slack. | No | proxyPort |
| HTTP Proxy Username | String | The user name to authenticate with the HTTP proxy. | No | proxyUser |
| Host Authentication Token | Password | The authentication token to use to create a channel, invite people, and obtain the user’s data.| No | hostToken |
| Message | String | The message to post on the channel. | No | message |
| Phases | String | The phases for which notifications are sent. | No | releasePhases |
| Release and phase names to apply notifications |  | The list of phases and releases that send notifications to the Slack channel. Seperate each list item with a comma. Leave this field blank to always send notifications. | No | includeInstructions |
| Releases | String | The releases for which notification are sent. | No | releaseNames |
| Scheduled Deployment Notifications |  | The scheduled deployment events for which notifications are sent. | No | deploymentInstructions |
| Slack Notification Plug-in Configuration |  | This plug-in triggers notifications to be sent to a slack channel. | No | intro |
| Slack Webhook URL | String | The URL of the Slack webhook. For example: <https://hooks.slack.com/services/xxxx>. | No | hookUrl |
| Task Failure Message | String | The message to post when a task fails. | No | AtTaskFailure |
| Task Notifications |  | The notification content to send to a slack channel when a specific task events occur. | No | taskNotifications |
| Teams to notify | String | The teams to notify when a deployment is started. | No | teamNames |

Example
-------

The
following example can be used as a template for the message to be sent to the slack channel at deployment start.

```

"Deployment has started!
*``${sd.displayName}``*
Link: ``${sd.link}``
Release: ``${sd.release.name}``

Phase: ``${sd.phase.phaseModel.name}``
Status: ``${sd.statusText}``
State: ``${sd.statusState}``
Note:
``${sd.notes}``
Versions:
``${sd.appAndVersions}``

```

|Back to ...||Latest Version|Slack for IBM UrbanCode Release ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[3.1105509](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/ucr-plugin-slack/ucr-plugin-slack-3.1105509.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
