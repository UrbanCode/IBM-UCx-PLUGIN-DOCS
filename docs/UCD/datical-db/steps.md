# Process Steps

## Run Groovy Script

Runs a Groovy Script using Datical DB REPL.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical DB Groovy Script | textBox | Complete path to Groovy Script to run. | Yes |
| Datical DB Groovy Script Arguments | textAreaBox | Arguments to pass to Datical DB Groovy Script. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Register and Baseline Datical DB Project

Baselines a Datical DB Project using project_baseline.groovy.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical DB Skip Tables or Force Meta Table Deletion | selectBox | Flag to skip any table that has already been baselined Deploy Threshold or Flag to remove any pre-existing DATABASECHANGELOG and DATABASECHANGELOGLOCK tables (use with caution) | Yes |
| Datical DB Change Log Sync | checkBox | Flag to optionally NOT run changelogSync on the Reference DB | Yes |
| Zip Project Directory | checkBox | If checked, Datical DB will zip the newly created project directory | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Create Datical DB Project

Creates a Datical DB Project using project_creator.groovy.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical DB Project Name | textBox | The new Datical DB project. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Provisioning Directory | textBox | The full path that contains the data files: <project_name>;.project.tsv.txt, <project_name>;.dbdefs.tsv.txt and <project_name>;.pipelines.tsv.txt where the Datical DB project is located. | Yes |
| Replace Existing Project | checkBox | If checked, Datical DB will replace existing project directory | Yes |
| Zip Project Directory | checkBox | If checked, Datical DB will zip the newly created project directory | Yes |
| Test Connections | checkBox | If checked, Datical DB test newly created database connections in the project. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Get Datical DB Version

Shows the Datical DB version.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Deploy with Datical DB

Deploys a Datical DB project to a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical Project Name | textBox | The Datical Project Name. Required for using the Datical Service | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Use Immutable Project | checkBox | When checked, Datical will use project information in an immutable artifact instead of project information received from the Datical Server | Yes |
| Datical DB Pipeline | textBox | The Datical DB Pipeline in which the target server resides. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB Database Username | textBox | The username of the Database Server. This is only necessary if username has been removed for the database in Datical project. | Yes |
| Datical DB Database Password | secureBox | The password of the Database Server. This is only necessary if password has been removed for the database in Datical project. | Yes |
| Datical DB Labels | textBox | The Datical DB Labels of the Change Sets to deploy. | Yes |
| Datical DB Context | textBox | The Datical DB Context of your DB Server. | Yes |
| Automatic Rollback | checkBox | If the Datical DB deploy fails, selecting this box will automatically rollback the server to the initial state using the rollback instructions specified in the Datical DB project and/or the Datical DB defaults. | Yes |
| Export SQL | checkBox | If checked, Datical DB will export SQL to be run against the server. | Yes |
| Export Rollback SQL | checkBox | If checked, Datical DB will export Rollback SQL to be run against the server. | Yes |
| Deploy Threshold | selectBox | Sets the deployment threshold for rules. | Yes |
| Datical Service Host | textBox | Hostname or IP Address for the Datical Service | Yes |
| Datical Service Username | textBox | The username for the Datical Service. Only supported in Datical 5 and later releases. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Validate and Forecast with Datical DB

Validates and Forecasts a Datical DB project against a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical Project Name | textBox | The Datical Project Name. Required for using the Datical Service | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Use Immutable Project | checkBox | When checked, Datical will use project information in an immutable artifact instead of project information received from the Datical Server | Yes |
| Datical DB Pipeline | textBox | The Datical DB Pipeline in which the target server resides. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB Database Username | textBox | The username of the Database Server. This is only necessary if username has been removed for the database in Datical project. | Yes |
| Datical DB Database Password | secureBox | The password of the Database Server. This is only necessary if password has been removed for the database in Datical project. | Yes |
| Datical DB Labels | textBox | The Datical DB Labels of the Change Sets to deploy. | Yes |
| Datical DB Context | textBox | The Datical DB Context of your DB Server. | Yes |
| Automatic Rollback | checkBox | If the Datical DB deploy fails, selecting this box will automatically rollback the server to the initial state using the rollback instructions specified in the Datical DB project and/or the Datical DB defaults. | Yes |
| Export SQL | checkBox | If checked, Datical DB will export SQL to be run against the server. | Yes |
| Export Rollback SQL | checkBox | If checked, Datical DB will export Rollback SQL to be run against the server. | Yes |
| Datical Service Host | textBox | Hostname or IP Address for the Datical Service | Yes |
| Datical Service Username | textBox | The username for the Datical Service. Only supported in Datical 5 and later releases. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Export Database Schema (Snapshot)

Creates a Datical DB Snapshot of a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Read Datical DB History

Details the Datical DB deployment history of a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Sync Datical DB Change Log

Marks a Server as deployed based on a Datical DB Project without executing changes.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Delete Datical DB Check Sums

Removes Change Set Check Sums from a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## View Datical DB Status

Reports on the current Status of a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical Project Name | textBox | The Datical Project Name. Required for using the Datical Service | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Use Immutable Project | checkBox | When checked, Datical will use project information in an immutable artifact instead of project information received from the Datical Server | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB Pipeline | textBox | The Datical DB Pipeline in which the target server resides. | Yes |
| Datical DB Database Username | textBox | The username of the Database Server. This is only necessary if username has been removed for the database in Datical project. | Yes |
| Datical DB Database Password | secureBox | The password of the Database Server. This is only necessary if password has been removed for the database in Datical project. | Yes |
| Datical Service Host | textBox | Hostname or IP Address for the Datical Service | Yes |
| Datical Service Username | textBox | The username for the Datical Service. Only supported in Datical 5 and later releases. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## View Datical DB Status Details

