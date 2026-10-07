# CAC AI Skills User Guide

## Overview

The Configuration as Code (CAC) AI Skills enable you to perform DevOps Deploy operations using **natural language** without requiring knowledge of the underlying CAC command syntax.

The AI agent uses the skill definitions to identify the appropriate CAC operation and execute the corresponding CAC CLI command.

### Key Points

* **Start with Setup:** Configure CAC credentials before performing DevOps Deploy operations.
* **Natural Language:** Describe the operation you want to perform using natural language.
* **Flexible Activation:** Skills can be invoked using supported action verbs such as `download`, `get`, `export`, `save`, `fetch`, `upload`, `import`, and `create`.
* **AI Agent Dependency:** Skill triggering and execution depend on the AI agent and model being used.

> **Disclaimer:** The effectiveness of triggering CAC AI Skills depends on the underlying AI agent and model used in the CLI environment. Skill activation accuracy may vary across different models and configurations. Exercise necessary caution and verify the results when working with AI-driven operations.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Skill Installation](#skill-installation)
3. [Setup Skill](#setup-skill)
4. [Download Skills](#download-skills)
5. [Upload Skills](#upload-skills)
6. [Quick Reference](#quick-reference)
7. [Natural Language Examples](#natural-language-examples)
8. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Prerequisites

Before using the CAC AI Skills, ensure the following prerequisites are met:

* **CAC CLI** â€” The CAC CLI must be installed and available in the user's environment.
* **AI-capable CLI environment** â€” An AI agent-enabled CLI environment such as **GitHub Copilot CLI**, **Devin CLI**, or another compatible AI-capable CLI is required.
* **Credentials** â€” CAC credentials must be configured before performing operations. See [Setup Skill](#setup-skill).

### First Steps

1. **Install the CAC AI Skills** in your local agent directory. See [Skill Installation](#skill-installation).
2. **Configure your CAC credentials** using the Setup Skill.
3. **Verify the CAC CLI** is available on your system `PATH`.
4. **Use natural language** to request CAC operations through your AI-capable CLI.
5. **Review the operation and results** before proceeding with changes to your DevOps Deploy environment.

---

## Skill Installation

To use the CAC AI Skills, install the skill definition files into the agent directory used by your AI-capable CLI environment.

### Installation Steps

1. **Locate the skill files** in the CAC distribution package.
2. **Install or copy the skill definitions to the skill location supported by your AI-capable CLI environment.**
3. **Start or restart the AI-capable CLI environment if required.**
4. **Verify that the CAC skills are recognized** by the AI agent.
5. **Use natural language to invoke the required CAC operation.**

---

## Setup Skill

The Setup Skill manages authentication credentials required by the CAC CLI.

### Configure Credentials

Configure the DevOps Deploy server credentials before performing CAC operations.

**Required information:**

* Server URL (for example, `https://server:8443`)
* Username
* Password

**Example requests:**

* `Setup CAC with server https://deploy.company.com:8443, username admin, password <password>`
* `Configure CAC credentials for https://ucd.example.com:8443 with user john and password <password>`

### View Current Configuration

Displays the current CAC configuration with sensitive credential information masked.

**Example requests:**

* `Show CAC configuration`
* `Display current setup`
* `What is my CAC configuration?`

### Clear Credentials

Removes saved CAC credentials from the system.

**Example requests:**

* `Clear CAC credentials`
* `Remove saved credentials`
* `Reset CAC configuration`

### Security

* Passwords are stored securely.
* Passwords are not displayed in plain text.
* HTTPS endpoints are recommended.
* Confirmation is required before overwriting or clearing credentials.

---

## Download Skills

Download skills export DevOps Deploy configurations to JSON or YAML files.

### Application and Component Downloads

| Skill           | Activation Phrases                                | Required         | Optional         |
| --------------- | ------------------------------------------------- | ---------------- | ---------------- |
| **Application** | download/get/export/save/fetch application [name] | Application name | Format, filename |
| **Component**   | download/get/export/save/fetch component [name]   | Component name   | Format, filename |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application MyApp`
* `Get Payment Gateway application as YAML`
* `Export Auth Service app to auth.yaml`
* `Download component MyComponent as YAML`

### Environment Download

**Activation phrases:** `download/get/export/save/fetch environment [name] from [application]`

**Required:** Environment name, Application name

**Optional:** Format, filename

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download environment DEV from MyApp`
* `Get Production environment of Payment Gateway`
* `Export TEST environment from Auth Service to test.yaml`

### Process Downloads

#### Application and Component Processes

| Skill                   | Activation Phrases                                                       | Required                       |
| ----------------------- | ------------------------------------------------------------------------ | ------------------------------ |
| **Application Process** | download/get/export/save/fetch application process [name] from [app]     | Process name, Application name |
| **Component Process**   | download/get/export/save/fetch component process [name] from [component] | Process name, Component name   |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application process Deploy from MyApplication`
* `Get Build Process from Payment Service application as YAML`
* `Download component process Build from MyComponent`

#### Generic and Approval Processes

| Skill                         | Activation Phrases                                              | Required     |
| ----------------------------- | --------------------------------------------------------------- | ------------ |
| **Generic Process**           | download/get/export/save/fetch generic process [name]           | Process name |
| **External Approval Process** | download/get/export/save/fetch external approval process [name] | Process name |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download generic process SystemDeploy`
* `Get external approval process ApprovalGate as YAML`

#### Template Processes

| Skill                            | Activation Phrases                                                 | Required     |
| -------------------------------- | ------------------------------------------------------------------ | ------------ |
| **Application Template Process** | download/get/export/save/fetch application template process [name] | Process name |
| **Component Template Process**   | download/get/export/save/fetch component template process [name]   | Process name |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download application template process StandardDeploy`
* `Get component template process BuildTemplate as YAML`

#### Download All Processes

| Skill                         | Activation Phrases                                       | Required |
| ----------------------------- | -------------------------------------------------------- | -------- |
| **All Application Processes** | download/get/export/save/fetch all application processes | None     |
| **All Component Processes**   | download/get/export/save/fetch all component processes   | None     |
| **All Generic Processes**     | download/get/export/save/fetch all generic processes     | None     |

**Supported formats:** JSON and YAML.

**Example requests:**

* `Download all application processes`
* `Get all component processes as YAML`
* `Export all generic processes to processes.yaml`

---

## Upload Skills

Upload skills import DevOps Deploy configurations from JSON or YAML files.

### Application and Component Uploads

| Skill           | Activation Phrases                                | Required                      |
| --------------- | ------------------------------------------------- | ----------------------------- |
| **Application** | upload/import/create application [name]           | Application name, Source file |
| **Component**   | upload/import/create/push/deploy component [name] | Component name, Source file   |

**Example requests:**

* `Upload application MyApp from myapp.json`
* `Import Payment Gateway from payment-gateway.yaml`
* `Create Auth Service using auth.json`
* `Deploy component MyComponent from mycomponent.json`

### Environment Upload

**Activation phrases:** `upload/import/create environment [name]`

**Required:** Environment name, Source file

**Example requests:**

* `Upload environment DEV from dev-env.json`
* `Import Production environment from prod.yaml`
* `Create QA environment using qa.json`

### Process Uploads

#### Application and Component Processes

| Skill                   | Activation Phrases                              | Required                                    |
| ----------------------- | ----------------------------------------------- | ------------------------------------------- |
| **Application Process** | upload/import/create application process [name] | Process name, Application name, Source file |
| **Component Process**   | upload/import/create component process [name]   | Process name, Component name, Source file   |

**Example requests:**

* `Upload application process Deploy from deploy.json for MyApplication`
* `Import application process Build from build.yaml to Payment Service`
* `Upload component process Build from build.json for MyComponent`

#### Generic and Approval Processes

| Skill                         | Activation Phrases                                    | Required                  |
| ----------------------------- | ----------------------------------------------------- | ------------------------- |
| **Generic Process**           | upload/import/create generic process [name]           | Process name, Source file |
| **External Approval Process** | upload/import/create external approval process [name] | Process name, Source file |

**Example requests:**

* `Upload generic process SystemDeploy from system-deploy.json`
* `Import external approval process ApprovalGate from approval.json`

#### Template Processes

| Skill                            | Activation Phrases                                       | Required                  |
| -------------------------------- | -------------------------------------------------------- | ------------------------- |
| **Application Template Process** | upload/import/create application template process [name] | Process name, Source file |
| **Component Template Process**   | upload/import/create component template process [name]   | Process name, Source file |

**Example requests:**

* `Upload application template process StandardDeploy from standard-deploy.json`
* `Import component template process BuildTemplate from build-template.yaml`

### File Requirements

* File format must be `.json` or `.yaml`.
* File must exist and be readable.
* File content must be valid JSON or YAML.
* The file must contain the configuration required by the corresponding CAC operation.

---

## Quick Reference

### Available Skills

| Category     | Skill                            | Activation                                                  |
| ------------ | -------------------------------- | ----------------------------------------------------------- |
| **Setup**    | Configure/View/Clear Credentials | setup/configure/show/clear CAC                              |
| **Download** | Application                      | download/get/export/save/fetch application                  |
| **Download** | Component                        | download/get/export/save/fetch component                    |
| **Download** | Environment                      | download/get/export/save/fetch environment                  |
| **Download** | Application Process              | download/get/export/save/fetch application process          |
| **Download** | Component Process                | download/get/export/save/fetch component process            |
| **Download** | Generic Process                  | download/get/export/save/fetch generic process              |
| **Download** | External Approval Process        | download/get/export/save/fetch external approval process    |
| **Download** | Application Template Process     | download/get/export/save/fetch application template process |
| **Download** | Component Template Process       | download/get/export/save/fetch component template process   |
| **Download** | All Application Processes        | download/get/export/save/fetch all application processes    |
| **Download** | All Component Processes          | download/get/export/save/fetch all component processes      |
| **Download** | All Generic Processes            | download/get/export/save/fetch all generic processes        |
| **Upload**   | Application                      | upload/import/create application                            |
| **Upload**   | Component                        | upload/import/create component                              |
| **Upload**   | Environment                      | upload/import/create environment                            |
| **Upload**   | Application Process              | upload/import/create application process                    |
| **Upload**   | Component Process                | upload/import/create component process                      |
| **Upload**   | Generic Process                  | upload/import/create generic process                        |
| **Upload**   | External Approval Process        | upload/import/create external approval process              |
| **Upload**   | Application Template Process     | upload/import/create application template process           |
| **Upload**   | Component Template Process       | upload/import/create component template process             |

---

## Natural Language Examples

### Basic Workflow

1. **Setup credentials:**

   `Setup CAC with server https://deploy.company.com:8443, username admin, password <password>`

2. **Download an application:**

   `Download application PaymentService as YAML`

3. **Upload the application:**

   `Upload application PaymentService from PaymentService.yaml`

### Common Operations

**Download multiple entities:**

* `Download component AuthModule`
* `Download application PaymentService`
* `Download environment Production from PaymentService`

**Download processes:**

* `Download application process Deploy from MyApplication`
* `Download all component processes as YAML`
* `Download generic process SystemDeploy`

**Upload with different formats:**

* `Upload application MyApp from myapp.json`
* `Upload component MyComponent from mycomponent.yaml`
* `Upload environment DEV from dev-env.json`

---

## Troubleshooting

| Issue                     | Solution                                                                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **No Cached Credentials** | Run `Setup CAC with server <url>, username <user>, password <password>`                                                                      |
| **File Not Found**        | Verify the file path is correct, the file exists, and the extension is `.json` or `.yaml`.                                                   |
| **Authentication Failed** | Check credentials with `Show CAC configuration` and re-run setup if needed.                                                                  |
| **Entity Not Found**      | Verify the entity name and confirm that it exists on the server.                                                                             |
| **Invalid File Format**   | Ensure the file contains valid JSON or YAML.                                                                                                 |
| **Missing Parameters**    | Provide all required information, such as the application name for environments or the component name for component processes.               |
| **Server Not Accessible** | Verify the server URL and network connectivity.                                                                                              |
| **Skill Not Triggered**   | Verify that the skill files are installed in the correct `.agent` directory and that the AI-capable CLI supports the skills/agent framework. |

---

