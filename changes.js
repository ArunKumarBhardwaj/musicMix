document.addEventListener('keydown', function(e) {
        if (e.keyCode == 65) {
          document.getElementById('audio').play();
        }

        else if (e.keyCode == 83){
          document.getElementById('audio1').play();
        }


        else if (e.keyCode == 68){
          document.getElementById('audio2').play();
        }

        else if (e.keyCode == 70){
          document.getElementById('audio3').play();
        }

        else if (e.keyCode == 71){
          document.getElementById('audio4').play();
        }
      });

      var audio1 = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav")
      audio1.preload = 'auto';
      var audio2 = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav")
      audio2.preload = 'auto';
      var audio3 = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav")
      audio3.preload = 'auto';
      var audio4 = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav")
      audio4.preload = 'auto';
      var audio5 = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav")
      audio5.preload = 'auto';

      function play(id){

          if(id==="1"){
        //  var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/snare.wav")
         
          audio1.play();

        }
        else if(id==="2"){
        //  var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav")
         
          audio2.play();
        }

        else if(id==="3"){
       //   var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/kick.wav")
         
          audio3.play();
        }

        else if(id==="4"){
         // var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-high.wav")
          
          audio4.play();
          }
        else if(id==="5"){
       //   var audio = new Audio("https://raw.githubusercontent.com/ArunMichaelDsouza/javascript-30-course/master/src/01-javascript-drum-kit/sounds/tom-mid.wav")
          
          audio5.play();
        }
        
      }
         