var jsonIHave = {
    "currentMessage": "fetched from site",
    "currentAuthor": "author fetched from the site",
    "currentMessageID": "ID fetched from the site"
}

var stringIHave = "site response to post request"

export default function handler(request, response) {
    if(request.method === 'POST'){
        // PROCESS POST REQUEST, INCOMING DATA
        console.log(request.body);

        stringIHave = request.body;

        
        // RESPOND TO THE REQUEST
        response.status(200).send(stringIHave);
    } else if(request.method === 'GET'){
        // PROCESS GET REQUEST, INCOMING DATA
        response.status(200).json({
            "message": "responded via json as was already in json",
            "test": stringIHave
        });
    }
}