export default function handler(request, response) {
    if(request.method === 'POST'){
        // PROCESS POST REQUEST, INCOMING DATA
        console.log(request.body);
        

    } else if(request.method === 'GET'){
        // PROCESS GET REQUEST, INCOMING DATA
        response.status(200).json({"message": "Hello World!"});
    }
}