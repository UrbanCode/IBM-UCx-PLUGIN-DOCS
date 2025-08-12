
Rally - Usage
=============

# Usage


### Usage




### Configuring integration with Rally

You can use the Rally plug-in for IBM UrbanCode Release to
create an integration provider and import items from Rally into IBM UrbanCode Release change items.

1. In IBM
UrbanCode Release, click **Integrations > Add New**. The New Integration Provider window opens.
2. Type a name for the
integration provider in the **Name** field. For example, type Rally Test Cases.
3. In the **Integration Type** list,
select **Rally Plugin**.
4. In the **Frequency** list, select a frequency. The frequency determines how often Rally is
polled for changes to import. Also, you can manually update changes any time.
5. In the **Rally server URL** field, type
the root URL of the Rally server. For example, enter http://rally\_server.example.com.
6. In the **API Key** field,
enter an API key. You create API keys on the Rally server. To learn more about creating API keys, see the [Rally
Help](https://help.rallydev.com/ "Rally Help").
7. Click **Ping the Rally Server** and **Check Authentication** to test
the connection to the Rally server.
8. In the **Rally WSAPI Type** list, select a type to import. You can import only
one Rally type for each integration provider that you create. Repeat all of these steps to create an integration
provider for each Rally type to import.
9. Optionally, click **Sample JSON** to view the JSON output from Rally for the
first result that matches the specified Rally WSAPI type. You can use the sample output to assist in determining what
fields to use to map the Rally items to initiatives, releases, and applications in IBM UrbanCode Release.
10. In the
**Change Type** list, map the Rally type to a change type in IBM UrbanCode Release. For example, if you select defect
from the **Rally WSAPI Type** list, select bug from the **Change Type** list. Each item that is retrieved from Rational
Team Concert is associated with a release and an application or an initiative in IBM UrbanCode Release based on the
mappings.
1. Optionally, in the **Field for Initiative Association** list, select the name of a key from the
Rally JSON output. The imported change is associated with the initiative in IBM UrbanCode Release that has the same name
as the key value. Alternately, to create initiatives in IBM UrbanCode Release from the key value, select **Create
Initiative if Necessary**.
2. Optionally, in the **Field for Release Association** list, select the name of a
key from the Rally JSON output. If a release with the same name as the key value exists in IBM UrbanCode Release, then
the imported change is associated with that release.
3. Optionally, in the **Field for Application Association**
list, select the name of a key from the Rally JSON output. If an application with the same name as the key value exists
in IBM UrbanCode Release, then the imported change is associated with that application.
11. Under **Statuses Mapping**,
for each status type in Rally to map to a status type in IBM UrbanCode Release, select the Rally status type from the
**Rally Statuses Statuses created in Rally** list and then select a corresponding IBM UrbanCode Release status type from
the
**UCR Statuses Statuses available in UCR** list.
12. Under **Severities Mapping**, for each severity type in Rally
to map to a severity type in IBM UrbanCode Release, select the Rally severity type from the **Rally Severities
Severities created in Rally** list and then select a corresponding IBM UrbanCode Release severity type from the **UCR
Severities UrbanCode Release Severities** list.
13. Click **Save**.

The Rally integration runs at the frequency that
you specified in step 4. To run the integration manually, select the integration on the Integrations page, click the
**Edit** icon, and then click **Run Integration**.


|Back to ...||Latest Version|Rally ||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Release Plugins](../README.md)|[2.690437](https://raw.githubusercontent.com/UrbanCode/IBM-UCR-PLUGINS/main/files/Rally/ucr-plugin-rally-2.690437.zip)|[Readme](README.md)|[Overview](overview.md)|[Settings](settings.md)|[Downloads](downloads.md)|
