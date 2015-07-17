#!/bin/bash
FILES=spec/*Spec.js

mkdir -p build
for f in $FILES
do
  FILE=${f//spec\//}
  echo "Processing $FILE file..."
  browserify  -t [reactify --es6 --target es5]  spec/$FILE -o build/$FILE --debug
done
#jasmine
