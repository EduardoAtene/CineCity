$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    autoHeight: true,
    autoplay:false,
    autoplayTimeout:8000,
    autoplayHoverPause:true
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:1
    //     },
    //     1000:{
    //         items:1
    //     }
    // }
})

// Adicionar EVento caso ele clicar Play
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })