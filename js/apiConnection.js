$(document).ready(function(){
    const imageUrl = "https://image.tmdb.org/t/p/w500";

    var request;
    let search = JSON.parse(localStorage.getItem('search'));  
    $("#search").val(search.search);  
    let idFilme = JSON.parse(localStorage.getItem('idFilme'));  
    var requestURL = 'https://api.themoviedb.org/3/movie/'+idFilme.id+'?api_key=436c1e24fe3bec3175c341570b76e914&language=pt-BR';
    request = new XMLHttpRequest();
    request.onreadystatechange = alertContents;
    request.open('GET', requestURL);
    request.send();

    $("#searchButton").click(function(){
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
            var response = JSON.parse(request.response);
            $("#nomeDetalhesFilme").text(response.title);
            $("#sinopseFilmeDetalhes").text(response.overview);
            var htmlProducaoDetalhes = '';
            for (let i = 0; i < response.production_companies.length; i++) {
                $("#sinopseFilmeDetalhes").text(response.overview);
                htmlProducaoDetalhes += '<li class="list-inline-item m-1">'+response.production_companies[i].name+'</li>';
            }
            $( "#producaoDetalhes" ).html(htmlProducaoDetalhes);

            $("#imageDetalhesFilme").attr('src',imageUrl+response.poster_path)
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
})