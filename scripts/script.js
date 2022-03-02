var quantidade = $('div#testemunhos ul').length;
var limite = (quantidade * 336) * -1;
var largura = limite + 336;
var view_largura = $('section#testemunha div#testemunha-centro').width();

$('div#testemunhos').css('width', limite * -1);

//$('div#teste').html(limite);

$('div#testemunha-direita').click(function(){
    
    posicao_atual = $('div#testemunhos').position().left;
    nova_posicao = posicao_atual - view_largura;

    if(limite < posicao_atual - view_largura){
        $('div#testemunhos').animate({left:nova_posicao}, 1000);
    }

    if(limite > (nova_posicao - view_largura)){
        $('div#testemunha-direita ion-icon').css('opacity', 0.5);
        $('div#testemunha-direita ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-esquerda ion-icon').css('opacity', 1);
    $('div#testemunha-esquerda ion-icon').css('cursor', 'pointer');

})

$('div#testemunha-esquerda').click( function() {
    posicao_atual = $('div#testemunhos').position().left;

    if (posicao_atual + view_largura <=0){
        nova_posicao = posicao_atual + view_largura;
        $('div#testemunhos').animate({left:nova_posicao}, 1000);
    }

    if(nova_posicao == 0 ){
        $('div#testemunha-esquerda ion-icon').css('opacity', 0.5);
        $('div#testemunha-esquerda ion-icon').css('cursor', 'not-allowed');
    }

    $('div#testemunha-direita ion-icon').css('opacity', 1);
    $('div#testemunha-direita ion-icon').css('cursor', 'pointer');
})


/*CODIGOS DE ANIMAÇÃO HOME*/
/*
COMO FIZ OS TESTES
$('section#dia-perfeito').waypoint(function(direcao){
    if(direcao == 'down'){
        console.log('descendo');
    }
    if(direcao == 'up'){
        console.log('subindo');
    }
}, {
    offset:'400px;'
})
*/

$('section#dia-perfeito').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div.folha1').addClass('animate__animated animate__fadeInUp');
        $('div.folha3').addClass('animate__animated animate__fadeInUp');
        $('div.camarao').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').addClass('animate__animated animate__fadeInUp animate__slower');

    }else{
        $('div.folha1').removeClass('animate__animated animate__fadeInUp');
        $('div.folha3').removeClass('animate__animated animate__fadeInUp');
        $('div.camarao').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.tomate').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.folha2').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div.queijo').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'400px;'
})
/*----------------------------*/
/*  SEÇÃO - DEPOIMENTOS       */
/*----------------------------*/
//Deixando os elementos com opacidade 0
$('div#testemunhos ul:eq(0)').css('opacity', 0);
$('div#testemunhos ul:eq(1)').css('opacity', 0);
$('div#testemunhos ul:eq(2)').css('opacity', 0);


$('section#testemunha').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#testemunhos ul:eq(0)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').addClass('animate__animated animate__fadeInUp animate__slower');
    }else{
        $('div#testemunhos ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#testemunhos ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div#testemunhos ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');
    }
}, {
    offset:'300px;'
})

/*----------------------------*/
/*  SEÇÃO - TRANSIÇÃO         */
/*----------------------------*/

$('div#transicao-testemunha-plano').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#decoracao1').removeClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').removeClass('animate__animated animate__fadeOut animate__slower');
        $('div#decoracao3').removeClass('animate__animated animate__fadeOutRight animate__slow');

        $('div#decoracao1').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeIn animate__slow');
        $('div#decoracao3').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        //Estou fazendo com que ele saia do jeito que entrou
        $('div#decoracao1').addClass('animate__animated animate__fadeOutLeft animate__slow');
        $('div#decoracao2').addClass('animate__animated animate__fadeOut animate__slower');
        $('div#decoracao3').addClass('animate__animated animate__fadeOutRight animate__slow');
    }
}, {
    offset:'600px;'
})

/*----------------------------*/
/*  SEÇÃO - PLANOS            */
/*----------------------------*/
//Tirando a opacidade do elemento testemunho
//$('div.planos:eq(0)').css('opacity', 0);
$('div.planos:eq(1)').css('opacity', 0);
$('div.planos:eq(2)').css('opacity', 0);

