/**
 * Created by Chrisma on 11/10/2015.
 */

var AWS = require('aws-sdk');
exports.handler = function(event, context){
    var email = event.email;
	
    var params = {
        TableName: 'LambdAuthUsers',
        Key: {
            email: email
        }
    };

    var docClient = new AWS.DynamoDB.DocumentClient();
    docClient.get(params, function(err,data){
        if(err){
            context.fail(err);
        }
        else{
            // var result = JSON.stringify(data.Item, null,2);
            context.succeed(data.Item);
        }
    });

}