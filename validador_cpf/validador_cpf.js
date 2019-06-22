validador_cpf= function(cpf){
    primeiro_digito = 0
    segundo_digito = 0
    // Remover pontos e traço.
    cpf= cpf.replace( ".","").replace( ".","").replace("-","")
    // Caso a quantidade de caracteres seja menor 11, ele não é um cpf válido, pois são 11 caracteres
    // que formam um cpf
    if (cpf.length < 11){
        return "CPF inválido"
    }if(Number.isInteger(Number(cpf))){ // Uma verificação simples para ver se possui letras, caso tenha, é inválido
        cpf_vetor= cpf.split("")
        // Para o algoritmo de validação, caso tenha ulgum cpf que possua todos os carecteres iguais, 
        // ele se torna válido, porém este teste barra esta brecha, pois não existe este tipo de CPF.
        if(cpf_vetor[0] == cpf_vetor[1] & cpf_vetor[1] == cpf_vetor[2] & cpf_vetor[2] == cpf_vetor[3] & cpf_vetor[3] == cpf_vetor[4] & 
           cpf_vetor[4] == cpf_vetor[5] & cpf_vetor[5] == cpf_vetor[6] & cpf_vetor[6] == cpf_vetor[7] & cpf_vetor[7] == cpf_vetor[9] &
           cpf_vetor[8] == cpf_vetor[9] & cpf_vetor[9] == cpf_vetor[10]){
            return "CPF inválido"
        }
        // Na primeira etapa de verificação, será necessario multiplicar os 9 primeiros dígitos pela 
        // sequência decrescente de números de 10 à 2 e somar os resultados. Ex: CPF fictício "529.982.247-25"
        // Exemplo: 5 * 10 + 2 * 9 + 9 * 8 + 9 * 7 + 8 * 6 + 2 * 5 + 2 * 4 + 4 * 3 + 7 * 2 = 295
        for(i=0; i<9;i++){
            primeiro_digito +=  Number(cpf_vetor[i])*(10-i)
        }
        // O próximo passo da verificação também é simples, é capturar o resto da divião da somatório por 11.
        // Depois é pegar o resto e diminuir de 11 (11 - resto_da_divisão) e assim se obtem o primeiro digito.
        // Obs: caso o valor da subtração resulte em um valor menor que 2, o digito verificador será 0.
        primeiro_digito= primeiro_digito % 11
        if(primeiro_digito< 2){
            primeiro_digito= 0
        }else{
            primeiro_digito= 11 - primeiro_digito
        }
        // Na segunda etapa de verificação, será necessario multiplicar os 9 primeiros dígitos mais o primeiro dogito obtido pela 
        // sequência decrescente de números de 11 à 2 e somar os resultados. 
        // Exemplo: 5 * 11 + 2 * 10 + 9 * 9 + 9 * 8 + 8 * 7 + 2 * 6 + 2 * 5 + 4 * 4 + 7 * 3 + primeiro_digito * 2 = 299
        for(i=0; i<9;i++){
            segundo_digito +=  Number(cpf_vetor[i])*(11-i)
        }
        segundo_digito += primeiro_digito * 2
        // O próximo passo  é capturar o resto da divião da somatório por 11.
        // Depois é pegar o resto e diminuir de 11 (11 - resto_da_divisão) e assim se obtem o primeiro digito.
        // Obs: caso o valor da subtração resulte em um valor menor que 2, o digito verificador será 0.
        segundo_digito= segundo_digito % 11
        if(segundo_digito< 2){
            segundo_digito= 0
        }else{
            segundo_digito= 11 - segundo_digito
        }
        // Por fim é só comparar os obtidos(primeiro_digito e segundo_digito) se são iguais aos dois ultimos valores
        // do CPF original são iguais, caso sejam, o CPF será válido.
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
