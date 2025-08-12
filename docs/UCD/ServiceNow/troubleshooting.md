
# ServiceNow - Troubleshooting

You can use HTTP status codes to troubleshoot issues when using the plug-in. Status codes are displayed in the console. For more information on status codes, see the [REST API topic](https://wiki.servicenow.com/index.php?title=REST_API#REST_Response_HTTP_Status_Codes) in the ServiceNow documentation.

## ServiceNow Administrators

1. Ensure that you have REST access in ServiceNow. If you do not have REST access, complete the following steps:
1. Click **User Administration > Users**.
2. Click your user record. The user record opens.
3. In the **Roles related** list, click **Edit**.
4. Select **rest\_service**.
5. Click **Add**.
6. Click **Save**.
2. Ensure that the user account has table access. To learn more about table access, see the [REST API topic](https://wiki.servicenow.com/index.php?title=REST_API#Table_Access) in the ServiceNow documentation.

## IBM DevOps Deploy Administrators

1. Test using the REST API Explorer.
1. Click **System Web Services > REST API Explorer**.
2. Select **Table API** from the drop-down list.
3. Under **Table API**, select **v1** from the drop-down list.
4. Under **v1**, click **Retrieve Records from a table (GET)**.
5. In the Prepare request section, configure the following fields.
1. In the **Request Format** list, select **JSON**.
2. In the **Response Format** list, select **JSON**.
3. In the **Authorization** list, select **Send as another user**.
4. In the **User Name** field under Basic Authorization, type your user name.
5. In the **Password** field under Basic Authorization, type your password.
6. In the **tableName** list, select **change\_request**.
6. Click **Change > All**.
7. Ensure that there is at least one change request. If there is not a change request, take the following steps:
1. Click **Change > Create new**.
2. Click **Submit**.
3. Close the page.
8. Click **Send**.
9. The Request and Response sections are displayed. Record the URL and header information in the Request section. You will need use the URL and header information in the following troubleshooting steps.
10. If the **Status code** is not 200 OK, the test was unsuccessful. If the test did not succeed, doublecheck the previous steps and run the test again. If the test fails a second time, continue on to the second test.
11. Leave the page with the Request and Response sections open.
2. Test using the curl command. If this test works, then the plug-in should work.

1. Open a text editor and type your username and password in the following format: username:password
2. Save the file without a file extension.
3. Use the following openssl command to encode the file in Base64 format: openssl enc -base64 -in *full\_path\_of\_the\_text\_file* -out *full\_path\_of\_new\_encoded\_file*
4. Open the encoded file in a text editor and remove any newline characters, so that the text is continuous.
5. Create a new process with a Shell step.
6. Use the curl command to create a request similar to the following example. Use the URL and headers from the previous test.`curl *URL\_from\_previous\_test* --header "Accept:application/json" --request GET --header "Content-Type :application/json " --header "Authorization: Base *Base64\_encoded\_username:password\_text*"`

1. Optionally, to add a proxy, add the argument --proxy [*protocol*://][*user*:*password*@]*proxyhost*[:*port*] to the end of the curl command.
2. Save the process, and then run the process using the same resource and agent that the ServiceNow step uses.
