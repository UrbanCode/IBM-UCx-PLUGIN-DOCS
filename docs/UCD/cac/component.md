# Component as Configuration

### Component Management

- **Download a Component**  
  *Syntax*:  
  `download-component <username> <password> <server-url> <component-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-component myuser mypassword https://url:8443 myComponent myComponent.json`

  *With saved credentials (component name as argument)*:  
  `download-component <component-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-component myComponent myComponent.json`

  *With saved credentials AND component name in context*:  
  `download-component <output-file>.<json|yaml>`  
  *Example*:

        `./download-component myComponent.json`

  > **Note:** Set component context first: `cac setup --component myComponent`

- **Upload a Component**  
  *Syntax*:  
  `upload-component <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-component myuser mypassword https://url:8443 myComponent.json`

  *With saved credentials*:  
  `upload-component <input-file>.<json|yaml>`  
  *Example*:

        `./upload-component myComponent.json`

## Component CAC Structure

A Component CAC file contains the complete definition of a component including its properties and configurations.

### Field Descriptions

#### Component Metadata
- **name**: The unique identifier for the component
- **description**: Human-readable description of the component
- **componentType**: Type of component (STANDARD/ZOS)
- **defaultVersionType**: Version numbering strategy (INCREMENTAL, FULL, etc.)
- **importAutomatically**: Whether to automatically import versions
- **cleanupDaysToKeep/cleanupCountToKeep**: Cleanup policies for old versions
- **sourceConfigPluginName**: Name of the source configuration plugin

#### Properties Structure
The `properties` object contains five  main sections:

1. **environment**: Environment-level properties
2. **resource**: Resource-level properties
3. **version**: Version-level properties
4. **component**: Component-level properties
5. **sourceConfig**: Source configuration plugin properties

Each property definition includes:
- **name**: Internal property name
- **type**: Property type (TEXT, TEXTAREA, CHECKBOX, SELECT, MULTI_SELECT)
- **required**: Whether the property is required
- **label**: User-friendly display label
- **description**: Property description
- **default**: Default value
- **allowedValues**: For SELECT/MULTI_SELECT types, list of allowed values
- **secure**: For component properties, indicates if the value is encrypted

#### Team Mappings
- **teams**: A Comma separated list of team assignments for the component

#### Tags
- **tags**: A Comma separated list tags for categorization and filtering

### Real-World Example

Here's an actual Component CAC JSON file structure with all the fields

### Mandatory and Optional Fields

The only mandatory field to create a component is `name`. The minimal JSON required to create a component is:

```json
{
  "name": "MyComponent"
}
```

When a component is created with only the `name` field, the server applies default values for all other fields. Notable defaults include:

| Field                 | Default Value |
|-----------------------|---------------|
| `defaultVersionType`  | `FULL`        |
| `componentType`       | `STANDARD`    |
| `importAutomatically` | `false`       |
| `cleanupDaysToKeep`   | `0`           |
| `cleanupCountToKeep`  | `0`           |

To override any of these defaults, include the field explicitly. For example, to set the version type to `INCREMENTAL`:

```json
{
  "name": "MyComponent",
  "defaultVersionType": "INCREMENTAL"
}
```

All remaining fields are optional at the component level and can be provided to configure properties such as source configuration, processes, tags, teams, and other component settings.

- **Source Configuration**: The required fields within `sourceConfig` depend on the selected source configuration plugin. Different plugins, such as Git, Maven, File System, and TFS, may have different mandatory fields. Refer to the corresponding source configuration/plugin documentation for the required fields applicable to each plugin.
- **Existing Components**: If the component already exists on the server, fields omitted from the JSON may retain their existing configuration, depending on the update behavior of the CAC command/API. Users should verify the expected update/merge behavior before uploading a partial configuration to an existing component.

> **Note:** The common mandatory fields are documented here. Plugin-specific mandatory fields are provided in the respective source configuration sections. This keeps the documentation maintainable when new source configuration plugins are added.

### Limitation:
The `processes` field in your component JSON is informational only and has no effect on the `upload-component` operation.

To upload a component process, use the dedicated command:

```sh
upload-component-process <process-json-file>
```
### JSON Structure

