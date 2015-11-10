/**
 * Created by Chrisma on 11/10/2015.
 */

var AWS = require('aws-sdk');
exports.handler = function(event, context){
    var params = {
        TableName: 'LambdAuthUsers'
    };

    var docClient = new AWS.DynamoDB.DocumentClient();
    docClient.scan(params, function(err, data) {
        if (err){
            context.fail(err);
        }
        else{
            // var result = JSON.stringify(data.Items,null,2);
            context.succeed(data.Items);
        }
    });
}