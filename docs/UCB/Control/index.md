
Control for IBM DevOps Build
===========================

The Control Plugin automates cloning a Control repo, tagging source, and publishing source changes to the Changes tab of the BuildLife.


Available Steps
---------------

Create Control Status Create a commit status in Control or Control Enterprise.

Control Changelog Perform a Control changelog and publish the results.

Control Checkout Perform a Control checkout of the workflow's source

Control Cleanup Perform a cleanup of the Control working directory

Control Create Tag Create a tag in Control of the specified working copy.

Control Quiet Period Perform a Control changelog for quiet period detection and publish most recent change date within the period.

Control Sparse Checkout Perform a sparse Control checkout to fetch only specific files (e.g., BuildFile.json for JAC pre-workflow). This is much faster than a full checkout for large repositories.


