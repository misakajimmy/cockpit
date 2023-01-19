FROM arm64v8/ubuntu:20.04

RUN apt update && \
    apt upgrade -y && \
    export DEBIAN_FRONTEND=noninteractive && \
    apt install -y autoconf appstream git gcc cmake make libsystemd-dev libglib2.0-dev libjson-glib-dev libpurple-dev gnutls-dev libkrb5-dev libpolkit-agent-1-dev libssh-dev libpam-dev gettext xsltproc && \
    ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt install -y nodejs && \
    apt install -y dpkg-dev debhelper libglib2.0-dev libpolkit-agent-1-dev libjson-glib-dev libxslt1-dev libpcp3-dev libpcp-import1-dev libpcp-pmda3-dev xmlto docbook-xsl && \
    apt install zip

RUN apt update && \
    apt upgrade -y && \
    apt install -y python3.9 && \
    rm /usr/bin/python3 && \
    ln -s /usr/bin/python3.9 /usr/bin/python3

RUN apt install -y gettext appstream libssh-dev zlib1g-dev libkrb5-dev libxslt1-dev libglib2.0-dev libgnutls28-dev gnutls-dev libsystemd-dev libpolkit-agent-1-dev libpcp3-dev libjson-glib-dev libpam0g-dev libpcp-import1-dev libpcp-pmda3-dev systemd xsltproc xmlto docbook-xsl glib-networking

COPY tools/build.sh /tmp

RUN ['/tmp/build.sh']
