
# Salesforce - Process Steps


- [Salesforce - Steps](#salesforce---steps)
  - [Steps](#steps)
    - [Process steps in the SalesForce plug-in](#process-steps-in-the-salesforce-plug-in)
    - [Bulk Retrieve](#bulk-retrieve)
    - [Deploy](#deploy)
    - [Describe Metadata](#describe-metadata)
    - [Deploy Recent Validation](#deploy-recent-validation)
    - [List Metadata](#list-metadata)
    - [Retrieve](#retrieve)

## Bulk Retrieve

Download a large number of components of a single metadata type into a set of local files.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | No |
| Batch Size | String | The number of items to retrieve while doing multi-part retrieve. Defaults to 10. | No |
| Containing Folder | String | If the metadata is contained in a folder, this parameter should be the name of the folder from which the contents are retrieved. | No |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Max Poll | String | The number of times to poll the server for the results of the retrieve request. The clients waits for two seconds after the first poll attempt. The wait time is doubled for each successive poll attempt up to maximum of 30 seconds between poll attempts. | No |
| Metadata Type | String | The type of metadata for which you are retrieving property information. | Yes |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | Yes |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| Retrieve Target | String | The root of the directory structure into which the metadata files are retrieved. (i.e. codepkg) | Yes |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| Unzip | String | If set to true, the retrieved components are unzipped. If set to false, the retrieved components are saved as a zip file in the retrieveTarget directory. | No |
| User | String | SFDC User Name | Yes |

## Deploy

Deploy components, code, or recent validations into your org.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Check Only | Boolean | Check this box to perform a test deployment (validation) of components without saving the components in the target org. After the validation finishes with passing tests, it might qualify for deployment without rerunning tests (Deploy Recent Validation step). | No |
| Deploy Root | String | The directory relative to the current working directory which contains the files to operate on. | Yes |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agen t resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | No |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| Roll Back on Error | Boolean | Determines whether or not to roll back on error | No |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| Test Level | String | Specifies which tests are run as part of a deployment. The test level is enforced regardless of the types of components that are present in the deployment package. | No |
| Test Names | String | Ignored if Test Level not set to RunSpecifiedTests.A list of Apex classes containing tests run after deployment. Separate each test with a new line. | No |
| User | String | SFDC User Name | No |

## Describe Metadata

Describe and list all metadata types and their existing objects.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | Yes |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | No |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| User | String | SFDC User Name | No |

## Deploy Recent Validation

Deploy recently validated components.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Max Poll | String | The number of times to poll the server for the results of the retrieve request. The clients waits for two seconds after the first poll attempt. The wait time is doubled for each successive poll attempt up to maximum of 30 seconds between poll attempts. | No |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | Yes |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| Recent Validation ID | String | Specifies the ID of a recent validation.Can be found as an output property of the Deploy step. | Yes |
| Roll Back on Error | String | Default value is true.Indicates whether any failure causes a complete roll back (true) or not (false). | No |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| User | String | SFDC User Name | Yes |

## List Metadata

List information on a given metadata type.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Version | String | The API version to use for the metadata. The default is 34.0. | No |
| Folder | String | The folder associated with the component. This field is required for components that use folders, such as Dashboard, Document, EmailTemplate, or Report. | No |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Metadata Type | String | The name of the metadata type for which you are retrieving property information; for example, CustomObject for custom objects, or Report for custom reports. Type names are case-sensitive | Yes |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | No |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| Result File Path | String | The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. | No |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| Trace | String | The path of the output file where results are stored. The default output is the console. Directing the output to a file makes it easier to extract the relevant information for your package.xml manifest file. | No |
| User | String | SFDC User Name | No |

## Retrieve

Retrieve unpackaged, managed or unmanaged packages.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Jar Path | String | Path to the Salesforce jar (ex. lib/ant-salesforce.jar) | Yes |
| Package Names | String | Required if unpackaged is not specified. A comma-separated list of the names of the packages to retrieve. You must specify either Package Names or Unpackaged, but not both. | No |
| Password | Password | SFDC Password. This may need to be appended with an authentication token if this agent resides outside of the trusted domain. See SalesForce documentation for further detail. (default: {p:resource/salesForce.password}``) | No |
| Proxy Host | String | The HTTP/FTP proxy host. Only set proxy properties if there is a proxy being used. | No |
| Proxy Password | Password | The password for the proxy. Used only is Proxy User is set. | No |
| Proxy Port | String | The HTTP/FTP proxy port number. If nothing is entered, 80 will be used. | No |
| Proxy Username | String | The proxy user. | No |
| Retrieve Target | String | Required. The root of the directory structure into which the metadata files are retrieved. (i.e. codepkg) | Yes |
| Retrieve Type | Enumeration:               | The type of component to retrieve. | Yes |
|               |  - retrievePkg             |                                    |     |
|               |  - retrieveOutput          |                                    |     |
|               |  - retrieveUnpackaged      |                                    |     |
| SalesForce Server URL | String | SFDC Server URL (i.e. https://na17.salesforce.com) | Yes |
| Socks Proxy Host | String | The name of a Socks server. | No |
| Socks Proxy Port | String | The port for socks connections. If left empty, 1080 is used. | No |
| Unpackaged | String | Required if Unpackaged is specified. The path and name of a file manifest that specifies the components to retrieve. You must specify either Unpackaged or Package Names, but not both. (i.e. codepkg/package.xml) | No |
| User | String | SFDC User Name | No |
