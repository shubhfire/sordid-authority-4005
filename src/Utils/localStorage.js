const getLocalData=key=>{
    if(key){
        let data=localStorage.getItem(key)
        return data
    }
}

const getNameFromLocal=key=>{
    if(key){
        let data=localStorage.getItem(key)
        return data
    }
}

const saveNameInLocal=(key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
}
const saveLocalData=(key,value)=>{
    if(key && value){
       localStorage.setItem(key,value)
    }
}

export {getLocalData,saveLocalData,getNameFromLocal,saveNameInLocal}