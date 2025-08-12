
# Oracle WebLogic Integration Resource Management - Troubleshooting

If you experience one of the following problems whenyou use the plug-in, check the associated tip for resolving the issue.

* [Cannot connect to WebLogic server](#ts1)
* [Receive Class Not Found messages](#ts2)
* [Example files not working](#ts3)
* [Targets are not named appropriately](#ts4)
* [Step failures](#ts5)


## Cannot connect to server

Check that the **Host Name** property is a simple host name or IP address and that the port number is included. Do not use a protocol in the property value. For example: `http:`.


## Receive Class Not Found messages

The `setDomainEnv` script in the `/bin` directory sets the values for the Classpath parameters. If you receive the `Class Not Found` message, the most likely cause is a problem with the WebLogic Integration installation missing some JAR files. Install the product again or perform an update.


## Example files not working

If the example files are not working, edit the files and check that the file paths match your environment. They do not work without modification.


## Targets are not named appropriately

Targets are objects, like `AdminServer`. Do not use a domain name for the target.


## Step failures

Each step action performs only one action. Using a step for different actions causes them to fail.

* Do not use a create step to update an object.
* Do not use an update step to create an object.
* A Delete step will fail if the object to delete does not exist.
