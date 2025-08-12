
# IBM Rational Asset Manager - Process Steps

* [Categorize an Asset](#categorize_an_asset)
* [Create Relationship to an Asset](#create_relationship_to_an_asset)
* [Download Assets](#download_assets)
* [Download Related Assets](#download_related_assets)
* [Set Attribute](#set_attribute)
* [Upload Asset](#upload_asset)


## Categorize an Asset

Assign one or more categories to an asset.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Asset ID | String | The asset ID for the asset to which a category is being assigned. | Yes |
| Categorization | String | The list of categories to add to the asset. Press Enter after each category. To specify a hierarchy of categories, use a forward slash (/) to separate categories, for example, Continuous Delivery/Build/Integration. | Yes |
| Password | Password | The password to authenticate with the repository. | No |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| User | String | The user name to authenticate with the repository. | No |
| Version | String | The version for the asset. | Yes |

## Create Relationship to an Asset

Create a relationship from one asset to another asset.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Asset ID | String | The ID for the source asset. | Yes |
| Asset Version | String | The version of the source asset. | Yes |
| Password | Password | The password to authenticate with the repository. | Yes |
| Related Asset ID | String | The ID of the related asset. | Yes |
| Related Asset Version | String | The version of the related asset. | Yes |
| Relationship Type | String | The ID of the relationship type from the source asset to the related asset. The relationship ID is not necessarily the same as the relationship name. Contact the repository administrator for the relationship ID. | Yes |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| User | String | The user name to authenticate with the repository. | Yes |

## Download Assets

Download assets from the IBM Rational Asset Manager repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Assets | String | A list of assets to download. Press Enter after each entry. Verify that each entry has one of these forms: `id/version` or `id/ramSearch:(SearchString)`.

If the ID contains a forward slash (/), prefix the forward slash with a backslash (\). | Yes |
| Directory Offset | String | The working directory to use when you run this command. The directory is relative to the current working directory. | Yes |
| Include Dependent | Boolean | Download dependent assets. | No |
| Password | Password | The password to authenticate with the repository. | No |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| User | String | The user name to authenticate with the repository. | No |

## Download Related Assets

Download related assets of an asset.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Asset ID | String | The ID for the asset. | Yes |
| Asset Version | String | The version of the asset. | Yes |
| Directory Offset | String | The working directory to use when you run this command. The directory is relative to current working directory. | Yes |
| Password | Password | The password to authenticate with the repository. | Yes |
| Related Asset ID | String | The ID for the related asset. | No |
| Related Asset Version | String | The version for the related asset. | No |
| Relationship Types | String | The ID of the relationship types from the source asset to related asset, separated by comma. The relationship ID is not necessarily the same as the relationship name. Contact the repository administrator for the relationship ID. | No |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| User | String | The user name to authenticate with the repository. | Yes |

## Set Attribute

Set attribute on an asset.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Asset ID | String | The ID for the asset. | Yes |
| Attribute Name | String | The name of the attribute. | Yes |
| Attribute Value | String | The value of the attribute | Yes |
| Password | Password | The password to authenticate with the repository. | No |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| User | String | The user name to authenticate with the repository. | No |
| Version | String | The version for the asset. | Yes |

## Upload Asset

Upload asset to a Rational Asset Manager repository.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Asset ID | String | The ID for the asset. | Yes |
| Community | String | The community for the asset. | Yes |
| Directory Offset | String | The working directory to use when you run this command. The directory is relative to current working directory. | Yes |
| Password | Password | The password to authenticate with the repository. | Yes |
| Repository URL | String | The URL of the Rational Asset Manager repository. | Yes |
| Type | String | The asset type for the asset. | Yes |
| User | String | The user name to authenticate with the repository. | Yes |
| Version | String | The version for the asset. | Yes |



|Back to ...||Latest Version|IBM Rational Asset Manager ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[0](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/RAM/com.ibm.udeploy.plugin.ram.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
