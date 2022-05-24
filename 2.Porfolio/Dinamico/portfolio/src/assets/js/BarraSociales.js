window.addEventListener('load',inicializarEventos,false);

function inicializarEventos(e)
{
    var ob=document.createElement('div');
    ob.innerHTML= "<a target='_blank' class='linkedin-profileinsider-inline' href='http://es.linkedin.com/in/diegodelafuente78'> <img src='assets/imagenes/linkedinlogo.png' alt='in' height='20px' width='20px'/></a>";
    ob.innerHTML=  ob.innerHTML + "&nbsp;<a target='_blank' href='https://www.instagram.com/delafuente.d/'><img src='assets/imagenes/logoinstagram.png' alt='ig' height='20px' width='20px'/></a>";
    ob.innerHTML= ob.innerHTML + "&nbsp;<a target='_blank' href='https://www.facebook.com/diego.delafuente.169'><img src='assets/imagenes/logofacebook.png' alt='fb' height='20px' width='20px'/></a>";
    ob.style.left='5px'
    ob.style.top='5px';
    ob.style.width='100px';
    ob.style.height='30px';
    ob.style.background='#A1D2CE';
    ob.style.position='fixed';
    ob.style.cursor="move";
    ob.style.border = "1px solid black";
    ob.style.borderRadius="25px";
    ob.style.paddingLeft = "10px";
    ob.style.zIndex = "20";
    var x=document.getElementsByTagName('body');
    x[0].appendChild(ob);
    var recu1=new Recuadro(ob);
}

Recuadro = function(div) {
    var tX=0;
    var tY=0;
    var difX=0;
    var difY=0;
    
    div.addEventListener('mousedown', inicioDrag, false);

    function coordenadaX(e){
        return e.pageX;
    }

    function coordenadaY(e) {
        return e.pageY;
    }

    function inicioDrag(e) {
        var eX=coordenadaX(e);
        var eY=coordenadaY(e);
        var oX=parseInt(div.style.left);
        var oY=parseInt(div.style.top);
        difX=oX-eX;
        difY=oY-eY;
        document.addEventListener('mousemove',drag,false);
        document.addEventListener('mouseup',soltar,false);
    }
    
    function drag(e){ 
        tX=coordenadaY(e) + difY + 'px';
        tY=coordenadaX(e) + difX + 'px';
        div.style.top=tX; 
        div.style.left=tY;
    }

    function soltar(e) { 
        document.removeEventListener('mousemove',drag,false);
        document.removeEventListener('mouseup',soltar,false);
    }
}