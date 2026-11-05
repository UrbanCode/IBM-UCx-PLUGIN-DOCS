# Templates

Template operations let you manage reusable DevOps Deploy template definitions as JSON or YAML through CAC.

> `Security Notice:` Never commit real passwords, encryption keys, tokens, or other credentials to template files.

---

# Component Template as Configuration

### Component Template Management

- **Download a Component Template**  
  *Syntax*:  
  `download-component-template <username> <password> <server-url> <component-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-component-template myuser mypassword https://url:8443 MyComponentTemplate my-component-template.json`

  *With saved credentials (template name as argument)*:  
  `download-component-template <component-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-component-template MyComponentTemplate my-component-template.yaml`

- **Upload a Component Template**  
  *Syntax*:  
  `upload-component-template <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-component-template myuser mypassword https://url:8443 my-component-template.json`

  *With saved credentials*:  
  `upload-component-template <input-file>.<json|yaml>`  
  *Example*:

        `./upload-component-template my-component-template.yaml`

## Component Template CAC Structure

A Component Template CAC file contains the reusable definition of a component template: template
metadata, import/source-configuration defaults, property **definitions** inherited by components
created from the template, and template-level default component property **values**.

### Field Descriptions

#### Template Metadata
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Unique name of the component template. **Mandatory.** |
| `description` | string | Human-readable description of the template. |

#### Template Settings
| Field | Type | Description |
|-------|------|-------------|
| `componentType` | string | Type of component created from this template (`STANDARD` or `ZOS`). |
| `sourceConfigPluginName` | string | Source configuration plugin used by components created from this template. Empty string means no source configuration. |
| `importAutomatically` | boolean | Whether versions are imported automatically. |
| `importConfigurationStrategy` | string | Strategy used to apply the template's source configuration to components (for example, `default`). Empty string means none. |
| `integrationAgentName` | string | Name of the agent used for source-configuration/version import. Empty string means none. |
| `processes` | string | Comma-separated list of the template's process names. Informational only. Has no effect on `upload-component-template`. |
| `teams` | array of strings | Teams that have access to the component template. Each entry is a team name that must already exist on the server. Written only when at least one team is assigned. |
| `tags` | array of strings | Tags applied to the component template. Each entry is a tag name. Written only when at least one tag is assigned. |

#### Properties Structure

The `properties` object contains the following sections:

| Section | Form | Description |
|---------|------|-------------|
| `environment` | array of property definitions | Environment property definitions for environments of components created from the template. |
| `resource` | array of property definitions | Resource property definitions. |
| `component` | array of property definitions | Component property **definitions** (the form shown to users of the component). |
| `custom-component-properties` | object (map) | Template-level component property **values**, keyed by property name. Present only when the template has component property values. |
| `sourceConfig` | object (map) | Source configuration property **values**, keyed by property name. Present only when a source configuration is set. |

**Property definition fields** (used in `environment`, `resource`, and `component` arrays):

- `name` — internal property name (required)
- `type` — `TEXT`, `TEXTAREA`, `CHECKBOX`, `SELECT`, `MULTI_SELECT`
- `required` — whether a value must be supplied
- `label` — display label
- `description` — description text
- `default` — default value (optional)
- `allowedValues` — list of `{ "label": ..., "value": ... }` entries, for `SELECT` / `MULTI_SELECT`

**Custom component property fields** (entries of `custom-component-properties`):

- `value` — property value (use `crypt_v1{...}` form for secure values)
- `description` — description text
- `secure` — `true` if the value is stored encrypted

> **Note:** For process creation or updates, use the dedicated component-template-process commands
> documented in [processes.md](./processes.md).

### Mandatory and Optional Fields

The only mandatory field to create a component template is `name`:

```json
{
  "name": "MyComponentTemplate"
}
```

All other fields are optional; the server applies defaults (for example, `componentType` defaults to
`STANDARD` and `importAutomatically` to `false`).

### Limitation

The `processes` field in the component template JSON is informational only and has no effect on the
`upload-component-template` operation. To upload a component template process, use:

```sh
upload-component-template-process <process-json-file>
```

