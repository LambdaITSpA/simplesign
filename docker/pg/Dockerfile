FROM ubuntu:12.04
ENV REFRESHED_AT 2015-01-06 00:59

RUN apt-get update
RUN apt-get install -y nano
RUN apt-get install -y postgresql-9.1 libpq-dev
RUN echo "kernel.shmmax = 104857600" >> /etc/sysctl.conf
RUN echo "kernel.shmmin = 1048576" >> /etc/sysctl.conf

###############################################
#  May 2015 Fsync Permissions Bug Workaround  #
###############################################

# go to PGDATA directory
WORKDIR /var/lib/postgresql/9.1/main

# remove symlinks to SSL certs
RUN rm /var/lib/postgresql/9.1/main/server.crt; rm /var/lib/postgresql/9.1/main/server.key 
RUN ls

# copy the SSL certs to the local directory
RUN cp /etc/ssl/certs/ssl-cert-snakeoil.pem server.crt
RUN cp /etc/ssl/private/ssl-cert-snakeoil.key server.key

# set permissions on ssl certs
# and postgres ownership on everything else
# just in case
RUN chown postgres *
RUN chmod 640 server.crt server.key

### End ###

USER postgres
RUN echo "host all  all    0.0.0.0/0  trust" >> /etc/postgresql/9.1/main/pg_hba.conf
#RUN echo "host all all ::1/128 trust" >> /etc/postgresql/9.1/main/pg_hba.conf
RUN echo "listen_addresses='*'" >> /etc/postgresql/9.1/main/postgresql.conf
RUN    /etc/init.d/postgresql start &&\
    psql --command "CREATE USER simplesign WITH SUPERUSER PASSWORD 'S1mpl3s1gn';" &&\
    createdb -O simplesign simplesign_development
EXPOSE 5432
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]

CMD ["/usr/lib/postgresql/9.1/bin/postgres", "-D", "/var/lib/postgresql/9.1/main", "-c", "config_file=/etc/postgresql/9.1/main/postgresql.conf"]
#/usr/lib/postgresql/9.1/bin/postgres -D /var/lib/postgresql/9.1/main -c config_file=/etc/postgresql/9.1/main/postgresql.conf