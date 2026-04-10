# Utilities/HCL AppScan 360 - Process Steps

## Start Dynamic Analyzer AS360 Scan

Starts a new Dynamic Analyzer AS360 Scan, using HCL AppScan 360. This step will generate the 'ScanId' output property.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AS360 Application ID | textBox | The ID of the application in AS360. | Yes |
| Base AS360 URL | textBox | Please enter a base AS360 URL to scan. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| Scan Name | textBox | Enter a name for the scan. If empty, the Starting URL will be used. | Yes |
| Starting URL | textBox | Please enter a URL to scan. (You must complete Domain Verification through the UI, as it is not currently supported by this plugin.) | Yes |
| Application Username | textBox | Username for the scanned application if it contains a login. | Yes |
| Application Password | secureBox | Password for the scanned application if it contains a login. | Yes |
| Third Application Credential | secureBox | Provide this field if your application requires a third                          credential. | Yes |
| Presence ID | textBox | Specify an ID of an existing presence, which allows you to run                          scans on apps not connected to the internet or require a proxy server                          to make a connection. The presence must be accessible to the user. | Yes |
| Scan Type | selectBox | Select the type of scan. Staging scans are more comprehensive                          and designed to scan sites before production. Production scans are                           designed to scan live sites. | Yes |
| Scan/Template File | textBox | The path to a configuration (SCAN or SCANT) file. Use                           this field if you have specific configuration requirements. The                           Starting URL that you enter above must be identical to the                           Starting URL in the file. | Yes |
| Fail condition threshold (H, M, L, I) | textBox | Please set the number of issues found (by severity) in a                           comma-separated list. If the threshold is reached during the scan,                           the scan will fail. In this field, you can specify the numbers for                           these severity levels: High (H), Medium (M), Low (L), and                           Informational (I). For example, a fail condition of '0,5,10,20'                           will cause the step to fail if the resulting scan has more than 0                           High issues, 5 Medium issues, and so on. If this field is left                           empty, there will be no validation of results and the scan will                           not fail as a result of a fail condition. | Yes |
| Set Issue Count Output Properties | checkBox | Selecting this will wait for the scan results and set the                           highIssueCount, medIssueCount, lowIssueCount, and infoIssueCount output                          properties. | No |
| Original scan ID | textBox | If this is a rescan please enter the original scan id | Yes |
| Enable Mail Notification | checkBox | Select this option to notify email IDs configured in AS360. | No |
| Commit SHA | textBox | Optional commit SHA to attach in the scan comment metadata. | No |
| Build URL | textBox | Optional build URL to attach in the scan comment metadata. | No |
| Environment | textBox | Optional environment value to attach in the scan comment metadata. | No |
| Test Policy | selectBox | A predefined set of tests for AppScan to use. Here is a short description for each option: Comprehensive (Default) -> This is the most thorough Test Set and is used by default. Application-Only -> This Test Set includes all application level tests except invasive and port listener tests. The Vital Few -> This Test Set includes a selection of tests that have a high probability of success. This can be useful for evaluating a site when time is limited. | Yes |
| Fail Scan on Pause | checkBox | Select this option to immediately fail the process if                           the scan is paused. If unchecked, the process will continue running. | No |
| Scan Timeout (minutes) | textBox | Please enter a timeout for the scan (relevant for only                           when validating report). The default value of -1 will cause the                           scan to run until it completes. | No |

## Start Static Analyzer AS360 Scan

Starts a new Static Analyzer AS360 Scan, using HCL AppScan on Cloud. This step will generate the 'ScanId' output property.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AS360 Application ID | textBox | The ID of the application in AS360. | Yes |
| Base AS360 URL | textBox | Please enter a base AS360 URL to scan. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| IRX file/Scan directory | textBox | Please point to the IRX file to be uploaded for scanning,                           or the directory that contains the files or other locations to scan.                           The files and locations that can be specified in this field include:                           .jar files, .war files, .ear files, Eclipse workspaces, and                           scan configuration files. For example, 'c:\build_output\testapp.irx'                           or 'c:\build_output'. | Yes |
| Scan configuration file | textBox | Please point to the path and file name of a scan                           configuration file. This overrides any scan configuration files                           which may exist in the scan directory. For example,                           'c:\build_output\appscan-config.xml'. | Yes |
| Static Analyzer Client Tool location | textBox | Please point to the directory that the client tool                           was unzipped to. For example, C:\SAClientUtil. This property must                           be supplied if you need to generate the IRX file. | Yes |
| Fail condition threshold (H, M, L, I) | textBox | Please set the number of issues found (by severity) in a                           comma-separated list. If the threshold is reached during the scan,                           the scan will fail. In this field, you can specify the numbers for                           these severity levels: High (H), Medium (M), Low (L), and                           Informational (I). For example, a fail condition of '0,5,10,20'                           will cause the step to fail if the resulting scan has more than 0                           High issues, 5 Medium issues, and so on. If this field is left                           empty, there will be no validation of results and the scan will                           not fail as a result of a fail condition. | Yes |
| Original scan ID | textBox | If you have previously scanned the application, please                           enter the original scan ID here if you want to rescan it. | Yes |
| Enable Mail Notification | checkBox | Select this option to notify email IDs configured in AS360. | No |
| Commit SHA | textBox | Optional commit SHA to attach in the scan comment metadata. | No |
| Build URL | textBox | Optional build URL to attach in the scan comment metadata. | No |
| Environment | textBox | Optional environment value to attach in the scan comment metadata. | No |
| Fail Scan on Pause | checkBox | Select this option to immediately fail the process if                           the scan is paused. If unchecked, the process will continue running. | No |
| Scan Timeout (minutes) | textBox | Please enter a timeout for the scan (relevant for only                           when validating report). The default value of -1 will cause the                           scan to run until it completes. | No |

