# Overview

---

* **Configuration as Code (CAC)** is a CLI tool for **`DevOps Deploy`** that enables users to manage their deployment configurations — including **components**, **applications**, **environments**, and **processes** — as JSON or YAML files.

* Users can download existing configurations from the server, edit them locally, and upload them back, making a source code repository like Git the single source of truth for collaboration and change tracking.

* Processes can be configured at 3 places in the product, **`Application`**, **`Component`** , **`Processes`** and the processes configured here are termed as **`Application Process`**, **`Component Process`**, **`Generic Process`** respectively.

* The `cac setup` command allows users to store server credentials and context locally, eliminating the need to pass credentials with every command.

* CAC AI Skills enable users to perform DevOps Deploy operations using natural language through AI-capable CLI environments.


## History

### Version 4.0

* Added `cac setup` command to store server credentials and context in a local configuration file, reducing repetition across commands.
* Added support to upload/download **Component** configurations as JSON or YAML (`upload-component`, `download-component`).
* Added support to upload/download **Application** configurations as JSON or YAML (`upload-application`, `download-application`).
* Added support to upload/download **Environment** configurations as JSON or YAML (`upload-environment`, `download-environment`).
* Added support to upload/download **External approval process**
* Added CAC AI Skills for performing DevOps Deploy operations using natural language through AI-capable CLI environments.

### Version 3.2
* Supports tag-names instead of their IDs while upload/download.
* All files related to a process will be downloaded into a single directory.
* Included support for process configuration and properties in the json/yaml process script.

### Version 3.1
* Added support to download all processes for a given scope (Application/Component/Generic Processes).

### Version 3.0
* Added support to upload/download component template processes and application template processes.

### Version 2.0
* Output json file is pretty printed.

* Added support to pass comments while uploading a process. The comments are mandatory when an user has **`Require a Comment For Process Design Changes`** enabled in the system settings of DevOps Deploy.Comments should be enclosed in double quotes. 

    **Syntax:** 
    
    ```sh
    <upload-command> <username> <password> <server-url> <input-file> "comments to add while updating process"
    ```
    
    **Example:** 
    
    ```sh
    upload-generic-process admin admin http://localhost:8443 simple-shell-process.json "Changed the Regex in shell step to process only text files."
    ```
  

* Added Support to inject the value of a plugin property from a separate file if a user needs. The file path should be prefixed with **`scriptFile/`** in the respective Json or Yaml files as shown in below Examples:

    ```json5
    { 
      "properties": {
            "prop1": "val1",
            "prop2": "scriptFile/PropDetails.txt"
      }
    }
    ```
    
    ```yaml
    properties:
        prop1: "val1"
        prop2: "scriptFile/PropDetails.txt"
    ```

* Can download Application and Component processes that have spaces in their names 

### Version 1.2
* Added support to handle Post Processing script's body in separate files during upload and download process. The file path should be prefixed with **scriptFile/** in the respective Json or Yaml files as shown in below examples:

```json5 
  {
      "postProcessingScript": {
        "name": "MyScript",
        "body": "scriptFile/MyScript.txt"
      }
  }
```

```yaml
postProcessingScript:
    name: "MyScript"
    body: "scriptFile/MyScript.txt"
```

#### Disclaimer: The change of the body of a post processing script would affect it globally. It means will be applicable to all the processes in which the post processing script is used.

* Added support for the usage of double-quotes in process step names.

### Version 1.1
* Added support for Yaml files as input/output files along with Json files. Both .yml and .yaml extensions are supported.
* Improved loggings and validations for input parameters of all commands.

### Version 1.0
* Upload commands no longer need process name and the scope(application, component) as arguments and are instead sourced from input file

### Version 0.1.0-Beta

* Initial release