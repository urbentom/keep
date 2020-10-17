export function removeNote(_id:string){

    return {
        "query":`mutation { removeNote(_id: "${_id}"){ message } }`
    }

}

export function getNotes(){

    return {
        "query": "{ notes { _id title content favourite colour updated } }"
    }

}