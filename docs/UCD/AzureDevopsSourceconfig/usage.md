
# Azure DevOps - Usage

The Microsoft Azure Devops source configuration plugin can be used to import artifacts from a Azure DevOps projects repository. This plugin retrieves artifacts from Azure DevOps version control, code that is not compiled or built, and .zip file types from a TFS build process. The agent must have access to the tf tool.

To use this plugin, create a component to define the Azure DevOps artifacts to be used. The component contains the information for importing the artifacts and any processes to perform on the artifacts.
## Before you begin

tf Tool
The agent must have access to the tf.exe or tf.cmd file. This file is needed for retrieving all artifacts from TFS. It must either be located on the PATH environment variable or supplied through a direct path in the plugin configuration. The tf executable is located in the install directory of Visual Studio or Team Explorer Everywhere. Note that the tf tool is not located in the TFS install directory. For more information, see Use Team Foundation version control commands.

Visual Studio Online Connection
Visual Studio Online (VSO) an SaaS offering of Azure DevOps requires enabling the alternate authentication credential option. To learn how to enable alternate authentication credentials, login to VSO and navigate to the Settings page. Under the sidebar to the left, there is an Alternate authentication credentials. Enable and create new alternate authentication credentials. These credentials must then be supplied in the plugins configuration. Because these credentials are used by many deployments create a functional VSO account that is used for these types of automated process. The following screen capture shows where to create alternate authentication credentials.




|Back to ...||Latest Version|Azure DevOps ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[1.1112501](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AzureDevopsSourceconfig/plugins-sourceconfig-azure-1.1112501.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
