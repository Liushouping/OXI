<script setup>
// onMounted(() => {
//      Fancybox.bind('[data-fancybox="gallery"]', {
//         //
//       });    
// });
</script>

<template>
	<div>
		<NuxtHeader />
		<div 
		class="relative h-[320px] w-full bg-cover bg-center flex flex-col justify-center items-center rounded-br-[90px] rounded-bl-[90px]"
		style="background-image: url(/images/oxi-o.jpg);">
			<h5 class="text-gray-100 font-anton text-[24px] tracking-[2px] z-10">OXI Oyster & Wine Live House</h5>
 			<div class="bg-gray-900/40 w-full h-screen absolute bottom-0 left-0 rounded-br-[90px] rounded-bl-[90px] z-[9]">
			</div>
		</div>

<!-- 		<div>
			      <a
			         data-fancybox="gallery"
			         data-src="https://lipsum.app/id/2/1024x768"
			         data-caption="Optional caption,&lt;br /&gt;that can contain &lt;em&gt;HTML&lt;/em&gt; code"
			         >
			        <img src="https://lipsum.app/id/2/200x150" />
			      </a>

			      <a data-fancybox="gallery" data-src="https://lipsum.app/id/3/1024x768">
			        <img src="https://lipsum.app/id/3/200x150" />
			      </a>

			      <a data-fancybox="gallery" data-src="https://lipsum.app/id/4/1024x768">
			        <img src="https://lipsum.app/id/4/200x150" />
			      </a>
		</div> -->

		<div 
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center">
			<div class="w-full xl:w-[960px] flex flex-col z-10">
				<div class="w-full mb-8 px-4 xl:px-0">
					<h5 class="font-bold text-[36px] text-gray-900 px-2">美味菜單 MENU</h5>
				</div>
				<div 
				data-aos="fade-up"
				class="relative px-6 2xl:px-0">
					<Swiper
						class="w-[100%] md:w-[50%] px-20 overflow-auto"
					    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
					    :slides-per-view="1"
					    :loop="true"
					    :autoplay="{
					      delay: 8000,
					      disableOnInteraction: true,
					    }"
					    :navigation="{
					    	nextEl: '.nuxtnt',
					    	prevEl: '.prevel'
					    }"
					  >
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/01.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/02.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/03.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/04.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/05.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/06.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/07.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/08.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/09.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/10.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/11.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/12.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/13.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/14.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/15.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/16.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/17.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/18.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/19.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="~/assets/images/orders/20.jpg" class="max-h-[840px] h-auto">
					    </SwiperSlide>
					    <div class="flex flex-row space-x-4 pt-8 justify-start">
					    	<button 
					    	class="relative nuxtnt h-[60px] w-[60px] rounded-full border border-gray-900 flex justify-center items-center z-20 hover:bg-gray-900 hover:text-gray-50 transition-all">
						    	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
						    </button>
						    <button 
						    class="prevel h-[60px] w-[60px] rounded-full border border-gray-900 flex justify-center items-center z-20 hover:bg-gray-900 hover:text-gray-50 transition-all">
							    	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
									  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
									</svg>
								</button>
					    </div>
					  </Swiper>
				</div>
			</div>
			<span class="absolute top-96 -left-12 text-[96px] text-gray-900 opacity-10 font-bold z-0">DRINK</span>

			<span class="absolute top-12 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Taipei</span>
			<span class="absolute top-44 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Music</span>
			<span class="absolute top-80 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Wine</span>
		</div>

		<div 
		class="bg-gray-50 relative w-full h-full pb-24 flex justify-center items-center">
			<div class="w-full xl:w-[960px]">
				<div 
				class="relative w-[full] h-full md:h-[500px] flex flex-col md:flex-row px-4">
					<div class="w-full md:w-1/2 h-[400px] md:h-full bg-cover" style="background-image: url(/images/welcome_3.webp);">	
					</div>
					<div class="w-full md:w-1/2 h-[400px] md:h-full bg-gray-900 flex flex-col justify-center items-center px-12 space-y-6">
						<h5 class="w-full text-[24px] text-gray-50 font-bold">包場慶生</h5>
						<p class="text-[14px] text-gray-50">
						家庭聚餐、慶生宴會、婚宴包場，不管是歡樂慶生或是豐盛的會席料理邀請您來品嚐用心烹調滋味</p>

						<NuxtLink 
						to="https://inline.app/booking/-Ngbrwze3vHUTAffeuYF:inline-live-3/-NgbrxCXd4dTKjDlLEsM" 
						class="bg-gray-50 text-gray-900 text-[14px] font-bold rounded-xl px-6 py-2"
						target="_blank">BOOK NOW
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>

		<NuxtFooter />
	</div>
</template>