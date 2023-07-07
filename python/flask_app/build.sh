
docker build -t flask_app .
docker run -d -p 5000:5000  --name flask_container flask_app
