pipeline {
    agent {
        docker { image 'node:23-alpine3.20' }
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
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}