# SonarQube - Usage

## Requirements

* DevOps Velocity / Loop
  - Privileges to add integrations
  - A generated User Access Key
* SonarQube
  - Privileges to create webhooks
  - A generated Authentication Token
* Velocity Certificate Authentication
  - Trusted Certificate: The certificate must be validated as trusted. This means validated by a public or organizational Certificate Authority (CA) or else imported into the truststore of the SonarQube server’s Java Runtime Environment (JRE).
  - Common Name (CN): The DevOps Velocity host name used in the webhook must meet the requirements of the DevOps Velocity certificate common name (CN), whether you are using a single-name, wildcard, or multi-name. It is best to craft your certificate so that its common name matches your DevOps Velocity host name. However, if there is a mismatch and the certificate cannot be changed, then the host name can be changed instead. This can be done at the network or local level, such as a hosts file entry on the SonarQube server that maps the common name to the actual host name, such that the common name can be used from that server.

## Integration Type

The endpoint URL needed for the SonarQube webhook:

### For Velocity
| Name | Path | Method |
| --- | --- | --- |
| SonarQube Callback | `https://<velocity_hostname>/reporting-consumer/pluginEndpoint/<integration_id>/sonarqube/callback` | POST |

### For Loop
| Name | Path | Method |
| --- | --- | --- |
| SonarQube Callback | `https://<loop_hostname>/velocity/reporting-consumer/pluginEndpoint/<integration_id>/sonarqube/callback` | POST |

---

## Setup

### 1. Creating the DevOps Velocity Integration

Each external data source should have its own integration, with multiple integrations per plugin type. SonarQube integrations are created from the SonarQube plugin type and can be added in three different ways:

1. The user interface provided on the settings/integration page.
2. POST request to `/reporting-consumer/integration` (or `/velocity/reporting-consumer/integration` for Loop).
3. Uploading a Value Stream Map (VSM) JSON file.

The parameters for adding a SonarQube integration are summarized in the table below. The usual preference is to create an integration through the UI; however, sometimes it is necessary to use the API. An example POST request is provided below as part of a curl command to add an integration. It is important to pay attention to the response, since it will contain the integration ID to construct the endpoint URL. The endpoint URL is needed for the second step of creating a webhook in SonarQube.

#### Parameters

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Velocity Hostname | String | Velocity host name including port if applicable (e.g., `velocityHost:9000`). | API only |
| Integration Name | String | A descriptive name used to reference the integration. | Yes |
| SonarQube Auth Token | Secure | Authentication token generated in SonarQube. | Yes |
| SonarQube URL | String | Base URL of the SonarQube server including port number (e.g., `http://sonarQubeHost`). | Yes |

#### API Example: Velocity

```bash
curl -k --request POST \
  --url "https://<velocity_hostname>/reporting-consumer/integration" \
  --header 'Content-Type: application/json'
  --data '{
    "type": "sonarqubePlugin",
    "tenant_id": "<tenant_id>",
    "name": "<integrationName>",
    "properties": {
      "url": "<sonarqubeUrl>",
      "authToken": "<sonarqubeAuthToken>"
    }
  }'
```

### 2. Creating the SonarQube Webhook

The SonarQube webhook must target the Velocity integration’s endpoint URL which has two variables: the “hostName:port” for Velocity, as well as the integration ID. This means that the DevOps Velocity integration must always be setup first and that the integration ID is known before we can provide the webhook URL. Once the endpoint URL is constructed, it is simply a matter of creating a webhook in SonarQube with that URL. For information on creating the webhook, see the SonarQube Webhooks documentation. In general, you will need administrative permissions and can add two types of webhooks within SonarQube:   

1) Project scoped webhooks   
2) Globally scoped webhooks   

What you have available will depend on your version of SonarQube but it is good to be aware that a global webhook will send data for all projects, while a project scoped webhook will only send data for the specific project to which it belongs. Also, in general, SonarQube limits its number of webhooks at both the project and global levels. Refer to your SonarQube documentation for details of webhook management.