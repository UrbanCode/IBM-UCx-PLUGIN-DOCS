
# IBM Cognos Analytics - Process Steps

* [Export](#export)
* [Import](#import)


## Export

Export content from the content store to an archive file in the deployment directory within your Cognos home.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Archive Name | String | The name of the export archive file. Do not include the .zip file extension. | Yes |
| Cognos Analytics Java Library Directory | String | The Cognos Analytics Java library directory. The directory must contain the required JAR files, including the cognosClient.jar andcognos-axis.jar files. For example: C:\Program Files\IBM\cognos\analytics\sdk\java\lib. | Yes |
| Deployment Spec | String | The name of an export deployment specification. If thisspecification does not exist on the Cognos Analytics server, it is be created. | Yes |
| Export Content | String | The search path of the content to export. For example: /content/folder/[@name=’Samples’]. The search path is displayed in the properties of any file or folder in the Cognos Analytics web application. | Yes |
| Gateway URL | String | The URL of the Cognos Analytics gateway or dispatcher used to communicate with the dispatcher. For example: `http://localhost:9300/p2pd/servlet/dispatch` | Yes |
| IBM Cognos Analytics Home | String | The URL of the Cognos Analytics server. Do not include a trailing forward slash. | Yes |
| Namespace | String | The user namespace on the Cognos server. You can locate the namespace on the User Preferences page of the Cognos Analytics web application. | Yes |
| Overwrite Deployment Spec. | Boolean | Enable to overwrite the deployment specification if itexists in the content store. | No |
| Parent Directory | String | The search path of the directory that the new or existingdeployment specification exists under. The default is the root directory: /adminFolder. For example: if you specify /adminFolder/adminFolder[@name=’Exports’], this indicates that the Exportsdirectory under the adminFolder root directory. | No |
| Password | Password | The password associated withthe administrator’s user ID. The default is the value in the ``${p:resource/crnPassword}`` property. | Yes |
| UserID | String | The administrator user ID that has import and export privileges. | Yes |

## Import

Import content from an archive to the Cognos Analytics content store.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Archive Name | String | The name of the archive file to import. Do not include the .zip file extension. | Yes |
| Cognos Analytics Java Library Directory | String | The Cognos Analytics Java library directory. The directory must contain the required JAR files, including the cognosClient.jar and cognos-axis.jar files. For example: C:\Program Files\IBM\cognos\analytics\sdk\java\lib. | Yes |
| Deployment Spec | String | The name of an import deployment specification. If this specification does not exist on the Cognos server, it is created. | Yes |
| Gateway URL | String | The URL of the Cognos Analytics gateway or dispatcher used to communicate with the dispatcher.For example: `http://localhost:9300/p2pd/servlet/dispatch` | Yes |
| IBM Cognos Analytics Home | String | The URL of the Cognos Analytics server. Do not include a trailing forward slash. | Yes |
| Namespace | String | The user namespace. The user namespace is displayed on the User Preferences page of the Cognos Analytics web application. on the user preferences page. | Yes |
| Overwrite Deployment Spec. | Boolean | Enabled to overwrite the deployment specification if it exists in the content store. | No |
| Parent Directory | String | The search path of the directory that your new or existing deployment specification exists under. The default is the root directory: /adminFolder. For example: /adminFolder/adminFolder[@name=’Imports’], indicates to use the Imports directory under the adminFolder root directory. | No |
| Password | Password | The password associated withthe administrator’s user ID. The default is the value in the ``${p:resource/crnPassword}`` property. | Yes |
| Target Directory | String | If this is a new deployment specification, provide the search path of the directory in the Cognos Analytics content store where the artifact is deployed. | No |
| User ID | String | The administrator user ID that has import and export privileges. | Yes |

