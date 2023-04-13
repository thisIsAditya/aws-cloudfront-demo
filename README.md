# aws-cloudfront-demo
Installation is pretty straight forward, includes of 3 simple steps.
1. Clone the repo.
2. Add `.env` file in root folder of the repo, taking refernce from `env.example` file. 
3. `npm start`

Your server will start running... 

## **Testing:**

*Server Health check* -> [GET] http://localhost:8080/api 

*Get the signed URL* -> [GET] http://localhost:8080/api/cdn
**OR**
[GET] http://localhost:8080/api/cdn/hello-world-at-cloud.png
