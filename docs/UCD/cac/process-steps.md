# Process Step Definitions

> **See also:** For process commands, file structure, termination events, and process configurations, see [Process as Configuration](processes.md).



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
