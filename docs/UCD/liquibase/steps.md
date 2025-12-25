# Liquibase - Process Steps

* [GenerateDBDoc](#generatedbdoc)
* [Update](#update)
* [GenerateChangelog](#generatechangelog)
* [Export Data](#export_data)
* [ChangelogSync](#changelogsync)
* [Rollback](#rollback)
* [UpdateTestingRollback](#updatetestingrollback)
* [Tag](#tag)
* [Validate](#validate)
* [DropAll](#dropall)
## GenerateDBDoc

Execute Liquibase in dbDoc mode to produce or update database reference documentation.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |
| docOutDir | textBox | Path to directory for output of dbDocs command | Yes |

## Update

Applies given count of change sets is specified. Else updates database to current version.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |
| updateCount | textBox | Number of change sets to be applied. | Yes |
| preview | checkBox | If true, update script will be printed but not applied. | Yes |

## GenerateChangelog

Generates change log of the database.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to be generated. | Yes |

## Export Data

Generates change log of the database.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to be generated. | Yes |

## ChangelogSync

Mark all changes as executed in the database.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |

## Rollback

Rolls back change sets.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |
| rollbackType | selectBox | It is possible to rollback to specific date, tag or by given number of changesets. | Yes |
| rollbackValue | textBox | Number of changesets/Date ('yyyy-MM-dd'T'HH:mm:ss')/Tag depending on rollback type selected. | Yes |
| preview | checkBox | If true, rollback script will be printed but not applied. | Yes |

## UpdateTestingRollback

Updates the database, then rolls back changes before updating again.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |

## Tag

"Tags" the current database state for future rollback.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |
| tag | textBox | Tag to use. | Yes |

## Validate

Checks the changelog for errors.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |

## DropAll

Drops all database objects owned by the user.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| command | textBox | Path to liquibase binary. | Yes |
| driver | textBox | Database driver class name. | Yes |
| driverClasspath | textBox | Classpath containing migration files and JDBC Driver. | Yes |
| jdbcURL | textBox | Database JDBC URL. | Yes |
| username | textBox | Database username | Yes |
| password | secureBox | Password for given username. | Yes |
| changeLogFile | textBox | The changelog file to use. | Yes |

