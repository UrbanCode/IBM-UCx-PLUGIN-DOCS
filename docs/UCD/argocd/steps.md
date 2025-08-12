
# Argo CD - Process Steps

* [App Create](#app-create)
* [App Get](#app-get)
* [App Rollback](#app-rollback)
* [App Set](#app-set)
* [App Sync](#app-sync)
* [Login](#login)
* [AppSet Create](#appset-create)
* [AppSet Delete](#appset-delete)
* [AppSet List](#appset-list)
* [AppSet Get](#appset-get)


## App Create

Create an Argo CD application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Application Name | String | The name of the Argo CD application to create. | Yes |
| Additional application create flags | String | A list of flags to set when running the application create step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |

## App Get

Get information about an Argo CD application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Application Name | String | The name of the Argo CD application to get information on. | Yes |
| Additional application get flags | String | A list of flags to set when running the application get step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |


## App Rollback

Rollback an Argo CD application to a previous deployed version.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Application Name | String | The name of the Argo CD application to rollback. | Yes |
| Argo CD Application History ID | String | The Argo CD application history ID to rollback to. | Yes |
| Additional application rollback flags | String | A list of flags to set when running the application rollback step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |

## App Set

Set Argo CD application parameters.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Application Name | String | The name of the Argo CD application to modify. | Yes |
| Additional application set flags | String | A list of flags to set when running the application set step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |

## App Sync

Sync an Argo CD application.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Application Name | String | The name of the Argo CD application to sync. | Yes |
| Additional application sync flags | String | A list of flags to set when running the application sync step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |
| Component Template | String | The name of the Argo CD application to sync. | Yes |


## Login

Login to an Argo CD instance.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD Server | String | The name or IP address of the Argo CD server to login to. | Yes |
| User Name | String | The username of an account to authenticate. | Yes |
| Password | String | The password of an account to authenticate. | Yes |
| Additional login flags | String | A list of flags to set when running the login step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes |


## AppSet Create

Create one or more Argo CD ApplicationSets.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD ApplicationSet Configuration Filename or URL | String | Configuration filename or URL used to create the ApplicationSet. | Yes |
| Additional appset create flags | String | A list of flags to set when running the appset create step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes | 


## AppSet Delete

Delete one or more Argo CD ApplicationSets.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Name(s) of Argo CD ApplicationSet(s) | String | A list of ApplicationSet name(s) to delete.   Specify each name on a new line. | Yes |
| Additional appset delete flags | String | A list of flags to set when running the appset delete step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes | 


## AppSet List

List one or more Argo CD ApplicationSets.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional appset list flags | String | A list of flags to set when running the appset list step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes | 

## AppSet Get

Get Argo CD ApplicationSet.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Argo CD ApplicationSet Name | String | The name of the Argo CD ApplicationSet to get. | Yes |
| Additional appset get flags | String | A list of flags to set when running the appset get step.  For example: '--config=path'. Specify each flag on a new line.  If the flag takes an argument, put the argument on a separate line or use an equal '=' (not whitespace) between the flag and argument. | Yes | 


|Back to ...||Latest Version|Argo CD ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[4.1167795](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/argocd/ucd-plugins-argocd-4.1167795.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