```json5
{
  "name": "CAC-Standard-Component-Model",
  "description": "Reusable component definition with environment, resource, and version configurations",
  "componentType": "STANDARD",
  "defaultVersionType": "INCREMENTAL",
  "importAutomatically": true,
  "cleanupDaysToKeep": 0,
  "cleanupCountToKeep": 0,
  "sourceConfigPluginName": "",
  "properties": {
    "environment": [
      {
        "name": "env-notes",
        "type": "TEXTAREA",
        "required": true,
        "label": "Environment Notes",
        "description": "Notes related to deployment environment",
        "default": "Provide environment-specific details"
      },
      {
        "name": "enable-feature-flag",
        "type": "CHECKBOX",
        "required": "checkbox",
        "label": "Enable Feature Flag",
        "description": "Toggle to enable or disable feature",
        "default": false
      }
    ],
    "resource": [
      {
        "name": "resource-validation-list",
        "type": "MULTI_SELECT",
        "required": "multi-select",
        "allowedValues": [
          {
            "label": "Option1,Option2,Option3",
            "value": "Option1,Option2,Option3"
          }
        ],
        "label": "Resource Validation Options",
        "description": "Select applicable resource validation options"
      },
      {
        "name": "resource-profile-selector",
        "type": "SELECT",
        "required": true,
        "allowedValues": [
          {
            "label": "Profile A",
            "value": "Profile A"
          },
          {
            "label": "Profile B",
            "value": "Profile B"
          },
          {
            "label": "Profile C",
            "value": "Profile C"
          }
        ],
        "label": "Resource Profile Selector"
      }
    ],
    "version": [
      {
        "name": "enable-versioning",
        "type": "CHECKBOX",
        "required": "checkbox",
        "label": "Enable Versioning",
        "description": "Flag to enable version control",
        "default": false
      },
      {
        "name": "version-validation",
        "type": "CHECKBOX",
        "required": "checkbox",
        "label": "Version Validation",
        "description": "Validate version before deployment",
        "default": false
      }
    ],
    "component": {
      "component-config-value": {
        "value": "UpdatedValue",
        "description": "General component configuration value",
        "secure": false
      },
      "component-secure-token": {
        "value": "crypt_v1{AES/CBC/PKCS5Padding|key|encryptedValue}",
        "description": "Secure token for component",
        "secure": true
      }
    },
    "sourceConfig": {
      "TFSComponentProperties": {
        "tfs-username": "admin",
        "tfs-password": "crypt_v1{AES/CBC/PKCS5Padding|key|encryptedValue}",
        "prependBuildDefinition": true,
        "buildQuality": "",
        "dirOffset": "",
        "includes": "",
        "excludes": "",
        "extensions": "",
        "saveFileExecuteBits": true,
        "tfs-project-name": "myproject",
        "tfs-repo-url": "https://tfs.example.com",
        "tfs-build-status": "PARTIALLY_SUCCEEDED",
        "tfs-build-definition": "mybuild"
      }
    }
  },
  "processes": "CAC Component Deployment Process",
  "teams": "Component Engineering Team",
  "tags": "CAC, COMPONENT, STANDARD"
}
```
### YAML Structure
```yaml
name: "CAC-Standard-Component-Model"
description: "Reusable component definition with environment, resource, and version configurations"
componentType: "STANDARD"
defaultVersionType: "INCREMENTAL"
importAutomatically: true
cleanupDaysToKeep: 0
cleanupCountToKeep: 0
sourceConfigPluginName: ""

properties:
  environment:
    - name: "env-notes"
      type: "TEXTAREA"
      required: true
      label: "Environment Notes"
      description: "Notes related to deployment environment"
      default: "Provide environment-specific details"

    - name: "enable-feature-flag"
      type: "CHECKBOX"
      required: "checkbox"
      label: "Enable Feature Flag"
      description: "Toggle to enable or disable feature"
      default: false

  resource:
    - name: "resource-validation-list"
      type: "MULTI_SELECT"
      required: "multi-select"
      allowedValues:
        - label: "Option1,Option2,Option3"
          value: "Option1,Option2,Option3"
      label: "Resource Validation Options"
      description: "Select applicable resource validation options"

    - name: "resource-profile-selector"
      type: "SELECT"
      required: true
      allowedValues:
        - label: "Profile A"
          value: "Profile A"
        - label: "Profile B"
          value: "Profile B"
        - label: "Profile C"
          value: "Profile C"
      label: "Resource Profile Selector"

  version:
    - name: "enable-versioning"
      type: "CHECKBOX"
      required: "checkbox"
      label: "Enable Versioning"
      description: "Flag to enable version control"
      default: false

    - name: "version-validation"
      type: "CHECKBOX"
      required: "checkbox"
      label: "Version Validation"
      description: "Validate version before deployment"
      default: false

  component:
    component-config-value:
      value: "UpdatedValue"
      description: "General component configuration value"
      secure: false

    component-secure-token:
      value: "crypt_v1{AES/CBC/PKCS5Padding|key|encryptedValue}"
      description: "Secure token for component"
      secure: true

  sourceConfig:
    TFSComponentProperties:
      tfs-username: "admin"
      tfs-password: "crypt_v1{AES/CBC/PKCS5Padding|key|encryptedValue}"
      prependBuildDefinition: true
      buildQuality: ""
      dirOffset: ""
      includes: ""
      excludes: ""
      extensions: ""
      saveFileExecuteBits: true
      tfs-project-name: "myproject"
      tfs-repo-url: "https://tfs.example.com"
      tfs-build-status: "PARTIALLY_SUCCEEDED"
      tfs-build-definition: "mybuild"

processes: "CAC Component Deployment Process"
tags: "CAC, COMPONENT, STANDARD"
teams: "Component Engineering Team"
```

## Workflow Integration

### Workflow Scenarios

#### Scenario 1: Modify Component Metadata

Use component upload/download when you need to change component-level settings:

```sh
# Download the component definition
download-component admin admin https://localhost:8443 MyWebApp MyWebApp.json

# Edit MyWebApp.json to update:
# - teams: "Team1, Team2, NewTeam"
# - tags: "Production, Critical"
# - property definitions
# - cleanup policies
# - source configuration

# Upload the modified component
upload-component admin admin https://localhost:8443 MyWebApp.json

```
#### Scenario 2: Create New Component from Scratch

```sh
# Create a new component from the CAC JSON file with all required fields
# (See examples above for structure)

# Upload to create the component
upload-component admin admin https://localhost:8443 NewComponent.json

```
