# Overview

---

* **`Devops Deploy`** processes allows a user to automate a set of repeatable tasks in a orderly fashion and execute them on configured target machines.

* Processes can be configured at 3 places in the product, **`Application`**, **`Component`** , **`Processes`** and the processes configured here are termed as **`Application Process`**, **`Component Process`**, **`Generic Process`** respectively.

* The aim of this project/tool is to allow users to configure their processes in a source code repo like GIT and make it their single source truth and place for users to collaborate to enhance their processes. 

* This tool currently allows users to use json format to define processes and works with existing processes in 'Devops Deploy'.


## History

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