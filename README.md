# demo-notes-eks
## Demo Notes EKS app

This project uses GitHub Actions to deploy the Demo Notes App to an Amazon EKS (Elastic Kubernetes Service) Cluster.
For more information on the Demo Notes App, go to: https://github.com/YoanaIvanova/demo-notes

## Deploy on Amazon EKS Cluster

**Prerequisites**
* To use this project and deploy it on your own EKS cluster, you'll need to clone this repository and set up the GitHub Actions secrets used in [the GitHub Actions configuration file](https://github.com/YoanaIvanova/demo-notes-eks/blob/main/.github/workflows/build.yml)
* Make sure you have created an EKS cluster and it's up and running (this has been tested with a EKS cluster with two t3.small nodes)
* Make sure you have created appropriate Amazon ECR (Elastic Container Registry) repositories for both the front-end and the api parts of this application (the names of these repositories should be stored in the AWS_REPO_SPRING and AWS_REPO_REACT GitHub Actions secrets)
* Make sure you have the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and [kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html) installed locally on your machine

**EKS Deployment**
1. Trigger a build in order to upload the React front-end and Spring Boot back-end Docker images to your Amazon ECR registry.
2. Run this command on your local machine to make sure that your EKS cluster is up and running:

`aws eks --region us-east-1 describe-cluster --name name-of-your-cluster --query cluster.status`

(replace "us-east-1" with the region your EKS cluster lives in; replace "name-of-your-cluster" with the name of your cluster)

If you are prompted for credentials, enter them.

3. Run this command on your local machine to update your kubeconfig:

`aws eks --region us-east-1 update-kubeconfig --name name-of-your-cluster`

(replace "us-east-1" with the region your EKS cluster lives in; replace "name-of-your-cluster" with the name of your cluster)

4. You'll need to install the NGINX Ingress controller by executing this command in your local terminal:
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.1/deploy/static/provider/cloud/deploy.yaml`

For more information, check out the [NGINX Ingress controller installation guide](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start).

5. You'll need to create the following secret in your Kubernetes cluster:

`kubectl create secret generic mysqlpassword --from-literal MYSQL_PASSWORD=your_password`
6. Navigate to the demo-notes-eks/kubernetes folder in your local terminal. Run the following command:

`kubectl apply -f kubernetes`

This will apply all .yaml configs to your EKS cluster.

7. Your app should soon be up and running.

A Network Load Balancer should have been created by the Ingress Nginx controller. You should go to the load balancer's URL and the app should be accessible.
