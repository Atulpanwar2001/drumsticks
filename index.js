function handleClick(drumkey)
{

    var alpha = drumkey;
    switch(alpha)
    {
      case 'w' : { audio1 = new Audio("sounds/crash.mp3");} break;
      case 'a' : { audio1 = new Audio("sounds/kick-bass.mp3");} break;
      case 's' : { audio1 = new Audio("sounds/snare.mp3");} break;
      case 'd' : { audio1 = new Audio("sounds/tom-1.mp3");} break;
      case 'j' : { audio1 = new Audio("sounds/tom-2.mp3");} break;
      case 'k' : { audio1 = new Audio("sounds/tom-3.mp3");} break;
      case 'l' : { audio1 = new Audio("sounds/tom-4.mp3");} break;
    }
   audio1.play();
}

var drumlen = document.querySelectorAll(".box").length;

for(var i=0;i<drumlen;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", function()
  {
    handleClick(this.textContent);
    animations(this.textContent);
  });
}

document.addEventListener("keypress",function()
{
  handleClick(event.key);
  animations(event.key);
});

function animations(drumkey)
{
  var activeButton = document.querySelector("." + drumkey);

  var ispreesed = activeButton.classList;
  if(ispreesed[2]=="pressed")
  {
    activeButton.classList.remove("pressed");
  }else{
    activeButton.classList.add("pressed");
  }
  
}
