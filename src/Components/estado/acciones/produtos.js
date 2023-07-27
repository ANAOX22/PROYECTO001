const addi = (produtos) =>{
    return {
        type: 'ADD_PRODUTOS', produtos 
    }        

}

const apaga = () =>{
    return {
        type: 'REMOVE_PRODUTOS'
    }
}

const funcCion =  {
    addi, 
    apaga
}



export default funcCion