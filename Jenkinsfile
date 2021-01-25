pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh '''cd infrastructure
                chmod +x launch.sh
                ./launch.sh us-east-1 staticwebsite --template-body file://static_website.yml
                '''
            }
        }
    }
}