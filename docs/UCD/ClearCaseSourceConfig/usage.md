
# IBM Rational ClearCase - Usage


To use this plug-in, create a component to define the source and processes for the Rational ClearCase Unified Change Management (UCM) repository. The component contains the information for importing the artifacts and any processes to perform on the artifacts.

## Create a component

To create a component, complete the following steps. For more information, see [Creating components](https://www.ibm.com/docs/en/urbancode-deploy/7.2.3?topic=components-creating) topic in the product documentation.

1. In the HCL user interface, click **Components** and then click **Create Component**.
2. In the Create Component window, specify a name and description for the component.
3. In the **Teams** fields, specify the access information for the new component.
4. To use a template for the new component, select a template from the Template list. In this case, the component inherits source configuration, properties, and processes from the template.
5. In the **Source Config Type** list, select **ClearCase**.
![](url_image_not_found?resize=300%2C95&ssl=1)
6. Specify the properties for the component.See the **Setting** tab for descriptions.
7. Click **Save**.

## Import a version

When the artifacts are imported, a component version is created using the version of the package. You can specify to import a specific package version or import all versions. If importing all versions, a component version is created for each version.

1. Click the **Versions** tab for the component.
2. Click **Import New Versions**.
3. Specify a specific version of the package to import, or leave blank to import the latest version of the package available in the repository. Additionally, enable **Import All Versions** to import all versions of a package.
4. Click **Save**.

## Step palette

To access this plug-in in the palette, click **Source and Repositories** > **ClearCase**.


|Back to ...||Latest Version|IBM Rational ClearCase ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[17.1155764](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/ClearCaseSourceConfig/ucd-ClearCaseSourceConfig-17.1155764.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps and Roles](steps and roles.md)|[Downloads](downloads.md)|
