# Environment as Configuration

### Environment Management

- **Download an Environment**  
  *Syntax*:  
  `download-environment <username> <password> <server-url> <environment-name> <application-name> <output-file>`  
  *Example*:

        `download-environment admin admin https://localhost:8443 "DEV" "MyApplication" env.json`

        `download-environment admin admin https://localhost:8443 "DEV" "MyApplication" env.yaml`

- **Upload an Environment**  
  *Syntax*:  
  `upload-environment <username> <password> <server-url> <cac-file>`  
  *Example*:

        `upload-environment admin admin https://localhost:8443 cacenv.json`

        `upload-environment admin admin https://localhost:8443 cacenv.yaml`

## Environment CAC Structure

An Environment CAC file contains the complete definition of an environment linked to an application, including its properties, cleanup policies, approval settings, and resource mappings.

### Field Descriptions

#### Environment Metadata
- **type**: Must be `"environment"` for environment CAC files
- **name**: The unique identifier for the environment
- **applicationName**: The name of the application this environment belongs to (required)
- **description**: Human-readable description of the environment

#### Artifact Cleanup Settings (`ArtifactCleanUpSettings`)
- **numberOfVersionsToRetain**: Number of versions to keep (0 = unlimited)
- **daysToRetainVersions**: Number of days to keep versions (0 = unlimited)
- **daysToRetainApplicationSnapshots**: Number of days to keep application snapshots (0 = unlimited)
- **useSystemDefault**: Whether to use system default cleanup settings

#### Deployment History Cleanup (`deploymentHistoryCleanup`)
- **daysToRetainDeploymentHistory**: Number of days to keep deployment history (0 = unlimited)
- **useSystemDefault**: Whether to use system default for history cleanup

#### Snapshot and Approval Settings
- **lockSnapshots**: Whether to lock snapshots after deployment
- **noSelfApprovals**: Whether to prevent self-approvals
- **requireApprovals**: Whether approvals are required for deployments
- **requireSnapshot**: Whether a snapshot is required for deployments

#### External Approval Configuration
- **externalApprovalAgent**: Name of the agent for external approvals
- **externalApprovalAgentPool**: Agent pool for external approvals
- **externalApprovalProcess**: Name of the external approval process

#### Exempt Processes (`exemptProcessesArray`)
Array of process objects that are exempt from approval requirements:
- **name**: Name of the exempt application process

#### Environment Properties (`environment-properties`)
Environment-level properties defined as a key-value object:
- **key**: Property name
- **value**: Property value (use `****` for secure properties)
- **description**: Property description
- **secure**: Boolean indicating if the value is encrypted

#### Team Mappings
- **teams**: Array of team names assigned to the environment

#### Approval Gates (`gate`)
Defines approval gate conditions using logical operators:
- **OR**: Array of condition groups (at least one group must be satisfied)
- **AND**: Array of conditions within a group (all conditions must be satisfied)
- Each condition contains:
  - **type**: Gate type (`VERSION` or `SNAPSHOT`)
  - **name**: Name of the version status or snapshot

#### Base Resources (`baseResources`)
Array of resource objects that define the base resources for this environment:
- **name**: Full path to the resource (e.g., `"/CreatePlanResource/Agent_1.0"`)

#### Deployment Triggers (`deploymentTriggers`)
Array of automatic deployment trigger definitions:
- **component**: Name of the component that triggers the deployment
- **applicationProcess**: Name of the application process to execute
- **executingUser**: Username under which the triggered deployment runs

### Mandatory and Optional Fields

The mandatory fields to create an environment are `type`, `name`, and `applicationName`. The minimal JSON required to create an environment is:

```json
{
  "type": "environment",
  "name": "DEV-Test",
  "applicationName": "cac-application-test"
}
```

When an environment is created with only these fields, the server applies default values for all other fields. Notable defaults include:

| Field                                       | Default Value |
|---------------------------------------------|---------------|
| `ArtifactCleanUpSettings.useSystemDefault`  | `true`        |
| `deploymentHistoryCleanup.useSystemDefault` | `true`        |

All remaining fields are optional and can be provided to configure properties such as approval settings, environment properties, teams, gates, base resources, and deployment triggers.

### Real-World Example

Here's an actual Environment CAC JSON file structure with all the fields

### JSON Structure