### JSON Structure

```json5
{
  "name": "<name of the component template>",
  "description": "<Optional | defaults to empty | description>",
  "componentType": "<Optional | STANDARD or ZOS | defaults to STANDARD>",
  "sourceConfigPluginName": "<Optional | existing source config plugin name | defaults to empty>",
  "importAutomatically": "<Optional | boolean value | defaults to false>",
  "importConfigurationStrategy": "<Optional | import configuration strategy | defaults to empty>",
  "integrationAgentName": "<Optional | existing agent name | defaults to empty>",
  "processes": "<Optional info only field | comma separated process names>",
  "properties": {
    // Optional | property definitions inherited by components created from this template
    "environment": [
      // Optional | 0 or more environment property definitions in below structure
      {
        "name": "<name of property>",
        "type": "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>",
        "required": "<Optional | boolean value | defaults to false>",
        "label": "<optional display label>",
        "description": "<optional description>"
      }
    ],
    "resource": [
      // Optional | 0 or more resource property definitions in same structure as above
    ],
    "component": [
      // Optional | 0 or more component property definitions in same structure as above
    ],
    "custom-component-properties": {
      // Optional | template level component property values, keyed by property name
      "<name of property>": {
        "value": "<optional value>",
        "description": "<optional description>",
        "secure": "<false>"
      }
    },
    "sourceConfig": {
      // Optional | source configuration property values, keyed by property name
      "<name of source config property>": "<value>"
    }
  },
  "teams": [
    // Optional | array of team names that already exist in the server
  ],
  "tags": [
    // Optional | array of tag names
  ]
}
```

### YAML Structure

```yaml
name: "<name of the component template>"
description: "<Optional | defaults to empty | description>"
componentType: "<Optional | STANDARD or ZOS | defaults to STANDARD>"
sourceConfigPluginName: "<Optional | existing source config plugin name | defaults to empty>"
importAutomatically: <Optional | boolean value | defaults to false>
importConfigurationStrategy: "<Optional | import configuration strategy | defaults to empty>"
integrationAgentName: "<Optional | existing agent name | defaults to empty>"
processes: "<Optional info only field | comma separated process names>"

properties:
  environment:
    - name: "<name of property>"
      type: "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>"
      required: <Optional | boolean value | defaults to false>
      label: "<optional display label>"
      description: "<optional description>"

  resource:
    - <Optional | resource property definitions in same structure as above>

  component:
    - <Optional | component property definitions in same structure as above>

  custom-component-properties:
    <name of property>:
      value: "<optional value>"
      description: "<optional description>"
      secure: <false>

  sourceConfig:
    <name of source config property>: "<value>"

teams:
  - "<Optional | team name that already exists in the server>"

tags:
  - "<Optional | tag name>"
```

### Workflow Integration

#### Scenario 1: Modify an Existing Component Template

```sh
# Download the component template definition
download-component-template admin admin https://localhost:8443 CaC_Test_Component_Template template.json

# Edit template.json to update property definitions,
# custom component property values, or import settings

# Upload the modified component template
upload-component-template admin admin https://localhost:8443 template.json
```

#### Scenario 2: Create a New Component Template

```sh
# Author a new component template JSON (see structure above)
upload-component-template admin admin https://localhost:8443 NewComponentTemplate.json
```


# Application Template as Configuration

### Application Template Management

- **Download an Application Template**  
  *Syntax*:  
  `download-application-template <username> <password> <server-url> <application-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-application-template myuser mypassword https://url:8443 CaC_AT_Prop_Sync_Test app-template.json`

  *With saved credentials (template name as argument)*:  
  `download-application-template <application-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-application-template CaC_AT_Prop_Sync_Test app-template.yaml`

- **Upload an Application Template**  
  *Syntax*:  
  `upload-application-template <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-application-template myuser mypassword https://url:8443 app-template.json`

  *With saved credentials*:  
  `upload-application-template <input-file>.<json|yaml>`  
  *Example*:

        `./upload-application-template app-template.yaml`

## Application Template CAC Structure

