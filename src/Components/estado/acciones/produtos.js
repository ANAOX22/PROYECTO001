


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

export default {
    addi, 
    apaga
}