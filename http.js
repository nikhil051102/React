var http =  require('http');
var server = http.createServer(function(request, response)
{
    console.log('it is a request');
    response.write('Hello LPU');
    response.end();
})
server.listen(2000);