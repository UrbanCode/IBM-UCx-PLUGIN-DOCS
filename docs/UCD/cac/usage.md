# Usage

## List of All Commands:

## CAC Setup

The `cac setup` command stores server credentials and context information in a local configuration file so that you do not have to provide the server URL, username, and password with every command. Once configured, commands such as `download-component` can resolve these values automatically from the stored context.

### Usage

*Initial setup (credentials required)*:  
`cac setup --server-url <url> --user <username> --pass <password> [--application <name>] [--component <name>]`

*Partial update (one or more fields)*:  
`cac setup [--server-url <url>] [--user <username>] [--pass <password>] [--application <name>] [--component <name>]`

*Set component process context*:  
`cac setup --comp-process-name <name> --comp-process-component <component>`

*Set application process context*:  
`cac setup --app-process-name <name> --app-process-application <application>`

*Display current configuration*:  
`cac setup --show`

*Clear configuration*:  
`cac setup --clear`

### Options

| Flag | Alias | Description |
|------|-------|-------------|
| `--server-url` | `--url` | Server URL (e.g., `https://ucd.example.com:8443`) |
| `--user` | `--username` | Username for authentication |
| `--pass` | `--password` | Password for authentication |
| `--application` | `--app` | Application name for context |
| `--component` | `--comp` | Component name for context |
| `--app-process-name` | | Application process name for context |
| `--app-process-application` | | Application name for application process context |
| `--comp-process-name` | | Component process name for context |
| `--comp-process-component` | | Component name for component process context |
| `--show` | `-s` | Display current configuration |
| `--clear` | `-c` | Delete configuration file |
| `--help` | `-h` | Show help message |

### Behavior

- **Initial setup** — The three credential fields (`--server-url`, `--user`, `--pass`) are required on the first run to create a valid configuration.
- **Partial update** — After the initial setup, you can provide one or more fields to update. Fields that are not specified retain their existing values.
- **Application and component names** — These are optional and can be set or updated at any time.
- **Process context** — Process names and their parent names (component or application) are always provided as separate flags.

### How Context Reduces Repetition

Without setup, every command requires the full set of credentials and resource names:

```sh
download-component myuser mypassword https://ucd.example.com:8443 MyComponent MyComponent.json
```

After running `cac setup`, the CLI resolves credentials and context from the configuration file, so the same operation becomes:

```sh
download-component MyComponent MyComponent.json
```

If the component name is also stored in the context, the command simplifies further to:

```sh
download-component MyComponent.json
```

### Configuration Priority

Values are resolved in the following order (highest to lowest):

1. **CLI flags** — `--server-url`, `--user`, `--pass`, `--application`, `--component`, `--app-process-name`, `--comp-process-name`, etc.
2. **Config file** — `~/.cac/config.yaml`

CLI flags always take precedence over stored configuration values.

### Configuration File Location

The configuration is stored at `~/.cac/config.yaml`.

### Sample Configuration File

Below is the structure of the generated `config.yaml` after running `cac setup`:

```yaml
# CAC Configuration File
# This file contains sensitive credentials. Keep it secure!
# File permissions should be 600 (owner read/write only)
setup:
  server-url: "https://ucd.example.com:8443/"
  username: "admin"
  password: "{encrypted}qBkXTOZCZEB8SrAqRSJgXA=="
component-process:
  component-name: "MyComponent"
  process-name: "InstallProcess"
application-process:
  application-name: "MyApp"
  process-name: "DeployProcess"
```

> **Note:** The `password` field is always stored in encrypted form. Never edit it manually.

### Viewing Current Configuration

Running `cac setup --show` displays the current stored configuration:

```
Current Configuration:
  Config File:  C:\Users\<username>\.cac\config.yaml
  Server URL:   https://ucd.example.com:8443/
  Username:     admin
  Password:     ***
  Component:    (not set)
  Application:  (not set)
Component Process:
  Component:    MyComponent
  Process:      InstallProcess
Application Process:
  Application:  MyApp
  Process:      DeployProcess
```

> **Note:** Passwords are masked in the `--show` output and are never displayed in plain text. Fields that have not been configured display `(not set)`.

### Important Notes

- Only one server configuration is supported at a time. Running `cac setup` with a different server URL overwrites the previous configuration.
- If a command is run without `cac setup` and without providing credentials via CLI flags, the tool will exit with an error indicating that credentials are missing.

### Examples

- **Initial setup**

        `cac setup --url https://ucd.example.com:8443 --user admin --pass secret`

- **Update only password**

        `cac setup --pass newPassword`

- **Update username and password**

        `cac setup --user newUser --pass newPass`

- **Update only application name**

        `cac setup --application MyApp`

- **Update only component name**

        `cac setup --component MyComponent`

- **Update multiple fields at once**

        `cac setup --pass newPass --application MyApp --component MyComp`

- **Set application process context**

        `cac setup --app-process-name DeployProcess --app-process-application MyApp`

- **Set component process context**

        `cac setup --comp-process-name InstallProcess --comp-process-component MyComp`

- **Display current configuration**

        `cac setup --show`

- **Clear configuration**

        `cac setup --clear`

### Security Considerations

- **Password encryption** — Passwords are encrypted automatically before being written to the configuration file.
- **File permissions** — The config file is created with `600` permissions (owner read/write only).
- **Version control** — Never commit `~/.cac/config.yaml` to version control. Add it to your `.gitignore` if the home directory is tracked.

---


## Process as Configuration Commands

- **Download a Generic Process**  
  *Syntax*:  
  `download-generic-process <username> <password> <server-url> <process-name> <output-file>`  
  *Example*:



        `download-generic-process myuser mypassword https://url:8443 myGenericProcessName myGenericProcess.json`
    
    
        `download-generic-process myuser mypassword https://url:8443 myGenericProcessName myGenericProcess.yaml`

- **Download all Generic processes**  
  *Syntax*:  
  `download-generic-process-all <username> <password> <server-url> <output-file-type(json/yaml)>`  
  *Example*:



        `For Ex(json format): ./download-generic-process-all myuser mypassword https://url:8443 json`
    

        `For Ex(yaml format): ./download-generic-process-all myuser mypassword https://url:8443 yaml`

- **Download a Component Process**  
  *Syntax*:  
  `download-component-process <username> <password> <server-url> <component-process-name> <component-name> <output-file>`  
  *Example*:



        `download-component-process myuser mypassword https://url:8443 myComponentProcessName myComponentName myComponentProcess.json`
    

        `download-component-process myuser mypassword https://url:8443 myComponentProcessName myComponentName myComponentProcess.yaml`

- **Download all processes for a given component**  
  *Syntax*:    
  `download-component-process-all <username> <password> <server-url> <component-name> <output-file-type(json)>`  
  *Example*:



        `For Ex(json format): ./download-component-process-all myuser mypassword https://url:8443 myComponentName json`
    

        `For Ex(yaml format): ./download-component-process-all myuser mypassword https://url:8443 myComponentName yaml`

- **Download an Application Process**  
  *Syntax*:  
  `download-application-process <username> <password> <server-url> <application-process-name> <application-name> <output-file>`  
  *Example*:



        `download-application-process myuser mypassword https://url:8443 myApplicationProcessName myApplicationName myApplicationProcess.json`
    
    
        `download-application-process myuser mypassword https://url:8443 myApplicationProcessName myApplicationName myApplicationProcess.yaml`

- **Download all processes for a given application**  
  *Syntax*:  
  `download-application-process-all <username> <password> <server-url> <application-name> <output-file-type(json)>`  
  *Example*:



        `For Ex(json format): ./download-application-process-all myuser mypassword https://url:8443 myApplicationName  json`
    
    
        `For Ex(yaml format): ./download-application-process-all myuser mypassword https://url:8443 myApplicationName  yaml`

- **Download a Component Template Process**  
  *Syntax*:  
  `download-component-template-process <username> <password> <server-url> <component-template-process-name> <component-template-name> <output-file>`  
  *Example*:



        `download-component-template-process myuser mypassword https://url:8443 myComponentTemplateProcessName myComponenTemplatetName myComponentTemplateProcess.json`
    

        `download-component-template-process myuser mypassword https://url:8443 myComponentTemplateProcessName myComponenTemplatetName myComponentTemplateProcess.yml`

- **Download an Application Template Process**  
  *Syntax*:  
  `download-application-template-process <username> <password> <server-url> <application-template-process-name> <application-template-name> <output-file>`  
  *Example*:



        `download-application-template-process myuser mypassword https://url:8443 myApplicationTemplateProcessName myApplicationTemplateName myApplicationTemplateProcess.json`
    

        `download-application-template-process myuser mypassword https://url:8443 myApplicationTemplateProcessName myApplicationTemplateName myApplicationTemplateProcess.yaml`

- **Upload a Generic Process**  
  *Syntax*:  
  `upload-generic-process <username> <password> <server-url> <input-file>`  
  *Example*:



        `upload-generic-process myuser mypassword https://url:8443  myGenericProcess.json`
    
        
        `upload-generic-process myuser mypassword https://url:8443  myGenericProcess.yml`

- **Upload a Component Process**  
  *Syntax*:  
  `upload-component-process <username> <password> <server-url> <input-file>`  
  *Example*:



        `upload-component-process myuser mypassword https://url:8443 myComponentProcess.json`
    

        `upload-component-process myuser mypassword https://url:8443 myComponentProcess.yml`

- **Upload an Application Process**  
  *Syntax*:  
  `upload-application-process <username> <password> <server-url> <input-file>`  
  *Example*:



        `upload-application-process myuser mypassword https://url:8443 myApplicationProcess.json`
    

        `upload-application-process myuser mypassword https://url:8443 myApplicationProcess.yml`

- **Upload a component template process**  
  *Syntax*:  
  `upload-component-template-process <username> <password> <server-url> <input-file>`  
  *Example*:



        `./upload-component-template-process myuser mypassword https://url:8443 myComponentTemplateProcess.json`
    

        `./upload-component-template-process myuser mypassword https://url:8443 myComponentTemplateProcess.yaml`


- **Upload an application template process**  
  *Syntax*:  
  `upload-application-template-process <username> <password> <server-url> <application-process-name> <application-name> <input-file>`  
  *Example*:



        `For Ex: ./upload-application-template-process myuser mypassword https://url:8443 myApplicationTemplateProcess.json`
    
    
        `For Ex: ./upload-application-template-process myuser mypassword https://url:8443 myApplicationTemplateProcess.yaml`

- **Note: Both .yml and .yaml extensions are supported**
- **Important Note: Use quotes for process names/application names/component names that contains space**  
  *For Ex. While downloading an application process*:    
  `download-application-process myuser mypassword https://url:8443 "my ApplicationProcess Name" "my Application Name" myApplicationProcess.json`

## Structure of a Process file

* A process file has below a structure



    ``` json5
      {
        // "<.. process configuration block..>"        
        "[component | application]": "[ <name of the component> | <name of the application>] ", // Field not required/generated for Generic process
        "process-name": "<name of the process>",
        "process": {
              //"<...json body of the process step definitions ...>"
          }
      }     
    ```



    ``` yaml
      # "<.. process configuration block..>"  
      "[component | application]": "[ <name of the component> | <name of the application> ]"  # Field not required/generated for Generic process
      process-name: "<name of the process>"
      process:
        # <...yaml body of the process step definitions ...>
    ```

* A process in the above structure is mapped to a json that has multiple process step definitions. there are multiple types of steps that are supported in **Devops Deploy**

## Process step definitions


- 'Devops-Deploy' processes are composed of different steps that are made up of json. The steps ideally start from the 'Start' step and terminate at the last user defined step. Unlike in the UI, there's no need for an explicit 'Finish' step.

- There are different types of steps, and many of them are contextual in nature and may not apply to all types of processes. One way to verify is to see if the step you are trying to add is available in the palette in the process design page in the UI

- The structure of a step is composed of step-data that defines the type of step and its attributes and the step workflow data that tells what is the target of the step upon successful (or) unsuccessful termination of the step. Target can be another defined step or be the finish step.



    ```json5
      { 
        "<name of the step>" : {
            " ..step data.. "
            "  .."
            "  .."
          },
          "on" : {
              "..step Termination events data.."
          }
        } 
    ```



    ```yaml
      "<name of the step>":
        step_data: " ..."
        another_field: " ..."

      on:
        step_termination_events_data: " ..."

    ```

## Termination Events within in a Process
The step termination event tells the possible termination possibilities of a step and attach a target step based on the type of the termination event. The three types of termination events are
1. success — upon successful completion of this step
2. failure - upon unsuccessful completion of this step
3. complete  - upon completion of the current step irrespective of successful or unsuccessful execution

- The events contain data to complete the workflow by defining what the next step is post the completion of the current step.
  the events can either **start** an array of one or more steps defined in the process or can terminate at the **finish** step
-
### Termination event Examples
1. Example of events calling other steps in successful and unsuccessful scenarios of the current step



    ```json5
      { 
        "on" : {
          "success" : {
              "start" : ["some-step", "some other step"]
          },
          "failure" : {
              "start" : ["some step"]
          }
        }
      }
    ```



    ```yaml
      on:
        success:
          start:
            - "some-step"
            - "some other step"
        failure:
          start:
            - "some step"
    ```
2. Examples of events calling the finish step

* Example-1


    ```json5
      {
      "on" : {
        "success" : {
            "finish" : ""
          }
      }
      }
    ```


    ```yaml
      on:
        success:
          finish: ""
    ```

