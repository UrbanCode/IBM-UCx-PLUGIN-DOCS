
# Oracle WebLogic Server Security Management - Troubleshooting

## Troubleshooting hints and tips

If you experience one of the following problems whenyou use the plug-in, check the associated tip for resolving the issue.

* [Cannot connect to WebLogic server](#ts1)
* [Changes do not seem to take affect](#ts2)
* [Problems in working with roles, users, or groups](#ts3)
* [Incorrect provider name is used when an authentication provider is created](#ts4)
* [JAR files on the server are inconvenient to track](#ts5)


## **Cannot connect to WebLogic server**

Check that the **Host Name** property is a simple hostname or IP address. Do not use a protocol in the property value. For example, omit `http:`.


## **Changes do not seem to take affect**

After you change security objects, you must restart the WebLogic server for changes to take affect. After the restart, changes can be viewed in the user interface.


## **Problems in working with roles, users, or groups**

Use XML files to specify changes to these objects, rather than JMX files. Some errors can be caused by trying to create an object that already exists. For example, if you attempt to create a role that already exists, the step fails.


## **Incorrect provider name is used when an authentication provider is created**

If the created authentication provider has a name that matches the provider type rather than the name you specified, an incorrect step might have been used. Use the **Create or Update Authentication Provider** step. Do not use the **Update Authentication Provider** step when you create an authentication provider.


## **JAR files on the server are inconvenient to track**

You can set up and use a `wlfullclient.jar` file. See the instructions in the Oracle documentation.

