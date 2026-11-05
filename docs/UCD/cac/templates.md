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
| `importConfigurationStrategy` | string | Strategy used to apply the template's source configuration to components (for example, `default`). |
| `integrationAgentName` | string | Name of the agent used for source-configuration/version import. Empty string means none. |
| `processes` | string | Informational only. Has no effect on `upload-component-template`. |

#### Properties Structure

The `properties` object contains four sections:

| Section | Form | Description |
|---------|------|-------------|
| `environment` | array of property definitions | Environment property definitions for environments of components created from the template. |
| `resource` | array of property definitions | Resource property definitions. |
| `component` | array of property definitions | Component property **definitions** (the form shown to users of the component). |
| `custom-component-properties` | object (map) | Template-level component property **values**, keyed by property name. |

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

```json
{
  "name": "CaC_Test_Component_Template",
  "description": "Component Template for property testing",
  "componentType": "STANDARD",
  "sourceConfigPluginName": "",
  "importAutomatically": false,
  "importConfigurationStrategy": "default",
  "integrationAgentName": "",
  "processes": "",
  "properties": {
    "environment": [
      {
        "name": "env-prop-alpha",
        "type": "TEXT",
        "required": false,
        "label": "env-prop-1",
        "description": "Environment property one"
      }
    ],
    "resource": [
      {
        "name": "res-prop-defination-alpha",
        "type": "TEXT",
        "required": false,
        "label": "res-prop-defination-alpha"
      }
    ],
    "component": [
      {
        "name": "comp-prop-1-renamed-1",
        "type": "TEXT",
        "required": false,
        "label": "comp-prop-1-renamed",
        "description": "Component property one renamed"
      }
    ],
    "custom-component-properties": {
      "comp-template-property-alpha": {
        "value": "",
        "description": "",
        "secure": false
      }
    }
  }
}
```

### YAML Structure

```yaml
name: "CaC_Test_Component_Template"
description: "Component Template for property testing"
componentType: "STANDARD"
sourceConfigPluginName: ""
importAutomatically: false
importConfigurationStrategy: "default"
integrationAgentName: ""
processes: ""

properties:
  environment:
    - name: "env-prop-alpha"
      type: "TEXT"
      required: false
      label: "env-prop-1"
      description: "Environment property one"

  resource:
    - name: "res-prop-defination-alpha"
      type: "TEXT"
      required: false
      label: "res-prop-defination-alpha"

  component:
    - name: "comp-prop-1-renamed-1"
      type: "TEXT"
      required: false
      label: "comp-prop-1-renamed"
      description: "Component property one renamed"

  custom-component-properties:
    comp-template-property-alpha:
      value: ""
      description: ""
      secure: false
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

```json
{
  "type": "applicationTemplate",
  "name": "CaC_AT_Prop_Sync_Test",
  "description": "Application template for property sync testing",
  "useWizard": false,
  "settings": {
    "enforceCompleteSnapshots": false,
    "onlyChangedVersions": false
  },
  "notificationSchemeName": "",
  "properties": [
    {
      "name": "server-host",
      "type": "TEXT",
      "required": true,
      "description": "Updated description for server host"
    },
    {
      "name": "server-port",
      "type": "TEXT",
      "required": true,
      "description": "Updated to required"
    },
    {
      "name": "db-url",
      "type": "TEXT",
      "required": false,
      "description": "Updated - no longer required"
    }
  ]
}
```

### YAML Structure

```yaml
type: "applicationTemplate"
name: "CaC_AT_Prop_Sync_Test"
description: "Application template for property sync testing"
useWizard: false

settings:
  enforceCompleteSnapshots: false
  onlyChangedVersions: false

notificationSchemeName: ""

properties:
  - name: "server-host"
    type: "TEXT"
    required: true
    description: "Updated description for server host"

  - name: "server-port"
    type: "TEXT"
    required: true
    description: "Updated to required"

  - name: "db-url"
    type: "TEXT"
    required: false
    description: "Updated - no longer required"
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
| `exemptProcesses` | array | Processes exempt from approval requirements. Each entry contains a process `name`. |

#### Artifact Cleanup Settings (`ArtifactCleanUpSettings`)
| Field | Type | Description |
|-------|------|-------------|
| `numberOfVersionsToRetain` | number | Number of versions to keep (`0` = unlimited). |
| `daysToRetainVersions` | number | Days to keep versions (`0` = unlimited). |
| `daysToRetainApplicationSnapshots` | number | Days to keep application snapshots (`0` = unlimited). |
| `useSystemDefault` | boolean | Use system default cleanup settings instead of the values above. |

