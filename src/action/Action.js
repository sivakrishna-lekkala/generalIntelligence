export function toggleShowDetails(type,data){ 
    if(data !=null){
        return {
            type:type,
            data:data
        }
    }
}

export function getUserDetails(data){
    console.log("data");
    console.log(data);
    if( data != null){
        return {
            type:"GET_USER",
            data:data
        }
    }
}