An Application Template CAC file contains the reusable definition of an application template:
template metadata, snapshot/version settings, notification scheme, and the application property
**definitions** inherited by applications created from the template.

### Field Descriptions

#### Template Metadata
| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Must be `"applicationTemplate"` for application template CAC files. **Mandatory.** |
| `name` | string | Unique name of the application template. **Mandatory.** |
| `description` | string | Human-readable description of the template. |
| `useWizard` | boolean | Whether applications created from this template are created through the creation wizard. |
| `notificationSchemeName` | string | Notification scheme applied to applications created from the template. Empty string means none. |

#### Settings (`settings`)
| Field | Type | Description |
|-------|------|-------------|
| `enforceCompleteSnapshots` | boolean | Requires snapshots to contain a version for every component in the application. |
| `onlyChangedVersions` | boolean | Deploys only versions that changed since the previous deployment. |

#### Properties (`properties`)

`properties` is an **array of application property definitions** inherited by applications created
from the template. Each definition supports:

- `name` — internal property name (required)
- `type` — `TEXT`, `TEXTAREA`, `CHECKBOX`, `SELECT`, `MULTI_SELECT`
- `required` — whether a value must be supplied
- `label` — display label
- `description` — description text
- `default` — default value
- `allowedValues` — list of `{ "label": ..., "value": ... }` entries, for `SELECT` / `MULTI_SELECT`

#### Teams (`teams`)

Optional array of team names that must already exist on the server. The team mappings are sent to
the server only when the array is non-empty.

#### Component Tag Requirements (`tagRequirements`)

Optional array describing how many components carrying a given tag an application created from the
template must have. Sent to the server only when the array is non-empty. Each entry supports:

- `tagName` — name of the component tag (must already exist on the server)
- `number` — number of components required
- `type` — requirement type (for example, `AT_LEAST`, `AT_MOST`, `EXACTLY`)

### Mandatory and Optional Fields

The mandatory fields to create an application template are `type` and `name`:

```json
{
  "type": "applicationTemplate",
  "name": "MyApplicationTemplate"
}
```

### Limitation

Application template processes are not created or updated by `upload-application-template`.
Use the dedicated command:

```sh
upload-application-template-process <process-json-file>
```

### JSON Structure

```json5
{
  "type": "applicationTemplate",
  "name": "<name of the application template>",
  "description": "<Optional | defaults to empty | description>",
  "useWizard": "<Optional | boolean value | defaults to false>",
  "settings": {
    "enforceCompleteSnapshots": "<Optional | boolean value | defaults to false>",
    "onlyChangedVersions": "<Optional | boolean value | defaults to false>"
  },
  "notificationSchemeName": "<Optional | Existing notification scheme from server | defaults to none>",
  "properties": [
    // Optional | 0 or more application property definitions in below structure
    {
      "name": "<name of property>",
      "type": "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>",
      "required": "<Optional | boolean value | defaults to false>",
      "label": "<optional display label>",
      "description": "<optional description>"
    }
  ],
  "teams": [
    // Optional | array of team names that already exist in the server
  ],
  "tagRequirements": [
    // Optional | 0 or more component tag requirements in below structure
    {
      "tagName": "<existing component tag name>",
      "number": "<number of components required>",
      "type": "<AT_LEAST | AT_MOST | EXACTLY>"
    }
  ]
}
```

### YAML Structure

```yaml
type: "applicationTemplate"
name: "<name of the application template>"
description: "<Optional | defaults to empty | description>"
useWizard: <Optional | boolean value | defaults to false>

settings:
  enforceCompleteSnapshots: <Optional | boolean value | defaults to false>
  onlyChangedVersions: <Optional | boolean value | defaults to false>

notificationSchemeName: "<Optional | Existing notification scheme from server | defaults to none>"

properties:
  - name: "<name of property>"
    type: "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>"
    required: <Optional | boolean value | defaults to false>
    label: "<optional display label>"
    description: "<optional description>"

teams:
  - "<Optional | team name that already exists in the server>"

tagRequirements:
  - tagName: "<existing component tag name>"
    number: <number of components required>
    type: "<AT_LEAST | AT_MOST | EXACTLY>"
```

