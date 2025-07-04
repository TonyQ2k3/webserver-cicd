@Library('jenkins-shared-lib') _

pipeline {
    agent any

    tools {
        nodejs 'node21'
        dockerTool 'docker'
    }

    environment {
        CI = 'true'
        DOCKER_CREDENTIALS_ID = 'dockerhub-credentials'
        DOCKER_ORGANIZATION = 'tonyq2k3'
        DOCKER_IMAGE_NAME = 'webserver'
        DOCKER_IMAGE_TAG = 'latest'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        } 
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build and push Docker image') {
            steps {
                dockerBuildAndPush(
                    organization: DOCKER_ORGANIZATION,
                    imageName: DOCKER_IMAGE_NAME,
                    tag: DOCKER_IMAGE_TAG,
                    credentialsId: DOCKER_CREDENTIALS_ID
                )
            }
        }
    }

    post {
        always {
            cleanWs()  // This cleans the workspace
        }
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}