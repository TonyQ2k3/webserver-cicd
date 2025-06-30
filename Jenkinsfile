pipeline {
    agent any

    tools {
        nodejs 'node21'
    }

    environment {
        CI = 'true'
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