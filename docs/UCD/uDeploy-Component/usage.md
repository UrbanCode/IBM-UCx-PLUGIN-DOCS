
# IBM DevOps Deploy Components - Usage

## Create Multiple Components

The Create Multiple Components step provides the ability to create multiple components using one JSON file or JSON text body. The format of this JSON body follows the IBM DevOps Deploy component/create REST endpoint. The documentation for this endpoint can be found in the knowledge center: [IBM DevOps Deploy component/create REST endpoint](https://www.ibm.com/support/knowledgecenter/SS4GSP_6.2.7/com.ibm.udeploy.api.doc/topics/rest_cli_component_create_put.html)

To create multiple components, specify multiple JSON component objects inside of a JSON array as follows:  `[{"name": "Component One", "sourceConfigPlugin": "File System", "defaultVersionType": "INCREMENTAL", "importAutomatically": "TRUE", "useVfs": "TRUE", "properties": {"FileSystemComponentProperties\/basePath" : "/opt/test", "FileSystemComponentProperties\/extensions" : ".txt"}`` }``, {"name": "Component Two", "sourceConfigPlugin": "Maven", "defaultVersionType": "FULL", "importAutomatically": "TRUE", "useVfs": "TRUE", "properties": {"MavenComponentProperties\/artifactId":"MyArtifact", "MavenComponentProperties\/groupId":"MyGroup", "MavenComponentProperties\/extension":"ext", "MavenComponentProperties\/repoUrl":"http:\/\/myserver.com"}`` }``]`


|Back to ...||Latest Version|IBM DevOps Deploy Components ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[81.1155712](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/uDeploy-Component/ucd-uDeploy-Component-81.1155712.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
