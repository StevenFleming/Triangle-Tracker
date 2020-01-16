$(document).ready(function(event) {
  
  $("form#triangle").submit(function(event) {
    var val1 = parseInt($("#side1").val());
    var val2 = parseInt($("#side2").val());
    var val3 = parseInt($("#side3").val());
    console.log("Values: " + val1 + val2 + val3);

    if ((val1+val3 < val2) || (val1 +val2 < val3) || (val2 + val3 < val1)) {
    $("#fail").show();
    console.log ("Is an equal tirangle");
  }

    // || if either of these staments are true opposed to && which means both must be true
    // if( this is true AND this is also true )
    else if ((val1 === val2) && (val2 === val3)) {
      $("#equal").show();
      console.log("Is an equal triangle");
    }

    else if ((val1 !==val2) && (val2!== val3) && (val3 !==val1)) {
      $("#scalene").show();
      console.log ("its a Scalene triangle")
    }

    else {
      $("#iso").show();
      console.log ("its an iso triangle")
  }
    event.preventDefault();
    });
  });
 

