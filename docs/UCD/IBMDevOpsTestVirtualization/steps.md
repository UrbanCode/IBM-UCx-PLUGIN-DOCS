# IBM DevOps Test Virtualization (Test Virtualization) - Process Steps

## Start Stub

Start a stub.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Environment name. | Yes |
| Stub name | textBox | The name of the stub (virtual service) to start. | Yes |
| Version | textBox | The version of the stub (virtual service) to start. | Yes |
| Component | textBox | Component the stub exists within. | Yes |
| Operation | textBox | Operation the stub exists within. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |
| Agent attributes | textBox | Comma-separated list of agent attributes identifying the agent to run on.. | Yes |

## Stop Stub

Stop a stub.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Environment name. | Yes |
| Stub name | textBox | The name of the stub (virtual service) to stop. | Yes |
| Version | textBox | The version of the stub (virtual service) to stop. | Yes |
| Component | textBox | Component the stub exists within. | Yes |
| Operation | textBox | Operation the stub exists within. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |

## Create Transient Environment

Create a transient GreenHat environment.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Base Environment | textBox | Name of the environment that will be used as the 'base' of the new environment. | Yes |
| Description | textBox | Description of the new environment. | Yes |

## Delete Transient Environment

Delete a transient GreenHat environment.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Name of the environment to delete. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |

## Update Transient Environment

Update a GreenHat transient environment.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Name of the environment to update. | Yes |
| Update properties | textAreaBox | A new line separated list of name=value pairs. One of updateProps or tagsPropertyFile must be specified. | Yes |
| Tags Property File | textBox | Path to the file with the tag values to update in the environment. One of updateProps or tagsPropertyFile must be specified. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |

## Start Scenario

Start a scenario

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Environment name. | Yes |
| Scenario name | textBox | The name of the scenario to start. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |
| Scenario owner | textBox | Filters the scenarios by owner. | Yes |
| Stop stubs | selectBox | Specify ALL to stop all stubs in the environment; OPERATIONS to stop the stubs for the operations in the scenario; defaults to NONE to leave any existing stubs running . | Yes |
| Force | checkBox | Stop any already-running scenario in the environment. | Yes |

## Stop Scenario

Stop a scenario

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| IBM Rational Test Control Panel URL | textBox | URL of IBM Rational Test Control Panel. | Yes |
| Domain | textBox | Domain name. | Yes |
| Environment | textBox | Environment name. | Yes |
| Scenario name | textBox | The name of the scenario (virtual service) to stop. | Yes |
| User name | textBox | The user name under which to perform the operation to get through environment locks. | Yes |
| Scenario owner | textBox | Filters the scenarios by owner. | Yes |

