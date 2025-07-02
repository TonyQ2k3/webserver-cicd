pipeline {
    agent any

    tools {
        nodejs 'node21'
    }

    environment {
        CI = 'true'
        BRANCH_NAME = "${env.BRANCH_NAME}"
        CHANGE_TARGET = "${env.CHANGE_TARGET}" // For PRs
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
            }
        } 
        stage('Check revelant changes') {
            steps {
                script {
                    // Fallback for first commit (no HEAD~1)
                    def hasHistory = sh(script: 'git rev-parse HEAD~1', returnStatus: true) == 0
                    def diffRange = hasHistory ? 'HEAD~1 HEAD' : 'HEAD'

                    // Get list of changed files
                    def changedFiles = sh(
                        script: "git diff --name-only ${diffRange}",
                        returnStdout: true
                    ).trim().split("\n")

                    echo "Changed files:\n${changedFiles.join('\n')}"

                    // Filter for .js and .json files
                    def relevantFiles = changedFiles.findAll { file ->
                        file.endsWith('.js') || file.endsWith('.json')
                    }

                    if (relevantFiles.isEmpty()) {
                        echo "No .js or .json file changes. Skipping build."
                        currentBuild.result = 'SUCCESS'
                    } else {
                        echo "Relevant changes detected:\n${relevantFiles.join('\n')}"
                    }
                }
            }
        }

        stage('Install Dependencies') {
            when {
                expression { currentBuild.result != 'SUCCESS' } // Only run if previous stage didn't skip
            }
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            when {
                expression { currentBuild.result != 'SUCCESS' } // Only run if previous stage didn't skip
            }
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