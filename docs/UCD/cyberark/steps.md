
# CyberArk - Process Steps

- [CyberArk - Process Steps](#cyberark---process-steps)
  - [Steps](#steps)
    - [Authenticate Conjur](#authenticate-conjur)
    - [Get Password from CCP (Web Service)](#get-password-from-ccp-web-service)
    - [Get Password from CP (CLI Utility)](#get-password-from-cp-cli-utility)
    - [Get Variable from Conjur](#get-variable-from-conjur)

## Steps

### Authenticate Conjur

Authenticate Conjur using API Key to get a short-lived access token

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Key | String | API key | Yes |
| Account | String | Organization account name | Yes |
| Api Version | Enumeration | The version of the API. Valid values are v4 and v5. | Yes |
| Conjur URL | String | Url of Conjur, eg., https://eval.conjur.org | Yes |
| Login | String | The login name of the client. For users, its the user id. For hosts, the login name is host/host-id | Yes |
| Ouput PropertyAccess Token | String | Process Request Property for storing the retrieved access token | Yes |
| Proxy | String | Proxy, leave it blank if no proxy is needed | No |

### Get Password from CCP (Web Service)

Retrieve a password from CyberArk AIM Central Credential Provider via an HTTP request.

The Central Credential Provider is installed remote to the agent on a central IIS server. This step will set the prefix/username, prefix/address, and prefix/password properties at either the component process request level or the generic process request level.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Application ID | String | The unique ID of the application issuing the password request. | Yes |
| Folder | String | The name of the folder where the password is stored. | No |
| Keystore File | String | The path to the agent machines keystore file. This is required when the CyberArk server authenticates applications using client certificates. | No |
| Keystore Password | Password | The password of the agent machines keystore. | No |
| Keystore Type | String | The type of keystore on the agent machine. | No |
| Object Name | String | The name of the password object to retrieve. | No |
| Process Property Prefix | String | The value to be prepended to each process request property that is created by this step. You may address these properties in subsequent steps with the syntax: ``${p:<prefix>/password}`` for instance. | Yes |
| SSL/TLS Debug Level | String | Specify a debug level to set the javax.net.debug system property. A level of all will log everything. You can specify more specific logging levels with values. For instance ssl:handshake will only log information regarding handshakes between the client and server. | No |
| Safe | String | The name of the safe where the password is stored. | No |
| Server URL | String | The URL of your CyberArk server. This property should be specified in the format https://host:port/AIMWebService/api/accounts. | Yes |
| Trust Invalid Certificates | Boolean | Check this box to trust all SSL certificates on the agent machine. This will trust any certificate returned from the CyberArk server during connection. | No |

### Get Password from CP (CLI Utility)

Retrieve a password from CyberArk AIM Credential Provider via the clipasswordsdk command line utillity on the agent machine. This step will set the CyberArk/username,

CyberArk/address, and CyberArk/password properties at either the component process request level or the generic process request level.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AppID | String | AppID configured in CyberArk PVWA | Yes |
| Folder | String | Folder name | Yes |
| Object | String | Object name of the credential | Yes |
| Ouput PropertyAddress | String | Process Request Property for storing the retrieved address | No |
| Ouput PropertyPassword | String | Process Request Property for storing the retrieved password | Yes |
| Ouput PropertyUser Name | String | Process Request Property for storing the retrieved user name | No |
| Path | String | Full path to clipasswordsdk.E.g. /opt/CARKaim/sdk/clipasswordsdk | Yes |
| Safe | String | Safe name | Yes |

### Get Variable from Conjur

Get Variable from Conjur

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Access Token | String | Access Token | Yes |
| Account | String | Organization account name | No |
| Api Version | Enumeration: | Api Version | Yes |
|             | * v4         |             |     |
|             | * v5         |             |     |
| Conjur URL | String | Url of Conjur, eg., https://eval.conjur.org | Yes |
| Ouput PropertyVariable | String | Process Request Property for storing the retrieved variable | Yes |
| Proxy | String | Proxy, leave it blank if no proxy is needed | No |
| Variable ID | String | Variable ID | Yes |
