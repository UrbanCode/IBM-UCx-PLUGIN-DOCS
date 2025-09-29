# IBM Db2 for z/OS Package

This package includes a white paper and an importable sample template that describes a process to deploy applications that use Db2 for z/OS.

The deployment process covers the tasks for the following activities:

* **Provisioning a database schema**: Developers or testers want a service to provision a test environment with a database schema like another environment. The service can be invoked through a command, program, or script.
* **Deploying application and database schema changes**: Developers or testers want a simple service that deploys checked-in application and database schema changes to target environments that they are authorized to deploy to. The database schema change deployment may involve complicated database operations including DDL, commands, utilities, native stored procedures, and Java stored procedures. This scenario exploits Db2 DevOps Experience to compare the new schema to the target environment to create the process required to convert the target environment to the checked-in schema version.
* **Reviewing changes and the deployment process**: Administrators, including DBAs, security administrators, storage administrators, and others might need to review and approve the changes and deployment process in a controlled environment before or during the deployment.
* **Binding or rebinding an application**: Administrators or developers have an application that requires binding a new plan, or rebinding an existing plan to change the package list. The application might require new packages or package versions to be bound in the target environment. The packages might use different bind options. You might already have BIND cards defined for the packages to be bound.
* **Deploying Db2 REST services**: DBAs or developers need to create or delete native Db2 REST services on target environments. The REST services can be deployed using one or many property files and with or without bind options.

This package also discusses how to integrate the services with different SCM systems and how to automate the entire solution. The services use existing plugins in IBM DevOps Deploy and Db2 DevOps Experience.

Download and unzip the package. See the white paper in the package for usage documentation.

**This is a package, not a plug-in. Do not attempt to load this content in IBM DevOps Deploy as a plug-in.**
