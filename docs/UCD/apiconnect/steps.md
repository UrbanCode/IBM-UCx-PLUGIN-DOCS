
# IBM API Connect - Process steps


* [Login](#login)
* [Logout](#logout)
* [Publish API Product Definitions](#publish_api_product_definitions)
* [Publish an Application (API Connect v5.x)](#publish_an_application_(api_connect_v5.x))
* [Push API Product Definitions to Drafts (API Connect v5.x)](#push_api_product_definitions_to_drafts_(api_connect_v5.x))
* [Replace Product in Catalog](#replace_product_in_catalog)
* [Set Configuration Variable](#set_configuration_variable)
* [Supersede Product in Catalog](#supersede_product_in_catalog)
* [Create a Product](#create_a_product)


## Login


Authenticate with an API Connect cloud through the management server. This step is a prerequisite for all other steps in the IBM API Connect plug-in. (apic login)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Password | Password | The password to use to authenticate with the API Connect management server. Either password of API key is required for login, Both can't be empty. | No |
| API Key | Password | The api key to use to authenticate with the API Connect management server. Either password of API key is required for login, Both can't be empty. | No |
| Realm | String | The identity provider used to authenticate and the scope of the tasks that can be performed (I.E. provider/default-idp-2). This field is required if using the API Connect v2018 toolkit. | No |
| Server | String | The API Connect management server endpoint to authenticate with. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |
| Username | String | The user name to use to authenticate with the API Connect management server. | Yes |

## Logout


Remove local authentication credentials for an API Connect cloud. Run this step at the end of each deployment process. (apic logout)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Server | String | The API Connect management server endpoint to remove credentials from. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |

## Create a product (for API Connect v10.x)


Create a new product in API Connect (apic create:product).


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Server | String | The API Connect management server endpoint to remove credentials from. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |
| Product Name | String | Specify a name with which you want to craete a new Product in IBM API connect, Ex: test-product. | Yes |
| Product Version | String | Specify a version with which you want to craete a new Product in IBM API connect. Ex: 1.0.0. | Yes |
| Product Version | String | Specify a title with which you want to craete a new Product in IBM API connect . Ex: Test Product.| Yes |

## Publish API Product Definitions

Publish the API product and referenced APIs to a catalog. (apic products:publish)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Product Definitions | String | The full path to the YAML file that contains the API or product definitions. | Yes |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Catalog | String | The name of the catalog to deploy to. | Yes |
| Organization | String | The name of the provider organization. | Yes |
| Server | String | The management server endpoint to publish to. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |
| Space | String | Enter a space to deploy to (if applicable for this catalog) | No |
| Stage Status | Boolean | Select to keep the product in the staged state, instead of moving to published state. | No |

## Publish an Application (API Connect v5.x)


Publish a Node.js (LoopBack) application to a provider application (apic apps:publish). Note: This command is not supported if using API Connect v2018.x.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Loopback Application | String | The name of the LoopBack application. | Yes |
| Loopback Project Directory | String | The full path to the directory that contains the LoopBack application. | Yes |
| Organization | String | The name of the provider organization. | Yes |
| Server | String | The management server endpoint to publish to. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |

## Push API Product Definitions to Drafts (API Connect v5.x)


Push API product definitions to drafts on an API Connect cloud (apic drafts:push). Note: This command is not supported with API Connect v2018.x.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Product Definitions | String | The full path to a YAML file that contains the API product definitions. Example: banking-services.yaml. | Yes |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Organization | String | The provider organization name. | Yes |
| Product Only | Boolean | Select to push only the product. If not selected, the product and referenced APIs are pushed. | No |
| Replace Named Version | String | The name and version of a definition to replace. Use the following format: Name:Version. For example: climbon:1.0.0 | No |
| Server | String | The management server endpoint to push to. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |

## Replace Product in Catalog


Replace a published or deprecated product in a catalog with another product (apic products:replace) The old product will be retired. The new product must be either staged, published, or deprecated.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path or folder to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Catalog | String | The name of the catalog ncontaining the product to be replaced. | Yes |
| New Product | String | The new product to replace the old product, specified on the Old Product property. Use the format: NEW\_PRODUCT\_NAME:VERSION\_NAME. | Yes |
| Old Product | String | Select to replace the old product. Use the format: OLD\_PRODUCT\_NAME[:VERSION\_NAME]. The:VERSION\_NAME portion is optional. If if is not specified, the first published version of the product is replaced. | Yes |
| Organization | String | The name of the provider organization. | Yes |
| Plan Mappings | String | A list of old to new product plan mappings. Specify each mapping on a new line in the format: SOURCE\_PLAN\_NAME:TARGET\_PLAN\_NAME. You must map all product plans. | Yes |
| Server | String | The management server endpoint to set the variable on. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |
| Space | String | Enter a space to replace in (if applicable for this catalog). | No |

## Set Configuration Variable


Set a configuration variable. You do not need to run the Login step before running this step. This is a wrapper step for the App and Catalog Identifier. If you have access to the Identifier, run that command through the Shell step. (apic config:set)


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| App or Catalog Name | String | The name of an application or catalog to configure. | Yes |
| Config Variable Type | Enumeration:
* app
* catalog
| The type of variable to configure. | Yes |
| Global | Boolean | The global configuration variable. | No |
| Local | Boolean | The local application configuration variable. | No |
| Organization | String | The name of the provider organization. | Yes |
| Server | String | The management server endpoint to set the variable on. For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |

## Supersede Product in Catalog


Supersede a published product in a catalog with another product (apic products:replace). The old product is deprecated. The new product must be either staged, published, or deprecated.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| APIC Tool Path | String | The full path or folder to the apic command-line tool. For example: C:\Users\John\AppData\Roaming\npm\apic.cmd | No |
| Catalog | String | The name of the catalog containing the product to be replaced. | Yes |
| New Product | String | The new product to supersed the old product.Use the format: NEW\_PRODUCT\_NAME:VERSION\_NAME. | Yes |
| Old Product | String | The name of the old product to be superseded. Use the format: OLD\_PRODUCT\_NAME[:VERSION\_NAME]. The:VERSION\_NAME portion is optional. If you is not specified, the first published version of the product is replaced. | Yes |
| Organization | String | The name of the provider organization. | Yes |
| Plan Mappings | String | A list of old to new product plan mappings. Specify each mapping on a new line in the format: SOURCE\_PLAN\_NAME:TARGET\_PLAN\_NAME. You must map all product plans. | Yes |
| Server | String | The management server endpoint to set the variable on.For example, the IBM Bluemix endpoint is us.apiconnect.ibmcloud.com. | Yes |
| Space | String | Enter a space to supersede in (if applicable for this catalog). | No |



|Back to ...||Latest Version|IBM API Connect ||||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[8.1171240](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/apiconnect/ucd-apiconnect-8.1171240.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Tutorials](tutorials.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
