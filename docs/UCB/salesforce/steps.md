
Salesforce - Steps
==================

# Steps


### Steps





Process steps in the SalesForce plug-in
---------------------------------------

* [Bulk Retrieve](#bulk_retrieve)
* [Deploy](#deploy)
* [Deploy Recent Validation](#deploy_recent_validation)
* [Describe Metadata](#describe_metadata)
* [List Metadata](#list_metadata)
* [Retrieve](#retrieve)


Bulk Retrieve
-------------

Download a large number of components of a single metadata type into a set of local files..


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | No |
| Batch Size | String | The number of items to retrieve while doing multi-part retrieve. Defaults to 10. | No |
| Containing Folder | String | If the metadata is contained in a folder, this parameter should be the name of the folder from which the contents are retrieved. | No |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Max Poll | String | The number of times to poll the server for the results of the retrieve request. The clients waits for two seconds after the first poll attempt. The wait time is doubled for each successive poll attempt up to maximum of 30 seconds between poll attempts. | No |
| Metadata Type | String | The type of metadata for which you are retrieving property information. | Yes |
| Retrieve Target | String | The root of the directory structure into which the metadata files are retrieved. (i.e. codepkg) | Yes |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |
| Unzip | String | If set to true, the retrieved components are unzipped. If set to false, the retrieved components are saved as a zip file in the retrieveTarget directory. | No |

Deploy
------

Deploy components, code, or recent validations into your org.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check Only | Boolean | Check this box to perform a test deployment (validation) of components without saving the components in the target org.After the validation finishes with passing tests, it might qualify for deployment without rerunning tests (Deploy Recent Validation step). | No |
| Deploy Root | String | The directory relative to the current working directory which contains the files to operate on. | Yes |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Roll Back on Error | Boolean | Determines whether or not to roll back on error | No |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |
| Test Level | Enumeration:
* NoTestRun
* RunSpecifiedTests
* RunLocalTests
* RunAllTestsInOrg
| Specifies which tests are run as part of a deployment. The test level is enforced regardless of the types of components that are present in the deployment package. | No |
| Test Names | String | Ignored if ‘Test Level’ not set to ‘RunSpecifiedTests’.A list of Apex classes containing tests run after deployment. Separate each test with a new line. | No |

Deploy Recent Validation
------------------------

Deploy recently validated components.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Recent Validation ID | String | Specifies the ID of a recent validation. | Yes |
| Roll Back on Error | Boolean | Default value is true.Indicates whether any failure causes a complete roll back (true) or not (false). | No |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |
| Session ID | String | Required if username and password aren’t specified. The ID of an active Salesforce session or the OAuth access token. | No |

Describe Metadata
-----------------

Describe and list all metadata types and their existing objects.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | Yes |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |

List Metadata
-------------

List information on a given metadata type.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | No |
| Folder | String | The folder associated with the component. This field is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. | No |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Metadata Type | String | The name of the metadata type for which you are retrieving property information; for example, CustomObject for custom objects, or Report for custom reports. Type names are case-sensitive | Yes |
| Result File Path | String | The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. | No |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |
| Trace | String | The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. | No |

Retrieve
--------

Retrieve unpackaged, managed or unmanaged packages.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Package Names | String | Required if unpackaged is not specified. A comma-separated list of the names of the packages to retrieve. You must specify either Package Names or Unpackaged, but not both. | No |
| Retrieve Target | String | Required. The root of the directory structure into which the metadata files are retrieved. (i.e. codepkg) | Yes |
| Retrieve Type | Enumeration:
* retrievePkg
* retrieveOutput
* retrieveUnpackaged
| The type of component to retrieve. | Yes |
| Salesforce |  | Select a Salesforce server from the list or specify a property whose value is the property sheet UUID of the relevant Salesforce integration. | Yes |
| Unpackaged | String | Required if ‘Unpackaged’ is specified. The path and name of a file manifest that specifies the components to retrieve. You must specify either Unpackaged or Package Names, but not both. (i.e. codepkg/package.xml) | No |


Roles in the SalesForce plug-in
-------------------------------

The plug-in adds these property groups automatically to resources. You cannot add these property groups manually.


* [Salesforce](#salesforce_role)


Salesforce
----------


| Name | Type | Description |
| --- | --- | --- |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) |
| User | String | SFDC User Name |



|Back to ...||Latest Version|Salesforce |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[2.1056278](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/salesforce/salesforce-2.1056278.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
