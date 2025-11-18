FROM httpd
MAINTAINER Munna
LABEL newapp is
EXPOSE 80
COPY . /usr/local/apache2/htdocs/


