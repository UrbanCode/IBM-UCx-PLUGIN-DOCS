
# IBM MobileFirst Platform (formerly Worklight) - Troubleshooting

The following information can assist you in troubleshooting the IBM MobileFirst Platform plug-in:

* To ensure that your IBM MobileFirst mobile applications are built correctly for continuous deployment, see [How to build Worklight mobile applications for continuous deployment](http://www.ibm.com/support/docview.wss?uid=swg21647372).
* If an undefined error message is displayed when you upload an invalid plug-in in Microsoft Internet Explorer, see [Undefined error message when uploading invalid plug-in](http://www.ibm.com/support/docview.wss?uid=swg21660275).
* If a request error (400 or 500) occurs when uploading files by using the addVersionFilesCommand command from the command-line interface (CLI), see [Uploading files with old version of CLI fails with request errors](http://www.ibm.com/support/docview.wss?uid=swg21660290).
* If a SEVERE: Service Unavailable error message is displayed when you run concurrent instances of the plug-in component process step Deploy Worklight Application to Worklight Server, see [Deploying Worklight applications in parallel fails with message Service Unavailable](http://www.ibm.com/support/docview.wss?uid=swg21660300).
* **Note:** You might see a REST 404 Not Found error message during an DevOps deployment that runs to completion. This error message is expected, and can occur in any of the plug-in steps when working with IBM Worklight Foundation Server 6.2. The error message occurs as the result of an attempt to connect to a different version of the IBM Worklight Server from the one currently running. For IBM Worklight Server 6.0 and 6.1, a REST request method is used and the error message is not displayed. For IBM Worklight Foundation 6.2, the REST request method is not available, and therefore the REST 404 Not Found error is returned. For IBM Worklight Foundation 6.2, a different method is used. As a result, the error message is displayed but the overall deployment can still run to completion. When debugging a problem where a deployment does not run to completion, ensure that REST 404 Not Found is not the only error in the logs.

|Back to ...||Latest Version|IBM MobileFirst Platform (formerly Worklight) |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1174444](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/air-worklight/ucd-ibm-mobilefirst-13.1174444.zip)|[Readme](README.md)|[Overview](overview.md)|[Steps](steps.md)|[Usage](usage.md)|[Downloads](downloads.md)|