### Workflow Integration

#### Scenario 1: Modify an Existing Application Template

```sh
# Download the application template definition
download-application-template admin admin https://localhost:8443 CaC_AT_Prop_Sync_Test app-template.json

# Edit app-template.json to update property definitions,
# snapshot settings, or the notification scheme

# Upload the modified application template
upload-application-template admin admin https://localhost:8443 app-template.json
```

#### Scenario 2: Create a New Application Template

```sh
# Author a new application template JSON (see structure above)
upload-application-template admin admin https://localhost:8443 NewApplicationTemplate.json
```



# Environment Template as Configuration

### Environment Template Management

- **Download an Environment Template**  
  *Syntax*:  
  `download-environment-template <username> <password> <server-url> <environment-template-name> <application-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-environment-template myuser mypassword https://url:8443 CaC_Test_Environment_Template CaC_Test_Application_Template env-template.json`

  *With saved credentials*:  
  `download-environment-template <environment-template-name> <application-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-environment-template CaC_Test_Environment_Template CaC_Test_Application_Template env-template.yaml`

- **Upload an Environment Template**  
  *Syntax*:  
  `upload-environment-template <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-environment-template myuser mypassword https://url:8443 env-template.json`

  *With saved credentials*:  
  `upload-environment-template <input-file>.<json|yaml>`  
  *Example*:

        `./upload-environment-template env-template.yaml`

## Environment Template CAC Structure

An Environment Template CAC file contains the reusable definition of an environment template linked
to an application template, including the resource template mapping, approval settings, cleanup and
log retention policies, snapshot settings, approval gates, and environment property **definitions**.

### Field Descriptions

#### Template Metadata
| Field | Type | Description                                                                                   |
|-------|------|-----------------------------------------------------------------------------------------------|
| `type` | string | Must be `"environmentTemplate"`. **Mandatory.**                                               |
| `name` | string | Unique name of the environment template. **Mandatory.**                                       |
| `applicationTemplateName` | string | Application template this environment template belongs to. **Mandatory.**                     |
| `description` | string | Human-readable description of the environment template.                                       |
| `resourceTemplateName` | string | Resource template used to create base resources for environments created from this template. **Mandatory.** |

#### Deployment Approvals (`DeploymentApprovals`)
| Field | Type | Description |
|-------|------|-------------|
| `requireApprovals` | boolean | Whether approvals are required for deployments. |
| `noSelfApprovals` | boolean | Whether the requesting user is prevented from approving their own request. |
| `externalApprovalAgent` | string | Agent used for external approvals. Empty string means none. |
| `externalApprovalAgentPool` | string | Agent pool used for external approvals. |
| `externalApprovalProcess` | string | External approval process name. |
| `exemptProcesses` | array of objects | Processes exempt from approval requirements. Each entry is an object containing a process `name`. Always written, as an empty array when there are none. |

#### Artifact Cleanup Settings (`ArtifactCleanUpSettings`)
| Field | Type | Description |
|-------|------|-------------|
| `numberOfVersionsToRetain` | number | Number of versions to keep (`0` or `-1` = use system default). |
| `daysToRetainVersions` | number | Days to keep versions (`0` or `-1` = use system default). |
| `daysToRetainApplicationSnapshots` | number | Days to keep application snapshots (`0` or `-1` = use system default). |
| `useSystemDefault` | boolean | Derived on download: `true` when all three values above are `0` or `-1`. |

#### Deployment History Cleanup (`deploymentHistoryCleanup`)
| Field | Type | Description |
|-------|------|-------------|
| `daysToRetainDeploymentHistory` | number | Days to keep deployment history (`0` or `-1` = use system default). |
| `useSystemDefault` | boolean | Use the system default for deployment history cleanup. |

#### Log Retention (`defaultLogRetention`)
| Field | Type | Description |
|-------|------|-------------|
| `logDaysToKeep` | number | Days to keep process logs (`0` = unlimited). |
| `useSystemDefaultLogDays` | boolean | Use the system default log retention period. |

