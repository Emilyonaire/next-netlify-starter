var jsonIHave = {
    "currentMessage": "fetched from site",
    "currentAuthor": "author fetched from the site",
    "currentMessageID": "ID fetched from the site"
}

var stringIHave = "site response to post request"

export default function handler(request, response) {
    if(request.method === 'POST'){
        // PROCESS POST REQUEST, INCOMING DATA
        console.log("========received post request========")
        console.log(request.body);
        
        console.log("========about to parse========")
        jsonIHave = request.body;
        console.log("========about to print json========")
        console.log(jsonIHave);
        console.log(jsonIHave.currentMessage);
        console.log(jsonIHave.currentAuthor);
        console.log(jsonIHave.currentMessageID);
        console.log("========printed json========")

        
        
        // RESPOND TO THE REQUEST
        response.status(200).json({
            "message": "responded via json as was already in json",
            // "test": "got post request, stringIHave is now: " + request.body
        });
    } else if(request.method === 'GET'){
        // PROCESS GET REQUEST, INCOMING DATA
        console.log("received get request")
        response.status(200).json({
            "message": "responded via json as was already in json",
            "test": JSON.stringify(jsonIHave)
        });
    }
}