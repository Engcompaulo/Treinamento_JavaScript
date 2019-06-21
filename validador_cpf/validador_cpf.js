validador_cpf= function(cpf){
    primeiro_digito = 0
    segundo_digito = 0
    cpf= cpf.replace( ".","").replace( ".","").replace("-","")
    if (cpf.length < 11){
        return "CPF inválido"
    }if(Number.isInteger(Number(cpf))){
        cpf_vetor= cpf.split("")
        if(cpf_vetor[0] == cpf_vetor[1] & cpf_vetor[1] == cpf_vetor[2] & cpf_vetor[2] == cpf_vetor[3] & cpf_vetor[3] == cpf_vetor[4] & 
           cpf_vetor[4] == cpf_vetor[5] & cpf_vetor[5] == cpf_vetor[6] & cpf_vetor[6] == cpf_vetor[7] & cpf_vetor[7] == cpf_vetor[9] &
           cpf_vetor[8] == cpf_vetor[9] & cpf_vetor[9] == cpf_vetor[10]){
            return "CPF inválido"
        }
        for(i=0; i<9;i++){
            primeiro_digito +=  Number(cpf_vetor[i])*(10-i)
        }
        primeiro_digito= primeiro_digito % 11
        if(primeiro_digito< 2){
            primeiro_digito= 0
        }else{
            primeiro_digito= 11 - primeiro_digito
        }
        for(i=0; i<9;i++){
            segundo_digito +=  Number(cpf_vetor[i])*(11-i)
        }
        segundo_digito += primeiro_digito * 2
        segundo_digito= segundo_digito % 11
        if(segundo_digito< 2){
            segundo_digito= 0
        }else{
            segundo_digito= 11 - segundo_digito
        }
        if(Number(cpf_vetor[9]) == primeiro_digito & Number(cpf_vetor[10]) == segundo_digito){
            return "CPF válido"
        }else{
            return "CPF inválido"
        }
    }
    else{
        return "CPF inválido"
    }
    

}
console.log(validador_cpf("cpf_em_string"))
