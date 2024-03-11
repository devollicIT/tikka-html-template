$(document).ready(function () {
   // Counter up
   $("#counter-up").countMe(40, 2);

   // Logo carousel
   $(".logo_carousel").owlCarousel({
      autoplay: true,
      loop: true,
      dots: false,
      slideSpeed: 300,
      margin: 10,
      responsive: {
         0: {
            items: 1,
            loop: true,
         },
         600: {
            items: 3,
            loop: true,
         },
         1000: {
            items: 5,
            loop: true,
         },
      },
   });

   // Gallery carousel
   $(".gallery-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      dots: false,
      slideSpeed: 300,
      margin: 20,
      responsive: {
         0: {
            items: 1,
            loop: true,
         },
         600: {
            items: 2,
            loop: true,
         },
         1000: {
            items: 3,
            loop: true,
         },
      },
   });

   // Gallery carousel
   $(".project-details-images-wrapper").owlCarousel({
      autoplay: true,
      loop: true,
      dots: false,
      slideSpeed: 300,
      margin: 20,
      responsive: {
         0: {
            items: 1,
            loop: true,
         },
         600: {
            items: 2,
            loop: true,
         },
         1000: {
            items: 4,
            loop: true,
         },
      },
   });

   // Gallery carousel
   const home2Testimonial = $(".home2-testimonial-quote-wrapper");
   home2Testimonial.owlCarousel({
      autoplay: true,
      loop: true,
      items: 1,
      dots: false,
      slideSpeed: 300,
      margin: 20,
      responsive: {
         0: {
            items: 1,
            loop: true,
         },
         600: {
            items: 1,
            loop: true,
         },
         1000: {
            items: 1,
            loop: true,
         },
      },
   });

   // Home 1 Customer feedback carousel
   const owl = $(".customers-feedback-carousel");
   owl.owlCarousel({
      autoPlay: true,
      loop: true,
      items: 2,
      dots: false,
      slideSpeed: 300,
      margin: 20,
      responsive: {
         0: {
            loop: true,
            items: 1,
         },
         600: {
            loop: true,
            items: 1,
         },
         1000: {
            items: 2,
            loop: true,
         },
      },
   });

   // Home 1 trigger prev slider
   $(".prev-customer-feedback").click(function () {
      owl.trigger("prev.owl.carousel");
   });

   //   Home 1 trigger next slider
   $(".next-customer-feedback").click(function () {
      owl.trigger("next.owl.carousel");
   });

   // Home 2 trigger prev slider
   $(".home2-prev-customer-feedback").click(function () {
      home2Testimonial.trigger("prev.owl.carousel");
   });

   // Home 2 trigger prev slider
   $(".home2-next-customer-feedback").click(function () {
      home2Testimonial.trigger("next.owl.carousel");
   });
   

   // Projects show more & less
   $("#show__more--content").hide();

   $("#show__more").click(function () {
      $("#show__more--content").show(450);
      $("#show__less").show();
      $("#show__more").hide();
   });

   $("#show__less").click(function () {
      $("#show__more--content").hide(450);
      $("#show__more").show();
      $(this).hide();
   });

   // Mobile dropdown show hide
   $('nav .dropdown').click(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});

   // Init AOS
   AOS.init();
});
