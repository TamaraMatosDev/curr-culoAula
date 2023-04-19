const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }



  function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("validacao").innerHTML="E-mail válido";
    }
    else{
    document.getElementById("validacao").innerHTML="<font color='red'>E-mail inválido </font>";
    }
    }

    const form = document.querySelector('form')
    const campo1 = document.getElementById('1')
    const campo2 = document.getElementById('2')
    const campo3 = document.getElementById('3')
    const campo4 = document.getElementById('4')
    const campo5 = document.getElementById('5')
    


    function limparCampos(){

        Array.from(form.elements).forEach(element => {
            if (['text', 'time', 'date', 'tel'].includes(element.type)) {
                element.value = '';
        } else if (element.type === 'checkbox' || element.type === 'radio') {
            element.checked = false;
          }
        });
      }


function submeterForm(){
    if (campo1.value.trim() === '' || campo2.value.trim() === '' || campo3.value.trim() === '' || campo4.value.trim() === '' || campo5.value.trim() === '') {
        window.alert('Por favor, preencha todos os campos.');
      }else {
        document.getElementById("form").submit();
      }
}
      
   
      
    
    
 


/** var nome;
var sobrenome;
var nome_completo;

function concatena(){
    nome = document.formConcatenacao.f_nome.value;
    sobrenome = document.formConcatenacao.f_sobrenome.value;

    nome_completo = nome + ' ' + sobrenome;
    
    window.alert(`Óla ${nome_completo} seja mal vinda aqui`); 
}**/


