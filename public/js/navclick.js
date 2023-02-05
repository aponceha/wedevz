

const navclick = async (event) => {
    event.preventDefault();


    var header = document.getElementById("navlist");
    var btns = header.getElementsByClassName("btn");
    console.log("test nav");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }
    
};


