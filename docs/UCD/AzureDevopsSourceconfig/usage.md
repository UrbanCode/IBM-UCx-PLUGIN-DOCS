
# Azure DevOps - Usage

The Microsoft Azure Devops source configuration plugin can be used to import artifacts from a Azure DevOps projects repository. This plugin retrieves artifacts from Azure DevOps version control, code that is not compiled or built, and .zip file types from a TFS build process. The agent must have access to the tf tool.

To use this plugin, create a component to define the Azure DevOps artifacts to be used. The component contains the information for importing the artifacts and any processes to perform on the artifacts.

## Before you begin


### tf Tool
The agent must have access to the tf.exe or tf.cmd file. This file is needed for retrieving all artifacts from TFS. It must either be located on the PATH environment variable or supplied through a direct path in the plugin configuration. The tf executable is located in the install directory of Visual Studio or Team Explorer Everywhere. Note that the tf tool is not located in the TFS install directory. For more information, see Use Team Foundation version control commands.


### Visual Studio Online Connection
Visual Studio Online (VSO) an SaaS offering of Azure DevOps requires enabling the alternate authentication credential option. To learn how to enable alternate authentication credentials, login to VSO and navigate to the Settings page. Under the sidebar to the left, there is an Alternate authentication credentials. Enable and create new alternate authentication credentials. These credentials must then be supplied in the plugins configuration. Because these credentials are used by many deployments create a functional VSO account that is used for these types of automated process.


### Create a component
To create a component, complete the following steps. For more information, see [Creating components](https://www.ibm.com/docs/en/devops-deploy/8.2.0?topic=components-creating)
topic in the product documentation.
1. In the Deploy user interface, click **Components** and then click **Create Component**.
2. In the **Create Component** window, specify a name and description for the component.
3. In the **Teams** field, specify the access information for the new component.
To use a template for the new component, select a template from the Template list. In this case, the component inherits source configuration, properties, and processes from the template.
4. In the **Source Config Type** list, select **Azure**.
5. Specify the properties for the component. See the **Setting** tab for descriptions.
6. Click **Save**.

### Import a version
When the artifacts are imported, a component version is created using the version of the package. You can specify to import a specific package version or import all versions. If importing all versions, a component version is created for each version.
1. Click the **Versions** tab for the component.
2. Click **Import New Versions**.
3. Specify a specific version of the package to import, or leave blank to import the latest version of the package available in the repository. Additionally, enable **Import All Versions** to import all versions of a package.
4. Click **Save**.

### Step palette
To access this plugin in the palette, click **Source and Repositories** > **Azure**.

### Configuration
The TFS_SCM plugin contains four required properties that support the default use case of an unsecured or local TFS server with the tf tool available on the PATH environment variable. By default, the most recent Changeset is imported.

#### Required properties
- **Collection URL**: The URL of the Azure Devops team project collection. For example: https://dev.azure.com/xxx. The desired project artifacts are placed underneath this collection. The collection URL is a subset of the projects URL.
- **Server Project Folder**:The variable assigned to the project folder on your VSO or the TFS server. By default, this value begins with $/ and is followed by the name of the project.
- **Workspace**: The name of the local TFS or VSO workspace. This value can be identified in Visual Studios Team Explorer side bar. All possible Workspaces can be found under the Solution section.
- **Local Workspace Folder**: The full path to the local Workspace folder. This folder contains local code resolved by Visual Studio. The easiest way to identify the workspace is by clicking the Open link in the Team Explorer side bar. This brings you directly to the workspace folder.
Default Location: C:\Users\\Source\Workspaces\Workspace
Azure Devops Server Workspace and Local Workspace Folder

**Note**: You may also notice the Collection URL can be identified from Visual Studio as well.

### Optional properties
If a value is not specified for this property, the environment PATH variable is used to locate the tf command. If the PATH variable is not set, the following error occurs: Error Creating New Version: Cannot run program "tf": CreateProcess error=2, The system cannot find the file specified.
- **Username**: The Username to authenticate with Azure Devops.
- **Password**: The Password to authenticate with Azure Devops.
The Username and Password properties are not required if the agent is installed on the TFS server. Follow the alternate authentication credentials if use VSO.
- **tf.exe or tf.cmd Path**: The canonical path to the tf.exe or tf.cmd file. This file is located in the Visual Studio installation directory and the path is not standardized between Visual Studio versions. Example for Visual Studio 2017: C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\tf.exe

### Manual import properties
By default, the TFS_SCM plugin imports the latest changeset. If the import is initiated manually, you can import specific changesets. If a value is specified for the Label property, the Changeset property is ignored.
- **Label**: The label assigned to a past changeset.
- **Changeset**: The number assigned to a past changeset.