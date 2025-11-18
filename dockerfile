FROM httpd
MAINTAINER Munna
LABEL NEW
EXPOSE 80
COPY . /usr/local/apache2/htdocs/
