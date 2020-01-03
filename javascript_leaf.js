var loadFile = function(event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  
  function myFunction() {
    var txt;
    txt = "Resutls to be displaye";
    document.getElementById("result").innerHTML = txt;
    document.getElementById("result").scrollIntoView();
  }
