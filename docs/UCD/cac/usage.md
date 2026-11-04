# Usage

## List of All Commands:

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

> `Security Notice:` Never commit real passwords, encryption keys, tokens, or other credentials to a CAC file or source-control repository.

---

## Documentation

| Page                                         | Description                                                                      |
|----------------------------------------------|----------------------------------------------------------------------------------|
| [CAC Setup](setup.md)                        | Configure server credentials, context, and the configuration file                |
| [Component](component.md)                    | Download and upload component definitions                                        |
| [Application](application.md)                | Download and upload application definitions                                      |
| [Environment](environment.md)                | Download and upload environment definitions                                      |
| [Processes](processes.md)                    | Process commands, file structure, termination events, and process configurations |
| [Process Step Definitions](process-steps.md) | Reference for all process step types with syntax and examples                    |
| [AI with CAC](ai-skills.md)                  | Use natural language to perform CAC operations via an AI-capable CLI             |

---

## List of All Commands

| Command                                 | Page                          | Description                                        |
|-----------------------------------------|-------------------------------|----------------------------------------------------|
| `cac setup`                             | [Setup](setup.md)             | Store or update server credentials and context     |
| `download-component`                    | [Component](component.md)     | Download a component definition to JSON or YAML    |
| `upload-component`                      | [Component](component.md)     | Upload a component definition from JSON or YAML    |
| `download-application`                  | [Application](application.md) | Download an application definition to JSON or YAML |
| `upload-application`                    | [Application](application.md) | Upload an application definition from JSON or YAML |
| `download-environment`                  | [Environment](environment.md) | Download an environment definition to JSON or YAML |
| `upload-environment`                    | [Environment](environment.md) | Upload an environment definition from JSON or YAML |
| `download-generic-process`              | [Processes](processes.md)     | Download a single generic process                  |
| `download-generic-process-all`          | [Processes](processes.md)     | Download all generic processes                     |
| `download-component-process`            | [Processes](processes.md)     | Download a component process                       |
| `download-component-process-all`        | [Processes](processes.md)     | Download all processes for a given component       |
| `download-application-process`          | [Processes](processes.md)     | Download an application process                    |
| `download-application-process-all`      | [Processes](processes.md)     | Download all processes for a given application     |
| `download-component-template-process`   | [Processes](processes.md)     | Download a component template process              |
| `download-application-template-process` | [Processes](processes.md)     | Download an application template process           |
| `upload-generic-process`                | [Processes](processes.md)     | Upload a generic process                           |
| `upload-component-process`              | [Processes](processes.md)     | Upload a component process                         |
| `upload-application-process`            | [Processes](processes.md)     | Upload an application process                      |
| `upload-component-template-process`     | [Processes](processes.md)     | Upload a component template process                |
| `upload-application-template-process`   | [Processes](processes.md)     | Upload an application template process             |

