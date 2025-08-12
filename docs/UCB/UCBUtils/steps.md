
UCB Utilities - Steps
=====================

# Steps


### Steps




### Process steps in the UCB Utils plug-in

* [Add Properties](#add_properties)
* [Create a json file](#create_a_json_file)
* [Send HTTP Call](#send_http_call)


### Add Properties

Add scoped properties.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Properties | String | The properties to add. Enter each property on a new line. Separate the property name and value with =. | Yes |
| Scope | Enumeration:
| The scope of the properties | Yes |

### Create a json file

Create a json file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Beautify Content | Boolean | Beautify the content when writing to file. | No |
| Custom Encoding | String | Specify a character encoding to use when writing to file. If blank, the default character encoding of the agent will be used. Examples: US-ASCII, UCS-2,JIS X 0201, UTF-16, UTF-16LE, EUC. | No |
| JSON Content | String | The json content. Enter json content string. | Yes |
| JSON File | String | The name of the json file to create. | Yes |
| Overwrite | Boolean | Overwrite the output file if it already exists. | No |

### Send HTTP Call

Sends an HTTP request to a URL, with headers and data.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Accept Response Type | Enumeration:
* \*/\*
* text/plain
* application/x-www-form-urlencoded
* application/xml,text/xml,application/xhtml+xml,application/atom+xml
* application/json
* application/javascript,text/javascript
* text/html
* application/zip
| Select the accept type. If there is no accept type, select ANY. | No |
| Allow Untrusted SSL Certs | Boolean | If selected, HTTPS requests to sites with untrusted certificates do not fail. | No |
| Data / Data File | String | The data to send with the HTTP request. Specify the data in text format, or specify the name of a file that contains the data. | No |
| HTTP Method | Enumeration:
* GET
* POST
* PUT
* DELETE
* HEAD
* OPTIONS
| Select the method to use for the HTTP request. | No |
| Headers | String | A list of request headers, separated by newline characters. | No |
| Output File | String | Specify the name of a file, relative to the working directory or absolute, to use to store the response body. | No |
| Password | Password | Password for basic authentication. | No |
| Request Content Type | Enumeration:
* \*/\*
* text/plain
* application/x-www-form-urlencoded
* application/xml,text/xml,application/xhtml+xml,application/atom+xml
* application/json
* application/javascript,text/javascript
* text/html
* application/zip
| Select the body content type. If there is no request body, select ANY. | No |
| URL | String | The full URL to send the HTTP request. | Yes |
| Username | String | User name for basic authentication. | No |



|Back to ...||Latest Version|UCB Utilities |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Build Plugins](../README.md)|[2.1058205](https://raw.githubusercontent.com/UrbanCode/IBM-UCB-PLUGINS/main/files/UCBUtils/UCBUtils-2.1058205.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
