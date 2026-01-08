# Cloud Foundry - Roles 

## CloudFoundryApp

Role for resources that represents a Cloud Foundry application within an organization and space in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.app | String | The Name of the Cloud Foundry application. | ``${p:resource/cf.app}`` |

## CloudFoundryController

Role for resources that represents a Cloud Controller in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.api | String | The url of the Cloud Foundry API endpoint. | ``${p:resource/cf.api}`` |
| cf.commandPath | String | The path to the directory where the cf command line executable resides. You may reference this property as cf.commandPath. | ``${p:resource/cf.commandPath}`` |
| cf.password | Password | The Cloud Foundry password to use. | ``${p:resource/cf.password}`` |
| cf.username | String | The Cloud Foundry username. | ``${p:resource/cf.username}`` |

## CloudFoundryOrganization

Role for resources that represents a Cloud Foundry organization in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.org | String | The Name of the Cloud Foundry organization. | ``${p:resource/cf.org}`` |

## CloudFoundrySpace

Role for resources that represents a Cloud Foundry space within an organization in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.space | String | The Name of the Cloud Foundry space. | ``${p:resource/cf.space}`` |
