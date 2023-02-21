/*         JS BROWNSER BOM (BROWNSER OBJECT MODEL)


                    OBJECT WINDOW INTERFACE
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
a página corrente (URL - Uniform Resource Location) ou para 
redirecionar o browser para uma nova página. Podemos listar como
propriedades desta propriedade:
    * window.location.href: retorna a URL da página atual.
        Por exmeplo: https://www.w3schools.com/js/js_window.asp
    * window.location.hostname: retorna o rótulo da página.
        Por exemplo: www.w3schools.com
    * window.location.pathname: retorna o path da página atual.
        Por exemplo: /js/js_window.asp
    * window.location.protocol: retorna o protocolo web usado.
        Pode ser tanto 'http:' quando 'https:'.
    * window.location.port: a propriedade foi feita para retornar
        o valor da porta do servidor de hospedagem 80 ou 443.
        Porém, a maioria dos navegadores não exibem a informação.

A propriedade também apresenta um método:
    * window.location.assign("<URL>"): le um novo documento.



                    WINDOW HISTORY
A propriedade history contém todas as informações históricas
da página. Por razões de privacidade dos dados dos usuários,
existem limitações de como o JavaScript acessa essas informações.
Existem dois métodos que são usáveis:
    * window.back(): acessa o endereço gravado na posição anterior.
    * window.forward(): acesso o endereço gravado posteriormente.


                    WINDOW NAVIGATOR
    A propriedade navigator faz a captura de dados do navegador
que está executando a página. Podemos citar três propriedades:
    * window.navigator.cookieEnable: verifica se o navegador
        está com cookies ativados, o retorno é booleano.
    * window.navigator.language: retorna a linguagem do browser.
    * window.navigator.onLine: verifica se o browser está online.
    * window.navigator.javaEnable: verifica se o java está ativo.
- Observação: grande parte das propriedades dessa propriedade
    foram descontinuados por motivos de privacidade.


                WINDOW POPUP BOXES
    Java Script possui três tipos de popup boxes que são ativados
por meio de métodos específicos:
    * window.alert(): garante que a informação chegue até a atenção 
        do usuário, pois aparece um box popup com um botão 'OK'.
        Enquanto não se clicar em 'OK', o resto do documento não
        irá carregar. Os textos são parametrizados em strings.
        O método não apresenta retorno (undefined).
    * window.confirm(): o usuário confirma ou rejeita um determinado
        comando na forma de string. Isso acontece por meio de um 
        box que carrega dois botões: 'OK' e 'Cancel'. O comando é 
        passado para o método por meio de string parametrizada. O 
        retorno do método é true (se OK) e false (se Cancel).
    * window.prompt(): é usado para colher informações para alimentar
        o sistema com dados fornecidos pelo usuário. São usadas duas
        strings parametrizadas, sendo a primeira o texto exibido ao
        usuário solicitando a prestação de informações e a segunda
        o texto default do inputbox.


                    WINDOW TIMING EVENTS
    O objeto window permite a execução de um determinado tipo
de código em intervalos de tempo previamente especificados.
Existem dois métodos de HTML DOM que são usados para essa
dinalidade:
    * window.setTimeout(function, milliseconds): executa a função
        depois de decorrido o intervalo de tempo indicado.
    * window.setInterval(function, milliseconds): executa a 
        função continuamente em intervalo de tempo regulares 
        os quais devem ser especificados no parâmetro.
- Observação: não podemos executar a função dentro dos métodos.
É preciso passar a função para ser usada em callback, ou seja,
sem os parenteses como referência.



                    WINDOW COOKIES 
Cookies são dados armazenados em pequenos arquivos de texto
no computador do usuário. Podemos armazenar quantas informações
quisermos. Via de regra, os cookies são deletados assim que 
o navegador é fechado, mas é possível manipular essa informação
por meio de parâmetros. Caso queiramos deletar algum cookie,
basta passar uma variável com data já vencida.

NÂO CRIEI COOKIES

*/


///////////////////////////////////////////////////////////
// O código abaixo só funciona se executado no navegador.//
///////////////////////////////////////////////////////////


// History e Testes dos alerts

function myFunction() {
    alert('Hello');
}

function getBack(){
    window.history.back()
}

function getForward(){
    window.history.forward()
}

function getAlert(msg = 'Testando o alert!!'){
    alert(msg)
}
function getPrompt(){
    prompt('Testando o prompt!!', 'Texto default...')
}
function getConfirm(){
    console.log('Retorno do Confirm:', confirm("Confirma ai!!"))
}


// Abre uma nova janela com as especificações
const newWindow = window.open('http://www.google.com', "Google", 'popup=true, console=true')
newWindow.moveTo(300,300)
newWindow.resizeTo(500,500)
newWindow.alert("Deu certo!")
newWindow.close()

// Realiza medições na tela e do objeto window.
console.log('Screen Width:', screen.width)
console.log('Screen Height:', screen.height)
console.log('Screen Avail Width:', screen.availWidth)
console.log('Screen Avail Height:', screen.availHeight)
console.log('Screen Color Depth:', screen.colorDepth)
console.log('Screen Pixel Depth:', screen.pixelDepth)

// Trabalha com dados de localização
function newDoc(){
    window.location.assign('https://www.w3schools.com')
    console.log('Href:', window.location.href)
}
console.log('Href:', window.location.href)
console.log('Hostname:', window.location.hostname)
console.log('Pathname:', window.location.pathname)
console.log('Protocol:', window.location.protocol)
console.log('Port:', window.location.port)

// Traz informações diversas do sistema de acesso.
console.log('CookieEnable:', window.navigator.cookieEnabled)
console.log('LinguagemNavegador:', window.navigator.language)
console.log('NavegadorOnline:', window.navigator.onLine)
console.log('JavaEnable:', window.navigator.JavaEnabled)