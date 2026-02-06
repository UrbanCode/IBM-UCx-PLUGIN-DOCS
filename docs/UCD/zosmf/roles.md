# Roles

## zOSMFService Role

Role for resources that represent zOSMF Service.

| Name               | Type     | Description                                                                                                                                                                                                                                                            |
|--------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| zOS Version        | String   | The z/OS operating system level. The Resource Role property name is zosmf.zos\_version.                                                                                                                                                                                |
| zOSMF API Version  | String   | The version of the z/OSMF information retrieval service and the JSON object structure used for this request. The version sequence starts at 1, and is incremented if the service or the JSON structure changes. The Resource Role property name is zosmf.api\_version. |
| zOSMF Full Version | String   | The z/OSMF version qualified by a service level. The Resource Role property name is zosmf.zosmf\_full\_version.                                                                                                                                                        |
| zOSMF Hostname     | String   | The hostname or the IP address of the z/OS system on which z/OSMF is installed. The Resource Role property name is zosmf.zosmf\_hostname.                                                                                                                              |
| zOSMF Password     | Password | The zOSMF password associate with the specified user.                                                                                                                                                                                                                  |
| zOSMF Port         | String   | The port number for SSL encrypted traffic for the active instance of z/OSMF on the z/OS system. The Resource Role property name is zosmf.zosmf\_port.                                                                                                                  |
| zOSMF Query        | String   | A list of one or more query variables. Check the z/OSMF List the software services instances REST API for a list of valid query parameters. The Resource Role property name is zosmf.query.                                                                            |
| zOSMF SAF Realm    | String   | The realm associated with the system on which z/OSMF is installed. Usually, this is the sysplex name. The Resource Role property name is zosmf.zosmf\_saf\_realm.                                                                                                      |
| zOSMF URL          | String   | The URL to access the zOSMF REST API. The Resource Role property name is zosmf.url.                                                                                                                                                                                    |
| zOSMF User         | String   | The zOSMF user to use. The Resource Role property name is zosmf.user.                                                                                                                                                                                                  |
| zOSMF Version      | String   | The z/OSMF level. The Resource Role property name is zosmf.zosmf\_version.                                                                                                                                                                                             |

## zOSMFSoftwareInstance Role

Role for resources that represent a software instance.

| Name              | Type   | Description                                                                                                                   |
|-------------------|--------|-------------------------------------------------------------------------------------------------------------------------------|
| Created By        | String | The user ID that created the object.                                                                                          |
| Created On        | String | The time the object was created. The time is in the ISO8601 format. The Resource Role property name is instance.created-time. |
| Domain Name       | String | The name of the domain. The Resource Role property name is instance.domain-name.                                              |
| External Name     | String | The external name of the software services instance. The Resource Role property name is instance.external-name.               |
| Last Action Name  | String | The name of the last action that was performed. The Resource Role property name is instance.last-action-name.                 |
| Last Action State | String | The state of the last action that was performed. The Resource Role property name is instance.last-action-state.               |
| Object ID         | String | The object ID for the software services instance. The Resource Role property name is instance.object-id.                      |
| Object Name       | String | The object name for the software services instance. The Resource Role property name is instance.object-name.                  |
| State             | String | The current state of the software. The Resource Role property name is instance.state.                                         |
| Tenant Name       | String | The name of the tenant. The Resource Role property name is instance.tenant-name.                                              |
| Type              | String | The type of software instance.                                                                                                |
