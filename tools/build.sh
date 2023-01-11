#!/bin/bash

cd tmp
git clone https://github.com/misakajimmy/cockpit code
cd code
git switch iEOS
./autogen.sh --prefix=/usr --enable-debug
tools/make-debs --quick