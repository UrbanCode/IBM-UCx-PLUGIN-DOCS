# Process Steps

## Bulk Retrieve

Download all components of a single metadata type into a local directory.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Metadata Type | textBox | The type of metadata to retrieve, for example ApexClass or CustomObject. Type names are case-sensitive. | Yes |
| Retrieve Target | textBox | The root of the directory structure into which the metadata files are retrieved, for example codepkg. | Yes |
| Containing Folder | textBox | For folder-based types (Report, Dashboard, Document, EmailTemplate), the folder whose contents are retrieved. Passed to the CLI as Type:Folder. | No |
| Unzip | checkBox | If selected, the retrieved components are extracted. Otherwise they are left as a zip file in the Retrieve Target directory. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Max Poll | textBox | Legacy poll count. Combined with Poll Wait Time to derive the CLI --wait value in minutes. | No |
| Poll Wait Time | textBox | Legacy poll interval in milliseconds. Combined with Max Poll to derive the CLI --wait value in minutes. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

## Deploy

Deploy a metadata-format directory to an org, or validate it without saving.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Deploy Root | textBox | Directory, relative to the working directory or absolute, containing the metadata-format payload and its package.xml. | Yes |
| Check Only | checkBox | Run a validation instead of a deployment. A validation that passes its tests can later be quick-deployed with the Deploy Recent Validation step. Sets the recentValidationId output property. | No |
| Roll Back on Error | checkBox | Leave selected for all-or-nothing deployments. Clearing it passes --ignore-errors, which production orgs reject. Ignored for validations. | No |
| Test Level | selectBox | Which Apex tests run as part of the deployment. Validations intended for quick deploy to production must run tests. | No |
| Test Names | textAreaBox | Ignored unless Test Level is RunSpecifiedTests. Apex test class names, one per line. | No |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. Obtain with: sf org display --target-org &lt;alias&gt; --verbose | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Max Poll | textBox | Legacy poll count. Combined with Poll Wait Time to derive the CLI --wait value in minutes. | No |
| Poll Wait Time | textBox | Legacy poll interval in milliseconds. Combined with Max Poll to derive the CLI --wait value in minutes. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

## Deploy Recent Validation

Quick-deploy a previously validated deployment without rerunning its tests.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Recent Validation ID | textBox | Job id of a successful validation, produced by the Deploy step with Check Only selected. | Yes |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. Obtain with: sf org display --target-org &lt;alias&gt; --verbose | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Max Poll | textBox | Legacy poll count. Combined with Poll Wait Time to derive the CLI --wait value in minutes. | No |
| Poll Wait Time | textBox | Legacy poll interval in milliseconds. Combined with Max Poll to derive the CLI --wait value in minutes. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

## Describe Metadata

List every metadata type available in the target org.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Result File Path | textBox | Optional path for the JSON results. The default output is the step log. | No |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. Obtain with: sf org display --target-org &lt;alias&gt; --verbose | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

## List Metadata

List the components of a given metadata type in the target org.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Metadata Type | textBox | The metadata type to list, for example CustomObject or Report. Type names are case-sensitive. | Yes |
| Folder | textBox | Required for folder-based components such as Dashboard, Document, EmailTemplate or Report. | No |
| Result File Path | textBox | Optional path for the JSON results. Writing to a file makes it easier to build a package.xml manifest. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. Obtain with: sf org display --target-org &lt;alias&gt; --verbose | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

## Retrieve

Retrieve unpackaged metadata or named packages into a metadata-format directory.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Salesforce CLI Path | textBox | Path to the sf executable. Defaults to sf on the agent PATH. | Yes |
| Retrieve Type | selectBox | Unpackaged retrieves the components named in a package.xml manifest. Package retrieves named packages. | Yes |
| Retrieve Target | textBox | The root of the directory structure into which the metadata files are retrieved, for example codepkg. | Yes |
| Unpackaged | textBox | Required when Retrieve Type is Unpackaged. Path to the package.xml manifest listing the components to retrieve, for example codepkg/package.xml. | No |
| Package Names | textBox | Required when Retrieve Type is not Unpackaged. Comma-separated package names. Specify either Package Names or Unpackaged, not both. | No |
| Unzip | checkBox | If selected, the retrieved components are extracted. Otherwise they are left as a zip file in the Retrieve Target directory. | No |
| Authentication Method | selectBox | If the authentication method is JWT Bearer, require Username, Consumer Key, and either JWT Key File or JWT Private Key; if SFDX Auth URL is selected, require SFDX Auth URL. | Yes |
| Instance URL | textBox | Login URL for the target org: `https://login.salesforce.com` for production and developer orgs, `https://test.salesforce.com` for sandboxes, or your My Domain URL. Used by the JWT flow. | Yes |
| User | textBox | Salesforce username. Required for the JWT bearer flow. | No |
| Consumer Key | secureBox | Consumer key of the connected app used for JWT. Required for the JWT bearer flow. | No |
| JWT Key File | textBox | Path on the agent to the PEM private key matching the connected app certificate. Required this or JWT Private Key. | No |
| JWT Private Key | secureBox | PEM private key contents. Staged to a temporary owner-only file and deleted when the step ends. Required this or JWT Key File. | No |
| SFDX Auth URL | secureBox | Required when Authentication Method is SFDX Auth URL. Obtain with: sf org display --target-org &lt;alias&gt; --verbose | No |
| API Version | textBox | Metadata API version, for example 62.0. Leave empty to let the CLI use the org default. | No |
| Trace | checkBox | Run the Salesforce CLI with SF_LOG_LEVEL=debug for troubleshooting. Produces verbose output. | No |
| Max Poll | textBox | Legacy poll count. Combined with Poll Wait Time to derive the CLI --wait value in minutes. | No |
| Poll Wait Time | textBox | Legacy poll interval in milliseconds. Combined with Max Poll to derive the CLI --wait value in minutes. | No |
| Proxy Host | textBox | HTTP proxy host. Exported to the CLI as HTTP_PROXY and HTTPS_PROXY. SOCKS proxies are not supported by Salesforce CLI v2. | No |
| Proxy Port | textBox | HTTP proxy port. Defaults to 80. | No |
| Proxy Username | textBox | Proxy user. | No |
| Proxy Password | secureBox | Proxy password. Used only when Proxy Username is set. | No |
| No Proxy | textBox | Comma-separated hosts that bypass the proxy. Exported as NO_PROXY. | No |

