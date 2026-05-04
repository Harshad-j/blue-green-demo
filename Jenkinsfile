pipeline {
    agent any

    environment {
        IMAGE = "harsh/app:v2"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE .'
            }
        }

        stage('Deploy Green') {
            steps {
                sh '''
                docker stop green || true
                docker rm green || true
                docker run -d -p 8082:80 --name green $IMAGE
                '''
            }
        }

        stage('Switch Traffic') {
            steps {
                sh '''
                docker stop blue || true
                docker rm blue || true

                docker stop green
                docker rename green blue
                docker run -d -p 8081:80 --name blue $IMAGE
                '''
            }
        }
    }
}