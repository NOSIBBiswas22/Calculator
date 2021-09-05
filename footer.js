//changing the inner html of the span with "footer_year" id to the given year(2021)

function getCurrentYear() {
    return new Date().getFullYear(); // returns the year via local timing
  }
  
  document.getElementById("footer_year").innerHTML = getCurrentYear();