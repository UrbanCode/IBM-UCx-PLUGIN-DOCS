
# IBM Operational Decision Manager (ODM) - Process Steps


* [Delete XOM](#delete_data_model)
* [Delete Rule Archive](#delete_rule_archive)
* [Deploy Data Model](#deploy_data_model)
* [Deploy Rule Archive](#deploy_rule_archive)
* [Fetch Rule Archive](#fetch_rule_archive)
* [Fetch XOM](#fetch_xom)
* [Set Property](#set_property)


## Delete XOM

Delete a XOM from a Rule Execution Server.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Resource | String | The resource to delete from the Rule Execution Server. Use the following format: xomName/xomVersion. | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Delete Rule Archive

Delete a ruleset or ruleapp archive from a Rule Execution Server.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Resource | String | The resource to delete from the Rule Execution Server. For a ruleset archive, use the following format: ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion. For a ruleapp archive, use the following format: ruleAppName/ruleAppVersion. | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Deploy Data Model

Deploy an XOM resource to a Rule Execution Server instance of IBM Operational Decision Manager.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Resource Name | String | The name for the resource in the Rule Execution Server. Typically, you specify the XOM file name. | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| XOM File | String | The XOM resource (Java archive or .zip file) to deploy to the Rule Execution Server. | Yes |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Deploy Rule Archive

Deploy a RuleSet or RuleApp archive to IBM Operational Decision Manager.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Merging Policy | Enumeration:
* NONE
* ADD\_AT\_END\_MERGING\_POLICY
* REPLACE\_MERGING\_POLICY
* ADD\_AT\_END\_RULESET\_MERGING\_POLICY
* REPLACE\_RULESET\_MERGING\_POLICY
| Select the merge policy to use to process the RuleApp archive to automatically assign the version. The policy supersedes any explicitly set values.. | No |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| RuleApp Archive | String | The full path to the RuleApp archive that contains the ruleset to deploy. | Yes |
| RuleApp Name | String | The name for the RuleApp archive in the Rule Execution Server console. To manually specify this value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleApp Version | String | The version for the RuleApp archive in the Rule Execution Server console. To manually specify this value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleSet Name | String | The name for the RuleSet archive in the Rule Execution Server console. To manually specify this value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleSet Version | String | The version for the RuleSet archive in the Rule Execution Server console. To manually specify this value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Version Policy | Enumeration:
* NONE
* MAJOR\_VERSION\_POLICY
* MINOR\_VERSION\_POLICY
| Select the version policy to use to process the RuleApp archive to automatically assign the version. The policy supersedes any explicitly set values. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Fetch Rule Archive

Fetch a ruleset or ruleapp archive from a Rule Execution Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Resource | String | The resource to fetch from the Rule Execution Server. For a ruleset archive, use the following format: ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion. For a ruleapp archive, use the following format: ruleAppName/ruleAppVersion. If no version is specified, the highest will be fetched. | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Fetch XOM

Fetch a XOM resource from a Rule Execution Server.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Resource | String | The resource to fetch from the Rule Execution Server. Use the following format: xomName/xomVersion. If no version is specified, the highest will be fetched. | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |

## Set Property

Create or update a property value for a RuleApp or RuleSet on a Rule Execution Server instance of IBM Operational Decision Manager.



| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Create New Property | Boolean | Mark checkbox if creating a new property. Do not check box if updating an existing property. | No |
| Hostname | String | The host name of the server where the Rule Execution Server console is installed. For example: 192.0.2.1 | Yes |
| Password | Password | The password to use to log in to the Rule Execution Server console. | No |
| Port | String | The port number of the Rule Execution Server console. | Yes |
| Property Name | String | The property name to be created or updated. | Yes |
| Property Value | String | The new property value. | No |
| Resource | String | The resource path for the property to be updated. For a ruleApp, use the format: ruleAppName/ruleAppVersion.For a ruleSet, use the format: ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion | Yes |
| User Name | String | The user name to use to log in to the Rule Execution Server console. | No |
| Token URL | String | Token URL to authenticate the oAuth server. | No |
| Scope | String | oAuth scope to authenticate the oAuth server. | No |
| Grant Type | String | oAuth grantType to authenticate the oAuth server. | No |
| oAuth User Name | String | The username for the oAuth server. | No |
| oAuth Password | Password | The password for the oAuth server. | No |
| Client ID | String | The Client ID for the oAuth server. | No |
| Client Secret | String | The Cleint secret for the oAuth server. | No |


