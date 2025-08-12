
# IBM API Connect - Overview

The API Connect plug-in includes steps that publish API definitions, products, and Loopback apps in IBM API Connect. The plug-in communicates with API Connect using the `apiconnect` contained in the apic command line toolkit.

This plug-in includes the following steps:

* [Login](#login)
* [Logout](#logout)
* [Publish API Product Definitions](#publish_api_product_definitions)
* [Publish an Application (API Connect v5.x)](#publish_an_application_(api_connect_v5.x))
* [Push API Product Definitions to Drafts (API Connect v5.x)](#push_api_product_definitions_to_drafts_(api_connect_v5.x))
* [Replace Product in Catalog](#replace_product_in_catalog)
* [Set Configuration Variable](#set_configuration_variable)
* [Supersede Product in Catalog](#supersede_product_in_catalog)


## Step palette

To access this plug-in in the palette, click **IBM API Management** > **IBM API Connect**.

## Compatibility

This plug-in is supported to run on all operating systems that are supported by both the IBM DevOps Deploy agent (except for z/OS) and the apic toolkit. This plug-in supports apic v10.0.x and higher. If you are using apic v5 or apic v2018 please use the Version 7 plugin available on the [Download Page](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/apiconnect/downloads.html) . Authentication issues exist within the apic toolkit. See [Troubleshooting](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/apiconnect/troubleshooting.html) for a workaround.

This plug-in requires version 6.0.1 or later of IBM DevOps Deploy.

This plug-in is compatible with agents running on operating systems that are supported by both IBM DevOps Deploy and the apiconnect (apic) command line toolkit. This plug-in does not support agents running on z/OS.

## Installation

No special steps are required for installation. See [Installing plug-ins in DevOps Deploy](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps Deploy").

The apic toolkit must be downloaded and installed separately. Directions can be found [Installing the toolkit](https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.toolkit.doc/tapim_cli_install.html) topic in the product documentation.

## History

### Version 8

* Updated plugin to only support API Connect 10.0.x. This version of the plugin only supports IBM API-Connect v10.x and newer.

### Version 7

* Updated plugin to support API Connect 2018.

### Version 6

* Allow space to be specified on the Publish API Product Definitions (products:publish) and Replace Product in Catalog (products:replace) steps.

### Version 5

* Added Replace Product in a Catalog step.
* Updated Set Configuration Variable step to not add extra spaces.

### Version 4

* Support property file encryption.
### Version 3

* Version 3 brings support to apic v2.0.18 and the following features:
+ Remove the type property from the Login step.
+ Error handling has been updated.

### Version 2

* Version 2 brings updates to step names, property names, and templates for better comprehension.

### Version 1

* Initial beta release containing steps to deploy API Definitions, Products, and Loopback apps to IBM API Connect.
