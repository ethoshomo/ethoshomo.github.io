function calculoIMC (){
    
    function onClickSend(evento){
        evento.preventDefault()

        const peso = input_peso.value
        const altura = input_altura.value
        
        if (isNaN(peso) || isNaN(altura) || !peso || !altura){
            resultado.innerHTML = `Valores incorretos. Tentar novamente!`
        }
        else{
            const IMC = Number(peso) / ((Number(altura)/100) ** 2)
            console.log(IMC)

            let avaliacao = ''

            if (IMC<20)
                avaliacao = 'abaixo do padrão'
            else if (IMC < 25)
                avaliacao = 'normal'
            else if (IMC < 30)
                avaliacao = 'em sobrepeso'
            else
                avaliacao = 'em obesidade'

            resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)}. Seu peso está ${avaliacao}.`
        }
    }
    
    form = document.getElementById('dados')
    input_altura = document.getElementById('altura')
    input_peso = document.getElementById('peso')
    resultado = document.getElementById('resultado')

    form.addEventListener('submit', onClickSend)
    
}
calculoIMC()