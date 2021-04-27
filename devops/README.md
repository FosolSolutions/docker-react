# DevOps Kubernetes

The following configuration files and commands will allow the app to run in Kubernetes.

## DockerHub

Build and push the image to DockerHub.

```bash
docker build . -t fosol/react-app:latest
docker push fosol/react-app:latest
```

## Kubernetes Objects

Create a service that will allow for load balancing between the deployment pods.
Create an ingress route so that externally the service is accessible.
Deploy the application to the pods.

```bash
kubectl create -f service.yaml
kubectl create -f ingress.yaml
kubectl create -f ./dockerhub/deploy.yaml
```

## Update Deployment

Run the following command to inform the deployment to restart.
This will pull a new image if one has been built.

```bash
kubectl rollout restart deployment/react-app
```
