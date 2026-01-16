# Usage

---
You can use the Terraform plug-in to execute any terraform script related to the AWS, GCP and Azure Cloud Services.

## **Prerequisites:**

User should have Terraform , AWS CLI(AWS provider), gcloud(GCP provider), Azure CLI(Azure Provider) installed in their DevOps Deploy Agent's machine.

## **Example 01 : AWS **

You can use this plug-in to create an EC2 instance.

You can have a terraform script as below that has all the specifications to create an EC2 instance in a file named EC2.tf.

```
provider "aws" {
region = "us-east-1"
}

resource "aws_instance" "example" {
ami           = "ami-01816d07b1128cd2d"
instance_type = "t2.micro"
subnet_id     = "subnet-id*******"

tags = {
Name = "instance-name-xyz"
}

associate_public_ip_address = false
security_groups = ["sg-id******"]
}
```
You need to provide the full path of the script as shown in the image below.
You need to provide the path of the Terraform executable command and the AWS role that is needed to assume.

![Image 1](media/StepTerraform.png)


Users can select the operation type which they want to run for their terraform script as shown in the image below.


![Image 3](media/opType.png)


Once the plugin step is run it will automatically assume the AWS role and run the essential Terraform commands according to the operation selected. 
which are **_"terraform init"_** and **_"terraform (apply/destroy) -auto-approve"_** or **_terraform plan_** to launch an ec2 instance.


While running Apply operation users can verify if the EC2 instance got created in the AWS console by searching the Tag name **_"instance-name-xyz"_**.


![Image 2](media/StepLog.png)


While running Plan operation users can expect our plugin step to generate 3 output properties which are add, change and destroy.
Users can use the values of these properties to run any other step in their process.



![Image 4](media/opp.png)


## **Example 02 : GCP**

You can use this plug-in to create vm inside GCP .

You can have a terraform script as below that has all the specifications to create a vm inside GCP.

```
provider "google" {
  project     = var.project_id
  region      = var.region
  zone        = var.zone
}

resource "google_compute_instance" "example_vm" {
  name         = "example-vm-2"
  machine_type = "e2-medium"
  zone         = var.zone

  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"
    }
  }

  network_interface {
    subnetwork   = "projects/${var.project_id}/regions/${var.region}/subnetworks/${var.subnetwork_name}"
    access_config {}
  }
}

# ----------------------------
# Variables
# ----------------------------

variable "project_id" {
  default = "<your-project-id>"
}

variable "region" {
  default = "<your-region>"
}

variable "zone" {
  default = "<your-zone>"
}

variable "subnetwork_name" {
  default = "hclsw-amber-data-subnet-us-central1"
}
```

## **Example 03 : Azure**

You can use this plug-in to create vm inside Azure .

You can have a terraform script as below that has all the specifications to create a vm inside Azure .

```
terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.5.0"
}

# --------------------------------------
# Provider
# --------------------------------------
provider "azurerm" {
  features {}
  subscription_id = "<subscription-id>"
  resource_provider_registrations = "none"
}

# --------------------------------------
# Existing Resource Group
# --------------------------------------
data "azurerm_resource_group" "existing_infrg" {
  name = "<resource_group_name>"
}

# --------------------------------------
# Existing Virtual Network
# --------------------------------------
data "azurerm_virtual_network" "vnet" {
  name                = "<virtual-network-name>"
  resource_group_name = data.azurerm_resource_group.existing_infrg.name
}

# --------------------------------------
# Existing Subnet 
# --------------------------------------
data "azurerm_subnet" "subnet" {
  name                 = "<subnet-name>"
  virtual_network_name = data.azurerm_virtual_network.vnet.name
  resource_group_name  = data.azurerm_resource_group.existing_infrg.name
}

# --------------------------------------
# Network Interface
# --------------------------------------
resource "azurerm_network_interface" "nic" {
  location            = data.azurerm_resource_group.existing_infrg.location
  resource_group_name = data.azurerm_resource_group.existing_infrg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = data.azurerm_subnet.subnet.id
    private_ip_address_allocation = "Dynamic"
  }
}

# --------------------------------------
# Linux Virtual Machine 
# --------------------------------------
resource "azurerm_linux_virtual_machine" "vm" {
  resource_group_name = data.azurerm_resource_group.existing_infrg.name
  location            = data.azurerm_resource_group.existing_infrg.location
  size                = "Standard_D2s_v3/<size-of-vm>"

  admin_username                  = "<username>"
  disable_password_authentication = true

  network_interface_ids = [
    azurerm_network_interface.nic.id
  ]

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "<publisher>"
    offer     = "<offer>"
    sku       = "<sku>"
    version   = "<version>"
  }

  admin_ssh_key {
    username   = "<username>"
    public_key = file("${path.module}/dev_key.pub")
  }
}
```

Below step property need to configure for Azure provider , When user is providing credentials for Service Provider then Azure VM Name, Azure ClientID , Azure SecretKey , Azure TenantId, Azure sshKey is mandatory . But for CLI login only Azure VM Name and Azure sshKey is mandatory .

![Image 5](media/azureStep.png)

Below one is execultion logs

![Image 6](media/azureLog.png)




