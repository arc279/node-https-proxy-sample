

run-proxy:
	mitmproxy -p 8080

curl-test:
	curl https://example.com -x http://localhost:8080

