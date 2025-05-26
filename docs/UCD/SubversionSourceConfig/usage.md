
# Subversion - Usage


You will need to define an DevOps Deploy component which defines the source and processes for the Subversion repository. The component contains the information for importing the artifacts and any processes to implement on the artifacts.

When creating the component, you will supply information described on the [Import Version](#steps) step. After the component is created, use the **Components** page in the user interface to import a version of the artifacts if automatic import is not selected.

To create a component, complete the following steps. For more information about creating a component, see [Creating components](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_7.0.2/com.ibm.udeploy.doc/topics/comp_create.html "Creating components") in the product documentation.

1. In DevOps Deploy, click **Components** and then click **Create Component**.
2. In the Create Component window, specify a name and description for the component.
3. In the **Teams** fields, specify the access information for the new component.
4. To use a template for the new component, select a template from the Template list. In this case, the component inherits source configuration, properties, and processes from the template.
5. In the **Source Config Type** list, select **Subversion**.
6. Specify the properties for the component. See [Steps](#steps) for property descriptions.
7. Click **Save**.

## Import a version

When the artifacts are imported, a component version is created using the version of the package. You can specify to import a specific package version or import all versions. If importing all versions, a component version is created for each version.

1. Click the **Versions** tab for the component.
2. Click **Import New Versions**.
3. Specify a specific version of the package to import, or leave blank to import the latest version of the package available in the repository. Additionally, enable **Import All Versions** to import all versions of a package.
4. Click **Save**.

|Back to ...||Latest Version|Subversion ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[26.1159798](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/SubversionSourceConfig/ucd-SubversionSourceConfig-26.1159798.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Downloads](downloads.md)|
