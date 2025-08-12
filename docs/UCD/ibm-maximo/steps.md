# IBM Maximo - Process Steps


- Deploy Package
- Upload Package

## Deploy Package

- Deploy package to maximo migration manager target environment
  
Input properties for the Deploy Package step:

| Name |Type |Description |Required |
| :--- | :--- | :--- | :--- |
| API Key| Password| The API Key for authentication.| Yes |
| Host | String | Host domain name or ip address of Maximo instance. | Yes |
| Password | Password | The password for login to Maximo instance. | Yes |
| Port | String | The port of Maximo instance.  | No |
| User Name | String | The user name for login to Maximo instance. | Yes |

## Upload Package

- Uploads package to maximo migration manager

Input properties for the Upload Package step

| Name |Type |Description |Required |
| :--- | :--- | :--- | :--- |
| API Key | Password | The API Key for authentication. | Yes |
| File Path | String | Path of package zip file, which needs to be uploaded to target maximo instance | No |
| Host | String | Host domain name or ip address of Maximo instance. | Yes |
| Password | Password | The password for login to Maximo instance. | Yes |
| Port | String | The port of Maximo instance. | No |
| User Name | String | The user name for login to Maximo instance. | Yes  |
