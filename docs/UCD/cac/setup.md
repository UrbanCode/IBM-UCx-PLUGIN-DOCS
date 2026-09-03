# CAC Setup

The `cac setup` command stores server credentials and context information in a local configuration file so that you do not have to provide the server URL, username, and password with every command. Once configured, commands such as `download-component` can resolve these values automatically from the stored context.

### Usage

*Initial setup (credentials required)*:  
`cac setup --server-url <url> --user <username> --pass <password> [--application <name>] [--component <name>]`

*Partial update (one or more fields)*:  
`cac setup [--server-url <url>] [--user <username>] [--pass <password>] [--application <name>] [--component <name>]`

*Set component process context*:  
`cac setup --comp-process-name <name> --comp-process-component <component>`

*Set application process context*:  
`cac setup --app-process-name <name> --app-process-application <application>`

*Display current configuration*:  
`cac setup --show`

*Clear configuration*:  
`cac setup --clear`

### Options

| Flag                        | Alias        | Description                                       |
|-----------------------------|--------------|---------------------------------------------------|
| `--server-url`              | `--url`      | Server URL (e.g., `https://ucd.example.com:8443`) |
| `--user`                    | `--username` | Username for authentication                       |
| `--pass`                    | `--password` | Password for authentication                       |
| `--application`             | `--app`      | Application name for context                      |
| `--component`               | `--comp`     | Component name for context                        |
| `--app-process-name`        |              | Application process name for context              |
| `--app-process-application` |              | Application name for application process context  |
| `--comp-process-name`       |              | Component process name for context                |
| `--comp-process-component`  |              | Component name for component process context      |
| `--show`                    | `-s`         | Display current configuration                     |
| `--clear`                   | `-c`         | Delete configuration file                         |
| `--help`                    | `-h`         | Show help message                                 |

### Behavior

- **Initial setup** â€” The three credential fields (`--server-url`, `--user`, `--pass`) are required on the first run to create a valid configuration.
- **Partial update** â€” After the initial setup, you can provide one or more fields to update. Fields that are not specified retain their existing values.
- **Application and component names** â€” These are optional and can be set or updated at any time.
- **Process context** â€” Process names and their parent names (component or application) are always provided as separate flags.

### How Context Reduces Repetition

Without setup, every command requires the full set of credentials and resource names:

```sh
download-component myuser mypassword https://ucd.example.com:8443 MyComponent MyComponent.json
```

After running `cac setup`, the CLI resolves credentials and context from the configuration file, so the same operation becomes:

```sh
download-component MyComponent MyComponent.json
```

If the component name is also stored in the context, the command simplifies further to:

```sh
download-component MyComponent.json
```

### Configuration Priority

Values are resolved in the following order (highest to lowest):

1. **CLI flags** â€” `--server-url`, `--user`, `--pass`, `--application`, `--component`, `--app-process-name`, `--comp-process-name`, etc.
2. **Config file** â€” `~/.cac/config.yaml`

CLI flags always take precedence over stored configuration values.

### Configuration File Location

The configuration is stored at `~/.cac/config.yaml`.

### Sample Configuration File

Below is the structure of the generated `config.yaml` after running `cac setup`:

```yaml
# CAC Configuration File
# This file contains sensitive credentials. Keep it secure!
# File permissions should be 600 (owner read/write only)
setup:
  server-url: "https://ucd.example.com:8443/"
  username: "admin"
  password: "{encrypted}qBkXTOZCZEB8SrAqRSJgXA=="
component-process:
  component-name: "MyComponent"
  process-name: "InstallProcess"
application-process:
  application-name: "MyApp"
  process-name: "DeployProcess"
```

> **Note:** The `password` field is always stored in encrypted form. Never edit it manually.

### Viewing Current Configuration

Running `cac setup --show` displays the current stored configuration:

```
Current Configuration:
  Config File:  C:\Users\<username>\.cac\config.yaml
  Server URL:   https://ucd.example.com:8443/
  Username:     admin
  Password:     ***
  Component:    (not set)
  Application:  (not set)
Component Process:
  Component:    MyComponent
  Process:      InstallProcess
Application Process:
  Application:  MyApp
  Process:      DeployProcess
```

> **Note:** Passwords are masked in the `--show` output and are never displayed in plain text. Fields that have not been configured display `(not set)`.

### Important Notes

- Only one server configuration is supported at a time. Running `cac setup` with a different server URL overwrites the previous configuration.
- If a command is run without `cac setup` and without providing credentials via CLI flags, the tool will exit with an error indicating that credentials are missing.

### Examples

- **Initial setup**

        `cac setup --url https://ucd.example.com:8443 --user admin --pass secret`

- **Update only password**

        `cac setup --pass newPassword`

- **Update username and password**

        `cac setup --user newUser --pass newPass`

- **Update only application name**

        `cac setup --application MyApp`

- **Update only component name**

        `cac setup --component MyComponent`

- **Update multiple fields at once**

        `cac setup --pass newPass --application MyApp --component MyComp`

- **Set application process context**

        `cac setup --app-process-name DeployProcess --app-process-application MyApp`

- **Set component process context**

        `cac setup --comp-process-name InstallProcess --comp-process-component MyComp`

- **Display current configuration**

        `cac setup --show`

- **Clear configuration**

        `cac setup --clear`

### Security Considerations

- **Password encryption** â€” Passwords are encrypted automatically before being written to the configuration file.
- **File permissions** â€” The config file is created with `600` permissions (owner read/write only).
- **Version control** â€” Never commit `~/.cac/config.yaml` to version control. Add it to your `.gitignore` if the home directory is tracked.
