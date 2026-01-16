# Overview

---

The IBM DevOps Deploy Plugin for Terraform is designed to integrate Terraform capabilities with multiple cloud providers, including AWS, Microsoft Azure, and Google Cloud Platform (GCP).

This enables automated provisioning and management of cloud resources across supported providers within an enterprise DevOps pipeline.

The plugin allows you to deploy infrastructure using Terraform ensuring consistency, repeatability, and automation in your DevOps workflows.


## Compatibility

The plug-in is compatible with:

* UrbanCode Deploy version 7.0.0 or later
* IBM Java 8 or higher

## Available Steps

* Run Terraform Command (AWS).

## Installation

No special steps are required for installation. See [Installing plug-ins in UrbanCode products](https://community.ibm.com/community/user/wasdevops/blogs/laurel-dickson-bull1/2022/06/13/install-plugins).

## History

### Version 4

* Added support for Azure provider to run , plan and destroy

### Version 3

* Allow Users to run plan and Destroy command for GCP

### Version 2.1

* Allow Users to run plan and Destroy command for AWS resources

### Version 0.1

* Initial release of the new Terraform Plugin. Allow users to create a AWS resources