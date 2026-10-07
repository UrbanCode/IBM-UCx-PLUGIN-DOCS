# Process Steps

## Deploy Rule Archive

Deploy a RuleSet or RuleApp archive to DevOps Operational Decision Manager.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| RuleApp Archive | textBox | The full path to the RuleApp archive that contains the ruleset to deploy. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |
| Merging Policy | selectBox | Select the merge policy to use to process the RuleApp archive to automatically assign the                                    version. The policy supersedes any explicitly set values.. | No |
| Version Policy | selectBox | Select the version policy to use to process the RuleApp archive to automatically assign the                                    version. The policy supersedes any explicitly set values. | No |
| RuleApp Name | textBox | The name for the RuleApp archive in the Rule Execution Server console. To manually specify this                                    value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleApp Version | textBox | The version for the RuleApp archive in the Rule Execution Server console. To manually specify                                    this value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleSet Name | textBox | The name for the RuleSet archive in the Rule Execution Server console. To manually specify this                                    value, Merging Policy and Versioning Policy must both be set to NONE. | No |
| RuleSet Version | textBox | The version for the RuleSet archive in the Rule Execution Server console. To manually specify                                    this value, Merging Policy and Versioning Policy must both be set to NONE. | No |

## Deploy Data Model

Deploy an XOM resource to a Rule Execution Server instance of DevOps Operational Decision Manager.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| XOM File | textBox | The XOM resource (Java archive or .zip file) to deploy to the Rule Execution Server. | Yes |
| Resource Name | textBox | The name for the resource in the Rule Execution Server. Typically, you specify the XOM file                                    name. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Run Test Suites

Run Test Suites.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Decision Service Name | textBox | Unique Decision name. ex: xyz | Yes |
| Test Suite Names | textAreaBox | Test Suite Names. ex: abc.  Separate testSuiteNames with commas or newline | Yes |
| Hostname | textBox | The host name of the server where the Decision Server is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Decision Server. | Yes |
| User Name | textBox | The user name to use to log in to the Decision Server. | No |
| Password | secureBox | The password to use to log in to the Decision Server. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Delete Rule Archive

Delete a ruleset or ruleapp archive from a Rule Execution Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The resource to delete from the Rule Execution Server. For a ruleset archive, use the following                                    format: ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion. For a ruleapp archive, use the                                    following format: ruleAppName/ruleAppVersion. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Delete XOM

Delete a XOM from a Rule Execution Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The resource to delete from the Rule Execution Server. Use the                                    following format: xomName/xomVersion. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Fetch Rule Archive

Fetch a ruleset or ruleapp archive from a Rule Execution Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The resource to fetch from the Rule Execution Server. For a ruleset archive, use the following                                    format: ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion. For a ruleapp archive, use the                                    following format: ruleAppName/ruleAppVersion. If no version is specified, the highest will be fetched. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Fetch XOM

Fetch a XOM resource from a Rule Execution Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The resource to fetch from the Rule Execution Server. Use the                                    following format: xomName/xomVersion. If no version is specified, the highest will be fetched. | Yes |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |

## Set Property

Set a property in DevOps Operational Decision Manager.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Hostname | textBox | The host name of the server where the Rule Execution Server console is installed. For example:                                    192.0.2.1 | Yes |
| Port | textBox | The port number of the Rule Execution Server console. | Yes |
| User Name | textBox | The user name to use to log in to the Rule Execution Server console. | No |
| Password | secureBox | The password to use to log in to the Rule Execution Server console. | No |
| oAuth token URL | textBox | Token URL to authenticate the oAuth server. | No |
| oAuth scope | textBox | oAuth scope to authenticate the oAuth server. | No |
| oAuth grantType | textBox | oAuth grantType to authenticate the oAuth server. | No |
| oAuth Username | textBox | The username for the oAuth server . | No |
| oAuth Password | secureBox | The password for the oAuth server . | No |
| oAuth Client ID | secureBox | The Client ID for the oAuth server. | No |
| oAuth Client Secret | secureBox | The Cleint secret for the oAuth server. | No |
| HTTP Proxy Host | textBox | Optional HTTP proxy host. | No |
| HTTP Proxy Port | textBox | Optional HTTP proxy port. Must be supplied if the HTTP Proxy Host is specified. | No |
| HTTP Proxy Username | textBox | Optional HTTP proxy user name. | No |
| HTTP Proxy Password | secureBox | Optional HTTP proxy password. | No |
| Resource Path | textBox | The resource path for the property to be updated. For a ruleApp, use the format:                                    ruleAppName/ruleAppVersion.  For a ruleSet, use the format:                                    ruleAppName/ruleAppVersion/ruleSetName/ruleSetVersion. | Yes |
| Create New Property | checkBox | Check this box if creating a new property.                       Do not check this box if updating an existing property. | No |
| Property Name | textBox | The existing property name to be updated. | Yes |
| Property Value | textBox | The new property value. | No |

