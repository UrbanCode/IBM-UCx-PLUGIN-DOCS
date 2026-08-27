# Application as Configuration

### Application Management

- **Download an Application**  
  *Syntax*:  
  `download-application <username> <password> <server-url> <application-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-application myuser mypassword https://url:8443 myApp myApp.json`

  *With saved credentials (application name as argument)*:  
  `download-application <application-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-application myApp myApp.json`

- **Upload an Application**  
  *Syntax*:  
  `upload-application <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-application myuser mypassword https://url:8443 myApp.json`

  *With saved credentials*:  
  `upload-application <input-file>.<json|yaml>`  
  *Example*:

        `./upload-application myApp.json`

## Application CAC Structure

An Application CAC file contains the complete definition of an application including its properties, teams, tags, webhooks, and configurations.

### Field Descriptions

#### Application Metadata
- **type**: The type of entity (set to "application")
- **name**: The unique identifier for the application
- **description**: Human-readable description of the application (optional, defaults to empty)
- **useWizard**: Boolean value indicating whether to use the wizard interface

#### Settings
The `settings` object contains configuration options:
- **enforceCompleteSnapshots**: Optional boolean value, defaults to false
- **onlyChangedVersions**: Optional boolean value, defaults to false

#### Notification Scheme
- **notificationSchemeName**: Optional field referencing an existing notification scheme from the server, defaults to none

#### Properties Structure
The `properties` array contains property definitions. Each property definition includes:
- **name**: Internal property name
- **value**: Optional property value
- **description**: Optional property description
- **secure**: Boolean indicating if the property value is encrypted (default: false)

> **Note:** You cannot delete existing properties but you can modify them.

#### Webhooks
- **webhook**: Optional array for adding webhooks. Each webhook definition includes:
  - **url**: The webhook URL
  - **proxyHost**: Proxy host (optional)
  - **proxyPort**: Proxy port (optional)
  - **environments**: Array of environment names where the webhook applies
  - **webhookTemplate**: Object containing webhook template configuration
    - **name**: Template name
    - **description**: Template description
    - **type**: Webhook type (e.g., PROCESS_SUCCESS)

> **Note:** You can add new webhooks, modify them, or delete them by removing the corresponding JSON from the webhooks array. Environment & webhook-template are prerequisites. You cannot modify webhook proxyusername and proxypassword using CAC and would have to do it in UI.

#### Team Mappings
- **teams**: Optional array of team names that already exist in the server

#### Tags
- **tags**: Optional array of tag names that already exist in the server

#### Informational Fields
- **components**: Optional info-only field listing associated components
- **environments**: Optional info-only field listing associated environments
- **processes**: Optional info-only field listing associated processes

> **Note:** The informational fields (components, environments, processes) are for reference only. To make modifications to these entities, use their respective commands.

### Mandatory and Optional Fields

The only mandatory field to create an application is `name`. The minimal JSON required to create an application is:

```json
{
  "name": "PAC-APP-2"
}
```

When an application is created with only the `name` field, the server applies default values for all other fields.

All remaining fields are optional at the application level and can be provided to configure settings such as properties, webhooks, teams, tags, and other application configurations.

### Limitations

- **Pipelines, Blueprint, Calendar** are not supported yet
- **components, environments, processes** â€” These fields are for informational purposes only. If you want to make modifications to them, you must use the respective commands for these entities
- **Webhook credentials** â€” You cannot modify webhook proxyusername and proxypassword using CAC; these must be configured in the UI

### JSON Structure

```json5
{
  "type": "application",
  "name": "<name of the application>",
  "description": "<Optional | defaults to empty | description>",
  "useWizard": "<Boolean value>",
  "settings": {
    "enforceCompleteSnapshots": "<Optional | boolean value | defaults to false>",
    "onlyChangedVersions": "<Optional | boolean value | defaults to false>"
  },
  "notificationSchemeName": "<Optional | Existing notification scheme from server | defaults to none>",
  "properties": [
    // Optional | 0 or more properties in below structure
    {
      "name": "<name of property>",
      "value": "<optional value>",
      "description": "<optional description>",
      "secure": "<false>"
    }
  ],
  "webhook": [
    // Optional | array for adding webhooks
  ],
  "teams": [
    // Optional | array of team names that already exist in the server
  ],
  "tags": [
    // Optional | array of tag names that already exist in the server
  ],
  "components": "<Optional info only fields>",
  "environments": "<Optional info only fields>",
  "processes": "<Optional info only fields>"
}
```

