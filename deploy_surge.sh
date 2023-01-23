if [ $# -ne 1 ]; then
  echo "Error: You need to specify the domain name for the surge.sh deployment.
  Usage: ./deploy_surge.sh <domain_name>"
  exit 1
fi

yarn generate
echo "$1.surge.sh" > ./dist/CNAME
surge dist/