//  function for display the image 
 function loadFile(event){
    // hidding the form
    document.getElementById('form').style.display='none';
    // get and display uploaded image
	var Image = document.getElementById('result');
	Image.src = URL.createObjectURL(event.target.files[0]);
    console.log(event.target.files[0])
    var lab = document.getElementById('label');
    lab.style.display = "none";
    // displaying the color sections
    document.getElementById("colors").style.visibility="visible"
    // display filtering buttons
    var buttonSet = document.getElementById('container');
    buttonSet.style.visibility="visible";
}

function changeColor(mixBlender){
    // get the colors from the user side
    let clr1 = document.getElementById("clr1").value;
    let clr2 = document.getElementById("clr2").value;
    // applying the colors to the image
    let bg = document.getElementById("background");
    bg.style.background = "linear-gradient(to right, " + clr1 + ", " + clr2 + ")";
    var uploadImage = document.getElementById('result');
    uploadImage.style.mixBlendMode = mixBlender;
    // style code
    document.getElementById('code').style.visibility="visible"; //showing code
    var codeBackground = "linear-gradient(to right, " + clr1 + ", " + clr2 + ");";
    var codeBlender = "mix-blend-mode:"+mixBlender;
    var Code = codeBackground+'<br>'+codeBlender+";";
    document.getElementById('code').innerHTML = Code; 
}
// function to copy
function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    swal({
        title: "Success!",
        text: "Copy To Clipboard!",
        icon: "success",
      });
    }
// about swal
var about = () => {
    swal({
        title:'About!',
        text:"The mix-blend-mode CSS property sets how an element's content should blend with the contentof the element's parent and the element's background.This Project helps you to use mix-blend property and select suitable one for you"
    });
}

var redirect = () => {
    window.open("https://github.com/adarshswaminath/MixBlendCSS")
}