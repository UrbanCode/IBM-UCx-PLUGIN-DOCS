# Process Steps

## Request Enterprise Authentication

Sends an HTTP call to a URL to request Authentication Token for Enterprise

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Entity ID | textBox | Entity ID. EnterpriseID on account info tab on Admin Console. | Yes |
| Client ID | textBox | Application’s client_id. Available on application settings webpage. | Yes |
| Client Secret | textBox | Client Secret - Your application’s client_secret. Available on your application settings webpage. | Yes |
| Public Key ID | textBox | Used to generate JWTAssertion for authentication. Must be created on your application settings webpage. | Yes |
| Private Key | textBox | Used to generate JWTAssertion for authentication. Generated locally. Private key or private key path are required | Yes |
| Private Key Path | textBox | Used to generate JWTAssertion for authentication. Generated locally.Private key or private key path are required | Yes |
| Private Key Password | secureBox | Optional. Needed if Private Key utilizes password for extra layer of security. | Yes |

## Create App User

Sends an HTTP call to a URL to create an App User on Box

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| App User Name | textBox | Name of app user to be created. Returns existing app user ID if match is found | Yes |
| Enterprise Token | textBox | Box Enterprise token needed to establish API connection and create App User | Yes |

## Request App User Authentication

Sends an HTTP call to a URL to request Authentication Token for App User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| App User ID | textBox | App User ID found on enterprise account. Used as a part of the App Auth request to bypass manual input of credentials for OAuth2 authentication. | Yes |
| Client ID | textBox | Client ID - Your application’s client_id. Available on your application settings webpage. | Yes |
| Client Secret | textBox | Client Secret - Your application’s client_secret. Available on your application settings webpage. | Yes |
| Public Key ID | textBox | Used to generate JWTAssertion for authentication. Must be created on your application settings webpage. | Yes |
| Private Key | textBox | Used to generate JWTAssertion for authentication. Generated locally. Private key or private key path are required | Yes |
| Private Key Path | textBox | Used to generate JWTAssertion for authentication. Generated locally.Private key or private key path are required | Yes |
| Private Key Password | secureBox | Optional. Needed if Private Key utilizes password for extra layer of security. | Yes |

## Create Folder

Sends a WebService call to create a folder on Box

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| App User Token | textBox | App User token used for API requests | Yes |
| Folder | textBox | Name of folder to be created | Yes |
| Parent Folder ID | textBox | ID of parent folder of folder to be created. Overrides Parent Folder field if used. If null, Parent Folder value is used. Can be found in the url when in the folder on the box web application. | Yes |
| Parent Folder | textBox | Parent folder of folder to be created. Folder name must be unique to App User account to guarentee correct upload location. If left blank, parent folder is set to root of Box account | Yes |

## Upload File

Sends a WebService call to upload a file to Box

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| App User Token | textBox | App User token used for API requests | Yes |
| File Path | textBox | Path to file that you want to upload. | Yes |
| File Name | textBox | Set the name of the uploaded file if you want it to be different from the file name | Yes |
| Parent Folder ID | textBox | ID of parent folder of upload folder. Can be found in the url when in the folder on the Box.com web application. | Yes |

## Get File Download Url

Sends a WebService call to get the direct download link for a file on Box

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| App User Token | textBox | App User token used for API requests | Yes |
| File ID | textBox | Id of file to request the direct download link for | Yes |

