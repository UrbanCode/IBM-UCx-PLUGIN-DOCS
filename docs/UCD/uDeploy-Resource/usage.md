
# IBM DevOps Deploy Resources - Usage

## Create Multiple Resources

The Create Multiple Resources step provides the ability to create multiple resources using one JSON file or JSON text body. The format of this JSON body follows the IBM DevOps Deploy resource/create REST endpoint. The documentation for this endpoint can be found in the knowledge center: [IBM DevOps Deploy create/resource REST endpoint](https://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.7/com.ibm.udeploy.api.doc/topics/rest_cli_resource_create_put.html)

To create multiple resources, create multiple JSON resource objects inside of a JSON array as follows:  `[{"name": "Name for the resource.", "agent": "(Optional) Name or ID of an agent to use for automation.", "agentPool": "(Optional) Name or ID of an agent pool to use for automation.", "parent": "(Optional) ID or path to parent resource.", "role": "(Optional) Name or ID of a resource role.", "componentTag": "(Optional) Name or ID of a component tag."}``, {"name": "Name for the resource.", "agent": "(Optional) Name or ID of an agent to use for automation.", "agentPool": "(Optional) Name or ID of an agent pool to use for automation.", "parent": "(Optional) ID or path to parent resource.", "role": "(Optional) Name or ID of a resource role.", "componentTag": "(Optional) Name or ID of a component tag."}``]`


|Back to ...||Latest Version|IBM DevOps Deploy Resources ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[86.1155708](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Resource/ucd-uDeploy-Resource-86.1155708.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
