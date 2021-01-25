pipeline {
    agent { dockerfile true }
    stages {
        stage('Infrastructure') {
            steps {
                sh '''cd infrastructure
                chmod +x launch.sh
                ./launch.sh us-east-1 staticwebsite --template-body file://static_website.yml
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''cd application
                BUCKET_NAME=$(aws cloudformation describe-stacks --region us-east-1 --stack-name staticwebsite --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" --output text)
                echo "Deploying application.........."
                aws s3 sync . s3://${BUCKET_NAME}
                website_url=$(aws cloudformation describe-stacks --region $1 --stack-name $2 --query "Stacks[0].Outputs[?OutputKey=='WebsiteURL'].OutputValue" --output text)
                echo $website_url
                '''
            }
        }
    }
}