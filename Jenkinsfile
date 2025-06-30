pipeline {
    agent {
        docker { 
            image 'node:21.7.0' 
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
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
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
        always {
            cleanWs()
        }
    }
}