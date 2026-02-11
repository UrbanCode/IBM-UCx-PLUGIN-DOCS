# Process Steps

## Bind Service

This step binds a Cloud Foundry service instance onto a Cloud Foundry application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example,  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization where the application will be deployed, for example: some-space | No |
| Application Name | textBox | The name of the application to bind to the service. | Yes |
| Service name | textBox | The name of the service to be bound. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Create Domain

This step creates a domain in an organization.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example,  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | Yes |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space | No |
| Domain | textBox | Name of the domain owning the route. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Create Route

This step creates a URL route in a space.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example,  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Domain | textBox | Name of the domain owning the route. | Yes |
| Hostname | textBox | The hostname within the domain for the URL route. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| CLI Version | textBox | Specify 7 if using version cli 7 else leave blank. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Create or Update User-Provided Service

This step creates or updates a user-provided service instance.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example,  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | Yes |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | Yes |
| User-Provided Service | textBox | The name of the user-provided service. | Yes |
| Credentials | textAreaBox | Credentials, in JSON format, to be exposed in the VCAP_SERVICES environment variable for bound applications. A full file path may also be specified. Example: {"username":"admin", "password":"pa55woRD"} Windows users must escape each double quote with a backslash. | Yes |
| Log Drain URL | textBox | The URL to which logs for bound applications will be streamed. | No |
| Route Service URL | textBox | The URL to which requests for bound routes will be forwarded. Scheme for this URL must be https. Note: This feature was added in Cloud Foundry CLI v6.16.0. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Create Service

This setp creates a new Cloud Foundry Service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Service name | textBox | The name of the service. | Yes |
| Service type | textBox | The type of service. | Yes |
| Service plan | textBox | The service plan. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Create Subdomain

This step creates a subdomain in an organization.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | Yes |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Subdomain | textBox | The name of the subdomain, as in: myapp of myapp.domain.org. | Yes |
| Domain | textBox | The name of the domain, as in: domain.org of subdomain myapp.domain.org. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Delete App

This step deletes an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A url of the target Cloud Foundry system, for example:  		`http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Delete mapped routes | checkBox | Also delete any mapped routes. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Delete Domain

Delete a domain.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Domain | textBox | The name of the domain to remove. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Delete Route

This step deletes a route.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Domain | textBox | Name of the domain owning the route. | No |
| Hostname | textBox | The hostname within the domain for the URL route. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not ne performed | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Delete Service

This step deletes a Cloud Foundry Service.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Service name | textBox | The name of the service. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Delete Subdomain

This step deletes a subdomain.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Subdomain | textBox | The name of the subdomain, as in: myapp of myapp.domain.org. | Yes |
| Domain | textBox | The name of the domain, as in: domain.org of myapp.domain.org. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Execute CF Script

This step executes a cf script. The context will be set up with the authenticated user and target space.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Script | textAreaBox | Each command needs to be on a new line. | Yes |
| Arguments | textBox | These are the arguments to be passed to the script, separated by spaces. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Execute CF bash file

This step executes a bash file. The context will be set up with the authenticated user and target space. The sh command must be available from the command line.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Script | textBox | The path to the cf.bash file. | Yes |
| Arguments | textBox | These are the arguments to be passed to the script, separated by spaces. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Map Route

This step adds a URL route to an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example:  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Domain | textBox | The domain to use, as in: example.com. | Yes |
| Hostname | textBox | The hostname within the domain for the url route. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Push Application

This step pushes the application with or without a manifest file. If a manifest file is found, then properties are used as overrides.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example:  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Application Name | textBox | The name of the application to use when deployed. Application Name is required, if not using a manifest. | No |
| Application Path | textBox | The name of zip file or other file to push. If this file isn't in your working directory, you must specify a full file path. (Otherwise just the name of the file e.g. 'myApp.zip') | No |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Manifest file | textBox | The name of the manifest file. If this file isn't in your working directory, you must specify a full file path. (Otherwise, just specify the name of the file, for example: 'manifest.xml') | No |
| Domain | textBox | Set a custom domain to be used when deploying the application. | No |
| Sub-domain | textBox | Define a subdomain for your application. This is useful to ensure that the URL route for the application is unique within the domain. | No |
| Number of instances | textBox | The number of instances of the application that will be created. | No |
| Memory limit | textBox | The memory limit, for example: 256M, 1024M, 1G. | No |
| Disk limit | textBox | The disk limit, for example: 256M, 1024M, 1G. | No |
| Custom buildpack | textBox | The name of the custom buildpack, for example: my-buildpack, or the Git URL, for example: `https://github.com/heroku/heroku-buildpack-play.git).` | No |
| Stack | textBox | The stack to use (a stack is a prebuilt file system, including an operating system, that can run applications). | No |
| Timeout | textBox | The maximum time (in seconds) to wait for application start. Other server side timeouts may apply. | No |
| No start | checkBox | Does not start the application, if selected. | No |
| No route | checkBox | Does not create a URL route for the application, if selected. Manually create and map a route later. | No |
| No manifest | checkBox | Ignore the manifest file, if one exists. | No |
| No hostname | checkBox | Map the root domain to this application. | No |
| Random route | checkBox | Create a random route for this application. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| Strategy | checkBox | If checked, Deployment strategy, either rolling or null. | No |
| Endpoint | textBox | Valid path on the app for an HTTP health check. | No |
| No Wait | checkBox | If checked, Exit when the first instance of the web process is healthy. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| CLI Version | textBox | Specify 7 if using version cli 7 else leave blank. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Restart App

