
# IBM Rational Test Virtualization Server (RTVS)

The Green Hat plug-in for DevOps Deploy that was shipped earlier has been split into the following two parts in the current release:

* [IBM Rational Integration Tester (RIT) plug-in](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RIT-UCD/), which helps you initiate integration tests from DevOps Deploy server.
* Service virtualization plug-in, which executes virtual services that model services which your application depends on. You can initiate the execution of virtual services from DevOps Deploy server.

All the three plug-ins (Green Hat plug-in, Rational Integration Tester plug-in, and the Service Virtualization plug-in) can coexist on the same DevOps Deploy server. All the process steps supported by the individual plug-ins are still functional.

The steps in the Service Virtualization plug-in use the Rational Test Control Panel Ant client to communicate with the server.

**Platform Support**
* This plug-in runs on all operating systems that are supported by both the IBM DevOps Deploy agent (except for z/OS) and the Rational Test Control Panel Ant client
* This plug-in works with Rational Test Workbench v8.5 or higher.




**Known Limitations**



The [Start scenario](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#start_scenario) and [Stop scenario](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#stop_scenario) steps do not work within a transient environment.


## Available Steps

[Create a transient environment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#create_transient_environment)

[Delete a transient environment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#delete_transient_environment)

[Start a scenario](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#start_scenario)

[Start a stub](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#start_stub)

[Stop a scenario](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#stop_scenario)

[Stop a stub](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#stop_stub)

[Update a transient environment](https://urbancode.github.io/IBM-UCx-PLUGIN-DOCS/UCD/RTVS-UCD/steps.html#update_transient_environment)


