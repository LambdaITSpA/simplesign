ln Gemfile docker/rails/Gemfile
ln Gemfile.lock docker/rails/Gemfile.lock
docker build -t lambdait/simplesign-rails docker/rails
docker build -t lambdait/simplesign-pg docker/pg
rm docker/rails/Gemfile docker/rails/Gemfile.lock
#docker run -d -p 127.0.0.1:80:80 --name rails rails
docker push lambdait/simplesign-rails
docker push lambdait/simplesign-pg