
# IBM Integration Bus (IIB) plugin Deploy step for zOS - Usage

Refer original plugin documentation for usage of Deploy step. Deploy a BAR File Example

In this process example, the broker archive (.bar) file includes overrides as needed for the target environment. A target execution group exists and has a JVM heap size sufficient for the .bar file. Alternately, you can run a process step to create an execution group that has the appropriate properties.

**1.**  As required, run the [WMB Set Broker Properties](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_set_broker_properties) step to set runtime properties for the broker.

**2.**  If a target execution group does not exist, run the [Create Execution Group](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#create_execution_group) step.

**3.**  As required, run the [Create Or Update Configurable Services](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#create_or_update_configurable_service) step to update the properties of the configurable service that the .bar file depends on.

**4.**  As required, run the [WMB Set Execution Group Properties](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_set_execution_group_properties) step to set any required properties for the execution group. Do not set properties, such as JVM heap size, that require a restart of the execution group.

**5.**  Run the Download Artifacts step to copy the .bar file to the target computer.

**6.**  Run the [WMB Deploy](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_deploy) step to deploy the .bar file on the target broker.

**7.**  As required, run the [WMB Set Message Flows Property](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_set_message_flows_property) step to set runtime properties on message flows.

**8.**  As required, run the [WMB Stop Message Flows](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_stop_message_flows) and [WMB Start Message Flows](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/WebSphereMessageBroker-CMP//#wmb_start_message_flows) steps to stop and start message flows.