#### Snapshot Settings
| Field | Type | Description |
|-------|------|-------------|
| `lockSnapshots` | boolean | Lock snapshots after deployment to this environment. |
| `requireSnapshot` | boolean | Require a snapshot for deployments to this environment. |
| `snapshotlocktype` | string | Snapshot lock type, for example `System Default (Component Versions and Configuration)`. Empty string when no lock type is set. |

#### Teams (`teams`)

Optional array of team names that must already exist on the server. The field is written only when
at least one team is mapped to the environment template.

#### Properties (`properties`)

`properties` is an **array of environment property definitions** inherited by environments created
from the template. Each definition supports:

- `name` — internal property name (required)
- `type` — `TEXT`, `TEXTAREA`, `CHECKBOX`, `SELECT`, `MULTI_SELECT`
- `required` — whether a value must be supplied
- `label` — display label
- `description` — description text
- `default` — default value
- `allowedValues` — list of `{ "label": ..., "value": ... }` entries, for `SELECT` / `MULTI_SELECT`

#### Approval Gates (`gate`)

Defines approval gate conditions using logical operators. An empty object (`{}`) means no gate
conditions are configured.

- `OR` — array of condition groups (at least one group must be satisfied)
- `AND` — array of conditions within a group (all conditions must be satisfied)
- Each condition contains:
  - `type` — gate type (`VERSION` or `SNAPSHOT`)
  - `name` — name of the version status or snapshot

### Mandatory and Optional Fields

The mandatory fields to create an environment template are `type`, `name`,
`applicationTemplateName` and `resourceTemplateName`

```json
{
  "type": "environmentTemplate",
  "name": "CaC_Test_Environment_Template",
  "applicationTemplateName": "CaC_Test_Application_Template",
  "resourceTemplateName": "CaC_Test_Resource_Template"
}
```
> **Note:** The application template named in `applicationTemplateName` and the resource template
> named in `resourceTemplateName` must already exist on the server before upload.

### JSON Structure

```json5
{
  "type": "environmentTemplate",
  "name": "<name of the environment template>",
  "applicationTemplateName": "<Existing application template name on the server>",
  "description": "<Optional | defaults to empty | description>",
  "resourceTemplateName": "<Existing resource template name on the server>",
  "DeploymentApprovals": {
    "requireApprovals": "<Optional | boolean value | defaults to false>",
    "noSelfApprovals": "<Optional | boolean value | defaults to false>",
    "externalApprovalAgent": "<Optional | existing agent name | defaults to empty>",
    "externalApprovalAgentPool": "<Optional | existing agent pool name | defaults to empty>",
    "externalApprovalProcess": "<Optional | existing process name | defaults to empty>",
    "exemptProcesses": [
      // Optional | 0 or more exempt processes in below structure
      {
        "name": "<existing process name>"
      }
    ]
  },
  "ArtifactCleanUpSettings": {
    "numberOfVersionsToRetain": "<Optional | number | 0 or -1 means use system default>",
    "daysToRetainVersions": "<Optional | number | 0 or -1 means use system default>",
    "daysToRetainApplicationSnapshots": "<Optional | number | 0 or -1 means use system default>",
    "useSystemDefault": "<Optional | boolean value | derived from the three values above>"
  },
  "deploymentHistoryCleanup": {
    "daysToRetainDeploymentHistory": "<Optional | number | 0 or -1 means use system default>",
    "useSystemDefault": "<Optional | boolean value | defaults to true>"
  },
  "defaultLogRetention": {
    "logDaysToKeep": "<Optional | number | 0 means unlimited>",
    "useSystemDefaultLogDays": "<Optional | boolean value | defaults to true>"
  },
  "properties": [
    // Optional | 0 or more environment property definitions in below structure
    {
      "name": "<name of property>",
      "type": "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>",
      "required": "<Optional | boolean value | defaults to false>",
      "label": "<optional display label>",
      "description": "<optional description>"
    }
  ],
  "lockSnapshots": "<Optional | boolean value | defaults to false>",
  "requireSnapshot": "<Optional | boolean value | defaults to false>",
  "snapshotlocktype": "<Optional | snapshot lock type | defaults to System Default (Component Versions and Configuration)>",
  "teams": [
    // Optional | array of team names that already exist in the server
  ],
  "gate": {
    // Optional | approval gate conditions
  }
}
```

