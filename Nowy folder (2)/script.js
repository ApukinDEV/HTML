a=0;
started=0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  function start(wybor){
    document.getElementById("gornalewo").style.animation="";
    document.getElementById("gornaprawo").style.animation="";
    document.getElementById("gornalewo").src="rekarock.png";
    document.getElementById("gornaprawo").src="rekarock.png";
    document.getElementById("dolnalewo").style.transform="translateX(0px)";
    document.getElementById("dolnaprawo").style.transform="translateX(0px) rotateY(180deg)";
    document.getElementById("gornalewo").style.transform="translateX(0px) translateY(-100px)";
    document.getElementById("gornaprawo").style.transform="translateX(0px) rotateY(180deg) translateY(-100px)";
    if(started==0){
        started=1;
        sleep(2000).then(() => { animation(wybor); });
    }else{
        sleep(200).then(() => { animation(wybor); });
    }
}
function animation(wybor){
    document.getElementById("gornalewo").style.animation="left 2.5s";
    document.getElementById("gornaprawo").style.animation="right 2.5s";
    a=(Math.floor(3*Math.random()));
    sleep(2400).then(() => {  
    losowanie(wybor, a);
    if(wybor==0){
        document.getElementById("gornalewo").src="rekapapier.png"
    }else if(wybor==2){
        document.getElementById("gornalewo").src="rekanozyce.png"
    }
    if(a==0){
        document.getElementById("gornaprawo").src="rekapapier.png"
    }else if(a==2){
        document.getElementById("gornaprawo").src="rekanozyce.png"
    }
    
    
    });
}
function losowanie(wybor, a){
    if(wybor==a){
        document.getElementById("wynikzdjecie").src="remis.png"
    }else if(a==2 && wybor==0){
        document.getElementById("wynikzdjecie").src="przegrana.png";
    }else if(a==0 && wybor==2){
        document.getElementById("wynikzdjecie").src="wygrana.png";
    }else if(wybor<a){
        document.getElementById("wynikzdjecie").src="wygrana.png";
    }else if(wybor>a){
        document.getElementById("wynikzdjecie").src="przegrana.png";
    }
}