while :
do
  node node/makedata.js
  git add .
  git commit -m 'update data'
  git push
  echo 'sleep 600'
  sleep 600
done
