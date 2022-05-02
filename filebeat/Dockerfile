FROM docker.elastic.co/beats/filebeat:8.1.3

COPY filebeat.yml /usr/share/filebeat/filebeat.yml
COPY docker-entrypoint.sh /etc/entrypoint/setup.sh

USER root

RUN mkdir /var/log/server
RUN chown -R root /usr/share/filebeat
RUN chmod go-w /usr/share/filebeat/filebeat.yml