Reports on the detailed current Status of a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical Project Name | textBox | The Datical Project Name. Required for using the Datical Service | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Use Immutable Project | checkBox | When checked, Datical will use project information in an immutable artifact instead of project information received from the Datical Server | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB Pipeline | textBox | The Datical DB Pipeline in which the target server resides. | Yes |
| Datical DB Database Username | textBox | The username of the Database Server. This is only necessary if username has been removed for the database in Datical project. | Yes |
| Datical DB Database Password | secureBox | The password of the Database Server. This is only necessary if password has been removed for the database in Datical project. | Yes |
| Datical Service Host | textBox | Hostname or IP Address for the Datical Service | Yes |
| Datical Service Username | textBox | The username for the Datical Service. Only supported in Datical 5 and later releases. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Check Datical DB Drivers

Returns the current database drivers settings used by Datical DB.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Validate Datical DB Rules

Validates the current Datical DB Rules located within the Project.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Datical DB Rollback

Performs a Rollback on a Server given a specific version.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Server | textBox | The Datical DB Server you wish to manage with Datical DB. You can determine this value by opening Datical DB and choosing a server listed in your Deployment Plan. | Yes |
| Datical DB Rollback Version | textBox | Valid Versions include the following: 'changeid:id=CHANGESETID', 'count:n=COUNT', 'date:yyyy-MM-dd=YYYY-MM-DD', or 'tag:dbtag=DBTAG'. | Yes |
| Export SQL | checkBox | If checked, Datical DB will export SQL used to rollback the server. | Yes |
| ONLY Export SQL | checkBox | If checked, Datical DB will ONLY export SQL. No rollback will be performed. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Get Database Differences (Change Log)

Creates a Change Log based on the differences between two servers. Can append to an existing Change Log.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Reference Server | textBox | The Datical DB Server used as the Reference for the differences. This one will be more 'up to date'. | Yes |
| Datical DB Comparison Server | textBox | The Datical DB Server used as the Comparison for the differences. This one will be less 'up to date'. | Yes |
| Datical DB Output File | textBox | Change Log to create or append to. Optional. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |
| Datical DB Labels | textBox | Datical DB Labels to assign to created Change Sets. | Yes |

## Get Database Differences (Report)

Generates a Report on the differences between two servers.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB Reference Server | textBox | The Datical DB Server used as the Reference for the differences. This one will be more 'up to date'. | Yes |
| Datical DB Comparison Server | textBox | The Datical DB Server used as the Comparison for the differences. This one will be less 'up to date'. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Add Datical DB Project

Creates a new Datical DB Project in the project directory. Useful for when you are only supplied a changelog.xml and wish to create the project dynamically.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is to be located. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Add Datical DB Database Definition

Creates a new Datical DB Project in the project directory. Useful for when you are only supplied a changelog.xml and wish to create the project dynamically.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer) | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is to be located. | Yes |
| Datical DB Database Vendor | selectBox | The target database vendor. Valid values are Oracle, DB2, MSSQL, MySQL, PostgreSQL. | Yes |
| Datical DB Step Name | textBox | This is an Internal user friendly name for your database. | Yes |
| Datical DB Database Hostname | textBox | The hostname or IP address of the Database Server. | Yes |
| Datical DB Database Port | textBox | The port of the Database Server. | Yes |
| Datical DB Database Username | textBox | The username of the Database Server. | Yes |
| Datical DB Database Password | secureBox | The password of the Database Server. | Yes |
| Datical DB Context | textBox | The Context used by Datical DB. Optional. | Yes |
| Datical DB Default Schema Name | textBox | The Default Schema Name used by Datical DB. Optional. | Yes |
| Datical DB Default Catalog Name | textBox | The Default Catalog Name used by Datical DB. Optional. | Yes |
| Datical DB Database Name (DB2, MSSQL, MySQL, PostgreSQL) | textBox | The Database Name. Required for DB2, MySQL, PostgreSQL. | Yes |
| Datical DB SID (Oracle) | textBox | The Database SID. Either SID or Service Name is required for Oracle. | Yes |
| Datical DB Service Name (Oracle) | textBox | The Database Service Name. Either SID or Service Name is required for Oracle. | Yes |
| Integrated Security? (MSSQL) | textBox | Determines if the database uses Integrated Security. Optional for MSSQL. | Yes |
| Datical DB Application Name (MSSQL) | textBox | The Datical DB Application Name. Optional for MSSQL. | Yes |
| Datical DB Instance Name (MSSQL) | textBox | The Datical DB Instance Name. Optional for MSSQL. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

## Datical DB Install License

Deploys a Datical DB project to a Server.

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| Datical DB Command | textBox | The full path to the Datical DB command (e.g., C:\DaticalDB\repl\hammer.bat or /opt/DaticalDB/repl/hammer). Ideally, create a property named daticalDBCmd with the appropriate value. | Yes |
| Datical DB Driver Directory | textBox | The full path where Datical DB drivers are located. Ideally, create a property named daticalDBDriversDir with the appropriate value. | Yes |
| Datical DB Project Directory | textBox | The full path where the Datical DB project is located. | Yes |
| Datical DB License Path | textBox | The full path where the License File is located. | Yes |
| Datical DB JVM | textBox | The Java Virtual Machine to use with Datical DB. (e.g., /usr/lib/jvm/java-7-openjdk-amd64) | Yes |
| Datical DB JVM Arguments | textBox | The Java Virtual Machine Arguments to use with Datical DB. (e.g., -Xms512M -Xmx1024M) | Yes |

