/*              OBJECT WINDOW INTERFACE
O objeto windows é responsável por criar uma interface que é
suportada por todos os browsers. É interessante notar que todos
elementos globais, tais como objetos, funções e variáveis, serão
membros desse objeto. Até mesmo o DOM é uma propriedade do objeto
window (window.document).
 
Em termos de estrutura de código:
- Propriedades:
    - Achei mais conveniente explicar as propriedade screen e 
    window em tópicos abaixo.
- Métodos:
    * window.open(): abre uma nova aba no navegador. Se quisermos
        explorar outros métodos, precisamos indicar três parâmetros,
        que são url, target e features. Seu retorno cria um objeto
        window que poderá ser usado com outros métodos.
    * <window>.close(): fecha uma janela aberta.
    * .moveTo(x,y): movimenta a janela na tela para as
        posições x,y (com origem no canto esquerdo superior).
    * <window>.resizeTo(width,height): redimensiona a janela para
        as alturas e larguras indicadas como parâmetro.
    * Observações: 
        - Por razões de segurança, os métodos de moveTo(), resizeTo(), 
        moveBy() e resizeBy(), não podem ser utilizados em
        window que já fora criadas ou possuem mais de uma aba.
        Por isso, é preciso criar um objeto com o open() e usar
        esses métodos em uma nova janela popup.
        - O método somente funciona em navegadores que têm o 
        objeto window em execução.

- Variáveis globais: serão usadas como propriedades de window.
- Funções globais: serão usadas como métodos do objeto window.




                    WINDOW SCREEN

O tamanho da tela do aparelho em que o browser foi aberto pode 
ser identificada pelo objeto window, usando uma propriedade
chamada de windo.screen. Essa propriedade tem suas próprias
propriedades:
    * width: largura da tela em pixels.
    * height: altura da tela em pixels.
    * availWidth: trata-se da largura de tela disponível descontada
        a largura do nevegador.
    * availHeight: trata-se da altura de tela disponível descontada
        a altura do navegador.
    * colorDepth: densidade de cores suportadas pelo aparelho
        que o usuário usa para ver o objeto window. Nos monitores
        mais modernos esses valores são 24 ou 32 bits.
    * pixelDepth: densidade de pixels, mas em monitores mais 
        modernos colorDepth ou pixelDepth apresentam o mesmo
        valor.


                    WINDOW SIZE

O tamanho do browser window é composto por duas propriedades
que são medidas em pixels. É muito conveniente deixar bem claro
que o tamanho da tela engloba apenas a área de exibição de sites.
Por isso, não engloba as ferramentas do browser (como os botões 
de voltar, avançar e outros), bem como não inclui as barras de 
rolagem. Assim, podemos identificar o tamanho por meio das duas
propriedades abaixo relacionadas:
    * window.innerHeight: altura do objeto window no navegador.
    * window.innerWidht: largura do objeto window no navegador.



                    WINDOW LOCATION

A propriedade window.location pode ser utilizada para mostrar
a página corrente (URL) ou para redirecionar o browser para uma
nova página. Propriedades desta propriedade:
    * window.location.href:
    * window.location.hotname:
    * window.location.pathname:
    * window.location.protocol:
    * window.location.port:

A propriedade também apresenta um método:
    * window.location.assign("<URL>"):



                    WINDOW 



*/
function newDoc(){
    window.location.assign('https://www.w3schools.com')
    console.log('Href:', window.location.href)
}

// Só funciona se executado no navegador.
const newWindow = window.open('http://www.google.com', "Google", 'popup=true, console=true')
newWindow.moveTo(300,300)
newWindow.resizeTo(500,500)
newWindow.alert("Deu certo!")
newWindow.close()

console.log('Screen Width:', screen.width)
console.log('Screen Height:', screen.height)
console.log('Screen Avail Width:', screen.availWidth)
console.log('Screen Avail Height:', screen.availHeight)
console.log('Screen Color Depth:', screen.colorDepth)
console.log('Screen Pixel Depth:', screen.pixelDepth)

console.log('Hostname:', window.location.hostname)
console.log('Pathname:', window.location.pathname)
console.log('Protocol:', window.location.protocol)
console.log('Port:', window.location.port)