### YAML Structure

```yaml
type: "environmentTemplate"
name: "<name of the environment template>"
applicationTemplateName: "<Existing application template name on the server>"
description: "<Optional | defaults to empty | description>"
resourceTemplateName: "<Existing resource template name on the server>"

DeploymentApprovals:
  requireApprovals: <Optional | boolean value | defaults to false>
  noSelfApprovals: <Optional | boolean value | defaults to false>
  externalApprovalAgent: "<Optional | existing agent name | defaults to empty>"
  externalApprovalAgentPool: "<Optional | existing agent pool name | defaults to empty>"
  externalApprovalProcess: "<Optional | existing process name | defaults to empty>"
  exemptProcesses:
    - name: "<existing process name>"

ArtifactCleanUpSettings:
  numberOfVersionsToRetain: <Optional | number | 0 or -1 means use system default>
  daysToRetainVersions: <Optional | number | 0 or -1 means use system default>
  daysToRetainApplicationSnapshots: <Optional | number | 0 or -1 means use system default>
  useSystemDefault: <Optional | boolean value | derived from the three values above>

deploymentHistoryCleanup:
  daysToRetainDeploymentHistory: <Optional | number | 0 or -1 means use system default>
  useSystemDefault: <Optional | boolean value | defaults to true>

defaultLogRetention:
  logDaysToKeep: <Optional | number | 0 means unlimited>
  useSystemDefaultLogDays: <Optional | boolean value | defaults to true>

properties:
  - name: "<name of property>"
    type: "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>"
    required: <Optional | boolean value | defaults to false>
    label: "<optional display label>"
    description: "<optional description>"

lockSnapshots: <Optional | boolean value | defaults to false>
requireSnapshot: <Optional | boolean value | defaults to false>
snapshotlocktype: "<Optional | snapshot lock type | defaults to System Default (Component Versions and Configuration)>"

teams:
  - "<Optional | team name that already exists in the server>"

gate: {} # Optional | approval gate conditions
```

> **Note:** The `environmentType` setting is not currently supported through CAC and is omitted from
> downloaded environment template files.


### Workflow Integration

#### Scenario 1: Modify an Existing Environment Template

```sh
# Download the environment template definition
download-environment-template admin admin https://localhost:8443 \
  CaC_Test_Environment_Template CaC_Test_Application_Template env-template.json

# Edit env-template.json to update property definitions, approvals,
# cleanup policies, or snapshot settings

# Upload the modified environment template
upload-environment-template admin admin https://localhost:8443 env-template.json
```

#### Scenario 2: Create a New Environment Template

```sh
# Ensure the application template and resource template exist first,
# then author the environment template JSON (see structure above)
upload-environment-template admin admin https://localhost:8443 NewEnvironmentTemplate.json
```

# Resource Template as Configuration

### Resource Template Management

- **Download a Resource Template**  
  *Syntax*:  
  `download-resource-template <username> <password> <server-url> <resource-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-resource-template myuser mypassword https://url:8443 CaC_RT_Prop_Sync_Test resource-template.json`

  *With saved credentials (template name as argument)*:  
  `download-resource-template <resource-template-name> <output-file>.<json|yaml>`  
  *Example*:

        `./download-resource-template CaC_RT_Prop_Sync_Test resource-template.yaml`

- **Upload a Resource Template**  
  *Syntax*:  
  `upload-resource-template <username> <password> <server-url> <input-file>.<json|yaml>`  
  *Example*:

        `./upload-resource-template myuser mypassword https://url:8443 resource-template.json`

  *With saved credentials*:  
  `upload-resource-template <input-file>.<json|yaml>`  
  *Example*:

        `./upload-resource-template resource-template.yaml`

## Resource Template CAC Structure

A Resource Template CAC file contains the reusable definition of a resource template: template
metadata, cloud/connection settings, team assignments, and the resource property **definitions**
inherited by resources created from the template.

