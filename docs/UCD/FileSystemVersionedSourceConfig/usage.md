
# File System (Versioned) - Usage


When using a versioned file system, each subdirectory in the target directory is treated as a different version of the artifacts. You can set the server to check for new subdirectories periodically and automatically create component versions when new subdirectories are detected.

Youll need to define an DevOps Deploy component which defines the source and processes for the FileSystem repository. The component contains the information for importing the artifacts and any processes to implement on the artifacts.

To create a File System (Versioned) source configuration type of component arrange the artifacts inside a parent folder and subfolders based on the file system layout.


```
myComponent/
version n/
files
version n+1/
files

```

## Example

The following file structure shows a component with two versions and two files in each version. The two component versions are 1.0 and 2.0.


```
myStaticWebContent/
1.0/
index.html
logo.gif
2.0/
index.html
logo.gif

```

After the component is created use the **Components** page in the user interface to import a version of the artifacts if automatic import was not selected.


## Create a component




To import artifacts with versions, create a directory with subdirectories that represent the versions of the artifacts. Then, create the component with the **File System (Versioned)** source configuration type.

To create a component, complete the following steps. For more information about creating a component, see [Creating components](http://www-01.ibm.com/support/knowledgecenter/SS4GSP_7.0.2/com.ibm.udeploy.doc/topics/comp_create.html "Creating components") in the product documentation.

1. In DevOps Deploy, click **Components** and then click **Create Component**.
2. In the Create Component window, specify a name and description for the component.
3. In the **Teams** fields, specify the access information for the new component.
4. To use a template for the new component, select a template from the Template list. In this case, the component inherits source configuration, properties, and processes from the template.
5. In the **Source Config Type** list, select **File System(Versioned)**.
6. Specify the properties for the component. See [Settings](#steps) for property descriptions.
7. Click **Save**.

## Import a version

When the artifacts are imported, a component version is created using the version of the package. You can specify to import a specific package version or import all versions. If importing all versions, a component version is created for each version.

1. Click the **Versions** tab for the component.
2. Click **Import New Versions**.
3. Specify a specific version of the package to import, or leave blank to import the latest version of the package available in the repository. Additionally, enable **Import All Versions** to import all versions of a package.
4. Click **Save**.
