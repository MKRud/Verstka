function myFunction() {
    var x = document.getElementsByClassName("top_nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }