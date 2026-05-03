pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t harsh/app:v2 .'
            }
        }

        stage('Deploy Green') {
            steps {
                sh 'kubectl apply -f green.yaml'
            }
        }

        stage('Switch Traffic') {
            steps {
                sh '''
                kubectl patch service my-service \
                -p '{"spec":{"selector":{"app":"myapp","version":"green"}}}'
                '''
            }
        }
    }
}