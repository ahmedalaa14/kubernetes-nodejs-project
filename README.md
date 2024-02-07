# Deploying a Dockerized Nodejs application on kubernetes cluster.
## Follow these steps to deploy the application from A to Z:
1. Clone this Repo

        git clone https://github.com/ahmedeldaly097/kubernetes-simple-project

2. install nodejs and npm.

        sudo apt-get update
        sudo apt-get install curl gnupg2 ca-certificates lsb-release
        curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
        sudo apt-get install -y nodejs
        node -v
        npm -v

3. Run the following commands on application directory.

        npm init -y
        npm install

4. now you can build your own image from this code and push it to your dockerhub.

        docker build -t <your-dockerhub-account>/kubernetes-simple-project .
        docker login
        docker push <your-dockerhub-account>/kubernetes-simple-project

5. modify deployment.yml file with you image and run the following commands.

        kubectl apply -f deployment.yml
        minikube service my-service

---
## 🎉✅ Congratulations! you deployed the application.
---