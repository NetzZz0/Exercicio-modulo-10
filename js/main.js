$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            }
        },
        messages: {
            nome: "Por favor, insira seu nome",
            email: "Por favor, insira seu email",
            telefone: "Por favor, insira seu telefone",
            endereco: "Por favor, insira seu endereço",
            cep: "Por favor, insira seu CEP",
            cpf: "Por favor, insira seu CPF"
        },
        submitHandler: function (form) {
            alert("Cadastro conluído");
            form.submit();
        },
        invalidHandler: function (evento, validator) {
            let camposIncompletos = validator.numberOfInvalids();
            if (camposIncompletos) {
                alert("Por favor, preencha os campos para prosseguir com a compra!");
            }
        }
    });
});