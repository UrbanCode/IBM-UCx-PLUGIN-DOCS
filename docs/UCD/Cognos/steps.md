
# IBM Cognos - Process Steps

* [Export](#export)
* [Import](#import)


### Export

Export content from the content store to an archive file in the deployment directory within your Cognos home.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Archive Name | String | The name of the export archive. Do not include the .zip file extension. | Yes |
| Cognos Java Library Directory | String | The Cognos java library directory. The directory must contain the required JAR files, including cognosClient.jar and cognos-axis.jar. For example: C:\Program Files\IBM\cognos\c10\_64\sdk\java\lib | Yes |
| Deployment Spec | String | Specify the name of an export deployment specification. If this specification doesnt exist on the Cognos server, it will be created. | Yes |
| Export Content | String | Specify the search path of the content to export. For example: /content/folder/[@name=Samples]. The search path is displayed in the properties of any file or folder in the Cognos web application. | Yes |
| Gateway URL | String | The URL of the Cognos gateway to use to communicate to the dispatcher. Alternately, specify the URL of the dispatcher itself. For example:http://localhost:9300/p2pd/servlet/dispatch | Yes |
| IBM Cognos ReportNet Home (CRN\_HOME)  | String | The location where Cognos is installed. Do not include a trailing forward slash. | Yes |
| Namespace | String | The user namespace. The user namespace is displayed on the user preferences page of the Cognos web application. | Yes |
| Overwrite Deployment Spec. | Boolean | Check this box to overwrite the deployment specification if it exists in the content store. | No |
| Parent Directory | String | Provide the search path of the directory that your new or existing deployment specification exists under. This will default to the root directory /adminFolder. For example the path /adminFolder/adminFolder[@name=Exports] will specify the Exports directory under the adminFolder root directory. | No |
| Password | Password | The password of the administrator user. (default: ``${p:resource/crnPassword}``) | Yes |
| UserID | String | An administrator user ID that is capable of importing/exporting content. | Yes |

### Import

Import content from an archive to the Cognos content store.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Archive Name | String | The name of the archive to import. Do not include the .zip file extension. | Yes |
| Cognos Java Library Directory | String | The Cognos java library directory. The directory must contain the required JAR files, including cognosClient.jar and cognos-axis.jar. For example: C:\Program Files\IBM\cognos\c10\_64\sdk\java\lib | Yes |
| Deployment Spec | String | Specify the name of an import deployment specification. If this specification doesnt exist on the Cognos server, it will be created. | Yes |
| Gateway URL | String | The URL of the Cognos gateway to use to communicate to the dispatcher. Alternately, specify the URL of the dispatcher itself. For example:http://localhost:9300/p2pd/servlet/dispatch | Yes |
| IBM Cognos ReportNet Home (CRN\_HOME)  | String | The location where Cognos is installed. Do not include a trailing forward slash. | Yes |
| Namespace | String | The user namespace. The user namespace is displayed on the user preferences page of the Cognos web application. on the user preferences page. | Yes |
| Overwrite Deployment Spec. | Boolean | Check this box to overwrite the deployment specification if it exists in the content store. | No |
| Parent Directory | String | Provide the search path of the directory that your new or existing deployment specification exists under. This will default to the root directory /adminFolder. For example the path /adminFolder/adminFolder[@name=Imports] will specify the Imports directory under the adminFolder root directory. | No |
| Password | Password | The password of the administrator user. (default: ``${p:resource/crnPassword}``) | Yes |
| Target Directory | String | If this is a new deployment specification, provide the search path of the directory in the Cognos content store where your artifact will be deployed. | No |
| UserID | String | An administrator user ID that is capable of importing/exporting content. | Yes |



|Back to ...||Latest Version|IBM Cognos |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[12.1175694](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Cognos/ucd-Cognos-12.1175694.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