* Example-2


    ```json5
      {
        "on" : {
          "success": {
            "start": [
              "start-server"
            ]
          },
          "failure": {
            "finish": ""
          }
        }
      }
    ```


    ```yaml
      on:
        success:
          start:
            - "start-server"
        failure:
          finish: ""
    ```

Note that in the above examples, the **finish** attribute has no value. The finish step does not need a definition and hence there is no need for a target step value.

## Process configurations

### Component Process Configurations
*  Available from 8.X versions

- Syntax



    ```json5
    {
      // --- Common Fields: Always Present ---
      // These fields are fundamental and required for all process definitions.
      description: "[[String: A brief, descriptive summary of the process's purpose, e.g., 'Deploy web application to production', 'Uninstall database service', 'Apply configuration changes to server']]",
      defaultWorkingDir: "[[String: The default working directory for the process execution. Often uses placeholders for dynamic paths, e.g., '${p:resource/work.dir}/${p:component.name}']]",
      status: "[[String: The current status of this process definition. Typically 'Active' or 'Inactive'.]]",
      
      // --- Property Definitions (propDefs): Rule 1 ---
      // This array holds definitions for custom properties that can be configured for this process.
      //  This array can have 0 or more nested JSON objects. If no custom properties are needed, provide an empty array: `[]`.
      propDefs: [
        {
           index: "[[Integer: A zero-based index defining the display order of this property in the UI, e.g., 0, 1, 2]]",
           name: "[[String: The internal, unique identifier for the property (e.g., 'text-prop', 'databasePort', 'deploymentStrategy'). This is often used in scripts/plugins to reference the property's value.]]",
           type: "[[String: The data type and UI control type for the property. Allowed values: 'TEXT', 'DATETIME', 'TEXTAREA', 'BOOLEAN', 'SELECT', 'MULTI_SELECT', 'CHECKBOX'..]]",
           inherited: "[[Boolean: Set to `true` if this property's value can be inherited from a parent object (e.g., component or application level). Set to `false` otherwise.]]",
           isHidden: "[[Boolean: Set to `true` if this property should not be visible in the standard UI forms (useful for internal or advanced properties). Set to `false` for visible properties.]]",
           required: "[[Boolean: Set to `true` if a value for this property must be provided before the process can be executed. Set to `false` if it's optional.]]",
           label: "[[String: The user-friendly label displayed next to the property in the UI (e.g., 'Application Name', 'Database Port Number').]]",
           description: "[[String: A detailed explanation of what the property is used for and what kind of value is expected (e.g., 'Full path to the application's WAR file', 'The port number for the database connection').]]",
           pattern: "[[String: An optional regular expression pattern for validating the property's value. Can be an empty string `''` if no pattern validation is needed.]]",
           value: "[[String|Boolean: The default value for this property. The data type (String, Number, Boolean, or null) must correspond to the `type` field. For example, if `type` is 'DATETIME', this might be a timestamp as a string '1744100280000'. If `type` is 'TEXT', it could be 'initial data'. If `type` is 'BOOLEAN', it's `true` or `false`.]]",
        },
        // Add more property definition objects here as needed.
      ],
      
      // --- Required Role Names (requiredRoleNames) ---
      // This array specifies the names of roles that a user must possess to be authorized to execute this process.
      // This array can be empty `[]` if no specific role restrictions apply beyond general system permissions.
      requiredRoleNames: [
        'Deployer', 'Admin',
      ],
      
      // --- Conditional Fields Based on UI Process Type ---
      // The following fields (`takesVersion`, `inventoryActionType`, `configActionType`)
      // will be present or absent, and have specific values, depending on the "Process Type"
      // selected in the User Interface for this process.
      // Uncomment and configure ONLY ONE of the scenarios below based on your UI selection.

      // Scenario 1: UI Process Type is "Deployment" (or "Install")
      takesVersion: true, // Indicates if this deployment process requires or consumes a version.
      inventoryActionType: "ADD", // Denotes that this process adds an item to inventory.
      configActionType: "ADD",    // Denotes that this process applies configuration changes.

      // Scenario 2: UI Process Type is "Uninstall"
      inventoryActionType: "REMOVE", // Denotes that this process removes an item from inventory.
      // DO NOT include "configActionType" or "takesVersion" fields for this scenario.

      // Scenario 3: UI Process Type is "Configuration"
      configActionType: "ADD", // Denotes that this process applies configuration changes.
      // DO NOT include "inventoryActionType" or "takesVersion" fields for this scenario.

      // Scenario 4: UI Process Type is "Operational-with-version"
      takesVersion: true, // Indicates this operational process is tied to a specific version.
      // DO NOT include "inventoryActionType" or "configActionType" fields for this scenario.

      // Scenario 5: UI Process Type is "Operational-without-version"
      takesVersion: false, // Indicates this operational process is NOT tied to a specific version.
      // DO NOT include "inventoryActionType" or "configActionType" fields for this scenario.
    }
    ```



    ```yaml
      # --- Common Fields: Always Present ---
      # These fields are fundamental and required for all process definitions.
      description: "[[String: A brief, descriptive summary of the process's purpose, e.g., 'Deploy web application to production', 'Uninstall database service', 'Apply configuration changes to server']]"
      defaultWorkingDir: "[[String: The default working directory for the process execution. Often uses placeholders for dynamic paths, e.g., '${p:resource/work.dir}/${p:component.name}']]"
      status: "[[String: The current status of this process definition. Typically 'Active' or 'Inactive'.]]"
      
      # --- Property Definitions (propDefs) ---
      # This array holds definitions for custom properties that can be configured for this process.
      propDefs:
      # Example property definition object. Add more items as needed.
      - index: "[[Integer: A zero-based index defining the display order of this property in the UI, e.g., 0, 1, 2]]"
        name: "[[String: The internal, unique identifier for the property (e.g., 'text-prop', 'databasePort', 'deploymentStrategy'). This is often used in scripts/plugins to reference the property's value.]]"
        type: "[[String: The data type and UI control type for the property. Allowed values: 'TEXT', 'DATETIME', 'TEXTAREA', 'BOOLEAN', 'SELECT', 'MULTI_SELECT', 'CHECKBOX'.]]"
        inherited: "[[Boolean: Set to `true` if this property's value can be inherited from a parent object (e.g., component or application level). Set to `false` otherwise.]]"
        isHidden: "[[Boolean: Set to `true` if this property should not be visible in the standard UI forms (useful for internal or advanced properties). Set to `false` for visible properties.]]"
        required: "[[Boolean: Set to `true` if a value for this property must be provided before the process can be executed. Set to `false` if it's optional.]]"
        label: "[[String: The user-friendly label displayed next to the property in the UI (e.g., 'Application Name', 'Database Port Number').]]"
        description: "[[String: A detailed explanation of what the property is used for and what kind of value is expected (e.g., 'Full path to the application's WAR file', 'The port number for the database connection').]]"
        pattern: "[[String: An optional regular expression pattern for validating the property's value. Can be an empty string `''` if no pattern validation is needed.]]"
        value: "[[String|Number|Boolean|null: The default value for this property. The data type (String, Number, Boolean, or null) must correspond to the `type` field. For example, if `type` is 'DATETIME', this might be a timestamp as a string '1744100280000'. If `type` is 'TEXT', it could be 'initial data'. If `type` is 'BOOLEAN', it's `true` or `false'.]]"
      # Add more property definition objects here as needed.
      
      # --- Required Role Names (requiredRoleNames) ---
      # This array specifies the names of roles that a user must possess to be authorized to execute this process.
      # This array can be empty `[]` if no specific role restrictions apply beyond general system permissions.
      requiredRoleNames:
      - "role1"
      - "role2"
      
      # --- Conditional Fields Based on UI Process Type ---
      # The following fields (`takesVersion`, `inventoryActionType`, `configActionType`)
      # will be present or absent, and have specific values, depending on the "Process Type"
      # selected in the User Interface for this process.
      # IMPORTANT: Uncomment and configure ONLY ONE of the scenarios below based on your UI selection.
      # Ensure that fields marked "DO NOT include" are completely omitted from your final YAML.
      
      # Scenario 1: UI Process Type is "Deployment" (or "Install")
      takesVersion: true # Indicates if this deployment process requires or consumes a version.
      inventoryActionType: "ADD" # Denotes that this process adds an item to inventory.
      configActionType: "ADD"    # Denotes that this process applies configuration changes.
      
      # Scenario 2: UI Process Type is "Uninstall"
      inventoryActionType: "REMOVE" # Denotes that this process removes an item from inventory.
      # DO NOT include `configActionType` or `takesVersion` fields for this scenario.
      
      # Scenario 3: UI Process Type is "Configuration"
      configActionType: "ADD" # Denotes that this process applies configuration changes.
      # DO NOT include `inventoryActionType` or `takesVersion` fields for this scenario.
      
      # Scenario 4: UI Process Type is "Operational-with-version"
      takesVersion: true # Indicates this operational process is tied to a specific version.
      # DO NOT include `inventoryActionType` or `configActionType` fields for this scenario.
      
      # Scenario 5: UI Process Type is "Operational-without-version"
      takesVersion: false # Indicates this operational process is NOT tied to a specific version.
      # DO NOT include `inventoryActionType` or `configActionType` fields for this scenario.
    ``` 


- Below is an example for an "install type" component process configuration



    ```json5
      {
        "description": "Process description",
        "defaultWorkingDir": "${p:resource\/work.dir}\/${p:component.name}",
        "takesVersion": true,
        "inventoryActionType": "ADD",
        "configActionType": "ADD",
        "status": "Active",
        "propDefs": [
              {
              "index": 0,
              "name": "text-prop",
              "type": "TEXT",
              "inherited": false,
              "isHidden": false,
              "required": false,
              "label": "label testing",
              "description": "text property changed",
              "pattern": "",
              "value": "some data"
              },
              {
              "index": 1,
              "name": "Date Time prop",
              "type": "DATETIME",
              "inherited": false,
              "isHidden": false,
              "required": true,
              "label": "Date Time prop",
              "description": "date time prop",
              "pattern": "",
              "value": "1744100280000"
              }
        ]
        "requiredRoleNames": [
            "custom_role",
            "Deployer"
        ]
      }
      // rest of the process 
    ```



    ```yaml
      ---
      description: "test-3"
      defaultWorkingDir: "${p:resource/work.dir}/${p:component.name}"
      takesVersion: true
      inventoryActionType: "ADD"
      configActionType: "ADD"
      status: "Active"
      propDefs:
      - index: 0
        name: "text-prop"
        type: "TEXT"
        inherited: false
        isHidden: false
        required: false
        label: "label testing"
        description: "text property changed"
        pattern: ""
        value: "some data"
        - index: 1
          name: "Date Time prop"
          type: "DATETIME"
          inherited: false
          isHidden: false
          required: true
          label: "Date Time prop"
          description: "date time prop"
          pattern: ""
          value: "1744100280000"
      requiredRoleNames:
        - "custom_role"
        - "Deployer"
      active: true
      # rest of the process 

      ```

### Application process configuration
*  Available from 8.X versions

- Syntax



    ```json5
    {
      "inventoryManagementType": "[[String: Type of inventory management. Allowed values: 'AUTOMATIC', 'ADVANCED']]",
      "offlineAgentHandling": "[[String: How offline agents are handled. Allowed values: 'FAIL_BUT_CONTINUE', 'PRE_EXECUTION_CHECK', 'ALLOW_OFFLINE']]",
      "description": "[[String: A brief description of the process or definition.]]",
      "disableSnapshots": "[[Boolean: true if snapshots are disabled, false otherwise.]]",
      
      "propDefs": [
          // This array can contain 0 or more property definition objects.
          // If no custom properties are needed, provide an empty array: []
          {
              "index": "[[Integer: The display order index of the property (e.g., 0, 1, 2).]]",
              "name": "[[String: The internal name of the property (e.g., 'prop-1', 'text-prop').]]",
              "type": "[[String: The data type of the property. Examples: 'TEXT', 'DATETIME', 'TEXTAREA', 'SELECT', 'MULIT_SELECT'.]]",
              "inherited": "[[Boolean: true if inherited, false otherwise.]]",
              "isHidden": "[[Boolean: true if the property should be hidden in the UI, false otherwise.]]",
              "required": "[[Boolean: true if the property is mandatory, false otherwise.]]",
              "label": "[[String: The user-friendly label for the property in the UI.]]",
              "description": "[[String: A detailed description of the property.]]",
              "pattern": "[[String: A regular expression pattern for validation (can be empty '').]]",
              "value": "[[String|Number|Boolean|null: The default or current value of the property. Type depends on the 'type' field. E.g., 'prop-value', '1744100280000', true, null.]]"
          }
      ],
      
      "versionPresets": [
          // This array defines component version selectors. It can contain one or more objects.
          {
              "component": "[[String: The name of the component]]",
              "selector": "[[String: The version selector strategy. should use one of the below:
              'latestWithStatus/[status-name]',
              'version/[[ String: version-name]]',
              'latestVersion/',
              'allWithStatus/[[String: status-name]]',
              'allInEnvironment/[[String: inventory-status]]',
              'reverseAllInEnvironment/[[String: inventory-status]]']]"
          }
      ],
      
      // "requiredRoleNames": "[[Optional Array of Strings: Role names required to execute. This field is optional. If present and no roles are needed, provide an empty array: []]]"
      "requiredRoleNames": [
          "[[String: Name of a required role, e.g., 'Administrator', 'Automation Engineer']]",
      ]
    }

    ```



    ```yaml
      # --- Core Configuration Fields ---
      # These fields are fundamental and are always present in the process definition.
      inventoryManagementType: "[[String: Defines how inventory is managed. Possible values: 'AUTOMATIC', 'ADVANCED']]"
      offlineAgentHandling: "[[String: Specifies the behavior when an agent is offline. Possible values: 'FAIL_BUT_CONTINUE', 'PRE_EXECUTION_CHECK', 'ALLOW_OFFLINE']]"
      description: "[[String: A brief textual description of this process configuration, e.g., 'test-1']]"
      disableSnapshots: "[[Boolean: Set to `true` to disable snapshots for this process; set to `false` to enable them.]]"
      
      # --- Property Definitions (propDefs) ---
      # This section defines custom properties that can be used within the process.
      # This array can contain 0 or more property definition objects.
      # If no custom properties are needed, simply use an empty array: `propDefs: []`.
      propDefs:
      # Example of a single property definition object. Add more items as needed.
      - index: "[[Integer: A zero-based integer representing the display order of this property, e.g., 0, 1, 2]]"
        name: "[[String: The internal, unique identifier for the property, e.g., 'prop-1', 'text-prop']]"
        type: "[[String: The data type and corresponding UI control for the property. Valid options include: 'TEXT', 'DATETIME', 'TEXTAREA', 'SELECT', 'MULTI_SELECT'.]]"
        inherited: "[[Boolean: Set to `true` if this property's value can be inherited from a higher-level object (e.g., component or application). Set to `false` otherwise.]]"
        isHidden: "[[Boolean: Set to `true` to hide this property from standard UI forms (useful for internal or advanced settings); set to `false` to make it visible.]]"
        required: "[[Boolean: Set to `true` if a value for this property must be provided before process execution; set to `false` if it is optional.]]"
        label: "[[String: The user-friendly label displayed in the UI for this property, e.g., 'Property One', 'Database Port'.]]"
        description: "[[String: A detailed explanation of the property's purpose and expected values, e.g., 'This field takes the database connection string.']]"
        pattern: "[[String: An optional regular expression pattern used for validating the property's value. Use an empty string `''` if no pattern validation is required.]]"
        value: "[[String|Number|Boolean|null: The default value for this property. The data type must match the `type` field. Examples: 'some data', 1744100280000 (for DATETIME), true, null.]]"
      # Add more `- index: ...` blocks here for additional properties.
      
      # --- Version Presets ---
      # This section defines how component versions are selected for the process.
      # This array typically contains one or more objects, each specifying a component and its version selector.
      versionPresets:
      # Example of a single version preset. Add more items if multiple components are involved.
      - component: "[[String: The name of the component for which the version is being selected, e.g., 'PAC-COMP', 'ZOSCOMP']]"
        selector: "[[String: The strategy for selecting the component version. Examples from samples include:
          'latestWithStatus/[status-name]',
          'version/[[ String: version-name]]',
          'latestVersion/',
          'allWithStatus/[[String: status-name]]',
          'allInEnvironment/[[String: inventory-status]]',
          'reverseAllInEnvironment/[[String: inventory-status]]']]"
        The exact format depends on available version selection methods.]]"
      # Add more `- component: ...` blocks here for additional version presets.
      
      # --- Required Role Names (requiredRoleNames) ---
      # This array specifies the names of roles that a user must possess to be authorized to execute this process.
      # This array is optional. If present, it can be empty `[]` if no specific role restrictions apply beyond general system permissions.
      # If this field is not present in the YAML, it implies no specific roles are required beyond base access.
      # Uncomment the following lines if `requiredRoleNames` is needed for a specific process configuration.
      # requiredRoleNames:
      #   # Example role names. Add more items as needed.
      #   - "[[String: Name of a required role, e.g., 'Administrator', 'Automation Engineer']]"
      #   - "[[String: Another required role name]]"
    ```

- Below is an example for an application process configuration



    ```json5
      {
        "inventoryManagementType": "ADVANCED",
        "offlineAgentHandling": "ALLOW_OFFLINE",
        "description": "test-1",
        "disableSnapshots": true,
        "propDefs": [
            {
              "index": 0,
              "name": "prop-1",
              "type": "TEXT",
              "inherited": false,
              "isHidden": false,
              "required": false,
              "label": "prop-1",
              "description": "description changed for demo",
              "pattern": "",
              "value": "prop-value"
            },
            {
              "index": 1,
              "name": "MULTI-SELECT",
              "type": "MULTI_SELECT",
              "inherited": false,
              "isHidden": false,
              "required": true,
              "label": "LABEL FOR MULTI SELECT",
              "description": "MULTI-SELECT",
              "pattern": "",
              "allowedValues": [
                  {
                      "value": "HARNESS",
                      "label": "HARNESS"
                  },
                  {
                      "value": "UCD",
                      "label": "UCD"
                  },
                  {
                      "value": "DD",
                      "label": "DD"
                  }
              ],
              "value": "HARNESS"
          }
        ],
        "requiredRoleNames": [
          "Administrator",
          "Automation Engineer"
        ],
        "versionPresets": [
            {
              "component": "ZOSCOMP",
              "selector": "reverseAllInEnvironment\/Active"
            }
        ]
      }

    ```



    ```yaml
      ---
      inventoryManagementType: "ADVANCED"
      offlineAgentHandling: "ALLOW_OFFLINE"
      description: "test-1"
      disableSnapshots: true
      propDefs:
      - index: 0
        name: "prop-1"
        type: "TEXT"
        inherited: false
        isHidden: false
        required: false
        label: "prop-1"
        description: "description changed for demo"
        pattern: ""
        value: "prop-value"
      - index: 1
        name: "MULTI-SELECT"
        type: "MULTI_SELECT"
        inherited: false
        isHidden: false
        required: true
        label: "LABEL FOR MULTI SELECT"
        description: "MULTI-SELECT"
        pattern: ""
        allowedValues:
        - value: "HARNESS"
          label: "HARNESS"
        - value: "UCD"
          label: "UCD"
        - value: "DD"
          label: "DD"
          value: "HARNESS"
      requiredRoleNames:
      - "Administrator"
      - "Automation Engineer"
      versionPresets:
      - component: "ZOSCOMP"
        selector: "reverseAllInEnvironment/Active"
    ```

### Process configurations for Generic processes

- Syntax



    ```json5
      {
          "properties": [
          // It MUST contain a property object with "name": "workingDir".
          // It MAY optionally contain a property object with "name": "defaultResourceId".
          // No other 'name' values are allowed within this 'properties' array.
              {
                "name": "workingDir",
                "value": "[[String: The working directory for the process execution. MANDATORY. Can include placeholders like '${p:resource/work.dir}/${p:process.name}'.]]"
              }
              // --- Optional Property: defaultResourceId ---
              // Uncomment the following block if 'defaultResourceId' is needed.
              /*
              , {
                "name": "defaultResourceId",
                "value": "[[String: The ID of the default resource. OPTIONAL. MUST be a UUID (e.g., '196f310a-45fc-6941-e488-d4a0a87a7f38').]]"
              }
              */
          // No other property objects are allowed in this array.
          ],
          "description": "[[String: A textual description for this configuration. Can be an empty string ' ' or a detailed text.]]",
          
          // --- Optional Fields ---
          // The following fields might be present or absent depending on the specific configuration.
          
          "propDefs": [
            // This array defines custom properties that can be configured for this item.
            // This entire 'propDefs' array is OPTIONAL. If not needed, omit it entirely or provide an empty array: [].
              {
                "index": "[[Integer: A zero-based index for display order, e.g., 0, 1, 2.]]",
                "name": "[[String: The internal name of the property, e.g., 'TextProperty', 'select-property', 'checkbox'].]",
                "type": "[[String: The data type and UI control type. Examples: 'TEXT', 'SELECT', 'CHECKBOX', 'DATETIME', 'MULTI_SELECT'.]]",
                "inherited": "[[Boolean: true if inherited, false otherwise.]]",
                "isHidden": "[[Boolean: true if the property should be hidden in the UI, false otherwise.]]",
                "required": "[[Boolean: true if the property is mandatory, false otherwise.]]",
                "label": "[[String: The user-friendly label displayed in the UI, e.g., 'TextProperty-label', 'checkbox property label'.]]",
                "description": "[[String: A detailed description of the property's purpose.]]",
                "pattern": "[[String: An optional regular expression pattern for validation. Can be an empty string '']]",
                "value": "[[String|Boolean|Number|null: The default or current value of the property. The type should match the 'type' field. E.g., 'DEFAULT-VALUE', 'true', 123, null.]]"
                // "allowedValues": "[[Optional Array of Objects: ONLY present if 'type' is 'SELECT']]"
                // If 'type' is "SELECT", this field is required and structured as:
                // "allowedValues": [
                //   { "value": "[[String: The actual value to be stored]]", "label": "[[String: The display label for the value]]" },
                //   { "value": "DD", "label": "DD" },
                //   { "value": "WD", "label": "WD" }
                // ]
              }
            // Add more property definition objects as needed.
          ],
          
          "webhooks": [
          // This array defines webhooks to be triggered by certain events.
          // This entire 'webhooks' array is OPTIONAL. If not needed, omit it entirely or provide an empty array: [].
              {
                "url": "[[String: The URL to which the webhook request will be sent, e.g., 'http://git.com', 'http://exec.com']]",
                "proxyHost": "[[String: Optional proxy host. Can be a placeholder like '${p?:system/proxyHost}' or an empty string '']]]",
                "proxyPort": "[[String: Optional proxy port. Can be a placeholder like '${p?:system/proxyPort}' or an empty string '']]]",
                "webhookTemplate": {
                "name": "[[String: The name of the webhook template, e.g., 'webhooktemplate']]",
                "description": "[[String: A description for the webhook template. Can be empty '']]",
                "body": "[[String: The body content of the webhook request.]]",
                "type": "[[String: The type of event that triggers the webhook. Example: 'PROCESS_FAILURE'. Other types may exist.]]"
              }
          // Add more webhook objects as needed.
          ],
          
          "teamMappings": [
            // This array defines mappings to specific teams for permissions or notifications.
            // This entire 'teamMappings' array is OPTIONAL. If not needed, omit it entirely or provide an empty array: [].
            {
              "resourceTypeId": "[[String: The ID of the resource type being mapped, e.g., '20000000000000000000000000000109']]",
              "resourceTypeName": "[[String: The name of the resource type, e.g., 'Process']]",
              "teamId": "[[String: The unique ID of the team, e.g., '18f70a02-67bd-8ac4-7c5a-fcddeecfd8df']]",
              "teamLabel": "[[String: The display label of the team, e.g., 'Deployer-team']]"
            }
          // Add more team mapping objects as needed.
          ]
      }
    ```



    ```yaml
      # --- Core Configuration Fields ---
      # These fields define fundamental aspects of the process configuration.
      
      properties:
        # This array contains key-value pairs defining specific properties for the process or resource.
        # It MUST include a property with `name: "workingDir"`.
        # It MAY optionally include a property with `name: "defaultResourceId"`.
        # No other property names are allowed within this array.
        - name: "workingDir"
          value: "[[String: The working directory for the process execution. This field is MANDATORY. Examples: '${p:resource/work.dir}/${p:process.name}', '/opt/app/myproject']]"
        # --- Optional Property: defaultResourceId ---
        # Uncomment the following block if `defaultResourceId` is required for your configuration.
        # If present, its value MUST be a valid UUID.
        # - name: "defaultResourceId"
        #   value: "[[String: MUST be a valid UUID (e.g., '196f310a-45fc-6941-e488-d4a0a87a7f38').]]"
      
      description: "[[String: A textual description for this configuration. Can be an empty string `''` or a detailed text. Examples: 'some description', 'Process configuration for application deployment.']]"
      
      # --- Property Definitions (propDefs) ---
      # This section defines custom properties that can be configured and managed for this item.
      # This entire `propDefs` array is OPTIONAL. If no custom properties are needed, omit this section entirely or provide an empty array: `propDefs: []`.
      propDefs:
        # Example of a single property definition object. Add more items as needed.
        - index: "[[Integer: A zero-based index representing the display order of this property in the UI, e.g., 0, 1, 2]]"
          name: "[[String: The internal, unique identifier for the property (e.g., 'TEXT-PROPERTY', 'select-property', 'checkbox').]]"
          type: "[[String: The data type and corresponding UI control for the property. Valid options include: 'TEXT', 'SELECT', 'CHECKBOX', 'DATETIME', 'MULTI_SELECT'.]]"
          inherited: "[[Boolean: Set to `true` if this property's value can be inherited from a higher-level object; set to `false` otherwise.]]"
          isHidden: "[[Boolean: Set to `true` to hide this property from standard UI forms (useful for internal/advanced settings); set to `false` to make it visible.]]"
          required: "[[Boolean: Set to `true` if a value for this property must be provided before process execution; set to `false` if it is optional.]]"
          label: "[[String: The user-friendly label displayed in the UI for this property, e.g., 'TEXT-PROPERTY', 'checkbox property label'.]]"
          description: "[[String: A detailed explanation of the property's purpose and expected values. Can be an empty string `''`.]]"
          pattern: "[[String: An optional regular expression pattern used for validating the property's value. Use an empty string `''` if no pattern validation is required.]]"
          value: "[[String|Boolean|Number|null: The default value for this property. The data type must match the `type` field. Examples: 'some default value', 'true', 123, null.]]"
          # --- Conditional Field for 'SELECT' type properties ---
          # If `type` is "SELECT", this `allowedValues` array is REQUIRED.
          # It defines the list of predefined options for the dropdown.
          # allowedValues:
          #   - value: "[[String: The actual value to be stored when this option is selected, e.g., 'DD']]"
          #     label: "[[String: The display label for this option in the UI, e.g., 'DD']]"
          #   - value: "WD"
          #     label: "WD"
          #   - value: "HARNESS"
          #     label: "HARNESS"
        # Add more `- index: ...` blocks here for additional custom properties.
      
      # --- Webhooks ---
      # This entire `webhooks` array is OPTIONAL. If not needed, omit this section entirely or provide an empty array: `webhooks: []`.
      webhooks:
        # Example of a single webhook configuration. Add more items if multiple webhooks are needed.
        - url: "[[String: The URL endpoint to which the webhook request will be sent, e.g., '[http://call.com](http://call.com)', '[http://exec.com](http://exec.com)']]"
          proxyHost: "[[String: Optional proxy host. Can be a placeholder like '${p?:system/proxyHost}' or an empty string `''`.]]"
          proxyPort: "[[String: Optional proxy port. Can be a placeholder like '${p?:system/proxyPort}' or an empty string `''`.]]"
          webhookTemplate:
            name: "[[String: The name of the webhook template used, e.g., 'webhooktemplate']]"
            description: "[[String: A description for the webhook template. Can be empty `''`.]]"
            body: "[[String: The raw body content of the webhook request.]]"
            type: "[[String: The type of event that triggers this webhook. Example: 'PROCESS_FAILURE'. Other types may exist depending on system capabilities.]]"
        # Add more `- url: ...` blocks here for additional webhooks.
      
      # --- Team Mappings ---
      # This entire `teamMappings` array is OPTIONAL. If not needed, omit this section entirely or provide an empty array: `teamMappings: []`.
      teamMappings:
        # Example of a single team mapping. Add more items if multiple team mappings are needed.
        - resourceTypeId: "[[String: The unique ID of the resource type being mapped, e.g., '20000000000000000000000000000109']]"
          resourceTypeName: "[[String: The name of the resource type, e.g., 'Process', 'Component'.]]"
          teamId: "[[String: The unique ID of the team being mapped, e.g., '18f70a02-67bd-8ac4-7c5a-fcddeecfd8df']]"
          teamLabel: "[[String: The display label of the team, e.g., 'Deployer-team', 'Custom_Team'.]]"
        # Add more `- resourceTypeId: ...` blocks here for additional team mappings.
        
    ```

- Example of a generic process configuration



    ```json5
      {
          "properties": [
              {
                  "name": "workingDir",
                  "value": "${p:resource\/work.dir}\/${p:process.name}"
              },
              {
                  "name": "defaultResourceId",
                  "value": "196f310a-45fc-6941-e488-d4a0a87a7f38"
              }
          ],
          "description": "generic porcess",
          "propDefs": [
              {
                  "index": 0,
                  "name": "TextProperty",
                  "type": "TEXT",
                  "inherited": false,
                  "isHidden": false,
                  "required": false,
                  "label": "TextProperty-label",
                  "description": "prop-description",
                  "pattern": "",
                  "value": "DEFAULT-VALUE"
              },
              {
                  "index": 1,
                  "name": "select-property",
                  "type": "SELECT",
                  "inherited": false,
                  "isHidden": false,
                  "required": true,
                  "label": "sp label",
                  "description": "SP",
                  "pattern": "",
                  "allowedValues": [
                      {
                          "value": "DD",
                          "label": "DD"
                      },
                      {
                          "value": "WD",
                          "label": "WD"
                      },
                      {
                          "value": "HARNESS",
                          "label": "HARNESS"
                      }
                  ],
                  "value": "WD"
              },
              {
                  "index": 2,
                  "name": "chekbox",
                  "type": "CHECKBOX",
                  "inherited": false,
                  "isHidden": false,
                  "required": false,
                  "label": "checkbox properrty label",
                  "description": "CHECKBOX PROP",
                  "pattern": "",
                  "value": "true"
              }
          ],
          "webhooks": [
              {
                  "url": "http:\/\/git.com",
                  "proxyHost": "${p?:system\/proxyHost}",
                  "proxyPort": "${p?:system\/proxyPort}",
                  "webhookTemplate": {
                      "name": "webhooktemplate",
                      "description": "",
                      "body": "sdfs",
                      "type": "PROCESS_FAILURE"
                  }
              },
              {
                  "url": "http:\/\/exec.com",
                  "proxyHost": "${p?:system\/proxyHost}",
                  "proxyPort": "${p?:system\/proxyPort}",
                  "webhookTemplate": {
                      "name": "webhooktemplate",
                      "description": "",
                      "body": "sdfs",
                      "type": "PROCESS_FAILURE"
                  }
              }
          ],
          "teamMappings": [
              {
                  "resourceTypeId": "20000000000000000000000000000109",
                  "resourceTypeName": "Process",
                  "teamId": "18f70a02-67bd-8ac4-7c5a-fcddeecfd8df",
                  "teamLabel": "Deployer-team"
              },
              {
                  "resourceTypeId": "20000000000000000000000000000109",
                  "resourceTypeName": "Process",
                  "teamId": "19560231-d660-d0fa-a390-5b0431d04946",
                  "teamLabel": "custom_team"
              }
      }
      // rest of the process 
    ```



    ```yaml
      ---
      properties:
      - name: "workingDir"
        value: "${p:resource/work.dir}/${p:process.name}"
        - name: "defaultResourceId"
          value: "19642f2e-59b5-6af5-765b-575fb18de966"
      description: " some description"
      propDefs:
        - index: 0
          name: "TEXT-PROPERTY"
          type: "TEXT"
          inherited: false
          isHidden: false
          required: false
          label: "TEXT-PROPERTY"
          description: ""
          pattern: ""
          value: "some default value"
      webhooks:
        - url: "http://call.com"
          proxyHost: "${p?:system/proxyHost}"
          proxyPort: "${p?:system/proxyPort}"
          webhookTemplate:
          name: "webhooktemplate"
          description: ""
          body: "sdfs"
          type: "PROCESS_FAILURE"
      teamMappings:
        - resourceTypeId: "20000000000000000000000000000109"
          resourceTypeName: "Process"
          teamId: "18f70a02-67bd-8ac4-7c5a-fcddeecfd8df"
          teamLabel: "Deployer-team"

      # rest of the process    
    ```




## Step Definitions Types with syntax and examples


Most of the process steps are explained in https://www.ibm.com/docs/en/devops-deploy/8.0.1?topic=processes-process-steps-reference
### Plugin Step
The most common step and ubiquitously found step type in Devops Deploy processes. It can submit different types of plugin based on the name of the plugin and the command the plugin has in it.

- Syntax



    ```json5
    {
      "<Name of the step>": {
            "type": "plugin",
            "plugin": "<plugin-name>",
            "command": "<plugin-command-name>",
            "postProcessingScript": {
                "name": "<post-processing-script-name>",
                "body": "<scriptFile/post-processing-script-name.txt>"
            },
            "properties": {
                "<plugin-property-1>": "<plugin-property-value-1>",
                "<plugin-property-2>": "<plugin-property-value-2>",
                .
                .
                .
                "<plugin-property-n>": "<plugin-property-n>"
            },
            "on": {
                "success": {
                    "start": [
                        "<name of the next step>"
                    ]
                },
                "failure": {
                    "start" : [
                          "<name of the next step-1>",
                          "<name of the next step-2>",
                    ]
                }
            }
        }
    }
        
    ```



    ```yaml
    "<Name of the step>":
      type: "plugin"
      plugin: "<plugin-name>"
      command: "<plugin-command-name>"
      postProcessingScript:
        name: "MyScript"
        body: "<scriptFile/MyScript.txt>"
      properties:
        "<plugin-property-1>": "<plugin-property-value-1>"
        "<plugin-property-2>": "<plugin-property-value-2>"
        # ...
        "<plugin-property-n>": "<plugin-property-n>"
      on:
        success:
          start:
            - "<name of the next step>"
        failure:
          start:
            - "<name of the next step-1>"
            - "<name of the next step-2>"
    ```

- Example



    ```json5
    {
      "Download Artifacts for zOS": {
        "type": "plugin",
        "plugin": "UrbanCode Deploy Versioned File Storage",
        "command": "Download Artifacts for zOS",
        "postProcessingScript": {
            "name": "MyScript",
            "body": "scriptFile/MyScript.txt"
        },
        "properties": {
            "directoryOffset": ".",
            "versionId": "${p:version.id}",
            "versionName": "${p:version.name}",
            "serverUrl": "${p:server.url}",
            "compId": "${p:component.id}",
            "repositoryType": "${p?:version\/ucd.repository.type}",
            "resourceId": "${p:resource.id}",
            "maxMemory": "1G"
        },
        "on": {
            "success": {
                "start": [
                    "c14c031a12ebca72796dbdca98fec0"
                ]
            }
        }
      } 
    }
    ```



    ```yaml
    "Download Artifacts for zOS":
      type: "plugin"
      plugin: "UrbanCode Deploy Versioned File Storage"
      command: "Download Artifacts for zOS"
      postProcessingScript:
        name: "MyScript"
        body: "scriptFile/MyScript.txt"
      properties:
        directoryOffset: "."
        versionId: "${p:version.id}"
        versionName: "${p:version.name}"
        serverUrl: "${p:server.url}"
        compId: "${p:component.id}"
        repositoryType: "${p?:version/ucd.repository.type}"
        resourceId: "${p:resource.id}"
        maxMemory: "1G"
      on:
        success:
          start:
            - "c14c031a12ebca72796dbdca98fec0"
    ```

### Run Generic Process Step

Step is available in all types of processes and is used to trigger another generic process

- Structure
  - Syntax



    ```json5
        {
          "<Name of the step>": {
            "type": "run-generic-process",
            "process": "<generic process to execute>",
            "resource-path": "${p:resource.path}",
            "ignore-child-warnings": false,
            "on": {
                "success": {
                    "start": [
                        "<name of the next step>"
                    ]
                },
                "failure": {
                    "start" : [
                          "<name of the next step-1>",
                          "<name of the next step-2>",
                    ]
                }
            }
        }
    ```



    ```yaml
    "<Name of the step>":
      type: "run-generic-process"
      process: "<generic process to execute>"
      resource-path: "${p:resource.path}"
      ignore-child-warnings: false
      on:
        success:
          start:
            - "<name of the next step>"
        failure:
          start:
            - "<name of the next step-1>"
            - "<name of the next step-2>"
    ```


- Example



    ```json5
        {
          "RUN-GENERIC-PROCESS": {
            "type": "run-generic-process",
            "process": "REXX",
            "resource-path": "${p:resource.path}",
            "ignore-child-warnings": false,
            "on": {
                "success": {
                    "finish": ""
                }
            }
          }
        } 
    ```



    ```yaml
    RUN-GENERIC-PROCESS:
      type: "run-generic-process"
      process: "REXX"
      resource-path: "${p:resource.path}"
      ignore-child-warnings: false
      on:
        success:
          finish: ""  
    ```

### Run application component step
* This step is applicable within an application process to trigger another component process.
* The called component process should be already defined to prevent unexpected behaviour.

- Syntax



    ```json5
          {
            "<name of the step>": {
                "type": "application-run-component-process",
                "component": "<component-name>",
                "process": "<process name in the component>",
                "select-resources-by-tag": "<resources tag uuid>", // optional
                "select-resources-by-changed-component-list": { // optional
                  "components": [   
                    "<list of components separated by comma>"   
                  ],   
                  "select-resources": ["with-changed-component | ALL"]
                },
                "runOnlyOnFirst":false, // optional
                "failFast":false,  // optional 
                "maxIteration":"-1",  // optional
                "isIgnoreChildWarnings":false,  // optional
                "on": {
                  "success": {
                      "finish": ""
                  }
              }
            }
        }
        
    ```



    ```yaml
    "<name of the step>":
      type: "application-run-component-process"
      component: "<component-name>"
      process: "<process name in the component>"
      select-resources-by-tag: "<resources tag uuid>"  # optional
      select-resources-by-changed-component-list:  # optional
        components:
          - "<list of components separated by comma>"
        select-resources:
          - "with-changed-component"
          - "ALL"
      runOnlyOnFirst: false  # optional
      failFast: false  # optional
      maxIteration: "-1"  # optional
      isIgnoreChildWarnings: false  # optional
      on:
        success:
          finish: ""
    ```
- Example-1



    ```json5
        { 
          "run-component-PAC-COMP": {
              "type": "application-run-component-process", 
              "component": "PAC-COMP",
              "process": "deploy-war-to-server",
              "runOnlyOnFirst":false,
              "failFast":false,
              "maxIteration":"-1",
              "isIgnoreChildWarnings":false,
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
      }
    ```



    ```yaml
    run-component-PAC-COMP:
      type: "application-run-component-process"
      component: "PAC-COMP"
      process: "deploy-war-to-server"
      runOnlyOnFirst: false
      failFast: false
      maxIteration: "-1"
      isIgnoreChildWarnings: false
      on:
        success:
          finish: ""
    ```

- Example-2 : with minimal fields



    ```json5
        {  
          "run-component-PAC-COMP": {
            "type": "application-run-component-process", 
            "component": "PAC-COMP",
            "process": "deploy-war-to-server",
            "on": {
                  "success": {
                      "finish": ""
                }
            }
          }
        }
    ```



    ```yaml
    run-component-PAC-COMP:
      type: "application-run-component-process"
      component: "PAC-COMP"
      process: "deploy-war-to-server"
      on:
        success:
          finish: ""
    ```

### Component Run Component Process
* This step is applicable within a component process to trigger another component process.
* The callee component process should be already defined to prevent unexpected behaviour.
  - Syntax



    ```json5
        {
            "<name of the step>": {
              "type": "component-run-component-process",
              "process": "<name of the component process>",
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
        }
    ```



    ```yaml
    "<name of the step>":
      type: "component-run-component-process"
      process: "<name of the component process>"
      on:
        success:
          finish: ""
    ```

- Example



    ```json5
        {
            "run-a-component-process": {
                "type": "component-run-component-process",
                "process": "DEPLOY-ARTIFACT-COMPONENT-PROCESS",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```



    ```yaml
    run-a-component-process:
      type: "component-run-component-process"
      process: "DEPLOY-ARTIFACT-COMPONENT-PROCESS"
      on:
        success:
          finish: ""
    ```

### Acquire Lock Step
* This step acquires a lock on a specified string value. You can use locks to prevent concurrent modification of resources.
* To release the lock, use the Release lock step. Also, locks are released automatically when the process finishes.
* This step applies to application processes, component processes, and generic processes.
  - Syntax



    ```json5
      {
        "<name of the step>": {
            "type": "acquire-lock",
            "lock": "<lock-expression>",
            "on": {
                "success": {
                    "start": [
                        "<next step>"
                    ]
                }
            }
        }
      }
    ```


    ```yaml
    "<name of the step>":
      type: "acquire-lock"
      lock: "<lock-expression>"
      on:
        success:
          start:
            - "<next step>"
    ```
- Example



    ```json5
      {
          "acquire-lock-on-component-resource": {
            "type": "acquire-lock",
            "lock": "${p:component.name}-${p:componentProcess.name}-${p:resource.name}",
            "on": {
                "success": {
                    "start": ["RUN-DB-UPGRADE-STEP"]
                }
            }
          }
      }
      
    ```



    ```yaml
    acquire-lock-on-component-resource:
      type: "acquire-lock"
      lock: "${p:component.name}-${p:componentProcess.name}-${p:resource.name}"
      on:
        success:
          start:
            - "RUN-DB-UPGRADE-STEP"
    ```

### Release Lock Step
* This step releases a lock on a specified string value.
* This step applies to application processes, component processes, and generic processes.
- Syntax



    ```json5
      {
        "<name of the step>": {
            "type": "release-lock",
            "lock": "<lock-expression>",
            "on": {
                "success": {
                    "start": [
                        "<next step>"
                    ]
                }
            }
        }
      }
    ```



    ```yaml
    "<name of the step>":
      type: "release-lock"
      lock: "<lock-expression>"
      on:
        success:
          start:
            - "<next step>"
    ```

- Example



    ```json5
      {
          "release-lock-on-component-resource": {
            "type": "release-lock",
            "lock": "${p:component.name}-${p:componentProcess.name}-${p:resource.name}",
            "on": {
                "success": {
                    "start": [
                        "DEPLOY-JAR-STEP"
                    ]
                }
            }
          }
      }
    ```


    ```yaml
    release-lock-on-component-resource:
      type: "release-lock"
      lock: "${p:component.name}-${p:componentProcess.name}-${p:resource.name}"
      on:
        success:
          start:
            - "DEPLOY-JAR-STEP"
    ```

### Switch Step
* At least 1 case is required in the switch step
* Evaluate is a mandatory field that should have a property which will resolve to a case
* Applications, components, and generic processes share some process steps.
- Syntax



    ```json5
      {
        "<name of the step>" : {
            "type": "switch",
            "evaluate": "<property that evaluates to a switch case>",
            "case": {
                "<case-1>": {
                    "start": [
                        "<next-step>",
                        "<another-step>"
                    ]
                },
                "<case-2>": {
                    "start": [
                        "<some-other-step>"
                    ]
                },
                "DEFAULT": {         // optional    
                    "start": ["<default-step>" ]
                }
            }
        }
      }
    ```


    ```yaml
    "<name of the step>":
      type: "switch"
      evaluate: "<property that evaluates to a switch case>"
      case:
        "<case-1>":
          start:
            - "<next-step>"
            - "<another-step>"
        "<case-2>":
          start:
            - "<some-other-step>"
        DEFAULT:  # optional
          start:
            - "<default-step>"
    ```

- Example



    ```json5
      {
        "Run Necessary Shell based on Request property" : {
            "type": "switch",
            "evaluate": "${p:AppProcessRequestProperty}",
            "case": {
                "1": {
                    "start": [
                        "Shell-launch-server",
                        "Shell-start-app"
                    ]
                },
                "2": {
                    "start": [
                        "Shell-start-service"
                    ]
                },
                "DEFAULT": {
                    "start": [
                        "shell-say-goodbye"
                    ]
                }
            }
          }
      }
    ```


    ```yaml
    "Run Necessary Shell based on Request property":
      type: "switch"
      evaluate: "${p:AppProcessRequestProperty}"
      case:
        "1":
          start:
            - "Shell-launch-server"
            - "Shell-start-app"
        "2":
          start:
            - "Shell-start-service"
        DEFAULT:
          start:
            - "shell-say-goodbye"
    ```

### Add inventory step
* This step applies only to component processes.
* The component resource that the process is running against will have an inventory entry created for it with the specified status.
* Status is mandatory field
- Syntax



    ```json5
        {
          "<name of the step>" : {
            "type": "add-inventory-status",
            "status": "<desired-inventory-status>",
            "on": {
                "success": {
                    "start": [
                        "<next-step>"
                    ]
                }
            }
          }
        }
    ```


    ```yaml
    "<name of the step>":
      type: "add-inventory-status"
      status: "<desired-inventory-status>"
      on:
        success:
          start:
            - "<next-step>"
    ```

- Example



    ```json5
      {
        "add-active-status-to-inventory": {
            "type": "add-inventory-status",
            "status": "Active",
            "on": {
                "success": {
                    "start": [
                        "shell-step"
                    ]
                }
            }
        }
      }
    ```



    ```yaml
    add-active-status-to-inventory:
      type: "add-inventory-status"
      status: "Active"
      on:
        success:
          start:
            - "shell-step"
    ```

### Remove Inventory Step
* This step applies only to component processes.
* The component resource that the process is running against will have an inventory entry removed from it.
* status is mandatory
- Syntax



    ```json5
          { 
            "<name of the step>" : {
              "type": "remove-inventory-status",
              "status": "<inventory-status>",
              "on": {
                "success": {
                    "start": "<next-step>"
                }
              }
            }
        }
    ```


    ```yaml
    "<name of the step>":
      type: "remove-inventory-status"
      status: "<inventory-status>"
      on:
        success:
          start: "<next-step>"
    ```

- Example



    ```json5
      {
        "Remove version status":{
            "type": "remove-inventory-status",
            "status": "active",
            "on": {
                "success": {
                    "start": "shell-step"
                }
            }
          }
        }
    ```


    ```yaml
    Remove version status:
      type: "remove-inventory-status"
      status: "active"
      on:
        success:
          start: "shell-step"
    ```

### Add warning Step
* message is mandatory
  - Syntax



    ```json5
        {
        "<name of the step>" : {
            "type": "add-process-warning",
            "message": "Warning message here..",
            "on": {
                "success": {
                    "start": [
                        "<next-step>"
                    ]
                }
            }
          }
        }
    ```



    ```yaml
    "<name of the step>":
      type: "add-process-warning"
      message: "Warning message here.."
      on:
        success:
          start:
            - "<next-step>"
    ```

- Example



    ```json5
        {
          "warning about some stuff in process": {
            "type": "add-process-warning",
            "message": "Step may not have worked",
            "on": {
                "success": {
                    "start": [
                        "install-web-component"
                    ]
                }
            }
          }
        }
    ```



    ```yaml
    warning about some stuff in process:
      type: "add-process-warning"
      message: "Step may not have worked"
      on:
        success:
          start:
            - "install-web-component"
    ```

### Join step
* The Join step merges a process so that only 1 step runs at a time.
* If any of the steps that connect to a Join step fail or do not run, the Join step causes the process to fail.
* This step applies to application processes, component processes, and generic processes.

  - Syntax



    ```json5
          {
            "<name of the step>": {
                "type": "join",
                "on": {
                    "finish": ""
                }
            }
        }

    ```


    ```yaml
    "<name of the step>":
      type: "join"
      on:
        finish: ""
    ```

- Example



    ```json5
        {
            "join-step-1": {
                "type": "join",
                "on": {
                    "finish": ""
                }
            }
        }

    ```



    ```yaml
    "<name of the step>":
      type: "join"
      on:
        finish: ""
    ```

### Application Manual task step
* This step applies to application processes, component processes, and generic processes.
* When Deploying user or Role Restriction is not defined in JSON, then ANY-USER can approve the task
* When multiple approvals are given deploying-user takes precedence over 'role-restrictions' and 'any-user' takes last precedence
* When deployingUserOnly is set to false or not provided and roleRestrictionData is empty or not provided then 'any-user' can approve the task
- Syntax


    ```json5
        {
            "<name of the step>": {
            "type": "application-manual-task",
            "deployingUserOnly": "true|false",
            "roleRestrictionData": {
                "roleRestrictions": []
            },
            "notification-template": "<an existing template>", 
            "on": {
                "success": {
                    "start": [
                        "<next step>"
                    ]
                }
            } 
          }
        }
    ```


    ```yaml
    "<name of the step>":
      type: "application-manual-task"
      deployingUserOnly: "true|false"
      roleRestrictionData:
        roleRestrictions: []
      notification-template: "<an existing template>"
      on:
        success:
          start:
            - "<next step>"
    ```
- Example



    ```json5
        {
          "AUTOMATION-ENGINEER-APPROVAL": {
            "type": "application-manual-task",
            "deployingUserOnly": "false",
            "roleRestrictionData": {
                "contextType": "ENVIRONMENT",
                "roleRestrictions": [
                    "Automation Engineer"
                ]
            },
            "notification-template": "TaskCreated",
            "on": {
                "success": {
                    "start": [
                        "INSTALL-WEB-COMPONENT"
                    ]
                }
            }
          }
        }
    ```


    ```yaml
    AUTOMATION-ENGINEER-APPROVAL:
      type: "application-manual-task"
      deployingUserOnly: "false"
      roleRestrictionData:
        contextType: "ENVIRONMENT"
        roleRestrictions:
          - "Automation Engineer"
      notification-template: "TaskCreated"
      on:
        success:
          start:
            - "INSTALL-WEB-COMPONENT"
    ```

### Run operational process for multiple components

* This step applies only to application processes, including application processes that are associated with application templates.

- Syntax



    ```json5
      {
          "<name of the step>": {
              "type": "run-operational-process-for-multiple-components",
              "name": "<name of the step>",
              "process": "<name of the component process>",
              "select-components-by-tag": "<uuid of the component tag>",
              "select-resources-by-tag":  "<uuid of the resource tag>", 
              "fail-fast": false,// boolean
              "ignore-child-warnings": false,// boolean
              "run-on-first-online-resource-only": false, // boolean
              "max-concurrent-processes": "[unlimited | a positive integer]",
              "max-concurrent-components": "[unlimited | a positive integer]",
              "precondition-script": "\"TRUE\"", 
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
      }
    ```


    ```yaml
    "<name of the step>":
      type: "run-operational-process-for-multiple-components"
      name: "<name of the step>"
      process: "<name of the component process>"
      select-components-by-tag: "<uuid of the component tag>"
      select-resources-by-tag: "<uuid of the resource tag>"
      fail-fast: false
      ignore-child-warnings: false
      run-on-first-online-resource-only: false
      max-concurrent-processes: "[unlimited | a positive integer]"
      max-concurrent-components: "[unlimited | a positive integer]"
      precondition-script: "\"TRUE\""
      on:
        success:
          finish: ""
    ```
- Example-1


    ```json5
      {
          "OPERATIONAL-PROCESS-FOR-COMPONENTS": {
              "type": "run-operational-process-for-multiple-components",
              "name": "OPERATIONAL-PROCESS-FOR-COMPONENTS",
              "process": "DEPLOY",
              "select-components-by-tag": "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e", // tag id 
              "select-resources-by-tag": "18fbe8da-3fd0-8fa3-1487-baa0fc330049", // tag id 
              "fail-fast": true,
              "ignore-child-warnings": true,
              "run-on-first-online-resource-only": false,
              "max-concurrent-processes": "unlimited",
              "max-concurrent-components": "100",
              "precondition-script": "\"TRUE\"",
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
      }
    ```


    ```yaml
    OPERATIONAL-PROCESS-FOR-COMPONENTS:
      type: "run-operational-process-for-multiple-components"
      name: "OPERATIONAL-PROCESS-FOR-COMPONENTS"
      process: "DEPLOY"
      select-components-by-tag: "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e" # tag id
      select-resources-by-tag: "18fbe8da-3fd0-8fa3-1487-baa0fc330049" # tag id
      fail-fast: true
      ignore-child-warnings: true
      run-on-first-online-resource-only: false
      max-concurrent-processes: "unlimited"
      max-concurrent-components: "100"
      precondition-script: "\"TRUE\""
      on:
        success:
          finish: ""
    ```
- Example-2


    ```json5
      {
          "OPERATIONAL-PROCESS-FOR-COMPONENTS": {
              "type": "run-operational-process-for-multiple-components",
              "process": "DEPLOY",
              "fail-fast": true,
              "ignore-child-warnings": true,
              "run-on-first-online-resource-only": false,
              "max-concurrent-processes": "unlimited",
              "max-concurrent-components": "unlimited",
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
      }   

    ```


    ```yaml
    OPERATIONAL-PROCESS-FOR-COMPONENTS:
      type: "run-operational-process-for-multiple-components"
      process: "DEPLOY"
      fail-fast: true
      ignore-child-warnings: true
      run-on-first-online-resource-only: false
      max-concurrent-processes: "unlimited"
      max-concurrent-components: "unlimited"
      on:
        success:
          finish: ""
    ```

### Rollback Multiple Components step

* Use this step to roll back multiple component versions to versions in a snapshot or to versions that were deployed when the process began. The multiple components are based on component tags or resource tags.
* This step applies only to application processes, including application processes that are associated with application templates.

- Syntax


    ```json5
        {
          "<name of the step>": {
            "type": "rollback-multiple-components",
            "process": "<name of the component process>",
            "rollback-type": "[remove-undesired-incremental-versions | replace-with-last-deployed]",
            "select-versions-with-inventory-status": "<a valid version inventory status, usually it is set as ACTIVE>",
            "select-components-by-tag": "<component tag>",
            "fail-fast": "true | false",
            "ignore-child-warnings": "true | false",
            "max-concurrent-processes": "[unlimited | a positive integer]",
            "max-concurrent-components": "[unlimited | a positive integer]",
            "on": {
              "success": {
                "finish": ""
              }
            }
          }
        }
    ```


    ```yaml
    <name of the step>:
      type: "rollback-multiple-components"
      process: "<name of the component process>"
      rollback-type: "[remove-undesired-incremental-versions | replace-with-last-deployed]"
      select-versions-with-inventory-status: "<a valid version inventory status, usually it is set as ACTIVE>"
      select-components-by-tag: "<component tag>"
      fail-fast: "[true | false]"
      ignore-child-warnings: "[true | false]"
      max-concurrent-processes: "[unlimited | a positive integer]"
      max-concurrent-components: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```
- Example


    ```json5
        {
          "rollback multiple steps": {
            "type": "rollback-multiple-components",
            "process": "ROLLBACK-VERSION",
            "rollback-type": "remove-undesired-incremental-versions",
            "select-versions-with-inventory-status": "Active",
            "select-components-by-tag": "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e", // tag id 
            "fail-fast": false,
            "ignore-child-warnings": false,
            "max-concurrent-processes": "unlimited",
            "max-concurrent-components": "100",
            "on": {
              "success": {
                "finish": ""
              }
            }
          }
      }
    ```


    ```yaml
    rollback multiple steps:
      type: "rollback-multiple-components"
      process: "ROLLBACK-VERSION"
      rollback-type: "remove-undesired-incremental-versions"
      select-versions-with-inventory-status: "Active"
      select-components-by-tag: "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e" # tag id
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "unlimited"
      max-concurrent-components: "100"
      on:
        success:
          finish: ""
    ```

### Rollback Component

This step applies only to application processes.
- Syntax


    ```json5
        { 
            "<name of the step>": {
                "type": "rollback-component",
                "component": "<component name>",
                "process": "<component process name>",
                "rollback-type": "[remove-undesired-incremental-versions | replace-with-last-deployed]",
                "select-versions-with-inventory-status": "<a valid version inventory status, usually it is set as ACTIVE>",
                "fail-fast": false,  // boolean
                "ignore-child-warnings": "true | false",
                "max-concurrent-processes": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
      } 
    ```


    ```yaml
    <name of the step>:
      type: "rollback-component"
      component: "<component name>"
      process: "<component process name>"
      rollback-type: "[remove-undesired-incremental-versions | replace-with-last-deployed]"
      select-versions-with-inventory-status: "<a valid version inventory status, usually it is set as ACTIVE>"
      fail-fast: false
      ignore-child-warnings: "<true | false>"
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

- Example


    ```json5
          { 
            "Rollback PAC-COMP": {
                "type": "rollback-component",
                "component": "PAC-COMP",
                "process": "DEPLOY-MYCOMP",
                "rollback-type": "remove-undesired-incremental-versions",
                "select-versions-with-inventory-status": "Active",
                "fail-fast": false,
                "ignore-child-warnings": false,
                "max-concurrent-processes": "unlimited",
                "properties": {
                    "allowFailure": "false",
                    "isIgnoreChildWarnings": "false",
                },
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```


    ```yaml
    Rollback PAC-COMP:
      type: "rollback-component"
      component: "PAC-COMP"
      process: "DEPLOY-MYCOMP"
      rollback-type: "remove-undesired-incremental-versions"
      select-versions-with-inventory-status: "Active"
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "unlimited"
      properties:
        allowFailure: "false"
        isIgnoreChildWarnings: "false"
      on:
        success:
          finish: ""
    ```

### Uninstall Component

* Applications, components, and generic processes share some process steps. This step applies only to application processes.

- Syntax


    ```json5
      {
          "<name of the step>": {
            "type": "uninstall-component",
            "component": "<component name>",
            "process": "<uninstall process name>",
            "select-versions": "[selected-with-process | all-versions]",
            "select-versions-with-inventory-status": "<version status in inventory usually set to ACTIVE>",
            "fail-fast": "true | false",
            "ignore-child-warnings": "true | false",
            "max-concurrent-processes": "[unlimited | a positive integer]",
            "on": {
                "success": {
                    "finish": ""
                }
            }
        }
      }

    ```


    ```yaml
    <name of the step>:
      type: "uninstall-component"
      component: "<component name>"
      process: "<uninstall process name>"
      select-versions: "[selected-with-process | all-versions]"
      select-versions-with-inventory-status: "<version status in inventory usually set to ACTIVE>"
      fail-fast: "true | false"
      ignore-child-warnings: "true | false"
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```
- Example


    ```json5
      {
          "Uninstall-PAC-COMP": {
            "type": "uninstall-component",
            "component": "PAC-COMP",
            "process": "ROLLBACK",
            "select-versions": "selected-with-process",
            "select-versions-with-inventory-status": "Active",
            "fail-fast": false,
            "ignore-child-warnings": false,
            "max-concurrent-processes": "unlimited",
            "properties": {
                "allowFailure": "false",
                "isIgnoreChildWarnings": "false",
            },
            "on": {
                "success": {
                    "finish": ""
                }
            }
        }
      }
    ```


    ```yaml
    Uninstall-PAC-COMP:
      type: "uninstall-component"
      component: "PAC-COMP"
      process: "ROLLBACK"
      select-versions: "selected-with-process"
      select-versions-with-inventory-status: "Active"
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "unlimited"
      properties:
        allowFailure: "false"
        isIgnoreChildWarnings: "false"
      on:
        success:
          finish: ""
    ```


### Uninstall Multiple Components

* This step applies only to application processes, including application processes that are associated with application templates

- Syntax


    ```json5
        { 
            "<name of the step>": {
                "type": "uninstall-multiple-components",
                "process": "<component process name>",
                "select-versions": "[selected-with-process | all-versions]",
                "select-versions-with-inventory-status": "<version status in inventory usually set to ACTIVE>",
                "select-components-by-tag": "<uuid of the component tag>",
                "select-resources-by-tag": "<uuid of the resources tag>",
                "fail-fast": "true | false",
                "ignore-child-warnings": "true | false",
                "max-concurrent-processes": "[unlimited | a positive integer]",
                "max-concurrent-components": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```


    ```yaml
    <name of the step>:
      type: "uninstall-multiple-components"
      process: "<component process name>"
      select-versions: "[selected-with-process | all-versions]"
      select-versions-with-inventory-status: "<version status in inventory usually set to ACTIVE>"
      select-components-by-tag: "<uuid of the component tag>"
      select-resources-by-tag: "<uuid of the resources tag>"
      fail-fast: "true | false"
      ignore-child-warnings: "true | false"
      max-concurrent-processes: "[unlimited | a positive integer]"
      max-concurrent-components: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

- Example


    ```json5
    { 
        "uninstall-multiple-components": {
            "type": "uninstall-multiple-components",
            "process": "REMOVE-VERSION",
            "select-versions": "selected-with-process",
            "select-versions-with-inventory-status": "Active",
            "select-components-by-tag": "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e", //tag id 
            "select-resources-by-tag": "18fbe8da-3fd0-8fa3-1487-baa0fc330049", // tag id 
            "fail-fast": false,
            "ignore-child-warnings": false,
            "max-concurrent-processes": "[unlimited | a positive integer]",
            "max-concurrent-components": "[unlimited | a positive integer]",
            "on": {
                "success": {
                    "finish": ""
                }
            }
        }
    }
    ```


    ```yaml
    uninstall-multiple-components:
      type: "uninstall-multiple-components"
      process: "REMOVE-VERSION"
      select-versions: "selected-with-process"
      select-versions-with-inventory-status: "Active"
      select-components-by-tag: "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e" # tag id
      select-resources-by-tag: "18fbe8da-3fd0-8fa3-1487-baa0fc330049" # tag id
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "[unlimited | a positive integer]"
      max-concurrent-components: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

### Install Component
* This step applies only to application processes.

- Syntax


    ```json5
    {
       "<name of the step>" : {
        "type": "install-component",
        "component": "<component name>",
        "process": "<component process name>",
        "select-versions-without-inventory-status": "<version status in inventory usually set to ACTIVE>",
        "select-resources-by-tag": "<uuid of the resource tag>",
        "fail-fast": false,  // boolean
        "ignore-child-warnings": false, // boolean 
        "max-concurrent-processes": "[unlimited | a positive integer]",
        "on": {
            "success": {
                "finish": ""
            }
        }
      }
    }
    ```


    ```yaml
    <name of the step>:
      type: "install-component"
      component: "<component name>"
      process: "<component process name>"
      select-versions-without-inventory-status: "<version status in inventory usually set to ACTIVE>"
      select-resources-by-tag: "<uuid of the resource tag>"
      fail-fast: false  # boolean
      ignore-child-warnings: false  # boolean
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

- Example


    ```json5
          {
              "Install PAC-COMP": {
                "type": "install-component",
                "component": "PAC-COMP",
                "process": "DEPLOY-MYCOMP",
                "select-versions-without-inventory-status": "Active",
                "select-resources-by-tag": "18fbe8da-3fd0-8fa3-1487-baa0fc330049",
                "fail-fast": false,
                "ignore-child-warnings": true,
                "max-concurrent-processes": "unlimited",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
          }
    ```


    ```yaml
    <name of the step>:
      type: "install-component"
      component: "<component name>"
      process: "<component process name>"
      select-versions-without-inventory-status: "<version status in inventory usually set to ACTIVE>"
      select-resources-by-tag: "<uuid of the resource tag>"
      fail-fast: false  # boolean
      ignore-child-warnings: false  # boolean
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

### Install Multiple Components
* his step applies only to application processes, including application processes that are associated with application templates.

- Syntax


    ```json5
          { 
              "<name of the step>": {
                "type": "install-multiple-components",
                "process": "<component process>",
                "select-versions-without-inventory-status": "<version status in inventory usually set to ACTIVE>",
                "select-components-by-tag": "<uuid of the component tag>", // optional
                "select-resources-by-tag": "<uuid of the resource tag>", // optional
                "fail-fast": "true | false",
                "ignore-child-warnings": "true | false",
                "max-concurrent-processes": "[unlimited | a positive integer]",
                "max-concurrent-components": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
              }
          }
    ```


    ```yaml
    <name of the step>:
      type: "install-multiple-components"
      process: "<component process>"
      select-versions-without-inventory-status: "<version status in inventory usually set to ACTIVE>"
      select-components-by-tag: "<uuid of the component tag>" # optional
      select-resources-by-tag: "<uuid of the resource tag>" # optional
      fail-fast: "<true | false>"
      ignore-child-warnings: "<true | false>"
      max-concurrent-processes: "<unlimited | a positive integer>"
      max-concurrent-components: "<unlimited | a positive integer>"
      on:
        success:
          finish: ""
    ```

- Example


    ```json5
          { 
              "install-multiple components": {
                "type": "install-multiple-components",
                "process": "install-version",
                "select-versions-without-inventory-status": "Active",
                "select-components-by-tag": "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e", // tag id 
                "select-resources-by-tag": "18fbe8da-3fd0-8fa3-1487-baa0fc330049", // tag id 
                "fail-fast": false,
                "ignore-child-warnings": false,
                "max-concurrent-processes": "unlimited",
                "max-concurrent-components": "100",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
          }
    ```


    ```yaml
    install-multiple components:
      type: "install-multiple-components"
      process: "install-version"
      select-versions-without-inventory-status: "Active"
      select-components-by-tag: "18f4db6a-3bd2-49eb-e7fb-54bf51ab515e" # tag id
      select-resources-by-tag: "18fbe8da-3fd0-8fa3-1487-baa0fc330049" # tag id
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "unlimited"
      max-concurrent-components: "100"
      on:
        success:
          finish: ""
    ```


### Run process for each version
* This step applies only to application processes, including application processes that are associated with application templates.

- Syntax


    ```json5
        {
            "<name o the step>": {
                "type": "run-process-for-each-version",
                "component": "<component name>",
                "process": "<process name>",
                "fail-fast": "true | false",
                "ignore-child-warnings": "true | false",
                "run-on-first-online-resource-only": false ,// boolean
                "max-concurrent-processes": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```


    ```yaml
    <name of the step>:
      type: "run-process-for-each-version"
      component: "<component name>"
      process: "<process name>"
      fail-fast: "true | false"
      ignore-child-warnings: "true | false"
      run-on-first-online-resource-only: false # boolean
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```

- Example


    ```json5
        {
            "Run process for each version": {
                "type": "run-process-for-each-version",
                "component": "PAC-COMP",
                "process": "DEPLOY-MYCOMP",
                "fail-fast": false,
                "ignore-child-warnings": false,
                "run-on-first-online-resource-only": false,
                "max-concurrent-processes": "unlimited",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```


    ```yaml
    Run process for each version:
      type: "run-process-for-each-version"
      component: "PAC-COMP"
      process: "DEPLOY-MYCOMP"
      fail-fast: false
      ignore-child-warnings: false
      run-on-first-online-resource-only: false
      max-concurrent-processes: "unlimited"
      on:
        success:
          finish: ""
    ```

### Run process for each agent

* This step applies only to application processes, including application processes that are associated with application templates.
* A whole process is contained within this step which has its own start and finish steps.

- Syntax


    ```json5
        {
            "<name of the step>": {
                "type": "for-each-agent",
                "child-process": "<process json that has to run on each agent>",
                "tag": [], // zero or more tag ids within quotes separated by comma
                "max-concurrent-agents": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "start": [
                            "step-1"
                        ]
                    }
                }
            }
        }
    ```


    ```yaml
    <name of the step>:
      type: "for-each-agent"
      child-process: "<process json that has to run on each agent>"
      tag: []  # zero or more tag ids within quotes separated by comma
      max-concurrent-agents: "[unlimited | a positive integer]"
      on:
        success:
          start:
            - "step-1"
    ```

- Example


    ```json5
        {
            "APPLY-CONFIG-TOAGENT": {
                "type": "for-each-agent",
                "child-process": {
                    "start": {
                        "type": "start",
                        "start": [
                            "APPLY CONFIG TO AGENT"
                        ]
                    },
                    "APPLY CONFIG TO AGENT": {
                        "type": "apply-configuration",
                        "component": "PAC-COMP",
                        "process": "LESS-COMPREHENSIVE-PROCESS",
                        "fail-fast": false,
                        "ignore-child-warnings": false,
                        "max-concurrent-processes": "unlimited",
                        "properties": {
                            "allowFailure": "false",
                            "activity.componentProcess.id": "19125c59-269d-43dd-4010-d6d0abc3ebad",
                            "isIgnoreChildWarnings": "false",
                            "activity.component.id": "19125ba9-b2b6-6b45-d6f7-9a97f4adb386"
                        },
                        "on": {
                            "success": {
                                "finish": ""
                            }
                        }
                    }
                },
                "tag": [],
                "max-concurrent-agents": "unlimited",
                "on": {
                    "success": {
                        "start": [
                            "step-1"
                        ]
                    }
                }
            }
        }
    ```


    ```yaml
    APPLY-CONFIG-TOAGENT:
      type: "for-each-agent"
      child-process:
        start:
          type: "start"
          start:
            - "APPLY CONFIG TO AGENT"
        APPLY CONFIG TO AGENT:
          type: "apply-configuration"
          component: "PAC-COMP"
          process: "LESS-COMPREHENSIVE-PROCESS"
          fail-fast: false
          ignore-child-warnings: false
          max-concurrent-processes: "unlimited"
          properties:
            allowFailure: "false"
            activity.componentProcess.id: "19125c59-269d-43dd-4010-d6d0abc3ebad"
            isIgnoreChildWarnings: "false"
            activity.component.id: "19125ba9-b2b6-6b45-d6f7-9a97f4adb386"
          on:
            success:
              finish: ""
      tag: []
      max-concurrent-agents: "unlimited"
      on:
        success:
          start:
            - "step-1"
    ```

    ### Run process for each resource

    - Syntax
    
    ```json5
        {
            "RESOURCE-TAG": {
                "type": "for-each-resource-tag",
                "child-process": "<process json for child process>",
                "tag": [
                    "<tag>"
                ],
                "max-concurrent-tags": "1",
                "on": {
                    "success": {
                        "start": [
                            "<another step>"
                        ]
                    }
                }
            }
      }

    ```
    
    ```yaml
    RESOURCE-TAG:
      type: "for-each-resource-tag"
      child-process: "<process json for child process>"
      tag:
        - "<tag>"
      max-concurrent-tags: "1"
      on:
        success:
          start:
            - "<another step>"
    ```
- Example


    ```json5
        {
            "RESOURCE-TAG": {
                "type": "for-each-resource-tag",
                "child-process": {
                    "start": {
                        "type": "start",
                        "start": [
                            "APPLY CONFIG TO RESOURCE"
                        ]
                    },
                    "APPLY CONFIG TO RESOURCE": {
                        "type": "apply-configuration",
                        "component": "PAC-COMP",
                        "process": "LESS-COMPREHENSIVE-PROCESS",
                        "fail-fast": false,
                        "ignore-child-warnings": false,
                        "max-concurrent-processes": "unlimited",
                        "on": {
                            "success": {
                                "finish": ""
                            }
                        }
                    }
                },
                "tag": [
                    "18fbe8da-3fd0-8fa3-1487-baa0fc330049" // tag ids
                ],
                "max-concurrent-tags": "1",
                "on": {
                    "success": {
                        "start": [
                            "adac686c3f11c4a23984edf190bb0f"
                        ]
                    }
                }
            }
        }

    ```


    ```yaml
    RESOURCE-TAG:
      type: "for-each-resource-tag"
      child-process:
        start:
          type: "start"
          start:
            - "APPLY CONFIG TO RESOURCE"
        APPLY CONFIG TO RESOURCE:
          type: "apply-configuration"
          component: "PAC-COMP"
          process: "LESS-COMPREHENSIVE-PROCESS"
          fail-fast: false
          ignore-child-warnings: false
          max-concurrent-processes: "unlimited"
          on:
            success:
              finish: ""
      tag:
        - "18fbe8da-3fd0-8fa3-1487-baa0fc330049" # tag ids
      max-concurrent-tags: "1"
      on:
        success:
          start:
            - "adac686c3f11c4a23984edf190bb0f"
    ```

### Apply Configuration step

* This step applies only to application processes.
* This step runs a component process of the type Operational (No Version Needed) or Configuration Deployment.
- Syntax


    ```json5
        { 
            "<name of the step>": {
                "type": "apply-configuration",
                "component": "<component name>",
                "process": "<component process name>",
                "fail-fast": false, // boolean value
                "ignore-child-warnings": false, // boolean value 
                "max-concurrent-processes": "[unlimited | a positive integer]",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```

    ```yaml
    <name of the step>:
      type: "apply-configuration"
      component: "<component name>"
      process: "<component process name>"
      fail-fast: false  # boolean value
      ignore-child-warnings: false  # boolean value
      max-concurrent-processes: "[unlimited | a positive integer]"
      on:
        success:
          finish: ""
    ```
- Example

    ```json5
        { 
            "Apply-config-operation": {
                "type": "apply-configuration",
                "component": "PAC-COMP",
                "process": "LESS-COMPREHENSIVE-PROCESS",
                "fail-fast": false,
                "ignore-child-warnings": false,
                "max-concurrent-processes": "unlimited",
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
        }
    ```

    ```yaml
    Apply-config-operation:
      type: "apply-configuration"
      component: "PAC-COMP"
      process: "LESS-COMPREHENSIVE-PROCESS"
      fail-fast: false
      ignore-child-warnings: false
      max-concurrent-processes: "unlimited"
      on:
        success:
          finish: ""
    ```

### Generic Manual step

- Syntax


    ```json
        { 
        "<name of the step>": {
              "type": "generic-manual-task",
              "restrict-approval-to": {
                  "[ deploying-user | identities ]": {  "users": [ "<user-1>", "<user-n>"], "groups": ["<group-1>"] }
              },
              "notification-template": "TaskCreated",
              "comment-required": false,
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
        }
    ```


    ```yaml
    <name of the step>:
      type: "generic-manual-task"
      restrict-approval-to:
        "[ deploying-user | identities ]":
          users:
            - "<user-1>"
            - "<user-n>"
          groups:
            - "<group-1>"
      notification-template: "TaskCreated"
      comment-required: false
      on:
        success:
          finish: ""
    ```

* When the approval restriction is set to "deploying-user" not value is required for that field
* Apart from setting approval to "deploying-user", one may also choose selected users or groups of a combination of both
- Example-1 with approval restricted to 'deploying user'



    ```json5
        { 
          "MANUAL-TASKS": {
              "type": "generic-manual-task",
              "restrict-approval-to": {
                  "deploying-user": ""
              },
              "notification-template": "TaskCreated",
              "comment-required": false,
              "on": {
                  "success": {
                      "finish": ""
                  }
              }
          }
        }  
    ```


    ```yaml
    MANUAL-TASKS:
      type: "generic-manual-task"
      restrict-approval-to:
        deploying-user: ""
      notification-template: "TaskCreated"
      comment-required: false
      on:
        success:
          finish: ""
    ```

- Example-2 with approval restricted to identities
* In this example the restriction is set to users 'deploy', 'admin' and group 'Administrators'.


    ```json5
          { 
            "MANUAL-TASKS": {
                "type": "generic-manual-task",
                "restrict-approval-to": {
                    "identities": {
                        "users": [
                            "deploy",
                            "admin"
                        ],
                        "groups": [
                            "Administrators"
                        ]
                    }
                }
            }  
          }
    ```


    ```yaml
    MANUAL-TASKS:
      type: "generic-manual-task"
      restrict-approval-to:
        identities:
          users:
            - "deploy"
            - "admin"
          groups:
            - "Administrators"
    ```

- Example-3 with property definitions


    ```json5
            { 
              "MANUAL-TASKS": {
                "type": "generic-manual-task",
                "restrict-approval-to": {
                    "identities": {
                        "users": [
                            "deploy",
                            "admin"
                        ],
                        "groups": [
                            "Administrators"
                        ]
                    }
                },
                "notification-template": "TaskCreated",
                "comment-required": true,
                "comment-prompt": "HEY,APPROVE THIS",
                "property-definition": [
                    {
                        "property-name": "TEXT-PROPERTY",
                        "property-type": "text",
                        "label": "DUMMY-LABEL",
                        "description": "DUMMY-DESCRIPTION",
                        "default": "TEXT-VALUE"
                    },
                    {
                        "property-name": "TEXT-AREA-PROPERTY",
                        "property-type": "text-area",
                        "label": "TEXT-AREA-LABEL",
                        "description": "TEXT-AREA-DESCRIPTION",
                        "required": true,
                        "default": "HEY-HEY"
                    },
                    {
                        "property-name": "CHECKBOX-PROPERTY",
                        "property-type": "checkbox",
                        "label": "CHECKBOX-LABEL",
                        "description": "CHECKBOX-DESCRIPTION",
                        "default": true
                    },
                    {
                        "property-name": "SELECT-PROPERTY",
                        "property-type": "select",
                        "values": [
                            {
                                "label": "TRUE",
                                "selected": true,
                                "value": "TRUE"
                            },
                            {
                                "label": "FALSE",
                                "value": "FALSE"
                            }
                        ],
                        "label": "SELECT-LABEL",
                        "description": "SELECT-DESCRIPTION"
                    },
                    {
                        "property-name": "MULTI-SELECT",
                        "property-type": "multi-select",
                        "values": [
                            {
                                "label": "START",
                                "selected": true,
                                "value": "START"
                            },
                            {
                                "label": "FINISH",
                                "value": "FINISH"
                            },
                            {
                                "label": "COMPLETE",
                                "value": "COMPLETE"
                            }
                        ],
                        "label": "MULTI-SELECT-LABEL",
                        "description": "MULTI-SELECT-DESCRIPTION"
                    },
                    {
                        "property-name": "SECURE-PROPERTY",  // secure properties is unsupported as there is no way to handle encrypt/decrypt secure values
                        "property-type": "secure",
                        "label": "SECURE-LABEL",
                        "description": "SECURE-DESCRIPTION",
                        "default": "****"
                    },
                    {
                        "property-name": "DATE-TIME-PROPERTY",
                        "property-type": "date-time",
                        "label": "DATE-TIME-PROPERTY-LABEL",
                        "description": "DATE-TIME-PROPERTY-DESCRIPTION",
                        "default": "30/08/2024 19:22"   // date time has to be in this format
                    }
                ],
                "on": {
                    "success": {
                        "finish": ""
                    }
                }
            }
          }
    ```


    ```yaml
    MANUAL-TASKS:
      type: "generic-manual-task"
      restrict-approval-to:
        identities:
          users:
            - "deploy"
            - "admin"
          groups:
            - "Administrators"
      notification-template: "TaskCreated"
      comment-required: true
      comment-prompt: "HEY,APPROVE THIS"
      property-definition:
        - property-name: "TEXT-PROPERTY"
          property-type: "text"
          label: "DUMMY-LABEL"
          description: "DUMMY-DESCRIPTION"
          default: "TEXT-VALUE"
        - property-name: "TEXT-AREA-PROPERTY"
          property-type: "text-area"
          label: "TEXT-AREA-LABEL"
          description: "TEXT-AREA-DESCRIPTION"
          required: true
          default: "HEY-HEY"
        - property-name: "CHECKBOX-PROPERTY"
          property-type: "checkbox"
          label: "CHECKBOX-LABEL"
          description: "CHECKBOX-DESCRIPTION"
          default: true
        - property-name: "SELECT-PROPERTY"
          property-type: "select"
          values:
            - label: "TRUE"
              selected: true
              value: "TRUE"
            - label: "FALSE"
              value: "FALSE"
          label: "SELECT-LABEL"
          description: "SELECT-DESCRIPTION"
        - property-name: "MULTI-SELECT"
          property-type: "multi-select"
          values:
            - label: "START"
              selected: true
              value: "START"
            - label: "FINISH"
              value: "FINISH"
            - label: "COMPLETE"
              value: "COMPLETE"
          label: "MULTI-SELECT-LABEL"
          description: "MULTI-SELECT-DESCRIPTION"
        - property-name: "SECURE-PROPERTY"
          property-type: "secure"
          label: "SECURE-LABEL"
          description: "SECURE-DESCRIPTION"
          default: "****"
        - property-name: "DATE-TIME-PROPERTY"
          property-type: "date-time"
          label: "DATE-TIME-PROPERTY-LABEL"
          description: "DATE-TIME-PROPERTY-DESCRIPTION"
          default: "30/08/2024 19:22"
      on:
        success:
          finish: ""
    ```

---

# CAC AI Skills User Guide

## Overview

The Configuration as Code (CAC) AI Skills enable you to perform DevOps Deploy operations using **natural language** without requiring knowledge of the underlying CAC command syntax.

The AI agent uses the skill definitions to identify the appropriate CAC operation and execute the corresponding CAC CLI command.

### Key Points

* **Start with Setup:** Configure CAC credentials before performing DevOps Deploy operations.
* **Natural Language:** Describe the operation you want to perform using natural language.
* **Flexible Activation:** Skills can be invoked using supported action verbs such as `download`, `get`, `export`, `save`, `fetch`, `upload`, `import`, and `create`.
* **AI Agent Dependency:** Skill triggering and execution depend on the AI agent and model being used.

> **Disclaimer:** The effectiveness of triggering CAC AI Skills depends on the underlying AI agent and model used in the CLI environment. Skill activation accuracy may vary across different models and configurations. Exercise necessary caution and verify the results when working with AI-driven operations.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Skill Installation](#skill-installation)
3. [Setup Skill](#setup-skill)
4. [Download Skills](#download-skills)
5. [Upload Skills](#upload-skills)
6. [Quick Reference](#quick-reference)
7. [Natural Language Examples](#natural-language-examples)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

Before using the CAC AI Skills, ensure the following prerequisites are met:

* **CAC CLI** — The CAC CLI must be installed and available in the user's environment.
* **AI-capable CLI environment** — An AI agent-enabled CLI environment such as **GitHub Copilot CLI**, **Devin CLI**, or another compatible AI-capable CLI is required.
* **Credentials** — CAC credentials must be configured before performing operations. See [Setup Skill](#setup-skill).

### First Steps

1. **Install the CAC AI Skills** in your local agent directory. See [Skill Installation](#skill-installation).
2. **Configure your CAC credentials** using the Setup Skill.
3. **Verify the CAC CLI** is available on your system `PATH`.
4. **Use natural language** to request CAC operations through your AI-capable CLI.
5. **Review the operation and results** before proceeding with changes to your DevOps Deploy environment.

---

## Skill Installation

To use the CAC AI Skills, install the skill definition files into the agent directory used by your AI-capable CLI environment.

### Installation Steps

1. **Locate the skill files** in the CAC distribution package.
2. **Install or copy the skill definitions to the skill location supported by your AI-capable CLI environment.**
3. **Start or restart the AI-capable CLI environment if required.**
4. **Verify that the CAC skills are recognized** by the AI agent.
5. **Use natural language to invoke the required CAC operation.**

---

## Setup Skill

The Setup Skill manages authentication credentials required by the CAC CLI.

### Configure Credentials

Configure the DevOps Deploy server credentials before performing CAC operations.

**Required information:**

* Server URL (for example, `https://server:8443`)
* Username
* Password

**Example requests:**

* `Setup CAC with server https://deploy.company.com:8443, username admin, password <password>`
* `Configure CAC credentials for https://ucd.example.com:8443 with user john and password <password>`

### View Current Configuration

Displays the current CAC configuration with sensitive credential information masked.

**Example requests:**

* `Show CAC configuration`
* `Display current setup`
* `What is my CAC configuration?`

### Clear Credentials

Removes saved CAC credentials from the system.

**Example requests:**

* `Clear CAC credentials`
* `Remove saved credentials`
* `Reset CAC configuration`

> **Note:** Confirmation is required before clearing credentials.

### Security

* Passwords are stored securely.
* Passwords are not displayed in plain text.
* HTTPS endpoints are recommended.
* Confirmation is required before overwriting or clearing credentials.

---

## Download Skills

Download skills export DevOps Deploy configurations to JSON or YAML files.

### Application and Component Downloads

| Skill           | Activation Phrases                                | Required         | Optional         |
| --------------- | ------------------------------------------------- | ---------------- | ---------------- |
| **Application** | download/get/export/save/fetch application [name] | Application name | Format, filename |
| **Component**   | download/get/export/save/fetch component [name]   | Component name   | Format, filename |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application MyApp`
* `Get Payment Gateway application as YAML`
* `Export Auth Service app to auth.yaml`
* `Download component MyComponent as YAML`

### Environment Download

**Activation phrases:** `download/get/export/save/fetch environment [name] from [application]`

**Required:** Environment name, Application name

**Optional:** Format, filename

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download environment DEV from MyApp`
* `Get Production environment of Payment Gateway`
* `Export TEST environment from Auth Service to test.yaml`

### Process Downloads

#### Application and Component Processes

| Skill                   | Activation Phrases                                                       | Required                       |
| ----------------------- | ------------------------------------------------------------------------ | ------------------------------ |
| **Application Process** | download/get/export/save/fetch application process [name] from [app]     | Process name, Application name |
| **Component Process**   | download/get/export/save/fetch component process [name] from [component] | Process name, Component name   |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application process Deploy from MyApplication`
* `Get Build Process from Payment Service application as YAML`
* `Download component process Build from MyComponent`

#### Generic and Approval Processes

| Skill                         | Activation Phrases                                              | Required     |
| ----------------------------- | --------------------------------------------------------------- | ------------ |
| **Generic Process**           | download/get/export/save/fetch generic process [name]           | Process name |
| **External Approval Process** | download/get/export/save/fetch external approval process [name] | Process name |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download generic process SystemDeploy`
* `Get external approval process ApprovalGate as YAML`

#### Template Processes

| Skill                            | Activation Phrases                                                 | Required     |
| -------------------------------- | ------------------------------------------------------------------ | ------------ |
| **Application Template Process** | download/get/export/save/fetch application template process [name] | Process name |
| **Component Template Process**   | download/get/export/save/fetch component template process [name]   | Process name |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application template process StandardDeploy`
* `Get component template process BuildTemplate as YAML`

#### Download All Processes

| Skill                         | Activation Phrases                                       | Required |
| ----------------------------- | -------------------------------------------------------- | -------- |
| **All Application Processes** | download/get/export/save/fetch all application processes | None     |
| **All Component Processes**   | download/get/export/save/fetch all component processes   | None     |
| **All Generic Processes**     | download/get/export/save/fetch all generic processes     | None     |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download all application processes`
* `Get all component processes as YAML`
* `Export all generic processes to processes.yaml`

---

## Upload Skills

Upload skills import DevOps Deploy configurations from JSON or YAML files.

### Application and Component Uploads

| Skill           | Activation Phrases                                | Required                      |
| --------------- | ------------------------------------------------- | ----------------------------- |
| **Application** | upload/import/create application [name]           | Application name, Source file |
| **Component**   | upload/import/create/push/deploy component [name] | Component name, Source file   |

**Example requests:**

* `Upload application MyApp from myapp.json`
* `Import Payment Gateway from payment-gateway.yaml`
* `Create Auth Service using auth.json`
* `Deploy component MyComponent from mycomponent.json`

### Environment Upload

**Activation phrases:** `upload/import/create environment [name]`

**Required:** Environment name, Source file

**Example requests:**

* `Upload environment DEV from dev-env.json`
* `Import Production environment from prod.yaml`
* `Create QA environment using qa.json`

### Process Uploads

#### Application and Component Processes

| Skill                   | Activation Phrases                              | Required                                    |
| ----------------------- | ----------------------------------------------- | ------------------------------------------- |
| **Application Process** | upload/import/create application process [name] | Process name, Application name, Source file |
| **Component Process**   | upload/import/create component process [name]   | Process name, Component name, Source file   |

**Example requests:**

* `Upload application process Deploy from deploy.json for MyApplication`
* `Import application process Build from build.yaml to Payment Service`
* `Upload component process Build from build.json for MyComponent`

#### Generic and Approval Processes

| Skill                         | Activation Phrases                                    | Required                  |
| ----------------------------- | ----------------------------------------------------- | ------------------------- |
| **Generic Process**           | upload/import/create generic process [name]           | Process name, Source file |
| **External Approval Process** | upload/import/create external approval process [name] | Process name, Source file |

**Example requests:**

* `Upload generic process SystemDeploy from system-deploy.json`
* `Import external approval process ApprovalGate from approval.json`

#### Template Processes

| Skill                            | Activation Phrases                                       | Required                  |
| -------------------------------- | -------------------------------------------------------- | ------------------------- |
| **Application Template Process** | upload/import/create application template process [name] | Process name, Source file |
| **Component Template Process**   | upload/import/create component template process [name]   | Process name, Source file |

**Example requests:**

* `Upload application template process StandardDeploy from standard-deploy.json`
* `Import component template process BuildTemplate from build-template.yaml`

### File Requirements

* File format must be `.json` or `.yaml`.
* File must exist and be readable.
* File content must be valid JSON or YAML.
* The file must contain the configuration required by the corresponding CAC operation.

---

## Quick Reference

### Available Skills

| Category     | Skill                            | Activation                                                  |
| ------------ | -------------------------------- | ----------------------------------------------------------- |
| **Setup**    | Configure/View/Clear Credentials | setup/configure/show/clear CAC                              |
| **Download** | Application                      | download/get/export/save/fetch application                  |
| **Download** | Component                        | download/get/export/save/fetch component                    |
| **Download** | Environment                      | download/get/export/save/fetch environment                  |
| **Download** | Application Process              | download/get/export/save/fetch application process          |
| **Download** | Component Process                | download/get/export/save/fetch component process            |
| **Download** | Generic Process                  | download/get/export/save/fetch generic process              |
| **Download** | External Approval Process        | download/get/export/save/fetch external approval process    |
| **Download** | Application Template Process     | download/get/export/save/fetch application template process |
| **Download** | Component Template Process       | download/get/export/save/fetch component template process   |
| **Download** | All Application Processes        | download/get/export/save/fetch all application processes    |
| **Download** | All Component Processes          | download/get/export/save/fetch all component processes      |
| **Download** | All Generic Processes            | download/get/export/save/fetch all generic processes        |
| **Upload**   | Application                      | upload/import/create application                            |
| **Upload**   | Component                        | upload/import/create component                              |
| **Upload**   | Environment                      | upload/import/create environment                            |
| **Upload**   | Application Process              | upload/import/create application process                    |
| **Upload**   | Component Process                | upload/import/create component process                      |
| **Upload**   | Generic Process                  | upload/import/create generic process                        |
| **Upload**   | External Approval Process        | upload/import/create external approval process              |
| **Upload**   | Application Template Process     | upload/import/create application template process           |
| **Upload**   | Component Template Process       | upload/import/create component template process             |

---

## Natural Language Examples

### Basic Workflow

1. **Setup credentials:**

   `Setup CAC with server https://deploy.company.com:8443, username admin, password <password>`

2. **Download an application:**

   `Download application PaymentService as YAML`

3. **Upload the application:**

   `Upload application PaymentService from PaymentService.yaml`

### Common Operations

**Download multiple entities:**

* `Download component AuthModule`
* `Download application PaymentService`
* `Download environment Production from PaymentService`

**Download processes:**

* `Download application process Deploy from MyApplication`
* `Download all component processes as YAML`
* `Download generic process SystemDeploy`

**Upload with different formats:**

* `Upload application MyApp from myapp.json`
* `Upload component MyComponent from mycomponent.yaml`
* `Upload environment DEV from dev-env.json`

---

## Troubleshooting

| Issue                     | Solution                                                                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **No Cached Credentials** | Run `Setup CAC with server <url>, username <user>, password <password>`                                                                      |
| **File Not Found**        | Verify the file path is correct, the file exists, and the extension is `.json` or `.yaml`.                                                   |
| **Authentication Failed** | Check credentials with `Show CAC configuration` and re-run setup if needed.                                                                  |
| **Entity Not Found**      | Verify the entity name and confirm that it exists on the server.                                                                             |
| **Invalid File Format**   | Ensure the file contains valid JSON or YAML.                                                                                                 |
| **Missing Parameters**    | Provide all required information, such as the application name for environments or the component name for component processes.               |
| **Server Not Accessible** | Verify the server URL and network connectivity.                                                                                              |
| **Skill Not Triggered**   | Verify that the skill files are installed in the correct `.agent` directory and that the AI-capable CLI supports the skills/agent framework. |