### YAML Structure

```yaml
type: "application"
name: "<name of the application>"
description: "<Optional | defaults to empty | description>"
useWizard: <Boolean value>
settings:
  enforceCompleteSnapshots: <Optional | boolean value | defaults to false>
  onlyChangedVersions: <Optional | boolean value | defaults to false>
notificationSchemeName: "<Optional | Existing notification scheme from server | defaults to none>"
properties:
  - name: "<name of property>"
    value: "<optional value>"
    description: "<optional description>"
    secure: <false>
webhook:
  - <Optional | array for adding webhooks>
teams:
  - "<Optional | team name that already exists in the server>"
tags:
  - "<Optional | tag name that already exists in the server>"
components: "<Optional info only fields>"
environments: "<Optional info only fields>"
processes: "<Optional info only fields>"
```

### Additional Information

#### Notification Scheme
If you want to modify `notificationSchemeName` to another value, ensure that the new notification scheme already exists in the server.

#### Properties
You can add properties using a JSON structure like below as an array to the properties field:

```json
{
  "name": "prop-1",
  "value": "property value",
  "description": "some-desc",
  "secure": false
}
```

You cannot delete existing properties but you can modify them.

#### Webhooks
You can add new webhooks, modify them, or even delete them by removing the corresponding JSON from the webhooks array.

```json
{
  "url": "https://url.com",
  "proxyHost": "",
  "proxyPort": "",
  "environments": [
    "QA"
  ],
  "webhookTemplate": {
    "name": "proc-success",
    "description": "",
    "type": "PROCESS_SUCCESS"
  }
}
```

You cannot modify webhook proxyusername and proxypassword using CAC and would have to do it in UI. Environment & webhook-template are prerequisites for this.

### Real-World Examples

#### Example 1: Minimum Required Fields

Minimal JSON for creating an application with `upload-application` command:

```json
{
  "name": "PAC-APP-2"
}
```

#### Example 2: Complete Application JSON

A comprehensive JSON example of an application:

```json
{
  "type": "application",
  "name": "PAC-APP",
  "description": "",
  "useWizard": false,
  "settings": {
    "enforceCompleteSnapshots": false,
    "onlyChangedVersions": true
  },
  "notificationSchemeName": "",
  "properties": [],
  "teams": [
    "Deployer-team",
    "custom_team"
  ],
  "tags": [
    "TEST"
  ],
  "webhooks": [
    {
      "url": "https://sample.com",
      "proxyHost": "${p?:system/proxyHost}",
      "proxyPort": "${p?:system/proxyPort}",
      "environments": [
        "DEV",
        "QA"
      ],
      "webhookTemplate": {
        "name": "proc-success",
        "description": "",
        "type": "PROCESS_SUCCESS"
      }
    }
  ],
  "components": "PAC-COMP",
  "environments": "QA, DEV",
  "processes": "APP-PROCESS"
}
```

#### Example 3: Complete Application YAML

A comprehensive YAML example for an application:

```yaml
---
type: "application"
name: "PAC-APP"
description: ""
useWizard: false
settings:
  enforceCompleteSnapshots: false
  onlyChangedVersions: true
notificationSchemeName: ""
properties: []
components: "PAC-COMP"
environments: "QA, DEV"
processes: "APP-PROCESS"
teams:
- "Deployer-team"
- "custom_team"
tags:
- "TEST"
webhooks:
- url: "https://sample.com"
  proxyHost: "${p?:system/proxyHost}"
  proxyPort: "${p?:system/proxyPort}"
  environments:
  - "DEV"
  - "QA"
  webhookTemplate:
    name: "proc-success"
    description: ""
    type: "PROCESS_SUCCESS"
```

## Workflow Integration

### Workflow Scenarios

#### Scenario 1: Modify Application Metadata

Use application upload/download when you need to change application-level settings:

```sh
# Download the application definition
download-application admin admin https://localhost:8443 MyApp MyApp.json

# Edit MyApp.json to update:
# - teams: add or modify team assignments
# - tags: add or modify tags
# - properties: add or modify application properties
# - webhooks: add, modify, or remove webhooks
# - settings: update enforceCompleteSnapshots or onlyChangedVersions

# Upload the modified application
upload-application admin admin https://localhost:8443 MyApp.json
```

#### Scenario 2: Create New Application from Scratch

```sh
# Create a new application from the CAC JSON file with required fields
# (See examples above for structure)

# Upload to create the application
upload-application admin admin https://localhost:8443 NewApplication.json
```
