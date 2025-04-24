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
        stage('Getting files') {
            steps {
                sh 'ls'
            }
        }
        stage('Checking folder') {
            steps {
                sh 'pwd'
            }
        }
        // stage('Install Dependencies') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Run Tests') {
        //     steps {
        //         sh 'npm test'
        //     }
        // }
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