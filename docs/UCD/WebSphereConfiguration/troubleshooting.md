
# WebSphere Application Server - Configure - Troubleshooting


* [DB2 errors](#db2_errors)
* [Null pointer exception during Apply Configuration Processing](#apply_configuration_npe)
* [Out of memory errors during configuration discovery](#out_of_memory_errors)
* [Configuration discovery seems complete, but a JSONException is shown and the configuration file is empty](#config-disc-error)

## DB2 errors

Database queries are used to create roles when you install this plug-in. If DB2 SQL error messages are logged when you install the plug-in, increase the transaction log size in DB2.

1. Stop the IBM DevOps Deploy server.
2. Log in to the DB2 server with the account that has permissions to administer the IBM DevOps Deploy server database. For example, log in with the db2inst1 account.
3. From the DB2 command line, type the following commands:
1. db2 connect to `<database>`
2. db2 update db cfg using logfilsiz 30720 logprimary 100
3. db2stop force
4. db2start
4. Start the IBM DevOps Deploy server.
5. Install the plug-in again.

## Null pointer exception during Apply Configuration Processing

If you apply a configuration to a WebSphere 8.5.5 environment and your configuration contains a Dynamic Cluster definition, then you may encounter a null pointer exception during the apply processing. This issue is fixed by an update that is included in the WebSphere 8.5.5.7 fixpack and later.

## Out of memory errors during configuration discovery

Starting with version 25 of the plug-in, the default maximum heap size used by the wsadmin command during configuration discovery is 512 MB. This value supports typical configurations. If configuration discovery does not complete on a large cell, specify a higher **wsadmin Max Heap** value for the WebSphere Configuration Discovery step. For example, to set the maximum heap size to 2 GB, specify -Xmx2048m for the **wsadmin Max Heap** value.

Additionally, ensure that the wsadmin.sh script does not override the **wsadmin Max Heap** value. The **wsadmin Max Heap** value is passed to the wsadmin.sh script in the -javaoption argument. If the *$PERF\_JVM\_OPTIONS* variable is passed to the JVM after the *$javaOption* variable in the wsadmin.sh script, or if you add options to the *$javaOption* variable in the wsadmin.sh script, then the **wsadmin Max Heap** value that you specify for the WebSphere Configuration Discovery step is not used. For more information, see [PK70783: JAVAOPTIONS ARGUMENTS PASSED INTO WSADMIN.SH ARE IGNORED](https://www.ibm.com/support/docview.wss?uid=swg1PK70783).

## Configuration discovery seems complete, but a JSONException is shown and the configuration file is empty

**Problem**

When you run a configuration discovery, the `stdOut.txt` log file shows the following message that says the configuration discovery is complete; however, a JSONException is shown and the configuration file is empty.

`Configuration Discovery Complete.`

The following JSONException is shown:

`Caught: org.codehaus.jettison.json.JSONException: A JSONArray text must start with '[' at character 0 of org.codehaus.jettison.json.JSONException: A JSONArray text must start with '[' at character 0 of at org.codehaus.jettison.json.JSONTokener.syntaxError(JSONTokener.java:439) at org.codehaus.jettison.json.JSONArray.(JSONArray.java:98) at org.codehaus.jettison.json.JSONArray.(JSONArray.java:137) at wasConfigDisc.run(wasConfigDisc.groovy:199)`

**Cause**

User rights for the `**wsadmin**` tool do not have permission to write to the configuration file.

**Solution**

See [Getting started with wsadmin scripting](https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/txml_script.html) for more information about `**wsadmin**` tool user rights.

