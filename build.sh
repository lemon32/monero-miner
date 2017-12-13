#!/bin/bash
set -ex

cd xmrig
rm -rf build
mkdir build
cd build

cmake ..
LD_RUN_PATH=lib make

mkdir lib
cp /usr/lib/x86_64-linux-gnu/lib{uv,gnutls,curl,microhttpd,gcrypt}*.so* lib
cp lib/libgcrypt.so lib/libgcrypt.so.11

rm ../.gitignore || true