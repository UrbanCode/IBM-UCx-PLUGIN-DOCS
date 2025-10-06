# Steps

---

## Process steps in the Terraform-IAAC plug-in

### Run Terraform Command (AWS)

Use this step to run a terraform script.

| Name               | Type     | Description                                                                                                                                           | Required |
|--------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Terraform Contents | String   | Contents of the .tf file Or Full path of the .tf file that contains all configurations needed for a resource creation for any cloud service provider. | Yes      |
| Terraform Command  | String   | Full path of the terraform installation. Ex: /usr/local/bin/.                                                                                         | Yes      |
| AWS Role           | String   | AWS Role to assume.                                                                                                                                   | No       |
| Operation Type     | Dropdown | Type of the Terraform operation to perform (Apply/Plan/Destroy).                                                                                      | No       |