$('section#plano-principal').waypoint(function(direcao){
    if(direcao == 'down'){
       /* $('div.planos:eq(0)').addClass('animate__animated animate__fadeInLeft animate__slow');*/
        $('div.planos:eq(1)').addClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(2)').addClass('animate__animated animate__fadeInRight animate__slow');
    }else{
        /*$('div.planos:eq(0)').removeClass('animate__animated animate__fadeInLeft animate__slow');
        $('div.planos:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slow');
        $('div.planos:eq(2)').removeClass('animate__animated animate__fadeInRight animate__slow');*/
    }
}, {
    offset:'0px;'
})

$('section#plano-principal h2').waypoint(function(direcao){
    if(direcao == 'down'){
        console.log('descendo');
    }
    if(direcao == 'up'){
        console.log('subindo');
    }
}, {
    offset:'0px;'
})

/*----------------------------
  SEÇÃO - Bebidas            

$('div#bebidas-opcoes ul:eq(0)').css('opacity', 0);
$('div#bebidas-opcoes ul:eq(1)').css('opacity', 0);
$('div#bebidas-opcoes ul:eq(2)').css('opacity', 0);
$('div#bebidas-opcoes ul:eq(3)').css('opacity', 0);
$('div#bebidas-opcoes ul:eq(4)').css('opacity', 0);

$('section#bebidas h2').waypoint(function(direcao){
    if(direcao == 'down'){
        
        $('div#bebidas-opcoes ul:eq(0)').addClass('animate__animated animate__fadeInUp');

        $('div#bebidas-opcoes ul:eq(1)').addClass('animate__animated animate__fadeInUp animate__slower');

        $('div#bebidas-opcoes ul:eq(2)').addClass('animate__animated animate__fadeInUp');

        $('div#bebidas-opcoes ul:eq(3)').addClass('animate__animated animate__fadeInUp animate__slower');

        $('div#bebidas-opcoes ul:eq(4)').addClass('animate__animated animate__fadeInUp');

    }
    if(direcao == 'up'){
        
        $('div#bebidas-opcoes ul:eq(0)').removeClass('animate__animated animate__fadeInUp animate__slower');

        $('div#bebidas-opcoes ul:eq(1)').removeClass('animate__animated animate__fadeInUp animate__slower');

        $('div#bebidas-opcoes ul:eq(2)').removeClass('animate__animated animate__fadeInUp animate__slower');

        $('div#bebidas-opcoes ul:eq(3)').removeClass('animate__animated animate__fadeInUp animate__slower');
        $('div#bebidas-opcoes ul:eq(4)').removeClass('animate__animated animate__fadeInUp animate__slower');

    }
}, {
    offset:'0px;'
})
--------------------------------------------*/

/*----------------------------
  SEÇÃO - IMAGENS  
-------------------------------*/
/*--- ESTOU TIRANDO A OPACIDADE DOS ELEMENTOS*/

$('div#imagem-mestre ul li:eq(0)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(1)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(2)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(3)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(4)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(5)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(6)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(7)').css('opacity', 0);
$('div#imagem-mestre ul li:eq(8)').css('opacity', 0);

/*----ESTOU ANIMANDO OS ELEMENTOS --- */

$('section#imagem div#imagem-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('div#imagem-mestre ul li:eq(0)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#imagem-mestre ul li:eq(1)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#imagem-mestre ul li:eq(2)').addClass('animate__animated animate__fadeInUp animate__slow');
        $('div#imagem-mestre ul li:eq(3)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#imagem-mestre ul li:eq(4)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#imagem-mestre ul li:eq(5)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#imagem-mestre ul li:eq(6)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#imagem-mestre ul li:eq(7)').addClass('animate__animated animate__fadeInUp animate__slower');
        $('div#imagem-mestre ul li:eq(8)').addClass('animate__animated animate__fadeInUp animate__slower');
        
    }
    if(direcao == 'up'){
        $('div#imagem-mestre ul li:eq(0)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(1)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(2)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(3)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(4)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(5)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(6)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(7)').removeClass('animate__animated animate__fadeInUp');
        $('div#imagem-mestre ul li:eq(8)').removeClass('animate__animated animate__fadeInUp');
    }
}, {
    offset:'550px;'
})


// açoes de menu amburguer

function mostrarMenu(){
    $('nav ul.esquerda').css('display', 'flex');
}

function esconderMenu(){
    $('nav ul.esquerda').css('display', 'none');
}

var controle = true;

$('nav ul#icone-menu').click(function(){
    if(controle == true){
        mostrarMenu();
        controle = false;
    }else{
        esconderMenu();
        controle = true;
    }
})

$(window).resize(function(){
    if($(window).width() > 812){
        mostrarMenu();
    }else{
        esconderMenu();
    }
})