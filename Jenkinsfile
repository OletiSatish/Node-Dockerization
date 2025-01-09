pipeline {
    agent any

    stages {

         stage('Checkout') {
            steps {
                echo 'Checkout SCM...'
                script {
                    checkout scm
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                script {
                    sh 'npm test' 
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                script {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
