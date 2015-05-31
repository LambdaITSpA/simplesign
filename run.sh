docker rm -f simplesign-rails simplesign-pg
docker run -p 127.0.0.1:5432:5432 --name simplesign-pg -d lambdait/simplesign-pg
docker run --net="host" -v $PWD:/home/ubuntu/webapp --name simplesign-rails -d lambdait/simplesign-rails