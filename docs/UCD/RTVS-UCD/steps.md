
# IBM Rational Test Virtualization Server (RTVS) - Process Steps

* [Create Transient Environment](#create_transient_environment)
* [Delete Transient Environment](#delete_transient_environment)
* [Start Scenario](#start_scenario)
* [Start Stub](#start_stub)
* [Stop Scenario](#stop_scenario)
* [Stop Stub](#stop_stub)
* [Update Transient Environment](#update_transient_environment)


## Create Transient Environment

Create a transient Rational Integration Tester environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Base Environment | String | The name of the environment to be used as the base of the new environment. | Yes |
| Description | String | A description of the new environment. | No |
| Domain | String | The name of the domain. | Yes |
| Rational Test Control Panel URL | String | The URL of the Rational Test Control Panel. | Yes |

## Delete Transient Environment

Delete a transient Rational Integration Tester environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | Domain name | Yes |
| Environment | String | The name of the environment to delete. | Yes |
| Rational Test Control Panel URL | String | The URL of Rational Test Control Panel. | Yes |
| User name | String | The user name that has permission to perform the operation. | No |

## Start Scenario

Start a scenario


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | The name of the domain. | Yes |
| Environment | String | The name of the environment. | Yes |
| Force | Boolean | Enable to stop any already-running scenario in the environment. | No |
| Rational Test Control Panel URL | String | The URL of the Rational Test Control Panel. | Yes |
| Scenario name | String | The name of the scenario to start. | Yes |
| Scenario owner | String | Filters the scenarios by owner | No |
| Stop stubs | Enumeration:
* ALL
* OPERATIONS
* NONE
| Specify ALL to stop all stubs in the environment; OPERATIONS to stop the stubs for the operations in the scenario; defaults to NONE to leave any existing stubs running  | No |
| User name | String | The user name under which to perform the operation to get through environment locks | No |

## Start Stub

Start a stub.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Agent attributes | String | Comma-separated list of agent attributes identifying the agent to run on | No |
| Component | String | Component the stub exists within | No |
| Domain | String | Domain name | Yes |
| Environment | String | Environment name | Yes |
| Operation | String | Operation the stub exists within | No |
| Rational Test Control Panel URL | String | URL of Rational Test Control Panel | Yes |
| Stub name | String | The name of the stub (virtual service) to start | Yes |
| User name | String | The user name under which to perform the operation to get past environment locks | No |
| Version | String | The version of the stub (virtual service) to start | No |

## Stop Scenario

Stop a scenario.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | Domain name | Yes |
| Environment | String | Environment name | Yes |
| Rational Test Control Panel URL | String | URL of Rational Test Control Panel | Yes |
| Scenario name | String | The name of the scenario (virtual service) to stop | Yes |
| Scenario owner | String | Filters the scenarios by owner | No |
| User name | String | The user name under which to perform the operation to get past environment locks | No |

## Stop Stub

Stop a stub.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Component | String | Component the stub exists within | No |
| Domain | String | Domain name | Yes |
| Environment | String | Environment name | Yes |
| Operation | String | Operation the stub exists within | No |
| Rational Test Control Panel URL | String | URL of Rational Test Control Panel | Yes |
| Stub name | String | The name of the stub (virtual service) to stop | Yes |
| User name | String | The user name under which to perform the operation to get past environment locks | No |
| Version | String | The version of the stub (virtual service) to stop | No |

## Update Transient Environment

Update a Rational Integration Tester transient environment.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Domain | String | Domain name | Yes |
| Environment | String | Name of the environment to update | Yes |
| Rational Test Control Panel URL | String | URL of Rational Test Control Panel | Yes |
| Tags Property File | String | Path to the file with the tag values to update in the environment.One of updateProps or tagsPropertyFile must be specified. | No |
| Update properties | String | A new line separated list of name=value pairs.One of updateProps or tagsPropertyFile must be specified. | No |
| User name | String | The user name under which to perform the operation to get past environment locks | No |


