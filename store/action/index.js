const set_data = (data) =>{
    // console.log("Hello")
    return (dispatch)=>{
        // console.log("Hello")
    dispatch({type: "SETDATA",data:data})
    }
    
}

export { 
    set_data
}