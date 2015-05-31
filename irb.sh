docker rm -f simplesign-rails-irb
docker run --net="host" -v $PWD:/home/ubuntu/webapp --name simplesign-rails-irb -i -t lambdait/simplesign-rails /bin/bash -l
