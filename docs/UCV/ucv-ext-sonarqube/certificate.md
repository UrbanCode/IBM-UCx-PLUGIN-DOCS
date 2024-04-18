
# SonarQube - Certificate


## Trusting a Self-Signed Certificate


The approach used to authenticate DevOps Velocity’s certificate to SonarQube is
determined by user requirements per installation. One approach is for an administrator to configure a SonarQube server
to trust DevOps Velocity’s self-signed certificate. Directions for this approach are provided below.
1. Create a self-signed certificate. Generate a self-signed certificate from `./docker-compose/conf/ssl`. Use `host.docker.internal` as the common name.

```
openssl req -newkey rsa:2048 -nodes -keyout server.key -x509 -days 365 -out server.crt
```
2. Copy the `server.crt` file from the `./docker-compose` directory to the `cp ../docker-compose/server.crt` directory.
3. Restart the **velocity-router** container in docker-compose, **host nginx** and any other proxies that need to load the new SSL certificate.
4. Run `docker-compose up -d --build`. You must specify the **–build** parameter to ensure that the image is rebuilt.


|Back to ...||Latest Version|SonarQube |||||
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|[All Plugins](../../index.md)|[Velocity Plugins](../README.md)|[1.0.50](https://raw.githubusercontent.com/UrbanCode/IBM-UCV-PLUGINS/main/files/ucv-ext-sonarqube/ucv-ext-sonarqube-1.0.50.tar.zip)|[Readme](README.md)|[Overview](overview.md)|[Usage](usage.md)|[Scripts](scripts.md)|[Downloads](downloads.md)|
