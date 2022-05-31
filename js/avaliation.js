function Avaliar(estrela,local) {
    var s1 = document.getElementById("s1_"+local);
    var s2 = document.getElementById("s2_"+local);
    var s3 = document.getElementById("s3_"+local);
    var s4 = document.getElementById("s4_"+local);
    var s5 = document.getElementById("s5_"+local);
    var avaliacao = 0;
    
   if (estrela == 5){ 
    if (s5.classList[1] == "fa-star-o") {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star-o", "fa-star");
        s4.classList.replace("fa-star-o", "fa-star");
        s5.classList.replace("fa-star-o", "fa-star");
        avaliacao = 5;
    } else {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star-o", "fa-star");
        s4.classList.replace("fa-star-o", "fa-star");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 4;
   }}
    
    //ESTRELA 4
   if (estrela == 4){ 
    if (s4.classList[1] == "fa-star-o") {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star-o", "fa-star");
        s4.classList.replace("fa-star-o", "fa-star");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 4;
    } else {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star-o", "fa-star");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 3;
   }}
   
   //ESTRELA 3
   if (estrela == 3){ 
    if (s3.classList[1] == "fa-star-o") {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star-o", "fa-star");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 3;
    } else {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star", "fa-star-o");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 2;
   }}
    
   //ESTRELA 2
   if (estrela == 2){ 
    if (s2.classList[1] == "fa-star-o") {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star-o", "fa-star");
        s3.classList.replace("fa-star", "fa-star-o");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 2;
    } else {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star", "fa-star-o");
        s3.classList.replace("fa-star", "fa-star-o");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 1;
   }}
    
    //ESTRELA 1
   if (estrela == 1){ 
    if (s1.classList[1] == "fa-star-o") {
        s1.classList.replace("fa-star-o", "fa-star");
        s2.classList.replace("fa-star", "fa-star-o");
        s3.classList.replace("fa-star", "fa-star-o");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 1;
    } else {
        s1.classList.replace("fa-star", "fa-star-o");
        s2.classList.replace("fa-star", "fa-star-o");
        s3.classList.replace("fa-star", "fa-star-o");
        s4.classList.replace("fa-star", "fa-star-o");
        s5.classList.replace("fa-star", "fa-star-o");
        avaliacao = 0;
   }}

   }