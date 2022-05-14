/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
 var aws = require('aws-sdk')
 var ddb = new aws.DynamoDB() 
 exports.handler = async (event, context) => {
     // TODO implement
     if(event.request.userAttributes.sub) {
         let params = {
             Item: {
                 'id': {S: event.request.userAttributes.sub},
                 'profileCompleted': {BOOL: false},
                 'orgName': {NULL: true},
                 'role': {S: 'Volunteer'},
                 'preferences': {NULL: true},
                 'log': {NULL: true},
                 'gender': {NULL: true},
                 'skillset': {NULL: true},
                 'interests': {NULL: true}
             },
             TableName: "Volunteer-cugqti27sjekzoglyjvfa7kwkm-dev"
         }
         try {
             console.log(params.Item);
             await ddb.putItem(params).promise()
             console.log("Success")
         } catch (err) {
             console.log("Error", err)
         }
 
         console.log("Success: Everything executed correctly")
         return event;
     }
     const response = {
         statusCode: 200,
         body: JSON.stringify('Hello from Lambda!'),
     };
     return response;
 };
 
