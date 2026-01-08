# Docker - Roles

## ImageRegistry Role

Role for resources that represents a Container Image Registry.

| Name | Type | Description |
| --- | --- | --- |
| AWS Command Line File | String | When type is Amazon ECR. Command or path to the AWS command line interface. If specified, AWS authentication will be used.Ensure the User Name and Password properties are set to the AWS Access ID and Secret Key respectively. |
| AWS Region | String | When type is Amazon ECR. Amazon ECR Region. |
| Allow Insecure Connections | String | Set this property to true to allow insecure registry connections. |
| CF\_HOME | String | When type is IBM Containers. The CF\_HOME environment variable specifies the location of config.json for authentication. |
| Email | String | Email address associated with User Name. |
| ICS API | String | When type is IBM Containers. The api to use when logging in to IBM Cloud Container Registry. |
| ICS Organization | String | When type is IBM Containers. The IBM Cloud organization to login to. |
| ICS Space | String | When type is IBM Containers. The IBM Cloud space to login to. |
| ICS apikey | Password | When type is IBM Containers. The IBM Cloud apikey to login with. |
| Image Registry Host | String | The Docker image registry server. |
| Password | Password | Password used to access the image registery. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |
| Registry Type | Enumeration: | Specify which API to connect with the Image Registry. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |
| User Name | String | User name used to access the image registery. When using IBM Containers, provide IBM Cloud Credentials. For Amazon ECR, use AWS access key as username and secret key as password. |
