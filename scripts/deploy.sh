for i in "$@"
do
case $i in
    -s=*|--s3_bucket=*)
    S3_BUCKET="${i#*=}"
    shift # past argument=value
    ;;
    *) # unknown option
    ;;
esac
done

echo "Installing AWS CLI"
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
./aws/install

echo "Checking AWS configuration"
aws configure list

echo "Copy non-html non-js build contents to S3"
aws s3 sync --exclude "*.html" --exclude "*.js" ./out s3://$S3_BUCKET/internal-admin

echo "Copy html build contents to S3"
for f in $(find out -name '*.js')
do
#  echo "Encoding $f"
#  brotli $f
 cleaned=${f#out/}
 aws s3 cp $f s3://$S3_BUCKET/internal-admin/$cleaned --content-type "application/javascript"
done

echo "Copy html build contents to S3"
for f in $(find out -name '*.html')
do
 tmp=${f#out/}
 cleaned=${tmp%.html}
 aws s3 cp $f s3://$S3_BUCKET/internal-admin/$cleaned --content-type "text/html" --cache-control "no-cache"
done
