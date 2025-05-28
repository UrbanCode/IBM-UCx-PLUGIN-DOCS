
# WebSphere Application Server - Configure - Overview


The IBM WebSphere Application Server Configure plug-in includes steps to manage the configuration of multiple IBM WebSphere Application Server instances. You use JSON files to manage WebSphere Application Server configurations.

To add the WebSphere Application Server Configure plug-in steps to processes, click **Application Server** > **Java** > **WebSphere** > **Configuration** in the step palette of the process editor.

## Prerequisites

* The [IBM WebSphere Application Server – Deployment plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/Websphere/) Version 114 or later must be installed.
* This plug-in uses the wsadmin tool to manage connections to an IBM WebSphere Application Server profile. Specific user rights are required to run the wsadmin tool. To learn more about the wsadmin tool and the required user rights, see the [WebSphere Application Server Network Deployment help](http://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/txml_script.html "wsadmin help").

## Compatibility

* This plug-in requires version 6.2 or later of IBM DevOps Deploy.
* IBM WebSphere Application Server versions 6.1, 7.0, 8.0, 8.5 and 9.0 and later are supported.
* IBM WebSphere Application Server version 9.0.0.7 and later require version 69 or later of the WebSphere Application Server Configure plugin.
* This plug-in uses the wsadmin tool to manage connections to an IBM WebSphere Application Server profile. Specific user rights are required to run the wsadmin tool. To learn more about the wsadmin tool and the required user rights, see the [WebSphere Application Server Network Deployment help](https://www.ibm.com/support/knowledgecenter/SSAW57_8.5.5/com.ibm.websphere.nd.doc/ae/txml_script.html).
* Database queries are used to create roles when you install this plug-in. If DB2 SQL error messages are logged when you install the plug-in, increase the transaction log size in DB2. To learn more, see the [Troubleshooting](#troubleshooting) page in this documentation.

## Installation

No special steps are required for installing the plug-in. See [Installing plug-ins in DevOps products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins "Installing plug-ins in DevOps products").

## History

### Version 94

* Fixed the issue for securedata jar for compatibility with Java 8.

### Version 93

* Fixed the defect in v92 which shows error with respect to log4j library for few steps..

### Version 92

* Log4j dependency updated.

#### This version has a defect related to log4j library with few steps. v93 is recommended. 

### Version 91

* Fixes APAR PH38708 – Resolves issue where ‘Apply’ of an MQQueue Snippet deleted all existing MQQueues.

### Version 90

* Fixes APAR PH27342 – Handles space in WAS LDAP realm name.

### Version 89

* Fixes APAR PH18430 Resolves issue of failing when no datasources are present.

### Version 88

* Fixes APAR PI69592 Resolves issue where configuration applies were failing because SIBAuthUser configuration object could not be found.

### Version 87

* Fixes issue that prevents WAS-Configure plugin from installing on UCD 7.0.2.2 and above.

### Version 86

* Fixes APAR PH10092 Handle WSNotification reference for a WSCertificationExpirationMonitor configuration object.

### Version 85

* Fixes APAR PH09916 Handle Referenceable reference for a ResourceEnvEntry configuration object.

### Version 84

* Fixes APAR PH07251 Prevent JAASAuthData entries from being scrambled during configuration apply. Fix requires that a rediscovery of the source cell configuration be performed.

### Version 82

* Introduces Partial Apply support for MQTopicConnectionFactory, MQConnectionFactory, WASQueueConnectionFactory, MQTopic, GenericJMSConnectionFactory, WASTopic, GenericJMSDestination, WASTopicConnectionFactory, and WASQueue objects.

### Version 81

* Introduces Partial Apply support for JMSProvider.

### Version 80

* Introduces the ability to ignore Property objects by name during comparisons.
* Introduces the ability to ignore specific attributes during comparisons.
* Fixes APAR PH04088 Need to improve stability of the WebSphere Get Compare Result step.

### Version 79

* Improves fix for APAR PH02690 Apply fails on ObjectRequestBroker EndPoints if corresponding ServerEntry EndPoint does not exist.
* Fixes APAR PH03594 Some passwords applied as asterisks.

### Version 78

* Fixes APAR PH02820 WAS Config does not support WebSphere application server > clusters > Backup cluster > Domain bootstrap address.
* Fixes APAR PH02690 Apply fails on ObjectRequestBroker EndPoints if corresponding ServerEntry EndPoint does not exist.

### Version 77

* Fixes APAR PH02690 Apply fails if a property value start with [ and contain more than one [.

### Version 76

* Introduces partial apply/remove support for JavaProcessDef.
* Fixes APAR PH02339 Apply fails on ProtocolProvider objects.
* Exclude the nextStartDate attribute of the WSSchedule configuration object when performing apply or live compare processing.

### Version 75

* Fixes containmentpath error when discovering StringNameSpaceBinding objects at the cluster scope level.

### Version 74

* Fixes containmentpath error when discovering StringNameSpaceBinding objects at the node scope level.

### Version 73

* Fixes APAR PI99239 If the cell name and the node name are identical, and keystore file locations contain the format /cells/[cell name]/nodes/[node name]/, the Templatize Node step now tokenizes the cell name and node name correctly for keystore file locations.
* Fixes APAR PI99280 Remove SIBLocalizationPointRef UUID from configuration data since it is not portable to a new cell environment.

### Version 72

* Fixes APAR PI96964 Remove following action items from WebSphere resources in the resource tree: Configure using WebSphere Configuration Apply, Configure using WebSphere Configuration Discovery, Compare using WebSphere Configuration Discovery
* Fixes APAR PI97729 StringNameSpaceBinding objects are skipped when name contains a /.

### Version 71

* Fixes APAR PI97195 Unexpected output on Live Comparison feature.

### Version 70

* Fixes APAR PI96428 Remote web server management credentials are not discovered and applied.

### Version 69

* Fixes APAR PI96148 Invalid attributes specified for type SERVERPROCESSDEFINITION.

### Version 68

* Fixes APAR PI95861 Apply cell level config on WAS Base results in ADMG0012E when cell name and node name are the same.

### Version 67

* Fixes APAR PI94914 MQQueues with same name gives error while importing WAS configuration.

### Version 66

* Change dependency on DevOps Deploy Versioned File Storage plug-in to version 30, WAS Deploy plug-in to version 114, DevOps Deploy Versions plug-in to version 66, and DevOps Deploy Components plug-in to version 72.
* Fixes APAR PI94786 Incorrect tokenization when node name contains node host name.

### Version 64

* Fixes APAR PI91563 WebSphere Configuration Discovery is missing J2EEResourcePropertySet for WAS40Data Sources resource.
* Fixes StringIndexOutOfBoundsException if input to Create Configuration Snippet plugin step is empty.
* Do not update uniqueId when updating configuration data for an existing Server.
* Do not update serverUniqueId when updating configuration data for an existing ServerEntry.
* Additional updates for APAR PI90293.

### Version 63

* Fixes APAR PI90293 Discovery fails when federated repository id contains spaces.

### Version 62

Version 62 includes the following fixes:

* Fixes APAR PI89494 JDBC Snippet Extract steps hangs.
* Fixes APAR PI89602 Applying pre-V41 configuration data using a later version of the plugin causes issues at WebSphere runtime.

### Version 61

Version 61 includes the following features:

* Introduces partial apply/partial remove support for the following object types: J2CConnectionFactory and J2CActivationSpec

### Version 60

Version 60 includes the following fixes and features:

* Introduces partial apply/partial remove support for the following object types: DataReplicationDomain, J2CAdminObject, VariableSubstitutionEntry(VariableMap)
* Fixes APAR PI88870 Receive JMS\_IBM\_CHARACTER null runtime error after creating MQQueue configuration object

### Version 58

Version 58 includes the following fixes and features:

* Introduces partial apply/partial remove support for the following object types: JDBCProvider, DataSource, URL, MQQueue, MQQueueConnectionFactory, WorkManagerInfo, TimerManagerInfo, Library, StringNameSpaceBinding, EjbNameSpaceBinding, CORBAObjectNameSpaceBinding, IndirectLookupNameSpaceBinding, ForeignCell.
* Handles ObjectCacheInstance and ServletCacheInstance objects which contain slashes in their name.
* Fixes issue where SIBAuthBusConnect objects may not be created.
* Removes dependency on UUID attributes for some service integration bus related objects.
* Fixes issue where templatization failed if the cell name contained the cluster name.

### Version 57

Version 57 includes the following fixes and features:

* Fixes APAR PI84481 EAR undeployed when re-applying server configuration that has been modified.

### Version 56

Version 56 includes the following fixes and features:

* Fixes APAR PI82742 Settings for MappingModule associated with MQConnectionFactory are not being applied.

### Version 55

Version 55 includes the following fixes and features:

* Fixes APAR PI82368 Merge Configuration Files plugin step escapes double quotes around an empty string which results in invalid attribute values.

### Version 54

Version 54 includes the following fixes and features:

* Fixes APAR PI81828 Add support for ServiceClass configuration objects
* Add support to generate unique ports when applying a cluster multiplicity configuration. This behavior will occur if the user does not specify a ENDPOINTPORTMAPPINGS setting on the Cluster Config component.

### Version 52

Version 52 includes the following fixes and features:

* Fixes APAR PI80908 Discovery process not parsing LDAP server values correctly

### Version 51

Version 51 includes the following fixes and features:

* Fixes APAR PI79328 On Windows, the generic processes fail if using relative path for the Configuration File Output parameter
* Fixes issue where discovery fails on WAS 7 if using health policies

### Version 50

Version 50 includes the following fixes and features:

* Handle cases where configuration data is not surrounded by brackets
* Fixes library dependency issue for Partial Apply and Partial Remove steps.
* Fixes for Partial Apply and Partial Remove steps.
* Fixes APAR PI78837 Live Compare feature fails when using agent relay
* Fixes APAR PI79045 Configuration discovery fails against WebSphere V9 Base. Unable to discover HealthController configuration type.

### Version 49

Version 49 includes the following fixes and features:

* The WebSphere Merge Configuration Files step, which merges multiple configuration data files into one file.
* The WebSphere Configuration Partial Remove step, allowing users to remove subsets of their configuration.
* Enhancements to the Create Configuration Snippet step, allowing users to extract multiple resources at a time.
* A fix for APAR PI76895 Cloned cell showing differences due to missing CoreGroupAccessPointRef.
* A fix for the partial apply issue with DynamicSSLConfigSelection objects.
* A fix for the issue where LDAP Repository loginProperties were gathered improperly.
* Support for the following object types: HealthController, HealthClass, TargetMembership, HealthAction, CustomHealthAction, AgeCondition, WorkloadCondition, MemoryCondition, ResponseCondition, StuckRequestCondition, StormDrainCondition, MemoryLeakAlgorithm, GCPercentageCondition.
* Partial apply support for the following object types: HealthClass, HealthController, TAInterceptor, SPNEGO, SingleSignon, SSLConfigGroup, SIBus, Property (Security Custom Property), KRB5, TrustedAuthenticationRealm, LDAPUserRegistry, LocalOSUserRegistry, CustomUserRegistry, WIMUserRegistry.
* Removal of the Snippet Actions for the Individual Configuration Objects property from the WebSphere Configuration Apply step; the WebSphere Configuration Partial Apply step replaces that feature.

### Version 47

Version 47 includes the following fixes and features:

* Support for encrypted input/output properties files.
* APAR PI74524 Live Comparison Shows Difference Due To Trailing Space in J2EEResourceProperty description attribute
* The WebSphere Configuration Partial Apply step, allowing users to apply subsets of their configuration data.
* APAR PI75086 Discovery fails: NameError: virtualLink
* APAR PI75047 JSONArray[0] not found while running WebSphere Configure Compare Fixes issue where the Extract Configuration Data step may fail in cases where the configuration data is not in hierarchical order.

### Version 46

Version 46 includes the following fix:

* Apply failure that occurs when an attribute value starts with a \[\. For a description of the issue, see <http://www-01.ibm.com/support/docview.wss?uid=swg21587193>.

### Version 45

Version 45 includes a fix for this APAR:

* APAR PI73332 Apply failed with: ADMG0020E: The required attribute J2CAdminObject is not found

### Version 44

Version 44 includes the following features and fixes for APARs and other issues:

* APAR PI72006 StackOverflowError When Discovering WebSphere Configuration that contains a security domain member.
* APAR PI72029 CONFIGURATION DISCOVERY TRUNCATES BINDDN IF IT CONTAINS COMMA+SPACE.
* APAR PI69624 Apply doesnt remove J2C Config Alias.
* Live compare now uses UTF-8 to ensure encoding consistency.
* APAR PI73164 Apply fails with following error: TypeError: \_\_add\_\_ nor \_\_radd\_\_ defined for these operands.

### Version 41

Version 41 includes the following features and fixes for APARs and other issues:

* APAR 156370 UNABLE TO CREATE SNIPPET: ENSURE YOUR RESOURCE HAS A UNIQUE NAME.
* APAR PI70389 IF APPLYING SECURITY RELATED SNIPPETS, SOME SECURITY ATTRIBUTES ARE INCORRECTLY UNSET
* APAR PI71348 Tokenization Issue with WAS Config Plugin (Issue when WAS config files have @ in them)
* Simplified the WebSphere Create Configuration Snippet step
* Added ability to remove configuration object from config file using WebSphere Create Configuration Snippet step
* Added support for PMEServerExtension configuration object and associated services (ActivitySessionService, ApplicationProfileService, I18NService, ObjectPoolService, SchedulerService, StartupBeansService, WorkAreaService, WorkManagerService)
* Fixes issue where WSSchedule objects may be deleted incorrectly

### Version 40.825752

Version 40 includes the following features and fixes for APARs and other issues:

* A fix for J2CConnectionFactory children objects not being discovered or applied correctly.
* APAR PI67273 Discovery fails when cell contains a generic server definition.
* APAR PI67320 java.lang.NullPointerException occurs if output file parameter uses a relative path in the Create Configuration Snippet step.
* APAR PI67138 SIB configuration / Queue Connection Factory is applied to only one out of two clusters.
* APAR PI67709 Configure plug-in not setting SIB service enabled flag.
* APAR PI67710 Messaging Engines are not created on target Cell.
* APAR PI67720 Applying extracted WebSphere Application Server Configuration on CELL level fails: Resource role properties do not contain websphere.sibusmembertargetref.enginename!
* APAR PI64162 IHS plug-in properties are missing in exported JSON.
* APAR PI68263 Create Snippet does not create correct snippet for J2C Alias.
* A fix for missing attributes for configuration object types, which causes discovery failure.
* Attribute values that contain spaces are now enclosed in quotation marks.
* APAR PI68855 Snippets For objects that dont use containment paths, sibling objects are deleted when snippet applied.
* Support for deleting individual configuration objects when objects are managed by a snippet.
* APAR PI69288 Dynamic outbound SSL configurations not discovered.

### Version 38.810352

Version 38 includes the following features and fixed APARs:

* APAR PI62935 WebSphere Application Server configuration discovery/apply needs to handle unique values like core group UID in defaultCoreGroup.
* APAR PI66749 WebSphere Application Server Configuration plug-in mistakenly replaces a class path value with a token.
* APAR PI66751 CMPConnectorFactory not being captured correctly.
* In migration scenarios, a default value is not set for the connamelist attribute of the MQConnectionFactory, MQQueueConnectionFactory, MQTopicConnectionFactory, and SIBMQLinkSenderChannel objects.
* Support for ProtocolProvider objects.

### Version 37.806745

Version 37 includes fixes for the following APARs:

* APAR PI66118 Validate nodes that are specified in NODELIST property. If a Deployment Manager node is found, ignore it and display message to alert user.
* APAR PI65985 While you are creating a Java Platform, Enterprise Edition property value that begins with a [, a java.lang.IllegalArgumentException was received.
* APAR PI65140 J2EEResourcePropertySet is not applied for J2C Connection Factories.


|Back to ...||Latest Version|WebSphere Application Server - Configure ||||||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[94.1165946](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/WebSphereConfiguration/ucd-WebSphereConfiguration-94.1165946.zip)|[Readme](README.md)|[Usage](usage.md)|[Example Applications](example applications.md)|[Example Processes](example processes.md)|[Steps](steps.md)|[Roles](roles.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
