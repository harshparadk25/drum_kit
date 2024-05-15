var numberofdrums=document.querySelectorAll(".drum").length;


for(var i=0;i<numberofdrums;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
  });
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key){
  switch(key)
  {
    case "w":
      var audio = new Audio("sounds_tom-1.mp3");
      audio.play();
      break;

      case "a":
        var audio = new Audio("sounds_tom-2.mp3");
        audio.play();
        break;

        case "s":
          var audio = new Audio("sounds_tom-3.mp3");
          audio.play();
          break;

          case "d":
            var audio = new Audio("sounds_tom-4.mp3");
            audio.play();
            break;

            case "j":
              var audio = new Audio("sounds_snare.mp3");
              audio.play();
              break;

              case "k":
                var audio = new Audio("sounds_crash.mp3");
                audio.play();
                break;

                case "l":
                  var audio = new Audio("sounds_kick-bass.mp3");
                  audio.play();
                  break;

                  default:console.log(buttonInnerHTML);
    }
  }


function buttonAnimation(currentkey){
  var activeButton=document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}





/* var audio=new Audio('sounds_tom-1.mp3')
    audio.play(); */