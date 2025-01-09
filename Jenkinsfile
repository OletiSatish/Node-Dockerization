pipeline {
    agent any

    environment {
        NODE_ENV = 'Dev'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Run Linter') {
            steps {
                echo 'Running linter...'
                bat 'npm run lint' // Ensure a linter script exists in package.json
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building application...'
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Sending notifications...'
            // Add notification steps here (e.g., email, Slack)
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs() // Clean up the workspace after the build
        }
    }
}
