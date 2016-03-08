# https-with-nodejs-express
how to use https with nodejs express webframework

**step 1:** ```npm install```  
**step 2:** ```npm start```  
**step 3:** ```https://localhost:8080/``` // should run on port 443 in production so you can access your page on https://localhost/
  
  
# how to generate a self signed certificate with openssl

```bash
openssl genrsa -des3 -out server.key 2048
openssl rsa -in server.key -out server.key
openssl req -sha256 -new -key server.key -out server.csr -subj '/CN=localhost'
openssl x509 -sha256 -req -days 365 -in server.csr -signkey server.key -out server.crt
cat server.crt server.key > cert.pem
```bash

