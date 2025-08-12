
# IBM-MQ

## Process Steps

* [Alter Client-Connection Channel](#alter-client-connection-channel)
* [Alter Queue](#alter-queue)
* [Alter Receiver Channel](#alter-receiver-channel)
* [Alter Sender Channel](#alter-sender-channel)
* [Alter Server-Connection Channel](#alter-server-connection-channel)
* [Alter Topic](#alter-topic)
* [Configure Channel SSL](#configure-channel-ssl)
* [Configure Queue Manager SSL](#configure-queue-manager-ssl)
* [Create Queue Manager](#create-queue-manager)
* [Define Authinfo–IDPWOS](#define-authinfoidpwos)
* [Define Client-Connection Channel](#define_client-connection_channel)
* [Define Namelist](#define_namelist)
* [Define Queue](#define_queue)
* [Define Queue Alias](#define_queue_alias)
* [Define Receive Channel](#define_receive_channel)
* [Define Remote Queue](#define_remote_queue)
* [Define Sender Channel](#define_sender_channel)
* [Define Server Connection Channel](#define_server_connection_channel)
* [Define Service](#define_service)
* [Define Topic](#define_topic)
* [Define Topic Subscription](#define_topic_subscription)
* [Delete Certificate](#delete_certificate)
* [Delete Channel](#delete_channel)
* [Delete Namelist](#delete_namelist)
* [Delete Queue](#delete_queue)
* [Delete Queue Alias](#delete_queue_alias)
* [Delete Queue Manager](#delete_queue_manager)
* [Delete Topic](#delete_topic)
* [Delete Topic Subscription](#delete_topic_subscription)
* [Enable Queue Triggering](#enable_queue_triggering)
* [Import Certificate](#import_certificate)
* [Manage Queue Depth](#manage_queue_depth)
* [Receive Certificate](#receive_certificate)
* [Run MQ Batch Script](#run_mq_batch_script)
* [Run MQ Script](#run_mq_script)
* [Set Channel Monitoring Level](#set_channel_monitoring_level)
* [Set Max Message Size On Queue](#set_max_message_size_on_queue)
* [Set Permissions For Object](#set_permissions_for_object)
* [Set Permissions For Queue](#set_permissions_for_queue)
* [Set Permissions For Topic](#set_permissions_for_topic)
* [Set Queue Usage Type](#set_queue_usage_type)
* [Start Channel](#start_channel)
* [Start Queue Manager](#start_queue_manager)
* [Stop Channel](#stop_channel)
* [Stop Queue Manager](#stop_queue_manager)

### Alter Client-Connection Channel

Modify the parameters of an existing client connection channel

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Channel Name | String | The name of the channel toalter. | Yes |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Connection Name | String | Communications connection identifier. | No |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Local Address | String | Specify the local communications address for the channel. | No |
| Maximum Message Length | String | Specify the maximum length of a message that can be transmitted on the channel. Value of 0 will default to the local queue manager’s maximum value. Default value is 4194304. | No |
| Queue Manager Name | String | The name of the QueueManager to delete the Namelist on. | Yes |
| Request Queue Manager Connection | String | The name of the queue manager or queue manager group the channel can request connection. | No |
| Script File | String | The name of the file to write the script to. | Yes |
| Transmission Protocol | Enumeration:   | The protcol which the channel will use to transmit messages. | No |
| |                       | * NONE         | |
| |                       | * LU62        | |
| |                       | * NetBIOS        | |
| |                       | * SPX        | |
| |                       | * TCP        | |

### Alter Queue

Modify the parameters of an existing local queue

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Force | Boolean | This parameter applies only to the ALTER command on alias, local and remote queues. View WebSphere MQ ‘ALTER QLOCAL’ documentation for full details on the FORCE flag. | No |
| Get Messages | Enumeration: | Enable or Disable messages ability to be retrieved from the queue. | No |
|              |              | * NONE | |
|              |              | * ENABLED | |
|              |              | * DISABLED | |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Maximum Message Length | String | Specify the maximum length of a message that can be transmitted on the channel. Value of 0 will default to the local queue manager’s maximum value. Default value is 4194304. | No |
| Maximum Queue Depth | String | Specify the maximum number of messages that are allowed on the queue. Default value is 999999999. | No |
| Message Delivery Sequence | Enumeration: | Specify method of retrieving messages from the queue. | No |
|              |              | * NONE | |
|              |              | * PRIORITY | |
|              |              | * FIFO | |
| Put Messages | Enumeration: | Enable or Disable messages ability to be placed on the queue. | No |
|              |              | * NONE | |
|              |              | * ENABLED | |
|              |              | * DISABLED | |
| Queue Manager Name | String | The name of the QueueManager to delete the Namelist on. | Yes |
| Queue Name | String | The name of the Queuewhose parameters will be altered | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Sharability | Enumeration: | Share or restrict the queue from being opened for input by more than one instance of an application. | No |
|              |              | * NONE | |
|              |              | * NOSHARE | |
|              |              | * SHARE | |
| Trigger Control | Enumeration: | Allow or disallow this queue to be automatically started by a trigger. | No |
|              |              | * NONE | |
|              |              | * NOTRIGGER | |
|              |              | * TRIGGER | |
| Usage | Enumeration: | Make the queue either a Local or Tranmission queue. Do not change property while there are messages on the queue. | No |
|              |              | * NONE | |
|              |              | * NORMAL | |
|              |              | * XMITQ | |

### Alter Receiver Channel

Modify the parameters of an existing receiver channel

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Batch Size | String | Maximum number of messages to be sent before a sync point is taken. Default value is 50. | No |
| Channel Name | String | The name of the channel toalter. | Yes |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Message Message Length | String | The property specifies the maximum length of a message that can be transmitted on the channel. | No |
| Nonpersistent Message Speed | Enumeration: | This property specifies the speed at which nonpersistent messages are being sent. | No |
|              |              | * NONE | |
|              |              | * NORMAL | |
|              |              | * FAST | |
| Queue Manager Name | String | The name of the QueueManager to delete the Namelist on. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Transport Type | Enumeration: | This property specifies the transport type to be used. | No |
|              |              | * NONE | |
|              |              | * LU62 | |
|              |              | * TCP | |
|              |              | * NETBIOS | |
|              |              | * SPX | |

### Alter Sender Channel

Modify the parameters of an existing sender channel

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Batch Data Limit | String | The limit, in kilobytes, of data that can be sent through the channel before taking a sync point. Default value is 5000. | No |
| Batch Interval | String | The period, in milliseconds, during which the channel keeps a batch open even if there are no messages on the transmission queue. Default value is 0. | No |
| Batch Size | String | Maximum number of messages to be sent before a sync point is taken. Default value is 50. | No |
| Channel Name | String | The name of the channel toalter. | Yes |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Connection Name | String | Communications connection identifier. | No |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Disconnect Interval | String | Describes the channel. Maximum of 64 bytes of text. Default value is 6000. | No |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Maximum Message Length | String | The property specifies the maximum length of a message that can be transmitted on the channel. | No |
| Nonpersistent Message Speed | Enumeration: | This property specifies the speed at which nonpersistent messages are being sent. | No |
|              |              | * NONE | |
|              |              | * NORMAL | |
|              |              | * FAST | |
| Queue Manager Name | String | The name of the QueueManager to delete the Namelist on. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Transmission Queue Name | String | The property specifies the name of the tranmission queue from which messages are retrieved. | No |
| Transport Type | Enumeration: | This property specifies the transport type to be used. | No |
|              |              | * NONE | |
|              |              | * LU62 | |
|              |              | * TCP | |
|              |              | * NETBIOS | |
|              |              | * SPX | |

### Alter Server-Connection Channel
-------------------------------

Modify the parameters of an existing server connection channel

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Channel Name | String | The name of the channel toalter. | Yes |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Disconnect Interval | String | Describes the channel. Maximum of 64 bytes of text. Default value is 6000. | No |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Maximum Instances | String | This property specifies the maximum number fo simultaneous isntances of a server-connection channel taht can be started. Default value is 999999999. | No |
| Maximum Instances Per Client | String | This property specifies the maximum number of simultaneous instances of a server-connection channel that can be started from a single client. A value of zero indicates that no client connections are allowed on this channel. Default value is 999999999. | No |
| Maximum Message Length | String | Specify the maximum length of a message that can be transmitted on the channel. Value of 0 will default to the local queue manager’s maximum value. Default value is 4194304. | No |
| Queue Manager Name | String | The name of the QueueManager to delete the Namelist on. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Transmission Protocol | Enumeration:

* NONE
* LU62
* NetBIOS
* SPX
* TCP
| The protcol which the channel will use to transmit messages. | No |

Alter Topic
-----------

Modify the parameters of an existing Topic

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Command Directory | String | Directory of the WebSphere MQ commands. | Yes |
| Default Persistence | Enumeration:

* NONE
* ASPARENT
* NO
* YES
| The default message persistence when applications specify the MQPER\_PERSISTENCE\_AS\_TOPIC\_DEF option. Select YES if messages on this queue will survive the restart of the queue manager. | No |
| Default Priority | Enumeration:
* NONE
* ASPARENT
* 0
* 1
* 3
* 4
* 5
* 6
* 7
* 8
* 9
| The default priority of messages published to the topic. | No |
| Default Put Response | Enumeration:
* NONE
* ASPARENT
* SYNC
* ASYNC
| The default put response when applications specify the MQPMO\_RESPONSE\_AS\_DEF option. | No |
| Delete Script File After Execution | Boolean | Delete the script file after executing it. | Yes |
| Description | String | Plain-text comment. Maximum length of 64 characters. | No |
| Is Batch | Boolean | Batch multiple commands in one script file and run using Run MSQC Script command. | Yes |
| Multicast | Enumeration:
* NONE
* ASPARENT
* DISABLED
* ENABLED
* ONLY
| Specifies whether multicast is allowable in the topic tree. | No |
| Non-Persistent Message Delivery | Enumeration:
* NONE
* ASPARENT
* ALL
* ALLAVAIL
* ALLDUR
| Delivery mechanism for non-persistent messages published to this topic. | No |
| Persistent Message Delivery | Enumeration:
* NONE
* ASPARENT
* ALL
* ALLAVAIL
* ALLDUR
| Delivery mechanism for persistent messages published to this topic. | No |
| Proxy Subscription | Enumeration:
* NONE
* FIRSTUSE
* FORCE
| Controls when a proxy subscription is sent for this topic to neighboring queue managers when in a publish/subscribe cluster or hierarchy. | No |
| Publish Messages | Enumeration:
* NONE
* ASPARENT
* ENABLED
* DISABLED
| Controls whether messages can be published to this topic. | No |
| Queue Manager Name | String | The name of the Queue Manager to delete the Namelist on. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Subscription | Enumeration:
* NONE
* ASPARENT
* ENABLED
* DISABLED
| Controls whether applications are permitted to subscribe to this topic. | No |
| Topic Name | String | The name of the Topic to alter. | Yes |
| Type | Enumeration:
* NONE
* NONE
* LOCAL
| The type of topic. | No |

Configure Channel SSL
---------------------

Configure the Secure Sockets Layer (SSL) settings for a channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the client channel to configure. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Require Client SSL Certificate | Boolean | Select to require a certificate from the SSL client. | Yes |
| SSL Ciph | Enumeration:

* NONE
* NULL\_MD5
* NULL\_SHA
* RC4\_MD5\_EXPORT
* RC4\_MD5\_US
* RC4\_SHA\_US
* RC2\_MD5\_EXPORT
* DES\_SHA\_EXPORT
* RC4\_56\_SHA\_EXPORT1024
* DES\_SHA\_EXPORT1024
* TRIPLE\_DES\_SHA\_US
* TLS\_RSA\_WITH\_AES\_128\_CBC\_SHA
* TLS\_RSA\_WITH\_AES\_256\_CBC\_SHA
* TLS\_RSA\_WITH\_DES\_CBC\_SHA
* TLS\_RSA\_WITH\_3DES\_EDE\_CBC\_SHA
* FIPS\_WITH\_DES\_CBC\_SHA
* FIPS\_WITH\_3DES\_EDE\_CBC\_SHA
* TLS\_RSA\_WITH\_AES\_128\_GCM\_SHA256
* TLS\_RSA\_WITH\_AES\_256\_GCM\_SHA384
* TLS\_RSA\_WITH\_AES\_128\_CBC\_SHA256
* TLS\_RSA\_WITH\_AES\_256\_CBC\_SHA256
* ECDHE\_ECDSA\_RC4\_128\_SHA256
* ECDHE\_ECDSA\_3DES\_EDE\_CBC\_SHA256
* ECDHE\_RSA\_RC4\_128\_SHA256
* ECDHE\_RSA\_3DES\_EDE\_CBC\_SHA256
* ECDHE\_ECDSA\_AES\_128\_CBC\_SHA256
* ECDHE\_ECDSA\_AES\_256\_CBC\_SHA384
* ECDHE\_RSA\_AES\_128\_CBC\_SHA256
* ECDHE\_RSA\_AES\_256\_CBC\_SHA384
* ECDHE\_ECDSA\_AES\_128\_GCM\_SHA256
* ECDHE\_ECDSA\_AES\_256\_GCM\_SHA384
* ECDHE\_RSA\_AES\_128\_GCM\_SHA256
* ECDHE\_RSA\_AES\_256\_GCM\_SHA384
* TLS\_RSA\_WITH\_NULL\_SHA256
* ECDHE\_RSA\_NULL\_SHA256
* ECDHE\_ECDSA\_NULL\_SHA256
* TLS\_RSA\_WITH\_NULL\_NULL
* TLS\_RSA\_WITH\_RC4\_128\_SHA256
| Select the cipher specification to use on the channel. | No |
| SSL Peer | String | The filter text to compare with the Distinguished Name of the certificate from the peer queue manager or client at the other end of the channel. For example: ‘CN=First, CN=Second, O=IBM, C=US’ | No |
| Script File | String | The name of the file to write the script to. | Yes |

Configure Queue Manager SSL
---------------------------

Configure the Secure Sockets Layer (SSL) settings for a queue manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Enable FIPS | Boolean | Select to enable Federal Information Processing Standard (FIPS) mode for SSL. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| SSL Key Ring Path | String | The name of the SSL key repository. | No |
| Script File | String | The name of the file to write the script to. | Yes |
| Suite B Stength | Enumeration:

* NONE
* 128\_BIT
* 192\_BIT
* 128\_BIT,192\_BIT
| Select whether Suite B-compliant cryptography is used and what strength is required. | Yes |

Create Queue Manager
--------------------

Run the command to create a queue manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the create queue manager command. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Queue Manager Description | String | A description of the queue manager. Maximum of 64 characters. | No |
| Queue Manager Name | String | The name of the queue manager to create. | Yes |

Define Authinfo–IDPWOS
-----------------------

Define authinfo for AUTHTYPE(IDPWOS).

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AuthInfo Name | String | The name of the authInfo to create. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Client-Connection Channel
--------------------------------

Define a client connection channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the client channel to define. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Namelist
---------------

Define a namelist.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Description | String | A description of the namelist. | No |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| List of Names | String | A list, separated by commas or newline characters, of names to add to the namelist. | No |
| Namelist Name | String | The namelist to define. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Queue
------------

Define a queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Get Messages | Enumeration:

* NONE
* ENABLED
* DISABLED
| Enable or Disable messages ability to be retrieved from the queue. | No |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Maximum Message Length | String | Specify the maximum length of a message that can be transmitted on the channel. Value of 0 will default to the local queue manager’s maximum value. Default value is 4194304. | No |
| Maximum Queue Depth | String | Specify the maximum number of messages that are allowed on the queue. Default value is 999999999. | No |
| Message Delivery Sequence | Enumeration:
* NONE
* PRIORITY
* FIFO
| Specify method of retrieving messages from the queue. | No |
| Put Messages | Enumeration:
* NONE
* ENABLED
* DISABLED
| Enable or Disable messages ability to be placed on the queue. | No |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to define. | Yes |
| Replace | Enumeration:
* NONE
* NOREPLACE
* REPLACE
| This option controls whether any existing definition is to be replaced with this one. Any object with a different disposition is not changed. View WebSphere MQ ‘ALTER QLOCAL’ documentation for intricacies with the FORCE flag. | No |
| Script File | String | The name of the file to write the script to. | Yes |
| Sharability | Enumeration:
* NONE
* NOSHARE
* SHARE
| Share or restrict the queue from being opened for input by more than one instance of an application. | No |
| Trigger Control | Enumeration:
* NONE
* NOTRIGGER
* TRIGGER
| Allow or disallow this queue to be automatically started by a trigger. | No |
| Usage | Enumeration:
* NONE
* NORMAL
* XMITQ
| Make the queue either a Local or Tranmission queue. Do not change property while there are messages on the queue. | No |

Define Queue Alias
------------------

Define a queue alias.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Description | String | Describes the channel. Maximum of 64 bytes of text. | No |
| Get Messages | Enumeration:

* IGNORE
* ENABLED
* DISABLED
| Enable or Disable messages ability to be retrieved from the queue. | No |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Put Messages | Enumeration:
* IGNORE
* ENABLED
* DISABLED
| Enable or Disable messages ability to be placed on the queue. | No |
| Queue Alias Name | String | The name of the queue alias to define. (QALIAS) | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to be alias. (TARGET) | Yes |
| Replace | Enumeration:
* IGNORE
* NOREPLACE
* REPLACE
| This option controls whether any existing definition is to be replaced with this one. Any object with a different disposition is not changed. View WebSphere MQ ‘ALTER QLOCAL’ documentation for intricacies with the FORCE flag. | No |
| Script File | String | The name of the file to write the script to. | Yes |

Define Receive Channel
----------------------

Define a receive channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the receiver channel to define. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Remote Queue
-------------------

Define Remote Queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to create. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Sender Channel
---------------------

Define a sender channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the sender channel to define. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Connection Name | String | The connection name for the sender channel. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue for the sender channel to use. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Server Connection Channel
--------------------------------

Define a Server connection channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the sender channel to define. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Define Service
--------------

Define a service.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Service Name | String | The name of the service to create. | Yes |

Define Topic
------------

Define a topic.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Topic Name | String | The name of the topic to define. | Yes |
| Topic String | String | The string of the topic to define. | Yes |

Define Topic Subscription
-------------------------

Define a topic subscription.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Additional arguments will be added to the end of the command. Separate each argument by a newline or comma. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Destination Queue Manager | String | The destination queue manager for messages published to this subscription. You must define the channels to the remote queue manager, for example, the XMITQ, and a sender channel. If you do not, messages do not arrive at the destination. (DESTQMGR) | No |
| Destination Queue Name | String | The name of the destination queue for the subscription. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| PS Prop | Enumeration:

* NONE
* COMPAT
* MSGPROP
* RFH2
| The manner in which publish and subscribe properties are added to messages sent to the subscription. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Selector | String | A selector that is applied to messages published to the topic. (SELECTOR) | No |
| Subscription Name | String | The name of the subscription to define. | Yes |
| Topic String | String | The string of the topic to subscribe to. | Yes |
| Wildcard Schema | Enumeration:
* NONE
* CHAR
* TOPIC
| The schema to be used when interpreting any wildcard characters in the topic string. (WSCHEMA) | Yes |

Delete Certificate
------------------

Delete a certificate.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Label | String | The label of the certificate in the target database. | No |
| Target DB | String | The full path file name of the key database. | Yes |
| Target Password | Password | The password for the key database. | Yes |
| Target Type | Enumeration:

* cms
* pkcs12
* jks
* jceks
| Select the type of the key database. | Yes |

Delete Channel
--------------

Delete a channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the channel to delete. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Delete Namelist
---------------

Delete a namelist.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Namelist Name | String | The namelist to delete. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Delete Queue
------------

Delete a queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to delete. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Delete Queue Alias
------------------

Delete a queue alias.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Alias Name | String | The name of the queue alias to delete. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Delete Queue Manager
--------------------

Run the command to delete a queue manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Queue Manager Name | String | The name of the queue manager to delete. | Yes |

Delete Topic
------------

Delete a topic.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Topic Name | String | The name of the topic to delete. | Yes |

Delete Topic Subscription
-------------------------

Delete a topic subscription.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Subscription Name | String | The name of the subscription to delete. | Yes |

Enable Queue Triggering
-----------------------

Enable triggering on a queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to edit. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Trigger Data | String | The data that is inserted in the trigger message. | Yes |
| Trigger Type | Enumeration:

* NONE
* FIRST
* EVERY
* DEPTH
| The trigger type for the queue. | Yes |

Import Certificate
------------------

Import a certificate.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Certificate label | String | The label of the certificate to import. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete If Exists | Boolean | Select to delete the certificate in the target database if it already exists. | No |
| Fail If Exists | Boolean | When selected, the step fails if the certificate already exists in the target database. The source certificate is not imported. | No |
| New label | String | The label of the certificate in the target database. If left blank, the label from the source location is used. | No |
| Source Key Database | String | The file name of the key database that contains the certificate to import. | Yes |
| Source Key Database Password | Password | The password for the source key database. | Yes |
| Source Key Database Type | Enumeration:

* cms
* pkcs12
* jks
* jceks
| The type of the source key database. | Yes |
| Target DB | String | The full path file name of the target key database. | Yes |
| Target Password | Password | The password for the target key database. | Yes |
| Target Type | Enumeration:
* cms
* pkcs12
* jks
* jceks
| The type of the target key database. | Yes |

Manage Queue Depth
------------------

Manange the queue depth.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| High Depth Level | String | The percentage of queue depth that constitutes the high limit. | No |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Low Depth Level | String | The percentage of queue depth that constitutes the low limit. | No |
| Max Depth Level | String | The maximum number of messages in the queue. | No |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to edit. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Receive Certificate
-------------------

Receive a certificate.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Certificate File | String | The file name of the certificate. | Yes |
| Certificate label | String | The label of the certificate to import. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete If Exists | Boolean | Select to delete the certificate in the target database if it already exists. | No |
| Fail If Exists | Boolean | When selected, the step fails if the certificate already exists in the target database. The certificate is not added to the target database. | No |
| File Type | Enumeration:

* binary
* ascii
| Select the type of the certificate file. | Yes |
| Target DB | String | The full path file name of the target key database. | Yes |
| Target Password | Password | The password for the target key database. | Yes |
| Target Type | Enumeration:
* cms
* pkcs12
* jks
* jceks
| The type of the target key database. | Yes |

Run MQ Batch Script
-------------------

Run a WebSphere MQ script that contains MQ control commands that were created by other plug-in steps.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to run. | Yes |

Run MQ Script
-------------

Run a custom WebSphere MQ script that contains MQ control commands.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the start queue manager command. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script Data | String | The script to run. | Yes |

Set Channel Monitoring Level
----------------------------

Set the monitoring level for a channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the channel to alter. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Monitoring Level | Enumeration:

* QMGR
* OFF
* LOW
* MEDIUM
* HIGH
| The monitoring level to set for the channel. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Set Max Message Size On Queue
-----------------------------

Set the maximum message size for a queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Max Message Size | String | The maximum message size to configure for the queue. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to edit. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Set Permissions For Object
--------------------------

Set the permissions for a given object and type.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authorities | String | A list, separated by commas or newline characters, of authorities in the format: (+|-)permission\_name. For Example: ‘+ADMCHG, -ALLMQI’ | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Groups | String | A list, separated by commas or newline characters, of the groups to be given access permission to the object. | No |
| Name | String | The name of the object. | Yes |
| Principals | String | A list, separated by commas or newline characters, of the principals to be given access permission to the object. | No |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Type | String | The type of the object. | Yes |

Set Permissions For Queue
-------------------------

Set the permissions for a given queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authorities | String | A list, separated by commas or newline characters, of authorities in the format: (+|-)permission\_name. For Example: ‘+ADMCHG, -ALLMQI’ | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Groups | String | A list, separated by commas or newline characters, of the groups to be given access permission to the object. | No |
| Principals | String | A list, separated by commas or newline characters, of the principals to be given access permission to the object. | No |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue. | Yes |

Set Permissions For Topic
-------------------------

Set the permissions for a given topic.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Authorities | String | A list, separated by commas or newline characters, of authorities in the format: (+|-)permission\_name. For Example: ‘+ADMCHG, -ALLMQI’ | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Groups | String | A list, separated by commas or newline characters, of the groups to be given access permission to the object. | No |
| Principals | String | A list, separated by commas or newline characters, of the principals to be given access permission to the object. | No |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Topic Name | String | The name of the topic. | Yes |

Set Queue Usage Type
--------------------

Set the usage attribute for a queue.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Queue Name | String | The name of the queue to edit. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |
| Usage | Enumeration:

* XMITQ
* NORMAL
| The usage attribute to set for the queue. | Yes |

Start Channel
-------------

Start a channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the channel to start. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Start Queue Manager
-------------------

Start a queue manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the start queue manager command. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Queue Manager Name | String | The name of the queue manager to start. | Yes |

Stop Channel
------------

Stop a channel.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Channel Name | String | The name of the channel to stop. | Yes |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Delete Script File After Execution | Boolean | Select to delete the script file after it runs. | Yes |
| Is Batch | Boolean | Select to combine multiple commands in one script file and run by using the Run MQ Batch Script step. | Yes |
| Queue Manager Name | String | The name of the queue manager to work with. | Yes |
| Script File | String | The name of the file to write the script to. | Yes |

Stop Queue Manager
------------------

Stop a queue manager.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Additional Arguments | String | Any additional arguments to pass to the start queue manager command. | No |
| Command Directory | String | The full path to the directory that contains the WebSphere MQ commands. | Yes |
| Queue Manager Name | String | The name of the queue manager to stop. | Yes |

|Back to ...||Latest Version|IBM-MQ |||
| :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[13.1154095](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereMQ/ucd-WebSphereMQ-13.1154095.zip)|[Readme](README.md)|[Overview](overview.md)|[Downloads](downloads.md)|
