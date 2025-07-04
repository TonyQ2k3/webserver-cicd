# This directory contains code to deploy a Jenkins server, it doesn't have anything to do with K8s setup, just a side project

On Kubernetes
```bash
helm repo add jenkins https://charts.jenkins.io
helm repo update
kubectl create namespace jenkins
helm install jenkins jenkins/jenkins -f helm/values.yaml -n jenkins
```

On Docker:
```bash
docker compose up -d

ngrok http 8088
```

# Shared libraries

## 1. Folder structure
+ `/src`: Contains Groovy classes and methods, will be added to pipeline's classpath
+ `/vars`: Define functions that are exposed as global variables. 
+ `/resources`: Contains resources (shell scripts etc)

## 2. Usage


# Credentials
In Jenkins, `withCredentials` is used to use a secret credential in the pipeline.
## 1. Username and Password
```groovy
withCredentials([usernamePassword(
    credentialsId: 'my-cred',
    usernameVariable: 'USERNAME',
    passwordVariable: 'PASSWORD'
)]) {
    sh 'echo $USERNAME $PASSWORD'
}
```

## 2. Secret Text
```groovy
withCredentials([string(
    credentialsId: 'my-cred',
    variable: 'SECRET'
)]) {
    sh 'echo $SECRET'
}
```

## 3. SSH Key
```groovy
withCredentials([sshUserPrivateKey(
    credentialsId: 'my-cred',
    keyVariable: 'SSH-KEY'
)]) {
    sh 'ssh -i $KEY user@host'
}
```