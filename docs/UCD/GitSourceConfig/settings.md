
# Git - Settings

## Process steps in the Git plug-in

* [Import Version](#import-version)

### Import Version

Import a new version from a Git repository.

This step has no input properties.


#### Support for git sparse-checkout set added for this plugin v26.
#### Previously the plugin pulls all artifacts of a particular git-repository.

#### How this works
In the "Sparse Paths" field specify the path of the directories in the base git repository to clone specifically. Separate each path with new lines or commas: MY/DIR1,SUB/DIR2. 

This is only checked if configured for sparse mode. So, Check this check-box "Sparse" if you want to use the sparse clone feature of git and Specify the path accordingly in the Path to Sparse Paths.


#### Note: This feature is experimental from git. We have implemented this as few customers have very large git reps and they wanted only some  amount of artifacts to get imported. We are not sure if this feature will work in future,as git might not support this experimental feature in future.

## Roles in the Git plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

* [GitComponentProperties](#gitcomponentproperties)
* [GitImportProperties](#gitimportproperties)

### GitComponentProperties

| Name | Type | Description | Property Reference |
| --- | --- | --- | --- |
| Branch | String | The Git branch that contains the artifacts you want to retrieve. The default is the master branch. | ``${p:component/GitComponentProperties/branch}`` |
| Disable SSL Verification | Boolean | Disable SSL certificate verification.This option allows invalid SSL certificates. | ``${p:component/GitComponentProperties/trustAllCerts}`` |
| Excludes | String | A list of file name patterns used to match files to be excluded. Use the double astrisk (\*\*) to include all directories and the single-astrick (\*) to inlcude all files. Separate each pattern with new lines or commas. | ``${p:component/GitComponentProperties/excludes}`` |
| Extensions of files to Convert | String | A list of file extension that must be converted into another character set. Matching file extensions are converted into the default character set of the system where the agent is located. Separate list items commas. | ``${p:component/GitComponentProperties/extensions}`` |
| GIT Path | String | The path to the Git executable file on the DevOps Deploy server. If you have added the Git executable to the system PATH variable, you can specify the name of the executable, such as git. If you have not added the Git executable to the system PATH variable, specify the complete path to the Git executable. | ``${p:component/GitComponentProperties/gitPath}`` |
| Includes | String | A list of file name patterns used to match files to be included. Use the double astrisk (\*\*) to include all directories and the single-astrick (\*) to inlcude all files. For example, the pattern dist/\*\*/\*, retrieves the entire file tree beneath the dist directory. Separate each pattern with new lines or commas. | ``${p:component/GitComponentProperties/includes}`` |
| Password | Password | The password to authenticate with the Git repository when using the http(s) protocol. | ``${p:component/GitComponentProperties/password}`` |
| Preserve Execute Permissions | Boolean | For Linux and UNIX operating systems, select this property to retain the execute permissions for each file. | ``${p:component/GitComponentProperties/saveFileExecuteBits}`` |
| Recursive | Boolean | Initialize all submodules within the project using their default settings. | ``${p:component/GitComponentProperties/recursive}`` |
| Repository URL | String | The location of the Git repository. For example: https://git.example.com/myproject.git. | ``${p:component/GitComponentProperties/repoUrl}`` |
| Username | String | The user name to authenticate with the Git repository when using the http(s) protocol. | ``${p:component/GitComponentProperties/username}`` |
| Sparse | Checkbox | Check this box if you want to use the sparse clone feature of git and Specify the path accordingly in the Path to Sparse box | false |
| Sparse Paths | String | Specify the path of the directories in the base git repository to clone specifically. Separate each path with new lines or commas: MY/DIR1,SUB/DIR2. This is only checked if configured for sparse mode. |  |
| Watch for Tags | Boolean | Use tags as the basis for new component versions. | ``${p:component/GitComponentProperties/watchTags}`` |

### GitImportProperties

| Name | Type | Description | Property Reference |
| --- | --- | --- | --- |
| The version name to be created | String |  |  |
| The version or tag | String |  |  |
