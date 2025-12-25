# IBM MaaS360 - Process Steps

* [Request Authentication](#request_authentication)
* [Upgrade App](#upgrade_app)
* [Upgrade App Plus](#upgrade_app_plus)
* [Add iOS Mobile App](#add_ios_mobile_app)
* [Distribute APP](#distribute_app)
* [Get Device Groups](#get_device_groups)
* [Get App Details](#get_app_details)
* [Mark As Primary](#mark_as_primary)
## Request Authentication

Sends an HTTP call to a URL for Authentication Token

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing Identifier - Available after customer enrolls with MaaS360. | Yes |
| Platform ID | textBox | This should be the application platform id provided during application provisioning. | Yes |
| Application ID | textBox | Provided during application provisioning. | Yes |
| Application Version | textBox | Provided during application provisioning. | Yes |
| Application Access Key | textBox | Generated after the application has been provisioned. | Yes |
| MAAS Admin Username | textBox | For use with basic authentication. | Yes |
| MAAS Admin Password | secureBox | For use with basic authentication. | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Upgrade App

Sends a WebService call to Upgrade App

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing Identifier - Available after customer enrolls with MaaS360. | Yes |
| Account Name | textBox |  | Yes |
| MAAS Admin Username | textBox | For use with basic authentication. | Yes |
| MAAS Admin Password | secureBox | For use with basic authentication. | Yes |
| Auth Token | textBox | Token provided by the authentication web service called | Yes |
| MaaS360 Hosted | textBox | Provided during application provisioning. | Yes |
| Application Type | textBox | Possible values: 1: iOS Enterprise Application 3: Android Enterprise Application | Yes |
| Application Source | textBox | The ipa/apk file to be uploaded. | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| Additional version? | textBox | Whether to upload as primary or secondary version. Possible Values: Yes | No | Yes |
| App Version to Upgrade | textBox | Version of app to be upgraded, if more than one version is stored | Yes |
| App Attribute(s) | textAreaBox | Attribute name and values. | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Upgrade App Plus

Sends a WebService call to Upgrade App and allows you to specify maintaining as additional version

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing Identifier - Available after customer enrolls with MaaS360. | Yes |
| Account Name | textBox |  | Yes |
| MAAS Admin Username | textBox | For use with basic authentication. | Yes |
| MAAS Admin Password | secureBox | For use with basic authentication. | Yes |
| Auth Token | textBox | Token provided by the authentication web service called | Yes |
| MaaS360 Hosted | textBox | Provided during application provisioning. | Yes |
| Application Type | textBox | Possible values: 1: iOS Enterprise Application 3: Android Enterprise Application | Yes |
| Application Source | textBox | The ipa/apk file to be uploaded. | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| Additional version? | textBox | Whether to upload as primary or secondary version. Possible Values: Yes | No | Yes |
| App Attribute(s) | textAreaBox | Attribute name and values. | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Add iOS Mobile App

Sends a WebService call to Add Enterprise iOS App. Required to be MaaS360 Hosted for this Integration to work.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing Identifier - Available after customer enrolls with MaaS360. | Yes |
| MaaS360 Hosted | selectBox |  | Yes |
| Account Name | textBox |  | Yes |
| MAAS Admin Username | textBox | For use with basic authentication. | Yes |
| MAAS Admin Password | secureBox | For use with basic authentication. | Yes |
| Auth Token | textBox | Token provided by the authentication web service called | Yes |
| Application Source | textBox | The ipa/apk file to be uploaded. | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| Application Description | textAreaBox | The ipa/apk file to be uploaded. | Yes |
| Application Categories | textBox | Comma separated list of Categories | Yes |
| Remove App if under MDM | selectBox |  | Yes |
| Restrict Data Backup to iTunes | selectBox |  | Yes |
| Show in App Discovery Portal | selectBox | Relevant only If App Discovery Portal is enabled for the account | Yes |
| Email for App Owner | textBox | Email Address of the App Owner who needs to be intimated | Yes |
| App Attribute(s) | textAreaBox | Attribute name and values. | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Distribute APP

Send WS call to distribute app

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing Identifier - Available after customer enrolls with MaaS360. | Yes |
| Auth Token | textBox | Token provided by the authentication web service called | Yes |
| Application Type | textBox | Possible values: 1: iOS Enterprise Application 2: iOS App Store Application 3: Android Enterprise Application 4: Android Market Application | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| Target Devices | textBox | Possible values: 0: All Devices 1: Device Group 2: Specific Device | Yes |
| Device Group ID | textBox | Required if targetDevices = 1 | Yes |
| Device ID | textBox | Required if targetDevices = 2 | Yes |
| Instant Install? | textBox | Possible values: Yes, No; Relevant only for appType = 1 or 2 (For others, this value is ignored) | Yes |
| Send Email? | textBox | Possible values: Yes, No | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Get Device Groups

Get all Device Groups (Public, Private and MaaS360 defined) for the currently logged-in Administrator

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing ID of the account for which the web-service is being executed | Yes |
| Auth Token | textBox | Token provided by the authentication web service | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Get App Details

Return all details of the Applications (only supported for Active Apps)

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing ID of the account for which the web-service is being executed | Yes |
| Auth Token | textBox | Token provided by the authentication web service | Yes |
| Application Type | textBox | Possible values: 1: iOS Enterprise Application 2: iOS App Store Application 3: Android Enterprise Application 4: Android Market Application | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

## Mark As Primary

Mark a particular version of App as primary

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| URL | textBox | The Root WS URL to send the HTTP call. Should look like https://services.fiberlink.com/. Get the URL for your MaaS instance from Fiberlink | Yes |
| Billing ID | textBox | Billing ID of the account for which the web-service is being executed | Yes |
| Auth Token | textBox | Token provided by the authentication web service | Yes |
| Application Type | textBox | Possible values: 1: iOS Enterprise Application 2: iOS App Store Application 3: Android Enterprise Application 4: Android Market Application | Yes |
| Application Bundle ID | textBox | The ipa's Bundle ID. | Yes |
| App Version to Upgrade | textBox | Version of app to be upgraded, if more than one version is stored | Yes |
| Output File | textBox | If a file name is provided, the response body will be written to that file. The file name is relative to the working directory. | No |

