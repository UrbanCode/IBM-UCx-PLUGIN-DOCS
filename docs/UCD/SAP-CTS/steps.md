# SAP Change and Transport System (CTS) - Process Steps

* [Add to Buffer](#add_to_buffer)
* [Import](#import)
* [Add File to Transport](#add_file_to_transport)
## Add to Buffer

Add the transport number to the buffer to be imported.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tp Path | textBox | Path to the transport control program (tp) on the system. Default location is '/usr/sap/${p:resource/sap.sid}/SYS/exe/run/tp'. | No |
| Transport Request Number | textAreaBox | Newline delimited list of transport request numbers to add to the buffer (ie. DEV12345). Also accepts a filename with a list of transport numbers. | Yes |
| SAP System ID | textBox | SID of the target SAP system. | Yes |
| Client Number | textBox | The number for the client on the target system. (ie. 100) | No |
| Profile Name | textBox | The path and name of the target profile. (ie. /usr/sap/trans/bin/TP_DOMAIN_${p:resource/sap.sid}.PFL) | No |

## Import

Import the transports added to the buffer.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| tp Path | textBox | Path to the transport control program (tp) on the system. Default location is '/usr/sap/${p:resource/sap.sid}/SYS/exe/run/tp'. | No |
| Transport Request Number | textAreaBox | Newline delimited list of transport request numbers to add to the buffer (ie. DEV12345). Also accepts a filename with a list of transport numbers. | Yes |
| SAP System ID | textBox | SID of the target SAP system. | Yes |
| Client Number | textBox | The number for the client on the target system. (ie. 100) | No |
| Leave transport request in queue for later import | checkBox | Leave transport request in queue for later import. | No |
| Import transport request again | checkBox | Import transport request again. | No |
| Overwrite originals | checkBox | Overwrite originals. | No |
| Overwrite objects in unconfirmed repairs | checkBox | Overwrite objects in unconfirmed repairs. | No |
| Ignore non-permitted transport type | checkBox | Ignore non-permitted transport type. | No |
| Ignore non-permitted table class | checkBox | Ignore non-permitted table class. | No |
| Ignore predecessor relations | checkBox | Ignore predecessor relations. | No |
| Ignore Invalid component version | checkBox | Ignore Invalid component version. | No |
| Profile Name | textBox | The path and name of the target profile. (ie. /usr/sap/trans/bin/TP_DOMAIN_${p:resource/sap.sid}.PFL) | No |
| Ignore Exit Value | checkBox | Ignore Exit value. | No |

## Add File to Transport

Attaches a given file to an ABAP CTS transport request.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| CTS-Attach Location | textBox | The path to the install directory for the cts-attach tool. See plug-in documentation for more information. (ex. /. | Yes |
| SAP Url | textBox | Host name and port for the SAP server. (ex. http://hostname.sap.com:5555 | Yes |
| CTS Username | textBox | Username for CTS | Yes |
| CTS Password | secureBox | Password for CTS | Yes |
| Client Number | textBox | The number for the client on the target system. | Yes |
| SAP System ID | textBox | System identifier of the upload system. | Yes |
| File | textBox | The full or relative path and name of the file to be added to the transport request. (ex. ./file.mtar) | Yes |
| Application | textBox | The application type of the file. (ex. HCP) | Yes |

