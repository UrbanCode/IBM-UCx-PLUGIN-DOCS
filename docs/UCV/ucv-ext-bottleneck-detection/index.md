# Bottleneck Detection

The DevOps Velocity bottleneck detection plug-in monitors, detects, and alerts the user to the existence of bottlenecks in a value stream. A value stream bottleneck is a restriction in the local throughput that limits the global throughput of a system. The plug-in process uses work item stage-change data in concert with three individual algorithms in order to detect the presence of a bottleneck. Each individual algorithm monitors a value stream for the presence of a specific type of bottleneck. Detected bottlenecks are written to the metrics collection in the form of a bottleneck location (value stream and stage), detection message for display, and measure of bottleneck severity used for display prioritization.

