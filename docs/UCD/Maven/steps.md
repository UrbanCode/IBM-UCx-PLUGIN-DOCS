
# Maven Resolve - Process Steps


* [Maven Resolve](#maven_resolve)


## Maven Resolve

Resolve artifacts from Maven.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Artifacts | String | Line-separated list of artifacts to download. Specify using the form groupId/artifactId/version/filename. | Yes |
| HTTP Proxy Hostname | String | (Optional) HTTP proxy host. | No |
| HTTP Proxy Password | Password | (Optional) HTTP proxy password. | No |
| HTTP Proxy Port | String | (Optional) HTTP proxy port number. Must be specified if HTTP proxy host is specified. | No |
| HTTP Proxy Username | String | (Optional) HTTP proxy user name. | No |
| Repository Password | Password | The password to authenticate with Maven. | No |
| Repository Url | String | The base URL of the Maven repository. | Yes |
| Repository User name | String | The user name to authenticate with Maven. | No |
| Verify Hash | Boolean | Verify hashes after the file is downloaded. | No |



|Back to ...||Latest Version|Maven Resolve ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[11.1167755](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/Maven/ucd-Maven-11.1167755.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Downloads](downloads.md)|
