# Usage

Configuration as Code (CAC) lets you manage IBM DevOps Deploy entities — components, applications, environments, and processes — as JSON or YAML files that can be version-controlled and deployed programmatically.

> `Security Notice:` Never commit real passwords, encryption keys, tokens, or other credentials to a CAC file or source-control repository.

---

## Documentation

| Page                                         | Description                                                                      |
|----------------------------------------------|----------------------------------------------------------------------------------|
| [CAC Setup](setup.md)                        | Configure server credentials, context, and the configuration file                |
| [Component](component.md)                    | Download and upload component definitions                                        |
| [Application](application.md)                | Download and upload application definitions                                      |
| [Environment](environment.md)                | Download and upload environment definitions                                      |
| [Processes](processes.md)                    | Process commands, file structure, termination events, and process configurations |
| [Process Step Definitions](process-steps.md) | Reference for all process step types with syntax and examples                    |
| [AI with CAC](ai-skills.md)                  | Use natural language to perform CAC operations via an AI-capable CLI             |

---

## List of All Commands

| Command                                 | Page                          | Description                                        |
|-----------------------------------------|-------------------------------|----------------------------------------------------|
| `cac setup`                             | [Setup](setup.md)             | Store or update server credentials and context     |
| `download-component`                    | [Component](component.md)     | Download a component definition to JSON or YAML    |
| `upload-component`                      | [Component](component.md)     | Upload a component definition from JSON or YAML    |
| `download-application`                  | [Application](application.md) | Download an application definition to JSON or YAML |
| `upload-application`                    | [Application](application.md) | Upload an application definition from JSON or YAML |
| `download-environment`                  | [Environment](environment.md) | Download an environment definition to JSON or YAML |
| `upload-environment`                    | [Environment](environment.md) | Upload an environment definition from JSON or YAML |
| `download-generic-process`              | [Processes](processes.md)     | Download a single generic process                  |
| `download-generic-process-all`          | [Processes](processes.md)     | Download all generic processes                     |
| `download-component-process`            | [Processes](processes.md)     | Download a component process                       |
| `download-component-process-all`        | [Processes](processes.md)     | Download all processes for a given component       |
| `download-application-process`          | [Processes](processes.md)     | Download an application process                    |
| `download-application-process-all`      | [Processes](processes.md)     | Download all processes for a given application     |
| `download-component-template-process`   | [Processes](processes.md)     | Download a component template process              |
| `download-application-template-process` | [Processes](processes.md)     | Download an application template process           |
| `upload-generic-process`                | [Processes](processes.md)     | Upload a generic process                           |
| `upload-component-process`              | [Processes](processes.md)     | Upload a component process                         |
| `upload-application-process`            | [Processes](processes.md)     | Upload an application process                      |
| `upload-component-template-process`     | [Processes](processes.md)     | Upload a component template process                |
| `upload-application-template-process`   | [Processes](processes.md)     | Upload an application template process             |

