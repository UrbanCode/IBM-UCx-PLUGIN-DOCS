# Amazon EC2 - Process Steps

- [Amazon EC2 - Steps](#amazon-ec2---steps)
- [Steps](#steps)
    - [Steps](#steps-1)
    - [Process steps in the AmazonEC2 plug-in](#process-steps-in-the-amazonec2-plug-in)
    - [Associate IPs](#associate-ips)
    - [Create Security Group](#create-security-group)
    - [Deregister Instances with LoadBalancer](#deregister-instances-with-loadbalancer)
    - [Get Public DNS](#get-public-dns)
    - [Launch Instances](#launch-instances)
    - [Register Instances with LoadBalancer](#register-instances-with-loadbalancer)
    - [Terminate Instances](#terminate-instances)
    - [Wait for instances](#wait-for-instances)


## Associate IPs

Associate Elastic IP addresses with instances.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the Amazon Web Services (AWS) SDK. |  | Yes |
| Access Key ID | String | The EC2 access key ID value that is used to log in. | Yes |
| IPs | String | A list of one or more elastic IP addresses to associate with instances.Put each address on a new line. | Yes |
| Instance IDs | String | A list of IDs that corresponds to the elastic IP addresses to associate with instances. Separate each ID with a comma. | Yes |
| Secret Key | String | The EC2 secret key. | Yes |

## Create Security Group

Create a security group from a file.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID value that is used to log in. | Yes |
| Definition File | String | The file that describes the allowed IPs and ports for the security group.     | No |
|                 |        | Create the file in the following format:                                      |    |
|                 |        | `<SecurityGroup name="*name*" description="description" vpcId="ID optional">` |    |  
|                 |        | `<ipPermission protocol="tcp" fromPort="22" toPort="22">`                     |    |
|                 |        | `<ipRange value="0.0.0.0/0"/></ipPermission></SecuirtyGroup>`                 |    |
|                 |        | If this property is blank, an empty security group is created.                |    |
| Description | String | The description of the security group to create.                      | No |
|             |        | This property is used if you are not using a file to add permissions. |    |
| Name | String | The name of the security group to create. This property is used if you are not using a file to add permissions. | No |
|      |        | This property is used if you are not using a file to add permissions.                                           |   |
| Secret Key | String | The EC2 secret key value. | Yes |
| VPC ID | String | The ID of the virtual private cloud (VPC) to use, if you are not using a file to add permissions. | No |

## Deregister Instances with LoadBalancer

This step deregisters instances with an Amazon load balancing feature.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID value to use to log in. | Yes |
| Instance IDs | String | A list of one or more IDs of the instances to be deregistered. Separate each ID with a comma. | Yes |
| Load Balancer Name | String | The name of the EC2 account load balancer to deregister the instances from. | Yes |
| Secret Key | String | The EC2 secret key | Yes |

## Get Public DNS

Get the public Domain Name System (DNS) hostname for the specified instance IDs. Results are returned in a comma-separated list in the **dns** property.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID value to use to log in. | Yes |
| Instance IDs | String | A list of instance IDs for which the DNS hostname is to be retrieved. Separate each instance ID with a comma. The returned DNS hostnames are in the same order that the IDs are specified. | Yes |
| Secret Key | String | The EC2 secret key value. | Yes |

## Launch Instances

Launch instances of the given Amazon Machine Image (AMI).

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| # of instances | String | The number of EC2 instances to start. | Yes |
| AMI ID | String | The AMI ID of the instances to be started. | Yes |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID to use to login. | Yes |
| Availability Zone | String | The zone to start the instances in. | No |
| Instance Type | String | The type of instances to run. Valid values are as follows: m1.small, m1.large, m1.xlarge, m2.xlarge, m2.4xlarge, c1.medium, and c1.xlarge. | Yes |
| Keypair | String | The keypair value to start the instances with. | No |
| Secret Key | String | The EC2 secret key value. | Yes |
| Security Group | String | A list of security group names to use. Separate each group name with a comma. | No |
| User data | String | The user data to pass to the instance. | No |

## Register Instances with LoadBalancer

Register an instance with an Amazon Load Balancer.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID to use to login. | Yes |
| Instance IDs | String | A list of instance IDs to associate with the load balancer. Separate each ID with a comma. | Yes |
| Load Balancer Name | String | The load balancer name that is associated with the EC2 account to register the instances with. | Yes |
| Secret Key | String | The EC2 secret key | Yes |

## Terminate Instances

Terminate instances with the given instance IDs.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID to use to login. | Yes |
| Instance IDs | String | A list of instance IDs to be terminated. Separate each instance ID with a comma. | Yes |
| Secret Key | String | The EC2 secret key. | Yes |

## Wait for instances

Wait for instances to be in a certain state.

| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| AWS Jar | String | The fully qualified path to the JAR file for the AWS SDK. | Yes |
| Access Key ID | String | The EC2 access key ID to use to login. | Yes |
| Instance IDs | String | A list of instance IDs that correspond to the IPs to associate with instances. Separate each instance ID with a comma. | Yes |
| Secret Key | String | The EC2 secret key value. | Yes |
| State | String | The expected instance state. | Yes |
| Timeout | String | The timeout value for this step. | Yes |
