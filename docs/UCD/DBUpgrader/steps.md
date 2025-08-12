
# IBM DevOps DBUpgrader - Process Steps

* [Rollback DB](#rollback_db)
* [Upgrade DB](#upgrade_db)


## Rollback DB

Return the database to a previous version.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Current Version SQL | String | An SQL statement to obtain the current version of the database. Use a question mark (?) as the placeholder for the release name. Example: `SELECT VER FROM DB_VERSION WHERE RELEASE_NAME = ?` | Yes |
| DB Driver Jar | String | The path to the JAR file that contains the driver class. Example: `lib/mysql-connector-java-5.1.20-bin.jar`. | Yes |
| Delete Version SQL | String | An SQL statement that deletes the release or version row from the database. Use a question mark (?) as a placeholder for the release name. Example: `DELETE FROM DB_VERSION WHERE RELEASE_NAME = ?`. | Yes |
| Driver Classname | String | The name of the class that implements the **java.sql.Driver** command. | Yes |
| Password | Password | The password that is associated with the user ID to access the database. | No |
| SQL File Include | String | A pattern that defines the XML files to read for this rollback. Use an asterisk (\*) as a wildcard. Example: `upgrade_sql_*.xml` or `*.xml`. | Yes |
| SQL File path | String | The path to the directory that contains the SQL files. | Yes |
| Target Version | String | The version to return the database to. This string corresponds to the `<change>` elements number.If a target version is specified, the database is not rolled back to a version before the specified version. Example: `MySQL example:com.mysql.jdbc.Driver`. | No |
| URL | String | The URL of the database that the DevOps Deploy server uses to communicate with the database. For example, you can use the **``${p:environment/db.url}``** property. | Yes |
| Update Version SQL | String | An SQL statement to update the current version of the database. Use the first question mark (?) for the RELEASE\_NAME value, and the second mark (?) for the VER value.Example: `INSERT INTO DB_VERSION (RELEASE_NAME,VER) VALUES(?,?)`. | Yes |
| User | String | The user name for the account that has access to the database. The user account must have enough permissions to complete the SQL queries that you provide it. | Yes |

## Upgrade DB

Update the database.


| Name | Type | Description                                                                                                          | Required |
| ---- | ---- | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Current Version SQL | String | The SQL statement to obtain the current version of the database. Use a question mark (?) as the placeholder for the release name. Example: `SELECT VER FROM DB_VERSION WHERE RELEASE_NAME = ?`. | Yes |
| DB Driver Jar | String | The path to the JAR file that contains the driver class. Example: `lib/mysql-connector-java-5.1.20-bin.jar`. | Yes |
| Delete Version SQL | String | An SQL statement that deletes the release or version row from the database. Use a question mark (?) as a placeholder for the release name value. Example: `DELETE FROM DB_VERSION WHERE RELEASE_NAME = ?`. | Yes |
| Driver Classname | String | The name of class that implements the **java.sql.Driver** command. | Yes |
| Password | Password | The password that is associated with the user ID to access the database. | No |
| SQL File Include | String | A pattern that defines XML files to read for this upgrade. Use an asterisk (\*) as a wildcard.Example: `upgrade_sql_*.xml` or `*.xml`. | Yes |
| SQL File path | String | The path to the directory that contains the SQL files. | Yes |
| URL | String | The URL of the database that DevOps Deploy server uses to communicate with the database. For example, you can use the **``${p:environment/db.url}``** property. | Yes |
| Update Version SQL | String | An SQL statement to update the current version of the database. Use the first question mark (?) for the RELEASE\_NAME value, and the second mark (?) for the VER value.Example: `INSERT INTO DB_VERSION (RELEASE_NAME,VER) VALUES(?,?)`. | Yes |
| User | String | The user name for the account that has access to the database. The user account must have enough permissions to complete the SQL queries that you provide it. | Yes |


