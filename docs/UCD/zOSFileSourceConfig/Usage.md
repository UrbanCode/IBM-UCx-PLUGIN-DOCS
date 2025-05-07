# Usage


The IBM Deploy z/OS deployment tools must be installed to the version import agent to use the z/OS File Source Config plugin.

To use this plugin, create a component to define the z/OS artifacts to be used. The component contains the information for importing the artifacts and any processes to perform on the artifacts.

## Create a component

To create a component, complete the following steps. For more information, see [Creating components](https://www.ibm.com/docs/en/devops-deploy/8.1.1?topic=components-creating) topic in the product documentation.
* In the DevOps Deploy user interface, click **Components** and then click **Create Component**.
* In the Create Component window, specify a name and description for the component.
* In the **Teams** fields, specify the access information for the new component.
* To use a template for the new component, select a template from the Template list. In this case, the component inherits source configuration, properties, and processes from the template.
* In the **Source Config Type** list, select zOS File
* Specify the properties for the component. See the **Setting** tab for descriptions.
* Click **Save**.

## Import a version

When the artifacts are imported, a component version is created using the version of the package. You can specify to import a specific package version or import all versions. If importing all versions, a component version is created for each version.

* Click the **Versions** tab for the component.
* Click **Import New Versions**.
* Specify a specific version of the package to import, or leave blank to import the latest version of the package available in the repository. Additionally, enable **Import All Versions** to import all versions of a package.
* Click **Save**.

## Step palette
To access this plugin in the palette, click **Source and Repositories** > **zOS File**.
