var AWS = require('aws-sdk');

exports.handler = function(event, context){
    var lambda = new AWS.Lambda({
        apiVersion : '2015-11-10'
    });
    
    var invokedFuncParams = {
        email: 'chrismaandhika@gmail.com'
    };
    
	//Qualifier digunakan untuk memudahkan versioning
    var params = {
        FunctionName: 'CPIGetOneUser',
        Qualifier: 'DEV',
        Payload: JSON.stringify(invokedFuncParams,null,2)
    };
    lambda.invoke(params, function(err,data){
        if(err){
            context.fail(err);
        }
        else{
            var payloadObject = JSON.parse(data.Payload);
            console.log("payload of lambda function invocation:");
            context.succeed(payloadObject);
        }
    });
}