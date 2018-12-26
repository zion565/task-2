$(document).ready(function(){
    var index = 0;
    $("#input").on('keydown', function(evt) {
        if( evt.keyCode == 13 ){
            index++;
            $("#ul").prepend('<li><input onclick="check($this)" class="checkbox" type="checkbox"><input type="text" value="'+$("#input").val() +'" ><div id="in'+index+'" class="hidden" color="red">X</div></li>');

        }

         
    });
    
    
    // $("#input").input(function(){
    //   $("#list").html('<li><input id="checkbox" type="checkbox"><input type="text" value="item" ></li>');
    // });
  });

  
//   $(".checkbox").on('check', function(evt) {
//     console.log(evt);
//     var check =  $(".checkbox").prop("checked" );
//     alert(check);
//     if (check) {
//         alert($($this).after().after().val());
//     }else{
//         alert("no");
//     }
   
// });