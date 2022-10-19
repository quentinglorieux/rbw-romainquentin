jQuery( document ).ready( function($) {
    // $(".member").css('position','absolute');

    console.log($('.member-name').text());
    function search(inp) {

      /*the autocomplete function takes two arguments,
      the text field element and an array of possible autocompleted values:*/
      var currentFocus;
      /*execute a function when someone writes in the text field:*/
      inp.addEventListener("input", function(e) {
    
          var a, b, i, val = this.value;
          first='';
          if (val.indexOf(',') > -1) { list=val.split(',')
          first = list.slice(0,-1).join(',');
    
          val=list[list.length-1];
          val=val.trim();
           }
           val=val.trim();
           


        });
    
    };
    


    search(document.getElementById('search_input'));
});
    