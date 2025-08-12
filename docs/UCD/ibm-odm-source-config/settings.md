
# IBM Operational Decision Manager (ODM) Source Config - Settings


* [Importing from Classic Rule Project](#import_classic_ruleapp)
* [Importing from Decision Services](#import_decision_service)

## Create a Component importing from an Operational Decision Manager Classic Rule Project

The following settings are available when you create a component by using the IBM ODM Source Config plug-in for importing from Classic Rule App Projects (Version 3 and before).


| Name | Type | Description |
| --- | --- | --- |
| Data Source | String | JDBC name of the datasource. (ex. jdbc/ilogDataSource) |
| Decision Center URL | String | Hostname and Port number for the IBM Decision Server instance. (ex. http://example.server.com:8080) |
| Extensions of Files to Convert | String | A list, separated by commas, of extensions that specify files which must be converted to a new Character set when downloaded. |
| Jrules Jar Path | String | Path to the required ODM jrules jars. This path must be specified if the jars were not copied into the plugin lib directory. (ex. lib/odmJars) |
| Next Version Number | Integer | Specify the version number for the next version. This value increments automatically after each Version import. |
| Password | String | Decision Center password. |
| Preserve Execute Permissions | Boolean | When enabled, file execute permissions are saved with files. |
| RuleApp Name | String | The name of the ruleApp to be imported. |
| Username | String | Decision Center username. |
| Version Name Pattern | String | Specify a pattern for each version name.For example, the ibm-ucd pattern produces versions such as ibm-ucd-1, ibm-ucd-2, and so on, based on the Next Version Number. |

## Import New Version

The following settings are available when you import component versions.


| Name | Type | Description |
| --- | --- | --- |
| ODM Snapshot | String | Name of an existing ODM snapshot to pull archive from. This will create a version with this name, overriding the next version numbering scheme. |

## Create a Component importing from IBM Decision Services

The following settings are available when you create a component by using the IBM ODM Source Config plug-in for importing from Decision Services (Version 4 and later)


| Name | Type | Description |
| --- | --- | --- |
| Branch Name | String | The name of the Branch (ex. Spring Release). Pulls from main if left blank. |
| Data Source | String | JDBC name of the datasource. (ex. jdbc/ilogDataSource) |
| Decision Center URL | String | Hostname and Port number for the IBM Decision Server instance. (ex. http://example.server.com:8080) |
| Deployment Configuration | String | The name of the deployment configuration. (ex. test deployment) |
| Extensions of Files to Convert | String | A list, separated by commas, of extensions that specify files which must be converted to a new Character set when downloaded. |
| Jrules Jar Path | String | Path to the required ODM jrules jars. This path must be specified if the jars were not copied into the plugin lib directory. (ex. lib/odmJars) |
| Next Version Number | Integer | Specify the version number for the next version. This value increments automatically after each Version import. |
| Password | String | Decision Center password. |
| Preserve Execute Permissions | Boolean | When enabled, file execute permissions are saved with files. |
| Project Name | String | The name of the Project. (ex. Loan Validation Service) |
| RuleApp Archive Name | String | The name to give the ruleApp archive file. Note that .jar will be automatically appended to the end. |
| Target Server | String | The name of the Target Server to deploy to. Leave blank to only extract the archive and skip deployment. |
| Username | String | Decision Center username. |
| Version Name Pattern | String | Specify a pattern for each version name.For example, the ibm-ucd pattern produces versions such as ibm-ucd-1, ibm-ucd-2, and so on, based on the Next Version Number. |

## Import New Version

The following settings are available when you import component versions.


| Name | Type | Description |
| --- | --- | --- |
| ODM Snapshot | String | Name of an existing ODM snapshot to pull archive from. This will create a version with this name, overriding the next version numbering scheme. |


