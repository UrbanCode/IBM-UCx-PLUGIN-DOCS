
# Cloud Foundry - Process Steps

## Table of Contents

- [Cloud Foundry - Process Steps](#cloud-foundry---process-steps)
  - [Table of Contents](#table-of-contents)
    - [Bind Service](#bind-service)
    - [CF Auto-Configure](#cf-auto-configure)
    - [CF Discovery](#cf-discovery)
    - [Create Domain](#create-domain)
    - [Create Route](#create-route)
    - [Create Service](#create-service)
    - [Create Subdomain](#create-subdomain)
    - [Create or Update User-Provided Service](#create-or-update-user-provided-service)
    - [Delete App](#delete-app)
    - [Delete Domain](#delete-domain)
    - [Delete Route](#delete-route)
    - [Delete Service](#delete-service)
    - [Delete Subdomain](#delete-subdomain)
    - [Execute CF Script](#execute-cf-script)
    - [Execute CF bash file](#execute-cf-bash-file)
    - [Map Route](#map-route)
    - [Push Application](#push-application)
    - [Restart App](#restart-app)
    - [Start App](#start-app)
    - [Stop App](#stop-app)
    - [Unbind Service](#unbind-service)
    - [Unmap Route](#unmap-route)
    - [Roles in the CloudFoundry plug-in](#roles-in-the-cloudfoundry-plug-in)
    - [CloudFoundryApp](#cloudfoundryapp)
    - [CloudFoundryController](#cloudfoundrycontroller)
    - [CloudFoundryOrganization](#cloudfoundryorganization)
    - [CloudFoundrySpace](#cloudfoundryspace)

### Bind Service

Bind a CF service instance onto a CF application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application Name | String | Name of the application to bind the service to. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Service name | String | Name of the service to be bound. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### CF Auto-Configure

Discover and configure all organizations and spaces for each organization into a resource tree in DevOps Deploy.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Cloud Foundry API | String | The url of the Cloud Foundry API endpoint. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | String | The password to authenticate with the Cloud Foundry server. | No |
| Cloud Foundry Username | String | The username to authenticate with the Cloud Foundry server. | No |
| Resource | String | The Resource being configured | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |

### CF Discovery

This step will discover if Cloud Foundry is on an agent by checking common installation paths.If it is, it will assign the role to the resource and set the command path property.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API Endpoint | String | Provide the API Endpoint if the config.json file does not exist or is not configured correctly on the agent to be used during discovery. | No |
| CF_HOME Directory | String | Full path to your CF_HOME directory for installation verification. Not required if the property is a system environment variable. | No |
| Override CF CLI Path | String | Provide the full path to the cf executable file to override the auto discovery path. | No |
| Resource | String | The Resource being configured | No |

### Create Domain

Create a domain in an org.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain owning the route. | Yes |
| Organization | String | The name of the organization where the application will be deployed. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Create Route

Create a url route in a space.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain owning the route. | Yes |
| Hostname | String | The hostname within the domain for the url route. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Create Service

Create a new Cloud Foundry Service.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Service name | String | Name of the service. | Yes |
| Service plan | String | Service plan. | Yes |
| Service type | String | Type of service. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Create Subdomain

Create a subdomain in an org.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain i.e. domain.org of subdomain myapp.domain.org. | Yes |
| Organization | String | The name of the organization where the application will be deployed. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |
| Subdomain | String | Name of the subdomain i.e. myapp of myapp.domain.org. | Yes |

### Create or Update User-Provided Service

Create or update a user-provided service instance.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Credentials | String | Credentials, in JSON format, to be exposed in the VCAP_SERVICES environment variable for bound applications. A full file path may also be specified. Example: {username:admin, password:pa55woRD}`` Windows users must escape each double quote with a backslash. | Yes |
| Log Drain URL | String | URL to which logs for bound applications will be streamed. | No |
| Organization | String | The name of the organization where the application will be deployed. | Yes |
| Route Service URL | String | URL to which requests for bound routes will be forwarded. Scheme for this URL must be https. Note: This feature was added in Cloud Foundry CLI v6.16.0. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | Yes |
| User-Provided Service | String | The name of the user-provided service | Yes |

### Delete App

Delete an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Delete mapped routes | Boolean | Also delete any mapped routes. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Delete Domain

Delete a domain.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain to remove. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Delete Route

Delete a route.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain owning the route. | No |
| Hostname | String | The hostname within the domain for the url route. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Delete Service

Delete a Cloud Foundry Service.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Service name | String | Name of the service. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Delete Subdomain

Delete a subdomain.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | Name of the domain i.e. domain.org of myapp.domain.org. | Yes |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |
| Subdomain | String | Name of the subdomain i.e. myapp of myapp.domain.org. | Yes |

### Execute CF Script

Execute a CF script. The context will be setup with the authenticated user and target space. cf.command line will be available to the script.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Arguments | String | Arguments to be passed to the script, separated by spaces. | No |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Script | String | Each command needs to be on a new line. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Execute CF bash file

Execute a bash file. The context will be setup with the authenticated user and target space. CF command line will be available to the bash script. The sh command must be available from the command line.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Arguments | String | Arguments to be passed to the script, separated by spaces. | No |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Script | String | Path to the cf.bash file. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Map Route

Add a url route to an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | The domain to use. (e.g. example.com). | Yes |
| Hostname | String | The hostname within the domain for the url route. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Push Application

Push application with or without a manifest file. If a manifest file is found then properties are used as overrides.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application Name | String | The name of the application to use when deployed. Required if not using a manifest. | No |
| Application Path | String | Name of zip file or other file to push. If this file isnt in your working directory you must specify a full file path. (Otherwise just the name of the file e.g. myApp.zip) | No |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Custom buildpack | String | Custom buildpack by name (e.g. my-buildpack) or GIT URL (e.g. <https://github.com/heroku/heroku-buildpack-play.git>). | No |
| Disk limit | String | The disk limit (e.g. 256M, 1024M, 1G). | No |
| Domain | String | Set a custom domain to be used when deploying the application. | No |
| Manifest file | String | Name of the manifest file. If this file isnt in your working directory you must specify a full file path. (Otherwise just the name of the file e.g. manifest.xml) | No |
| Memory limit | String | The memory limit (e.g., 256M, 1024M, 1G). | No |
| No hostname | Boolean | Map the root domain to this application. | No |
| No manifest | Boolean | Ignore the manifest file if one exists. | No |
| No route | Boolean | Does not create a URL route for the application if selected. Manually create and map a route later. | No |
| No start | Boolean | Does not start the application if selected. | No |
| Number of instances | String | The number of instances of the application that will be created. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Random route | Boolean | Create a random route for this app. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |
| Stack | String |  Stack to use (a stack is a pre-built file system, including an operating system, that can run apps). | No |
| Sub-domain | String | Define a sub-domain for your application. This is useful to ensure that the URL route for the application is unique within the domain. | No |
| Timeout | String | Maximum time (in seconds) to wait for application start, other server side timeouts may apply. | No |

### Restart App

Restart an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Start App

Start an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Stop App

Stop an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Unbind Service

Unbind a CF Service from a cf.application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Service name | String | Name of the service. | Yes |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Unmap Route

Remove a url route to an application.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| API | String | A url of the target Cloud Foundry system, such as <http://api.ng.bluemix.net>. | Yes |
| Application name | String | Name of the application. | Yes |
| CF_HOME | String | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used for each step if not specified. | No |
| Cloud Foundry CLI Path | String | The path to the cf command line script. | No |
| Cloud Foundry Password | Password | The password of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Cloud Foundry User | String | The user name of the account that will interact with Cloud Foundry system. Property is required unless authenticated outside of DevOps Deploy. | No |
| Domain | String | The domain to use. (e.g. example.com). | Yes |
| Hostname | String | The hostname within the domain for the url route. | No |
| Organization | String | The name of the organization where the application will be deployed. | No |
| Skip SSL Validation | Boolean | If checked, SSL validation will be skipped. | No |
| Space | String | The name of the space within the organization that the application will be deployed. (e.g some-space) | No |

### Roles in the CloudFoundry plug-in

The plug-in adds these roles automatically to resources. You cannot add these roles manually.

- [CloudFoundryApp](#cloudfoundryapp_role)
- [CloudFoundryController](#cloudfoundrycontroller_role)
- [CloudFoundryOrganization](#cloudfoundryorganization_role)
- [CloudFoundrySpace](#cloudfoundryspace_role)

### CloudFoundryApp

Role for resources that represents a Cloud Foundry application within an organization and space in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.app | String | The Name of the Cloud Foundry application. | ``${p:resource/cf.app}`` |

### CloudFoundryController

Role for resources that represents a Cloud Controller in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.api | String | The url of the Cloud Foundry API endpoint. | ``${p:resource/cf.api}`` |
| cf.commandPath | String | The path to the directory where the cf command line executable resides. You may reference this property as cf.commandPath. | ``${p:resource/cf.commandPath}`` |
| cf.password | Password | The Cloud Foundry password to use. | ``${p:resource/cf.password}`` |
| cf.username | String | The Cloud Foundry username. | ``${p:resource/cf.username}`` |

### CloudFoundryOrganization

Role for resources that represents a Cloud Foundry organization in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.org | String | The Name of the Cloud Foundry organization. | ``${p:resource/cf.org}`` |

### CloudFoundrySpace

Role for resources that represents a Cloud Foundry space within an organization in a Cloud Foundry instance.

| Name | Type | Description | Reference |
| --- | --- | --- | --- |
| cf.space | String | The Name of the Cloud Foundry space. | ``${p:resource/cf.space}`` |

|Back to ...||Latest Version|Cloud Foundry |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[35.1122072](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/cloud-foundry/cloud-foundry-35.1122072.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Troubleshooting](troubleshooting.md)|[Downloads](downloads.md)|
