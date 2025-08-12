
# Rational Team Concert v6 - Usage

## Usage

- [Rational Team Concert v6 - Usage](#rational-team-concert-v6---usage)
  - [Usage](#usage)
    - [Importing work items](#importing-work-items)
    - [Configuring an integration provider](#configuring-an-integration-provider)

### Importing work items

After you configure the integration provider, you can import work items as changes or initiatives.

If you import work items as initiatives, all child work items of the type that you specify are imported as changes
that are related to the parent initiative.When you import work items as initiatives, all child work items are imported
but only one level of hierarchy is preserved. Child work items that are of the type that you specify are imported as
separate initiatives.

1. In Rational Team Concert, create a query for the project area.
2. In IBM UrbanCode Release,
click **Integrations**, and then click the integration with the Rational Team Concert server.
3. In the **Mapping** section, select a project area, and then select a query.
4. Map the fields. To import work items as initiatives, select all the work item types under **Initiatives** to convert into initiatives. The work item types that are displayed in the **Initiatives** list are read dynamically from the project area in Rational Team Concert.
5. Click **Run Integration**.

When you run the integration, work items of the type that you specify and all child work items are imported into IBM
UrbanCode Release as changes or initiatives.

### Configuring an integration provider

1. In IBM UrbanCode Release, click **Integrations > Add New**. The New Integration Provider window opens.
2. Type a name for the integration provider in the **Name** field.
3. Under **Integration Type**, select **RTC Plugin**. If you have installed multiple versions of the plug-in, select the version to use from the list.
4. Select **OSLC Integration**, **RTC Client Integration**, or **RTC Client Integration Auto Mapping** from the list.
   1. **OSLC Integration**: Select to use Open Services for Lifecycle Collaboration (OSLC) to import the work items. A maximum of 1,000 work items are returned by an OSLC query.
   2. **RTC Client Integration**: Select to use the Rational Team Concert client API to import the work items. There is no limit to the number of work items imported.
   3. **RTC Client Integration Auto Mapping**:
      1. Select to use the Rational Team Concert client API to import the work items. There is no limit to the number of work items imported. Additionally, you can automatically map applications and releases in IBM UrbanCode Release to a specified field in Rational Team Concert.
5. In the **Frequency** list, select a frequency. The frequency determines how often Rational Team Concert is polled for changes to import. Also, you can manually update changes any time.
6. In **RTC server URL**, type the root URL of the Rational Team Concert server. For example, enter `http://jazz\_server.example.com:port\_number/ccm/`. The default port number is `9443`.
7. In the **Consumer Key** and **Consumer Secret** fields, type a consumer key and secret. You set up consumer keys on the Rational Team Concert server. To learn more about configuring OAuth in Rational Team Concert, see [Configuring OAuth consumers](http://pic.dhe.ibm.com/infocenter/clmhelp/v4r0/topic/com.ibm.jazz.repository.web.admin.doc/topics/c_configuring_oauth.html "(Opens in a new tab or window)"). The functional user ID that you set up in Rational Team Concert must have access to the project area that you want to access. If the functional user ID in Rational Team Concert does not have access to the project area, an error message is displayed when you attempt to connect.
8. Click **Ping the RTC Server**, and then click **Check Authentication**. If the connection is completed, the status icon is displayed in green, and a list of project areas is displayed.
9. Map the values from Rational Team Concert to values in IBM UrbanCode Release. Each work
item that is retrieved from Rational Team Concert is associated with a release and an application or an initiative in
IBM UrbanCode Release based on the mappings.
   1. Under Mapping, select a Rational Team Concert project area from the list, and then select a query. To learn more about queries in Rational Team Concert, see [Finding work items in the web client](http://pic.dhe.ibm.com/infocenter/clmhelp/v4r0/topic/com.ibm.team.workitem.doc/topics/t_finding_work_items_web.html "(Opens in a new tab or window)").
   2. Under Releases Mapping, select a release in IBM UrbanCode Release and select a Rational Team Concert `Planned For` value to map to the release.
   3. Under Applications, select an application in IBM UrbanCode Release and select a Rational Team Concert `Filed Against` value to map to the application.
   4. Under Statuses, for each status in the selected Rational Team Concert project area, select a corresponding status in IBM UrbanCode Release.
   5. Under Types, for each work item type in the selected Rational Team Concert project area, select a corresponding type in IBM UrbanCode Release. If you map Rational Team Concert types to types in IBM UrbanCode Release, do not also map Rational Team Concert types to initiatives. If you map work item types to both types and to initiatives, the work items are imported as initiatives.
   6. Under Initiatives, select the work item types in Rational Team Concert to be converted into initiatives in IBM UrbanCode Release. To learn more, see [Importing work items as initiatives](https://www.ibm.com/docs/en/urbancode-release/6.2.5?topic=concert-importing-work-items-as-initiativesus "You can import work items from IBM Rational Team Concert as initiatives. During the import process, work items of the type that you specify are imported as initiatives. Additionally, all child work items of the type that you specifyare imported as changes that are related to the parent initiative.").
   7. Under Severities, for each severity level in the selected Rational Team Concert project area, select a corresponding severity level in IBM UrbanCode Release.

After you configure the integration provider, the Rational Team Concert server is polled based on the specified frequency. The results of the query are stored as change items in IBM UrbanCode Release. You can see items that are imported from Rational Team Concert on the Releases page and Changes page in IBM UrbanCode Release.

|Back to ...||Latest Version|Rational Team Concert v6 ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[3.969559](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/RTC/ucr-plugin-rtc-3.969559.zip)|[Readme](README.md)|[Overview](overview.md)|[Settings](settings.md)|[Downloads](downloads.md)|