This step restarts an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, sfor example:  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Start App

This step starts an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example:  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plugin but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Stop App

This step stops an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example:  `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for exaple: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Unbind Service

This step unbinds a Cloud Foundry Service from a cf.application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Service name | textBox | The name of the service. | Yes |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## Unmap Route

This step removes a url route to an application.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| API | textBox | A URL of the target Cloud Foundry system, for example: `http://api.ng.bluemix.net.` | Yes |
| Cloud Foundry User | textBox | The user name of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Cloud Foundry Password | secureBox | The password of the account that will interact with the Cloud Foundry system. Property is required, unless authenticated outside of UrbanCode Deploy. | Yes |
| Organization | textBox | The name of the organization where the application will be deployed. | No |
| Space | textBox | The name of the space within the organization that the application will be deployed, for example: some-space. | No |
| Application name | textBox | The name of the application. | Yes |
| Domain | textBox | The domain to use, as in: example.com. | Yes |
| Hostname | textBox | The hostname within the domain for the URL route. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |
| CF_HOME | textBox | Set the CF_HOME variable to explicitly define the location of the config.json file. A new CF_HOME will be used              for each step, if not specified. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Use Shell Interpreter | selectBox | Use a shell to interpret cf commands. This provides backward compatibility with the community plug-in, but does not escape special characters. | No |
| Environment Variables | textAreaBox | Set environment variables using the following syntax: name=value. Separate each pair with a new line or comma. | No |

## CF Auto-Configure

This step discovers and configures all organizations and spaces for each organization into a resource tree in UrbanCode Deploy.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Cloud Foundry API | textBox | The URL of the Cloud Foundry API endpoint. | No |
| Cloud Foundry CLI Path | textBox | The path to the cf command line script. | No |
| Cloud Foundry Username | textBox | The username to authenticate with the Cloud Foundry server. | Yes |
| Cloud Foundry Password | textBox | The password to authenticate with the Cloud Foundry server. | Yes |
| Resource | textBox | The Resource being configured. | No |
| Skip SSL Validation | checkBox | If checked, SSL validation will not be performed. | No |

## CF Discovery

This step will discover if Cloud Foundry is on an agent, by checking common installation paths. If Cloud Foundry is on the agent, UrbanCode Deploy will assign the role to the resource and set the command path property.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Resource | textBox | The Resource being configured. | No |
| Override CF CLI Path | textBox | Provide the full path to the cf executable file to override the auto discovery path. | No |
| CF_HOME Directory | textBox | Full path to your CF_HOME directory for installation verification.              Not required if the property is a system environment variable. | No |
| API Endpoint | textBox | Provide the API endpoint if the config.json file does not exist or is not configured correctly              on the agent to be used during discovery. | No |

