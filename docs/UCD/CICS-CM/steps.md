
# CICS CM (Beta) - Steps

## Steps

### Process steps in the CICS CM plug-in

* [Backout change package](#backout_change_package)
* [Create migration scheme](#create_migration_scheme)
* [Install change package (CSD)](#install_change_package_(csd))
* [Migrate change package](#migrate_change_package)
* [Query change package](#query_change_package)
* [Ready change package](#ready_change_package)

### Backout change package

Backout a change package to reverse a migration event.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Package | String | The name of the change package to be backed out. The default value is ``${p:cicscm.changePackage}``. | Yes |
| Migration Scheme | String | The name of the migration scheme used in the migration event that is to be backed out. The default value is ``${p:Create migration scheme/migrationScheme}``. | Yes |

### Create migration scheme

Dynamically create a migration scheme with a single migration path.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Migration Scheme Description | String | The description of the new migration scheme. By default, the description is: UCD: Auto-generated migration scheme. | No |
| Source Configuration | String | The name of the source configuration. The default value is ``${p:cicscm.sourceConfig}``. | Yes |
| Target Configuration | String | The name of the target configuration. The default value is ``${p:cicscm.targetConfig}``. | Yes |
| Transformation Rule Set | String | The name of the transformation rule set. | No |

### Install change package (CSD)

Install the resource definitions in a change package from a CSD configuration.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| CSD Connection | String | The name of the connection from the CSD configuration to a particular CICS region. The default value is ``${p:cicscm.csdConnection}``. | Yes |
| Change Package | String | The name of the change package to be installed. The default value is ``${p:cicscm.changePackage}``. | Yes |
| Disable and Close resources | Boolean | Tick box to disable and close resources before installation. By default, the box is checked. | No |
| Discard resources | Boolean | Tick box to discard resources before installation. By default, the box is checked. | No |
| Target Configuration | String | The name of the target configuration. The default value is ``${p:cicscm.targetConfig}``. | Yes |

### Migrate change package

Migrate a change package.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Package | String | The name of the change package to be migrated. The default value is ``${p:cicscm.changePackage}``. | Yes |
| Migration Scheme | String | The name of the migration scheme to be used in the migration. The default value is ``${p:Create migration scheme/migrationScheme}``. | Yes |

### Query change package

Query a change package for names, groups and types of resource definitions within the package.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Package | String | The name of the change package to be queried. The default value is ``${p:cicscm.changePackage}``. | Yes |

### Ready change package

Ready a change package for migration.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Change Package | String | The name of the change package to be readied. The default value is ``${p:cicscm.changePackage}``. | Yes |
| Migration Scheme | String | The name of the migration scheme to be assigned to the change package. The default value is ``${p:Create migration scheme/migrationScheme}``. | Yes |



### Default input parameters




There are default input parameters that are available for all CICS CM Beta plug-in steps. To view the default properties, select**Show Hidden Properties** on any step configuration page. For more information, see [Properties](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=deployment-properties).



| Name | Default value | Description |
| --- | --- | --- |
| Host | ``${p:cicscm.host}`` | The host name of the CICS CM server to connect to. |
| Port | ``${p:cicscm.port}`` | The CICS CM port number to connect to. |
| Username | ``${p?:cicscm.username}`` | The user name authorized to connect to the CICS CM server. |
| Password | ``${p?:cicscm.password}`` | The user name password to connect to the CICS CM server. |


### Output properties




### Output properties in the DevOps Deploy CICSConfiguration Manager Beta plug-in.

* [Overview of CICS CM output properties](#overview_cicscm_output_properties)
* [Create Migration Scheme step output property](#create_migration_scheme_output_property)
* [Query Change Package step output properties](#query_change_package_output_properties)


### Overview of CICS CM output properties

Two of the CICS CM DevOps Deploy steps have output properties.

### Create migration scheme

Dynamically create a migration scheme with a single migration path.


| Name | Type | Description |
| --- | --- | --- |
| migrationScheme | String | A random 8 alphanumeric string that is generated for the name of the new migration scheme. |

### Query change package step output properties

Query a change package for names, groups, and types of resource definitions within the package.


| Name | Type | Description |
| --- | --- | --- |
| resourceNames | String | A single string of all the names of the resource definitions contained within the change package, separated by commas. |
| resourceGroups | String | A single string of all the different groups of resource definitions contained within the change package, separated by commas. |
| resourceTypes | String | A single string of all the different types of resource definitions contained within the change package, separated by commas. |



|Back to ...||Latest Version|CICS CM (Beta) |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/CICS-CM/UCD_CM_Plugin.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Component Templates](component_templates.md)|[Downloads](downloads.md)|
