const script_do_google = 'https://script.google.com/macros/s/AKfycby2tv0KbgfJ9wALWEezvRy35PGzHSpQMMa_SQoY-BUrGYsxNR3ZvgjTHobO77Qj-HxrYA/exec';
const dados_do_formulario = document.forms['Atendimentos'];

dados_do_formulario.addEventListener('submit' , function (e) {
    e.preventDefault();
    fetch(script_do_google, {method: 'POST' , body: new FormData(dados_do_formulario) })
    .then(response =>{
        // Se os dados forem gravados corretamente , será enviada uma mensagem de sucesso
        alert('Dados enviados com sucesso!', response);
        dados_do_formulario.reset();
})
.catch(error =>
    // Se houver erro no envio, a menssagem abaixo será exibida
    console.error('Erro no envio dos dados!' , error)
)
});

