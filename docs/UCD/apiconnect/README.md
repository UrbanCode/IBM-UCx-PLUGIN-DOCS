
# IBM API Connect

IBM API Connection is an application programming interface (API) management platform that uses Loopback to create, assemble, and manage web APIs.

The IBM API Connection plug-in provides steps to publish API Definitions and Loopback Apps to an API Connect server. This plug-in communicates to API Connect through the use of the API command-line toolkit(apic).

## Platform support

* This plug-in is supported to run on all operating systems that are supported by both the IBM DevOps Deploy agent except for z/OS and the apic toolkit.
* The apic toolkit must be downloaded and installed separately. Directions can be found [Installing the toolkit](https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.toolkit.doc/tapim_cli_install.html) topic in the product documentation. This plug-in supports apic v2.0.18 and higher.
* Authentication issues exist within the apic toolkit. Refer to the [Troubleshooting](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/apiconnect/troubleshooting.html) page for a secure workaround.

## Technical Support:

The IBM API Connect plug-in is an open source project that is fully supported by IBM. If you have any issues with the plug-in, do not hesitate to create a formal PMR. However, for small issues or use case questions, we encourage users to create an issue on GitHub. Creating an issue there will allow you to speak directly to the developers and other API Connect plug-in users. Please note, if you build a new plug-in locally, IBM support will not be able to assist you. If you wish for your changes to become supported by IBM, submit a pull request on GitHub.

* [Source Code](https://github.com/IBM-UrbanCode/IBM-API-Connect-UCD)
* [GitHub Issues](https://github.com/IBM-UrbanCode/IBM-API-Connect-UCD/issues)


## Available Steps

LoginAuthenticate with an API Connect cloud through the management server. LogoutRemove local authentication credentials for an API Connect cloud. Publish API and Product DefinitionsPublish and deploy a product and its referenced APIs to a catalog. Publish Application to Provider AppPublish a Node.js (Loopback) application to a provider app. Push Local API or Product Definitions to DraftsPush a local API or product definition to drafts on an API Connect cloud. Replace Product in CatalogReplace a product in a catalog with another product. Set Configuration VariableSet one configuration variable. The ‘Login’ step is not required. This is a wrapper step for the App and Catalog Identifier. If you understand and have access to the Identifier command, use the Shell step to run that command.


