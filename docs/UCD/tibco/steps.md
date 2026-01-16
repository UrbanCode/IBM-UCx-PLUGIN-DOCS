# TIBCO - Process Steps

## Build Tibco Enterprise Archive (.ear)

Build an ear file

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | The username to use to authenitcate with AppManage. | Yes |
| Password | secureBox | The password to use to authenitcate with AppManage. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| AppManager Path | textBox | If the AppManage command is not on the path, specify its location here. | No |
| buildear Path | textBox | If the buildear command is not on the path, specify its location here. | No |
| Archive File | textBox | The path and name of the archive to generate the .ear from. If you do not specify an '-ear' argument, the tool will create a full project ear packaging all adapters in their own Adapter Archives, and all process definitions in a single Process Archive. View the 'buildear' utility documentation for more information. | No |
| Ear File | textBox | The path and name of the Tibco Enterprise Archive file to generate. Should end in .ear | Yes |
| Project | textBox | The path and name of the Tibco Project to integrate into the .ear | Yes |

## Build Multiple Tibco Enterprise Archives

Build multiple .ear files by specifying the project path the archive files reside in. This will search recursively.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | The username to use to authenitcate with AppManage. | Yes |
| Password | secureBox | The password to use to authenitcate with AppManage. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| AppManager Path | textBox | If the AppManage command is not on the path, specify its location here. | No |
| buildear Path | textBox | If the buildear command is not on the path, specify its location here. | No |
| Project Directory Pattern | textBox | The regular expression pattern used to locate the Tibco Project directories in the current working directory. | Yes |
| Archive Directory | textBox | The location of the .archive files relative to the Tibco Project directory. | Yes |
| Ear Directory | textBox | The location to create the ear files in relative to the current working directory. | Yes |

## Deploy Tibco Enterprise Archive (.ear)

Deploy an ear file

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | The username to use to authenitcate with AppManage. | Yes |
| Password | secureBox | The password to use to authenitcate with AppManage. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| AppManager Path | textBox | If the AppManage command is not on the path, specify its location here. | No |
| buildear Path | textBox | If the buildear command is not on the path, specify its location here. | No |
| Ear File | textBox | The path and name of the .ear file to deploy. | Yes |
| App to Deploy | textBox | The name of the application being deployed including the path. | Yes |
| Domain | textBox | The domain of the application being deployed. | Yes |
| Additional Parameters | textAreaBox | Any additional parameters to give to the AppManager command. | No |

## Deploy Multiple Tibco Enterprise Archives

Deploy all Tibco .ear files in a directory.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Username | textBox | The username to use to authenitcate with AppManage. | Yes |
| Password | secureBox | The password to use to authenitcate with AppManage. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the property or script here. | No |
| AppManager Path | textBox | If the AppManage command is not on the path, specify its location here. | No |
| buildear Path | textBox | If the buildear command is not on the path, specify its location here. | No |
| Ear Directory | textBox | The relative path to the directory containing the .ear files. | Yes |
| App Path | textBox | The path to deploy the applications to. | Yes |
| Domain | textBox | The domain of the application being deployed. | Yes |
| Additional Parameters | textAreaBox | Any additional parameters to give to the AppManager command. | No |

## Create or update EMS Queues

Create or update a number of EMS queues.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Add/Update Queues | textAreaBox | A newline separated list of queues to update in the form of [queue name]-&gt;[property list].                          Ex: myQueue-&gt;prefetch=5,secure | No |
| Add/Update Queues from file | textBox | The full path to a file that contains the list of queues to add/update in the format used by                           the Add/Update Queues field above. | No |

## Create or update EMS Topics

Create or update a number of EMS topics.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Add/Update Topics | textAreaBox | A newline separated list of topics to update in the form of [topic name]-&gt;[property list].                          Ex: myTopic-&gt;prefetch=5,secure | No |
| Add/Update Topics from file | textBox | The full path to a file that contains the list of topics to add/update in the format used by                           the Add/Update Topics field above. | No |

## Create EMS JNDI Names

Create a number of EMS JNDI Names.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Add JNDI Names | textAreaBox | A newline separated list of jndinames to create in the form of                          [jndiname]-&gt;topic\|queue\|jndiname [target object name].                          Ex: myJNDI-&gt;queue myQueue | No |
| Add JNDI Names from file | textBox | The full path to a file that contains the list of JNDI Names to add in the format used by                           the Add JNDI Names field above. | No |

## Delete Queues

Delete a number of EMS queues.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Delete Queues | textAreaBox | A newline separated list of queues to delete. | No |
| Delete queues from file | textBox | The full path to a file that contains the list of queues to delete, one per line. | No |

## Delete Topics

Delete a number of EMS topics.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Delete Topics | textAreaBox | A newline separated list of topics to delete. | No |
| Delete topics from file | textBox | The full path to a file that contains the list of topics to delete, one per line. | No |

## Delete JNDI Names

Delete a number of EMS JNDI Names.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Server | textBox | The EMS server to connect to. Ex: tcp://domain.com:12345 | Yes |
| Username | textBox | The username to use to authenitcate with the EMS server. | Yes |
| Password | secureBox | The password to use to authenitcate with the EMS server. | No |
| Password Script | textBox | If a property or script should be used to retrieve the password, leave it blank and put the                          property or script here. | No |
| tibemsadmin Path | textBox | If the tibemsadmin command is not on the path, specify its location here including the                          executable name. | No |
| Delete JNDI Names | textAreaBox | A newline separated list of JNDI Names to delete. | No |
| Delete JNDI Names from file | textBox | The full path to a file that contains the list of JNDI Names to delete, one per line. | No |