#### Deployment History Cleanup (`deploymentHistoryCleanup`)
| Field | Type | Description |
|-------|------|-------------|
| `daysToRetainDeploymentHistory` | number | Days to keep deployment history (`0` = unlimited). |
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
| `snapshotlocktype` | string | Snapshot lock type, for example `System Default (Component Versions and Configuration)`. |

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

```json
{
  "type": "environmentTemplate",
  "name": "CaC_Test_Environment_Template",
  "applicationTemplateName": "CaC_Test_Application_Template",
  "description": "Environment Template for property testing",
  "resourceTemplateName": "CaC_Test_Resource_Template",
  "DeploymentApprovals": {
    "requireApprovals": false,
    "noSelfApprovals": false,
    "externalApprovalAgent": "",
    "externalApprovalAgentPool": "",
    "externalApprovalProcess": "",
    "exemptProcesses": []
  },
  "ArtifactCleanUpSettings": {
    "numberOfVersionsToRetain": 0,
    "daysToRetainVersions": 0,
    "daysToRetainApplicationSnapshots": 0,
    "useSystemDefault": true
  },
  "deploymentHistoryCleanup": {
    "daysToRetainDeploymentHistory": 0,
    "useSystemDefault": false
  },
  "defaultLogRetention": {
    "logDaysToKeep": 0,
    "useSystemDefaultLogDays": false
  },
  "properties": [
    {
      "name": "env-tmpl-prop-1-renamed",
      "type": "TEXT",
      "required": false,
      "label": "env-tmpl-prop-1-renamed",
      "description": "Environment template property one renamed"
    },
    {
      "name": "env-tmpl-prop-2",
      "type": "TEXT",
      "required": false,
      "label": "env-tmpl-prop-2",
      "description": "Environment template property two - UPDATED"
    },
    {
      "name": "env-tmpl-prop-3",
      "type": "TEXT",
      "required": false,
      "label": "env-tmpl-prop-3",
      "description": "Environment template property three - NEW"
    }
  ],
  "lockSnapshots": false,
  "requireSnapshot": false,
  "snapshotlocktype": "System Default (Component Versions and Configuration)",
  "gate": {}
}
```

### YAML Structure

```yaml
type: "environmentTemplate"
name: "CaC_Test_Environment_Template"
applicationTemplateName: "CaC_Test_Application_Template"
description: "Environment Template for property testing"
resourceTemplateName: "CaC_Test_Resource_Template"

DeploymentApprovals:
  requireApprovals: false
  noSelfApprovals: false
  externalApprovalAgent: ""
  externalApprovalAgentPool: ""
  externalApprovalProcess: ""
  exemptProcesses: []

ArtifactCleanUpSettings:
  numberOfVersionsToRetain: 0
  daysToRetainVersions: 0
  daysToRetainApplicationSnapshots: 0
  useSystemDefault: true

deploymentHistoryCleanup:
  daysToRetainDeploymentHistory: 0
  useSystemDefault: false

defaultLogRetention:
  logDaysToKeep: 0
  useSystemDefaultLogDays: false

properties:
  - name: "env-tmpl-prop-1-renamed"
    type: "TEXT"
    required: false
    label: "env-tmpl-prop-1-renamed"
    description: "Environment template property one renamed"

  - name: "env-tmpl-prop-2"
    type: "TEXT"
    required: false
    label: "env-tmpl-prop-2"
    description: "Environment template property two - UPDATED"

  - name: "env-tmpl-prop-3"
    type: "TEXT"
    required: false
    label: "env-tmpl-prop-3"
    description: "Environment template property three - NEW"

lockSnapshots: false
requireSnapshot: false
snapshotlocktype: "System Default (Component Versions and Configuration)"
gate: {}
```


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
| `teams` | array of strings | Teams that have access to the resource template. Each entry is a team name that must already exist on the server. |
| `rootResourceTeams` | array of strings | Teams assigned to the root resource created from this template. |

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

```json
{
  "template": {
    "name": "CaC_RT_Prop_Sync_Test",
    "description": "Resource template for property sync testing",
    "cloudResourceId": "",
    "connection": "",
    "parent-template-name": "",
    "teams": [
      "Dev Team",
      "QA Team"
    ],
    "rootResourceTeams": [
      "Dev Team"
    ]
  },
  "properties": [
    {
      "name": "server-host-test",
      "type": "TEXT",
      "required": true,
      "label": "server-host-test",
      "description": "Updated description for server host"
    }
  ]
}
```

### YAML Structure

```yaml
template:
  name: "CaC_RT_Prop_Sync_Test"
  description: "Resource template for property sync testing"
  cloudResourceId: ""
  connection: ""
  parent-template-name: ""
  teams:
    - "Dev Team"
    - "QA Team"
  rootResourceTeams:
    - "Dev Team"

properties:
  - name: "server-host-test"
    type: "TEXT"
    required: true
    label: "server-host-test"
    description: "Updated description for server host"
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