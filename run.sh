docker rm -f simplesign-rails simplesign-pg
docker run -p 127.0.0.1:5432:5432 --name simplesign-pg -d lambdait/simplesign-pg
docker run --net="host" \
-v $PWD/docker/rails/simplesign.cl.conf:/etc/apache2/sites-enabled/simplesign.cl:ro \
-v $PWD/docker/rails/lambdait.cl.conf:/etc/apache2/sites-enabled/lambdait.cl:ro \
--add-host simplesign.cl:127.0.0.1 \
--add-host dev.simplesign.cl:127.0.0.1 \
--add-host staging.simplesign.cl:127.0.0.1 \
--add-host www.simplesign.cl:127.0.0.1 \
--add-host lambdait.cl:127.0.0.1 \
--add-host www.lambdait.cl:127.0.0.1 \
-v $PWD:/home/ubuntu/webapp \
-v $PWD:/home/ubuntu/webapp-staging \
-v $PWD:/home/ubuntu/webapp-dev \
--name simplesign-rails -d lambdait/simplesign-rails