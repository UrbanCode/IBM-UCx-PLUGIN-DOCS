
# CyberArk

## Usage

### Process Request Properties

The CyberArk plugin password retrieval steps generate secure process request properties accessible only by the currently running process. In subsequent steps you may access these properties using the syntax ``${p:CyberArk/password}``, ``${p:CyberArk/username}``, and ``${p:CyberArk/address}``.

### CyberArk Authentication

The CyberArk server determines how applications will be authenticated to access objects. Applications may be authenticated via Windows username, allowed hostnames, and client certificates. The Get Password from CCP (Web Service) step allows for authentication via client certificate.

The Keystore File, Keystore Password, and Keystore Type step fields allow you to set an SSL context to request password objects from CyberArk. The certificates in the referenced keystore will be passed with the request. The CyberArk server must trust the client certificate in its truststore and reference the serial number of the certificate to authenticate with.
