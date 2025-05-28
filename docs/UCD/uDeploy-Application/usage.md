
# IBM DevOps Deploy Applications - Usage

## Create Multiple Applications

The Create Multiple Applications step provides the ability to create multiple applications using one JSON file or JSON text body. The format of this JSON body follows the IBM DevOps Deploy createApplicationFromTemplate REST endpoint. The documentation for this endpoint can be found in the knowledge center: [IBM DevOps Deploy createApplicationFromTemplate REST endpoint](https://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.7/com.ibm.udeploy.api.doc/topics/rest_cli_application_createapplicationfromtemplate_put.html)

To create multiple applications, create multiple JSON application objects inside of a JSON array as follows:  `[{"name": "Application One", "notificationScheme": "DEFAULT"}``, {"name": "Application Two", "notificationScheme": "DEFAULT"}``, {"name": "Application Three", "notificationScheme": "DEFAULT"}``]`


|Back to ...||Latest Version|IBM DevOps Deploy Applications ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[87.1155713](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Application/ucd-uDeploy-Application-87.1155713.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
