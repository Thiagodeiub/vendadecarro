var frmcarro
var frmvalor = parseInt();

//botao evento
btnmostrar.addEventListener('click', function(){
    frmcarro = carro.value
    frmvalor = valor.value
    mostrar = document.getElementById('mostrarResultado')
    var entrada = frmvalor/2
    var parcela = ((frmvalor/2)/60)*1.7

    mostrar.innerHTML = `
    <div>Promoção :  <strong>${frmcarro}</strong></div>
    <div>Valor do veiculo :  <strong>${frmvalor}</strong></div>
    <div>Entrada do veículo R$:  <strong>${entrada}</strong></div>
    <div>60x de R$ :  <strong>${parcela}</strong></div>
    `
    } ) 