The file has two top-level sections:

| Section | Form | Description |
|---------|------|-------------|
| `template` | object | Resource template metadata and settings. **Mandatory.** |
| `properties` | array | Resource property definitions inherited by resources created from the template. |

### Field Descriptions

#### Template Metadata (`template`)
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Unique name of the resource template. **Mandatory.** |
| `description` | string | Human-readable description of the resource template. |
| `cloudResourceId` | string | Identifier of the cloud resource (blueprint/cloud discovery) associated with the template. Empty string means none. |
| `connection` | string | Connection used by the template to reach the target system. Empty string means none. |
| `parent-template-name` | string | Name of an existing resource template this template inherits from. Empty string means no parent. |
| `teams` | array of strings | Teams that have access to the resource template. Each entry is a team name that must already exist on the server. Always written on download, as an empty array when no team is assigned. |
| `rootResourceTeams` | array of strings | Teams assigned to the root resource created from this template. Always written on download, as an empty array when no team is assigned. |

#### Properties (`properties`)

`properties` is an **array of resource property definitions** inherited by resources created from
the template. Each definition supports:

- `name` — internal property name (required)
- `type` — `TEXT`, `TEXTAREA`, `CHECKBOX`, `SELECT`, `MULTI_SELECT`
- `required` — whether a value must be supplied
- `label` — display label
- `description` — description text
- `default` — default value
- `allowedValues` — list of `{ "label": ..., "value": ... }` entries, for `SELECT` / `MULTI_SELECT`

### Mandatory and Optional Fields

The only mandatory field to create a resource template is `template.name`:

```json
{
  "template": {
    "name": "CaC_RT_Prop_Sync_Test"
  }
}
```

When only this field is supplied, the server applies default values for all other settings.

> **Note:** Any team listed in `teams` or `rootResourceTeams`, and any template named in
> `parent-template-name`, must already exist on the server before upload.

### JSON Structure

```json5
{
  "template": {
    "name": "<name of the resource template>",
    "description": "<Optional | defaults to empty | description>",
    "cloudResourceId": "<Optional | cloud resource identifier | defaults to empty>",
    "connection": "<Optional | connection name | defaults to empty>",
    "parent-template-name": "<Optional | existing resource template name | defaults to empty>",
    "teams": [
      // Optional | array of team names that already exist in the server
    ],
    "rootResourceTeams": [
      // Optional | array of team names that already exist in the server
    ]
  },
  "properties": [
    // Optional | 0 or more resource property definitions in below structure
    {
      "name": "<name of property>",
      "type": "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>",
      "required": "<Optional | boolean value | defaults to false>",
      "label": "<optional display label>",
      "description": "<optional description>"
    }
  ]
}
```

### YAML Structure

```yaml
template:
  name: "<name of the resource template>"
  description: "<Optional | defaults to empty | description>"
  cloudResourceId: "<Optional | cloud resource identifier | defaults to empty>"
  connection: "<Optional | connection name | defaults to empty>"
  parent-template-name: "<Optional | existing resource template name | defaults to empty>"
  teams:
    - "<Optional | team name that already exists in the server>"
  rootResourceTeams:
    - "<Optional | team name that already exists in the server>"

properties:
  - name: "<name of property>"
    type: "<TEXT | TEXTAREA | CHECKBOX | SELECT | MULTI_SELECT>"
    required: <Optional | boolean value | defaults to false>
    label: "<optional display label>"
    description: "<optional description>"
```

### Workflow Integration

#### Scenario 1: Modify an Existing Resource Template

```sh
# Download the resource template definition
download-resource-template admin admin https://localhost:8443 CaC_RT_Prop_Sync_Test resource-template.json

# Edit resource-template.json to update property definitions,
# team assignments, or connection settings

# Upload the modified resource template
upload-resource-template admin admin https://localhost:8443 resource-template.json
```

#### Scenario 2: Create a New Resource Template

```sh
# Author a new resource template JSON (see structure above)
upload-resource-template admin admin https://localhost:8443 NewResourceTemplate.json
```