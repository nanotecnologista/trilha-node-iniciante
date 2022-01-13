function handle(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'})

    response.write ('<!DOCTYPE "html">')
    response.write ('<html>')
    response.write ('<head><title> http Module</title></head>')
    response.write ('<body>')
    response.write ('<h1>Olá mundo</h1>')
    response.write ('</body>')
    response.write ('</html>')
    response.end ()

}

exports.fn = handle // não é priorizado pelo node

//module.exports = handle --> é o que vale