```json5
{
  "type": "environment",
  "name": "DEV",
  "applicationName": "cac-application-test",
  "description": "Dev Environment Test",
  "ArtifactCleanUpSettings": {
    "numberOfVersionsToRetain": 0,
    "daysToRetainVersions": 0,
    "daysToRetainApplicationSnapshots": 0,
    "useSystemDefault": true
  },
  "deploymentHistoryCleanup": {
    "daysToRetainDeploymentHistory": 0,
    "useSystemDefault": true
  },
  "lockSnapshots": true,
  "noSelfApprovals": true,
  "requireApprovals": false,
  "requireSnapshot": true,
  "externalApprovalAgent": "Agent_1.0",
  "externalApprovalAgentPool": "",
  "externalApprovalProcess": "New EAP Test Process",
  "exemptProcessesArray": [
    {
      "name": "TestApp2"
    },
    {
      "name": "Test App Process"
    }
  ],
  "environment-properties": {
    "env-prop-1": {
      "value": "Test Props",
      "description": "Props for Env",
      "secure": false
    },
    "env-prop-2": {
      "value": "****",
      "description": "Environment Property",
      "secure": true
    }
  },
  "teams": [
    "Standard App Team"
  ],
  "gate": {
    "OR": [
      {
        "AND": [
          {
            "type": "VERSION",
            "name": "S3"
          },
          {
            "type": "VERSION",
            "name": "S1"
          },
          {
            "type": "SNAPSHOT",
            "name": "Snap-02"
          }
        ]
      }
    ]
  },
  "baseResources": [
    {
      "name": "/CreatePlanResource/Agent_1.0"
    }
  ],
  "deploymentTriggers": [
    {
      "component": "CAC-Canonical-Comp-Model",
      "applicationProcess": "Test App Process",
      "executingUser": "admin"
    },
    {
      "component": "CAC-Canonical-Comp-Model",
      "applicationProcess": "TestApp2",
      "executingUser": "admin"
    },
    {
      "component": "CAC-Canonical-component-Model-02",
      "applicationProcess": "Test App Process",
      "executingUser": "admin"
    }
  ]
}
```

### YAML Structure

```yaml
type: "environment"
name: "DEV"
applicationName: "cac-application-test"
description: "Dev Environment Test"

ArtifactCleanUpSettings:
  numberOfVersionsToRetain: 0
  daysToRetainVersions: 0
  daysToRetainApplicationSnapshots: 0
  useSystemDefault: true

deploymentHistoryCleanup:
  daysToRetainDeploymentHistory: 0
  useSystemDefault: true

lockSnapshots: true
noSelfApprovals: true
requireApprovals: false
requireSnapshot: true

externalApprovalAgent: "Agent_1.0"
externalApprovalAgentPool: ""
externalApprovalProcess: "New EAP Test Process"

exemptProcessesArray:
  - name: "TestApp2"
  - name: "Test App Process"

environment-properties:
  env-prop-1:
    value: "Test Props"
    description: "Props for Env"
    secure: false
  env-prop-2:
    value: "****"
    description: "Environment Property"
    secure: true

teams:
  - "Standard App Team"

gate:
  OR:
    - AND:
        - type: "VERSION"
          name: "S3"
        - type: "VERSION"
          name: "S1"
        - type: "SNAPSHOT"
          name: "Snap-02"

baseResources:
  - name: "/CreatePlanResource/Agent_1.0"

deploymentTriggers:
  - component: "CAC-Canonical-Comp-Model"
    applicationProcess: "Test App Process"
    executingUser: "admin"
  - component: "CAC-Canonical-Comp-Model"
    applicationProcess: "TestApp2"
    executingUser: "admin"
  - component: "CAC-Canonical-component-Model-02"
    applicationProcess: "Test App Process"
    executingUser: "admin"
```

## Environment Workflow Integration

### Workflow Scenarios

#### Scenario 1: Create New Environment for Application

```sh
# Create environment CAC file for the application
# (See Environment CAC Structure above for structure)

# Upload environment
upload-environment admin admin https://localhost:8443 dev-env.json
```

#### Scenario 2: Update Environment Configuration

```sh
# Download the environment definition
download-environment admin admin https://localhost:8443 "DEV" "CAC Application" dev-env.json

# Edit dev-env.json to update:
# - cleanup policies
# - approval settings
# - environment properties
# - base resources
# - teams

# Upload the modified environment
upload-environment admin admin https://localhost:8443 dev-env.json
```
