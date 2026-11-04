
# Process Steps

## Run Groovy Script

This step runs a groovy script.


| Name          | Type     | Description                                                                                                                                                                                                                                                 | Required |
|---------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| Groovy Home   | String   | The Groovy home directory. The default value is the GROOVY\_HOME environment variable.                                                                                                                                                                      | Yes      |
| Script        | String   | The Groovy script code to run. Use the**java.util.Properties** Java variable, **outProps** to uploadoutput properties to the server and the **inProps** variable to contain all input properties.                                                           | Yes      |
| ClassPath     | String   | List the classpaths to include. Separate multiple classpaths using commas or new lines. To include all the jars inside a directory use (*) after the directory. For example classpath :- /usr/libs/* will add all the jars inside the /usr/libs/ directory. | No       |
| Spawn Process | CheckBox | When selected, the user script is run in a new process. Select this option if you wish to override the Groovy Home property.                                                                                                                                | No       |


