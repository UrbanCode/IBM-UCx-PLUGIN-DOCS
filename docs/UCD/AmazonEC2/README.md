
# Amazon EC2

Amazon Elastic Compute Cloud (EC2) provides virtual compute resources to users for running their own applications and allows scalable deployments. This plug-in provides steps for launching instances, terminating instances, associating IP addresses, waiting for instances, creating a security group, and getting the public DNS for the Amazon EC2 tool. The Amazon [AWS SDK](http://aws.amazon.com/sdkforjava/) is required and must be downloaded from Amazon separately.

The[DevOps Deploy Blueprint Designer](/product/deploy/blueprint-designer/) can interact with AWS in a more declarative manner, and should be considered as a possible alternative to this plugin.

**Platform Support:**

* This plug-in is supported to run on all operating systems that are supported by the IBM DevOps Deploy agent, except for z/OS.
* This plug-in is supported to run against Amazon AWS SDK v1.3.7 or higher.

**Note:** The IBM DevOps Deploy blueprint designer also provides an integration with Amazon EC2. For more information, see the [IBM DevOps Deploy product help](https://www-01.ibm.com/support/knowledgecenter/#!/SS4GSP_6.2.0/com.ibm.edt.doc/topics/cloud_connect_amazon_server.html).


## Available Steps

Associate IPs -  Associate Elastic IPs with instances.

Create Security Group - Create a security group from a file.

Deregister Instances with LoadBalancer - This step will deregister instances with an Amazon Load Balancer.

Get Public DNS - Get the public dns for given instance ids. Returned in a comma-separated list in property dns.

Launch Instances - Launch instances of the given AMI.

Register Instances with LoadBalancer - This step will register instances with an Amazon Load Balancer.

Terminate Instances - Terminate instances with the given instance ids.

Wait for instances - Wait for instances to be in a certain state.



|Back to ...||Latest Version|||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Deploy Plugins](../README.md)|[6.1100863](https://raw.githubusercontent.com/UrbanCode/IBM-UCD-PLUGINS/main/files/AmazonEC2/AmazonEC2-6.1100863.zip)|[Overview](overview.md)|[Steps](steps.md)|[Usage](usage.md)|[Downloads](downloads.md)|
