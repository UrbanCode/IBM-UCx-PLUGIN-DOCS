# Git Install - Process Steps

## Install Git

Install Git v1.8.3.4 on a target server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |

## Create Repository

Create an empty repository on GitHub.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| GitHub Hostname | textBox | The GitHub hostname you want to create the repository on. Leave blank to create the repository on the public github.com. | No |
| GitHub Username | textBox | Specify the username for GitHub credentials. | Yes |
| GitHub Password | secureBox | Specify the password for GitHub credentials. | Yes |
| Organization | textBox | Specify an organization to create the repository under. The Username must be a part of this organization. | No |
| Repository Name | textAreaBox | The name of the respository. Separate multiple names with a new line or comma. | Yes |
| Description | textBox | Specify a description for the respository. | No |
| Homepage | textBox | Specify a homepage to associate with the repository. | No |
| Private Repository | checkBox | Select to create a private repository. Private repositories required a paying GitHub account. | No |
| Enable Issues | checkBox | Enable Issues tab to be created within the respository. | No |
| Enable Wiki | checkBox | Enable a Wiki documentation tab within the respository. | No |
| Enable Releases | checkBox | Enable a Releases tab within the repository. | No |
| Team ID | textBox | Grant a team access to this repository through 6 digit ID. Organization property is required. | No |
| Empty README | checkBox | Initialize with an empty README file. | No |
| .gitignore Template | textBox | Specify the repository's .gitignore template. Name the template without its extension. | No |
| License Template | textBox | Specify the repository's license template. Name the template without its extension. | No |

## Migrate Repository

Migrate an external Git Repository to GitHub.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| External Repo URL | textBox | The full (http:// or ssh://) external repo.git URL to migrate the repository from. | Yes |
| External Username | textBox | Specify the username for external credentials. Only required for 'ssh://' clone URLs. | Yes |
| External Password | secureBox | Specify the password for external credentials. | Yes |
| GitHub Repo HTTPS URL | textBox | The GitHub HTTPS URL to use as the new repository. This can be copied from the GitHub repository project page. | Yes |
| GitHub Username | textBox | Specify the username for GitHub credentials. | Yes |
| GitHub Password | secureBox | Specify the password for GitHub credentials. | Yes |

