function calculatorScope(){
    
    let clickEqual = 0
    const calculadora = document.querySelector('.calculadora')
    const display = document.createElement('input')
    const keyC = document.createElement('button')
    const keyParenteseE = document.createElement('button')
    const keyParenteseD = document.createElement('button')
    const keyDot = document.createElement('button')
    const keyEqual = document.createElement('button')
    const keyBackspace = document.createElement('button')
    const key0 = document.createElement('button')
    const key1 = document.createElement('button')
    const key2 = document.createElement('button')
    const key3 = document.createElement('button')
    const key4 = document.createElement('button')
    const key5 = document.createElement('button')
    const key6 = document.createElement('button')
    const key7 = document.createElement('button')
    const key8 = document.createElement('button')
    const key9 = document.createElement('button')
    const keySum = document.createElement('button')
    const keySub = document.createElement('button')
    const keyMul = document.createElement('button')
    const keyDiv = document.createElement('button')
    const newLine = document.createElement('br')

    display.disabled = true
    keyC.innerHTML = `C`
    keyParenteseD.innerHTML = `)`
    keyParenteseE.innerHTML = `(`
    key0.innerHTML = `0`
    key1.innerHTML = `1`
    key2.innerHTML = `2`
    key3.innerHTML = `3`
    key4.innerHTML = `4`
    key5.innerHTML = `5`
    key6.innerHTML = `6`
    key7.innerHTML = `7`
    key8.innerHTML = `8`
    key9.innerHTML = `9`
    keyDot.innerHTML = `.`
    keyEqual.innerHTML = `=`
    keyDiv.innerHTML = `/`
    keyMul.innerHTML = `*`
    keySum.innerHTML = `+`
    keySub.innerHTML = `-`
    keyBackspace.innerHTML = '&lt;&lt;'

    calculadora.appendChild(display)
    calculadora.appendChild(newLine)
    calculadora.appendChild(keyC)
    calculadora.appendChild(keyParenteseE)
    calculadora.appendChild(keyParenteseD)
    calculadora.appendChild(keyDiv)
    calculadora.appendChild(newLine.cloneNode())
    calculadora.appendChild(key7)
    calculadora.appendChild(key8)
    calculadora.appendChild(key9)
    calculadora.appendChild(keyMul)
    calculadora.appendChild(newLine.cloneNode())
    calculadora.appendChild(key4)
    calculadora.appendChild(key5)
    calculadora.appendChild(key6)
    calculadora.appendChild(keySum)
    calculadora.appendChild(newLine.cloneNode())
    calculadora.appendChild(key1)
    calculadora.appendChild(key2)
    calculadora.appendChild(key3)
    calculadora.appendChild(keySub)
    calculadora.appendChild(newLine.cloneNode())
    calculadora.appendChild(keyDot)
    calculadora.appendChild(key0)
    calculadora.appendChild(keyBackspace)
    calculadora.appendChild(keyEqual)

    function resultado(){
        clickEqual = 1
        try{
            let resultado = eval(display.value)
            if (!resultado) {
                display.value = 'ERROR'
                return    
            }
            display.value = resultado
        }
        catch(e){
            display.value = 'ERROR'
        }
    }

    function clickOrKey(el){
        switch(el){
            case 'C':
                clickEqual = 0
                display.value = ''
                return
            case '&lt;&lt;':
                if (clickEqual === 1){
                    clickEqual = 0
                    display.value = ''
                }
                else{
                    display.value = display.value.slice(0,-1)
                }
                return
            case '=':
            case 'Enter':
                resultado()
                return
            case '(':
            case ')':
            case '0':    
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
            case '+':
            case '-':
            case '/':
            case '*':
                if (clickEqual === 1){
                    clickEqual = 0
                    display.value = el
                }
                else
                    display.value += el
                return
            default:
        }
    }
    
    document.addEventListener('click', function(e){
        const el = e.target.innerHTML
        console.log(clickOrKey(el))
    })

    document.addEventListener('keypress', function(e){
        const el = e.key
        console.log(clickOrKey(el))
    })
}
calculatorScope()