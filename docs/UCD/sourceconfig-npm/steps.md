# Process Steps

## Import Version

Creates a new component version and imports packages as tarballs.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Registry URL | textBox | The NPM registry URL. Must include a protocol (http/https).                                For Example `https://registry.npmjs.org/` | Yes |
| Username | textBox | The user name to authenticate with the registry. | No |
| Password | secureBox | The password to authenticate with the registry. | No |
| Package Name | textBox | The name of the NPM package to download as a tarball. Specify                              a scope by prepending @<scope_name>>/ to the package name. This                              will associate the specified scope with your registry. | Yes |
| NPM CLI Path | textBox | Optionally specify the path to your npm executable. This                              is only necessary if npm is not on your system path. | No |
| Import All Versions | checkBox | By default only the latest version will be imported into UCD.                              Select this box to import all versions of the package as component                              versions. | No |
| Log4j Logging Level | selectBox | Configure the level of Log4j messages to output to the console. | No |
| Specific version to import. | textBox |  | No |

