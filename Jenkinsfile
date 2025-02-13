pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        }
        stage('Check version') {
            steps {
                sh 'npm --version'
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
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}