# MEAN Stack CI/CD Deployment Architecture

This repository contains the infrastructure as code (IaC) and automation pipelines to containerize and deploy a full-stack MEAN application. 

## Architecture Overview
* **Frontend:** Angular 15, multi-stage Docker build, served via an Nginx reverse proxy (Port 80).
* **Backend:** Node.js & Express API (Port 3000).
* **Database:** MongoDB 6.0, deployed with persistent Docker volumes.
* **Orchestration:** Docker Compose.
* **Infrastructure:** Ubuntu 24.04 LTS VM (AWS EC2).
* **CI/CD:** GitHub Actions.

## CI/CD Pipeline Configuration
The deployment is fully automated via `.github/workflows/deploy.yml`. 
Upon pushing code to the `main` branch, the pipeline executes the following idempotent workflow:
1.  Checks out the latest code.
2.  Builds the Frontend and Backend Docker images using Docker Buildx.
3.  Pushes the artifacts to Docker Hub.
4.  Establishes a secure SSH connection to the cloud infrastructure.
5.  Pulls the latest `docker-compose.yml` and newly built images.
6.  Gracefully tears down old containers and provisions the updated environment.

## Step-by-Step Setup (Local Development)
To run this application locally for testing:
1.  Clone the repository: `git clone https://github.com/danyshrf/mean-stack-devops-stack.git`
2.  Navigate to the root directory: `cd mean-stack-devops-stack`
3.  Execute Docker Compose: `docker-compose up --build -d`
4.  Access the frontend at `http://localhost:80` and the backend API at `http://localhost:3000`.

## Deployment Evidence

### 1. CI/CD Configuration and Execution
<img width="1919" height="782" alt="image" src="https://github.com/user-attachments/assets/c2f0ab79-749b-4a54-9a20-0efad538f22e" />


### 2. Docker Image Build and Push Process
<img width="1913" height="347" alt="image" src="https://github.com/user-attachments/assets/63b5547e-b081-4c31-a340-9fa31c09b4bd" />


### 3. Application Deployment and Working UI

<img width="1919" height="782" alt="image" src="https://github.com/user-attachments/assets/b8c2db41-2c72-402f-9330-2501fd721932" />


### 4. Nginx Setup and Infrastructure Details
![Server Infrastructure](screenshots/infrastructure.png)
