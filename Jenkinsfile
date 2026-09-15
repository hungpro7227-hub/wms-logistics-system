pipeline {
    agent any

    environment {
        PROJECT_NAME = 'WMS-Logistics'
        SLACK_CHANNEL = '#jenkins-ci'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo '=== [STAGE 1]: Kéo mã nguồn từ GitHub ==='
                checkout scm
            }
        }

        stage('Compile & Build Microservices') {
            steps {
                echo '=== [STAGE 2]: Biên dịch & Đóng gói Backend Services ==='
                // Mô phỏng đóng gói hoặc chạy docker build
                sh 'echo "Đóng gói Product, Inventory, Order, Shipping Service..."'
            }
        }

        stage('Automated Testing') {
            steps {
                echo '=== [STAGE 3]: Thực thi Unit Test tự động (JUnit) ==='
                // Kịch bản test giả định thành công
                sh 'echo "Running automated test cases... PASSED (100%)"'
            }
        }

        stage('Docker Container Packaging') {
            steps {
                echo '=== [STAGE 4]: Đóng gói Container qua Dockerfile ==='
                sh 'echo "Build Docker image wms-backend:latest completed."'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo '=== [STAGE 5]: Triển khai lên môi trường UAT / Staging ==='
                sh 'echo "Application deployed to Staging successfully."'
            }
        }
    }

    post {
        success {
            echo 'Pipeline hoàn thành xuất sắc! Gửi thông báo đến Slack...'
            slackSend(
                channel: "${SLACK_CHANNEL}",
                color: '#36a64f', // Màu xanh lá cây
                message: "✅ *[SUCCESS]* Dự án *${env.JOB_NAME}* (Build #${env.BUILD_NUMBER}) thành công mỹ mãn!\nChi tiết xem tại: ${env.BUILD_URL}"
            )
        }
        failure {
            echo 'Pipeline gặp lỗi! Báo động về Slack...'
            slackSend(
                channel: "${SLACK_CHANNEL}",
                color: '#ff0000', // Màu đỏ
                message: "❌ *[FAILURE]* Dự án *${env.JOB_NAME}* (Build #${env.BUILD_NUMBER}) bị lỗi tại một trong các stages!\nKiểm tra log tại: ${env.BUILD_URL}console"
            )
        }
    }
}