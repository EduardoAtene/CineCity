$(document).ready(function(){
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  var request;
  let search = JSON.parse(localStorage.getItem('search'));  
  $("#search").val(search.search);  
  var requestURL = 'https://api.themoviedb.org/3/search/movie?api_key=436c1e24fe3bec3175c341570b76e914&query='+search.search+'&language=pt-BR';
  request = new XMLHttpRequest();
  request.onreadystatechange = alertContents;
  request.open('GET', requestURL);
  request.send();

  function alertContents() {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          var response = JSON.parse(request.response);
          var htmlFilmes = '';
          for (let i = 0; i < response.results.length; i++) {
            let urlImage;
            if(response.results[i].poster_path == null){
              urlImage = 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg';
            }else{
              urlImage = imageUrl+response.results[i].poster_path;
            }
            
            htmlFilmes += '<a class="col-lg-3 buttonDetalsClick" input-idFilme='+response.results[i].id+' href="#">'+
              '<div id="imageDestaque2" class ="text-center"">'+
                '<img class="img-fluid bg-sys-card-child w-50" src="'+urlImage+'" alt="">'+
                '<div class="h4">'+response.results[i].title+'</div>'+
              '</div>' +
              '</a>';

          }
          $( "#filmesSearch" ).html(htmlFilmes);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }

    $(document).on('click', '.buttonDetalsClick', function(){
      let idFilmeAux = $(this).attr("input-idFilme");

      let idFilme = localStorage.getItem('idFilme');  
      if(idFilme!=null) {  
          localStorage.removeItem('idFilme')
      }
      localStorage.setItem('idFilme',  JSON.stringify({"id": idFilmeAux})); 
      window.location.href = "./detalhes.html";

    })

    
  $("#searchButton").click(function(){
    let search = $("#search").val();

    let Vsearch = localStorage.getItem('search');  
    if(Vsearch!=null) {  
        localStorage.removeItem('search')
    }
    localStorage.setItem('search',  JSON.stringify({"search": search})); 
    window.location.href = "./pesquisa.html";

  })
})