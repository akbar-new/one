FROM httpd
MAINTAINER Munna
LABEL newapp
EXPOSE 80
COPY . /usr/local/apache2/htdocs/

