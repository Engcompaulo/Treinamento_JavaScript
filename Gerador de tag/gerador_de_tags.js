var btn_Teste = document.getElementById('btn_principal');
var lbl_Exibir = document.getElementById('exibir');

function foo(){
    html_src = '<ul>\n';
    animais = ['Boi', 'Cabra', 'Bode', 'Coelho', 'Vaca', 'Vespa', 'Leão', 'Lhama'];

    for(i=0; i< animais.length; i++){
        html_src += '<li>'+animais[i]+'</li>'+'\n';
    }

    html_src += '</ul>'

    console.log(html_src)

    return html_src;

}
function exibir_Tags(html_Montado){
    lbl_Exibir.innerHTML = html_Montado;
}

btn_Teste.addEventListener('click', function(){
    lbl_Exibir.innerHTML = foo()
})


//appendChild
