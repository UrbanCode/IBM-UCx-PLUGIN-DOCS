# Web Utilities - Process Steps

* [Delete from FTP Server](#delete_from_ftp_server)
* [Send HTTP Call](#send_http_call)
* [Upload to FTP Server](#upload_to_ftp_server)

## Delete from FTP Server


Delets a file from an FTP server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection Mode | Enumeration:- default- localPassive- localActive- `${p:componentProcess/connectionMode}`| Select a data connection mode between the client and server. | No |
| Delete Directory | Boolean | Delete the directory if it is empty. | No |
| Directory | String | The directory path where the files reside. | Yes |
| File Names | String | List the file names to delete. Separate multiple file names using commas or new lines. | No |
| Hostname | String | The host name of the FTP server. | Yes |
| Password | Password | Password to authenticate with the FTP server. | Yes |
| Port | String | The port the FTP server listens on. | Yes |
| Username | String | Username to authenticate with the FTP server. | Yes |

## Send HTTP Call


Sends an HTTP request to a URL, with headers and data.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Accept Response Type | Enumeration: - \*/\* - text/plain - application/x-www-form-urlencoded - application/xml,text/xml,application/xhtml+xml,application/atom+xml - application/json - application/javascript,text/javascript - text/html - application/zip| Select the accept type. If there is no accept type, select ANY. | No |
| Allow Untrusted SSL Certs | Boolean | If selected, HTTPS requests to sites with untrusted certificates do not fail. | No |
| Data / Data File | String | The data to send with the HTTP request. Specify the data in text format, or specify the name of a file that contains the data. | No |
| HTTP Method | Enumeration:- GET - POST - PUT - DELETE - HEAD - OPTIONS| Select the method to use for the HTTP request. | No |
| Headers | String | A list of request headers, separated by newline characters. | No |
| Output File | String | Specify the name of a file, relative to the working directory or absolute, to use to store the response body. | No |
| Password | Password | Password for basic authentication. | No |
| Request Content Type | Enumeration:- \*/\* - text/plain - application/x-www-form-urlencoded - application/xml,text/xml,application/xhtml+xml,application/atom+xml - application/json - application/javascript,text/javascript - text/html - application/zip| Select the body content type. If there is no request body, select ANY. | No |
| URL | String | The full URL to send the HTTP request. | Yes |
| Username | String | User name for basic authentication. | No |
| timeout | Integer | The HTTP operation will timeout if it does not complete after the time specified here. Default timeout is 5 minutes. | No |


## Upload to FTP Server

Uploads a file to an FTP server.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Connection Mode | Enumeration: - default - localPassive - localActive - `${p:componentProcess/connectionMode}`| Select a data connection mode between the client and server. | No |
| FTP File Type | Enumeration: - BINARY- ASCII| Select the FTP File Type to be sent to the FTP Server. | No |
| File Path | String | The full path of the local file to upload. For example: dir1/dir2/myFile.zip | Yes |
| Hostname | String | The host name of the FTP server. | Yes |
| Password | Password | Password to authenticate with the FTP server. | Yes |
| Port | String | The port the FTP server listens on. | Yes |
| Rename File | String | Upload the local file to the FTP server with another name. File extension needs to be included. | No |
| Upload Directory | String | The structure for the directory destination on the FTP server, relative to the server root directory. For example: /dir1/dir2/dir3/ | Yes |
| Username | String | User name to authenticate with the FTP server. | Yes |

|          Back to ...          |                                |                                                           Latest Version                                                            |    Web Utilities    |                         |                   |                           |
| :---------------------------: | :----------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :-----------------: | :---------------------: | :---------------: | :-----------------------: |
| [All Plugins](../../index.md) | [Deploy Plugins](../README.md) | [18.1151823](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/web-utilities/ucd-web-utilities-18.1151823.zip) | [Readme](README.md) | [Overview](overview.md) | [Usage](usage.md) | [Downloads](downloads.md) |
