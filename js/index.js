$(document).ready(function(){
    var image = "https://image.tmdb.org/t/p/w500/";
    var request;
    $(".detalhesFilme").click(function(){
      debugger
      let idFilmeAux = $(this).attr("input-idFilme");

      let idFilme = localStorage.getItem('idFilme');  
      if(idFilme!=null) {  
          localStorage.removeItem('idFilme')
      }
      localStorage.setItem('idFilme',  JSON.stringify({"id": idFilmeAux})); 
      window.location.href = "./detalhes.html";

    })

    $(document).on('click', '.buttonDetalsClickDestaque', function(){
      let idFilmeAux = $(this).attr("input-idFilme");

      let idFilme = localStorage.getItem('idFilme');  
      if(idFilme!=null) {  
          localStorage.removeItem('idFilme')
      }
      localStorage.setItem('idFilme',  JSON.stringify({"id": idFilmeAux})); 
      window.location.href = "./detalhes.html";

    })

    $("#searchButton").click(function(){
      debugger
      let search = $("#search").val();

      let Vsearch = localStorage.getItem('search');  
      if(Vsearch!=null) {  
          localStorage.removeItem('search')
      }
      localStorage.setItem('search',  JSON.stringify({"search": search})); 
      window.location.href = "./pesquisa.html";

    })


    function alertContents() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            debugger
            var response = JSON.parse(request.responseText).results;
            localStorage.setItem('db_filmes', JSON.stringify(response)); 
            alert(response.computedString);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
})