## Start Software Composition Analysis (SCA) AS360 Scan

Starts a new Software Composition Analysis (SCA) AS360 Scan, using HCL AppScan 360. This step will generate the 'ScanId' output property.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| AS360 Application ID | textBox | The ID of the application in AS360. | Yes |
| Base AS360 URL | textBox | Please enter a base AS360 URL to scan. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| IRX file/Scan directory | textBox | Please point to the IRX file to be uploaded for scanning,                           or the directory that contains the files or other locations to scan.                           The files and locations that can be specified in this field include:                           .jar files, .war files, .ear files, Eclipse workspaces, and                           scan configuration files. For example, 'c:\build_output\testapp.irx'                           or 'c:\build_output'. | Yes |
| Scan configuration file | textBox | Please point to the path and file name of a scan                             configuration file. This overrides any scan configuration files                             which may exist in the scan directory. For example,                             'c:\build_output\appscan-config.xml'. | No |
| Static Analyzer Client Tool location | textBox | Please point to the directory that the client tool                             was unzipped to. For example, C:\SAClientUtil. This property must                             be supplied if you need to generate the IRX file. | No |
| Fail condition threshold (H, M, L, I) | textBox | Please set the number of issues found (by severity) in a                           comma-separated list. If the threshold is reached during the scan,                           the scan will fail. In this field, you can specify the numbers for                           these severity levels: High (H), Medium (M), Low (L), and                           Informational (I). For example, a fail condition of '0,5,10,20'                           will cause the step to fail if the resulting scan has more than 0                           High issues, 5 Medium issues, and so on. If this field is left                           empty, there will be no validation of results and the scan will                           not fail as a result of a fail condition. | No |
| Enable Mail Notification | checkBox | Select this option to notify email IDs configured in AS360. | No |
| Scan Timeout (minutes) | textBox | Please enter a timeout for the scan (relevant for only                           when validating report). The default value of -1 will cause the                           scan to run until it completes. | No |

## Create AS360 Presence

Create and start a new presence. To access a private site server you must start the presence in an environment that has local access to the server. The 'PresenceId' output property generated can be used to run scans in environments that do not have access to the private site.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| Base AS360 URL | textBox | Please enter a base AS360 URL. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Start Presence | checkBox | Select this option to start the presence after it                           is created. | No |

## Start AS360 Presence

Start an existing AS360 presence. The presence will be started on the agent machine that runs the step.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Presence ID | textBox | Specify an ID of an existing presence, which allows you to run                          scans on apps not connected to the internet or require a proxy server                          to make a connection. The presence must be accessible to the user. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for plugin REST API calls to AS360. This does not disable certificate validation inside the downloaded Presence binary, which still requires a trusted server certificate chain. | No |
| Base AS360 URL | textBox | Please enter a base AS360 URL. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Renew Presence Key | checkBox | Select this option to renew the key before                           starting the presence. | No |

## Stop AS360 Presence

Stop a running AS360 presence. This step must be run on the agent machine on which the presence was originally started.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| Base AS360 URL | textBox | Please enter a base AS360 URL. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Presence ID | textBox | Specify an ID of an existing presence, which allows you to run                          scans on apps not connected to the internet or require a proxy server                          to make a connection. The presence must be accessible to the user. | Yes |

## Delete AS360 Presence

Delete an AS360 presence. The presence will subsequently be stopped on any machine where it is currently running.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Login Key ID | textBox | The API key ID to authenticate with AS360. | Yes |
| Login Key Secret | secureBox | The API key secret to authenticate with AS360. | Yes |
| Validate SSL Certificate | checkBox | Enable TLS certificate validation for the AS360 server. Clear this only for test environments that use self-signed or untrusted certificates. | No |
| Base AS360 URL | textBox | Please enter a base AS360 URL. Ex- cloud.appscan.com, cloud.appscan.com/eu. | Yes |
| Presence ID | textBox | Specify an ID of an existing presence that is accessible                          using the provided login credentials. This field will be ignored if                          the 'Delete All Presences' box is checked. | Yes |
| Delete All Presences | checkBox | Select this box to remove all existing AS360 presences                          that can be accessed with the provided login credentials. | No |

