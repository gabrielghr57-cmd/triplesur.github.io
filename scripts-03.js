const ruleta = document.querySelector("#ruletaz");

ruleta.addEventListener ("click",girar);
 

function girar(){
    
        var rand = Math.random()*7200;
        var sonido = document.querySelector('#audio',girar);
        sonido.setAttribute('src',"sonido/Windows Navigation Start.wav");
        var sonido = false;





        calcular(rand);
        
          
}


function calcular (rand){

    valor = rand / 360;
    valor = (valor - parseInt(valor.toString().split(".")[0] ))* 360;
    ruleta.style.transform = "rotate("+rand+"deg)";
    setTimeout(()=>{
         switch(true){
              
              case valor > 0 && valor <= 11.6 : 
              document.getElementById("cuadro32").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 11.6 && valor <= 23.2 : 
             document.getElementById("cuadro31").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 23.2 && valor <= 34.8 : 
              document.getElementById("cuadro30").style.display = "block";audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 34.8 && valor <= 46.4 : 
              document.getElementById("cuadro29").style.display = "block";audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 46.4 && valor <= 58 : 
             document.getElementById("cuadro28").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 58 && valor <= 69.6 : 
             document.getElementById("cuadro27").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 69.6 && valor <= 81.2 : 
             document.getElementById("cuadro26").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 81.2 && valor <= 92.8 : 
             document.getElementById("cuadro25").style.display = "block";  audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 92.8 && valor <= 104.4 : 
             document.getElementById("cuadro24").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 104.4 && valor <= 116 : 
             document.getElementById("cuadro23").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 116 && valor <= 127.6 : 
             document.getElementById("cuadro22").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 127.6 && valor <= 139.2 : 
             document.getElementById("cuadro21").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 139.2 && valor <= 150.8 : 
              document.getElementById("cuadro20").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 150.8 && valor <= 162.4 : 
              document.getElementById("cuadro19").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 162.4 && valor <= 174 : 
              document.getElementById("cuadro18").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 174 && valor <= 185.6 : 
              document.getElementById("cuadro17").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 185.6 && valor <= 197.2 : 
              document.getElementById("cuadro16").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 197.2 && valor <= 208.8 : 
              document.getElementById("cuadro15").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 208.8 && valor <= 220.4 : 
              document.getElementById("cuadro14").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 220.4 && valor <= 232 : 
             document.getElementById("cuadro13").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 232 && valor <= 243.6 : 
             document.getElementById("cuadro12").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 243.6 && valor <= 255.2 : 
             document.getElementById("cuadro11").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 255.2 && valor <= 266.8 : 
             document.getElementById("cuadro10").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 266.8 && valor <= 278.4 : 
             document.getElementById("cuadro09").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 278.4 && valor <= 290 : 
             document.getElementById("cuadro08").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 290 && valor <= 301.6 : 
             document.getElementById("cuadro07").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 301.6 && valor <= 313.2 : 
             document.getElementById("cuadro06").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 313.2 && valor <= 324.8 : 
             document.getElementById("cuadro05").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;
              
              case valor > 324.8 && valor <= 336.4 : 
             document.getElementById("cuadro04").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 336.4 && valor <= 348 : 
             document.getElementById("cuadro03").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
              break;

              case valor > 348 && valor <= 360 : 
             document.getElementById("cuadro02").style.display = "block"; audio.pause(); document.getElementById("particles-js").style.zIndex = "auto"; 
                           break;

          }
    },19999);
    
       }

   
