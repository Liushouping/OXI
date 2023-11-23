<script setup>
const GoTop = ref(false);

const GoScroll = () => {
  GoTop.value = scrollY > 240;
};

function Top() {
	document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

onMounted(() => {
  window.addEventListener('scroll', GoScroll);
});
onBeforeUnmount(() => {
	window.removeEventListener('scroll', GoScroll);
});
</script>
<template>
	<div>
		<NuxtHeader />
		<NuxtBanner />

		<div 
		id="ABOUT"
		class="relative w-full h-full py-24 bg-gray-100 flex items-center justify-center overflow-hidden">
			<div class="w-full md:w-[960px] flex flex-col lg:flex-row space-y-6 md:space-y-0">
				<div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
					<div 
					data-aos="fade-right"
					class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
						<div class="text-[14px]">
						  <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
						    OXI Oyster & Wine Live House
						  </span>
						</div>
						<h3 class="text-[48px] font-bold">WELCOME</h3>
						<p class="mt-6 text-[14px] font-light text-center mb-8 lg:mb-0">Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味</p>
					</div>
				</div>
				<div 
				data-aos="fade-left"
        data-aos-delay="150"
				class="w-full lg:w-1/2 flex justify-center lg:justify-start items-center px-4">
					<img loading="lazy" src="/images/OXI-door.jpg" class="w-[90%] rounded-xl">
				</div>
			</div>
		</div>

		<div class="background-container">
		  <div class="overlay"></div>
		  <div 
		  data-aos="fade-up"
		  class="content">
		    <h3 class="text-white text-[24px] sm:text-[48px] font-bold">Music and Wine</h3>
		  </div>
		</div>


		<div 
		id="MENU"
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center">
			<div class="w-full xl:w-[960px] flex flex-col">
				<div class="w-full mb-8 px-4 xl:px-0">
					<h5 class="font-bold text-[36px] text-gray-900 px-2">美味菜單 MENU</h5>
				</div>
				<div 
				data-aos="fade-up"
				class="relative px-6 2xl:px-0">
					<Swiper
						class="w-[100%] md:w-[50%] px-20 overflow-auto z-30"
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
					      <img loading="lazy" src="/images/orders/01.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/02.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/03.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/04.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/05.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/06.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/07.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/08.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/09.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/10.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/11.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/12.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/13.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/14.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/15.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/16.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/17.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/18.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/19.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide class="w-full">
					      <img loading="lazy" src="/images/orders/20.jpg" class="max-h-[840px] h-full">
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
		id="LIVE"
		class="bg-gray-50 w-full h-full flex flex-col justify-center items-center py-24">
			<div class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
				<div class="text-[14px]">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
					OXI Oyster & Wine Live House
					</span>
				</div>
				<h3 class="text-[48px] font-bold mb-8">Live</h3>
			</div>
			<div class="w-full sm:w-[60%] xl:w-[100%] flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center px-4">
				<div 
				data-aos="fade-up"
        data-aos-delay="150"
				class="w-[90%] md:w-full h-full flex justify-center items-center">
					<img loading="lazy" src="/images/live-01.jpeg" class="rounded-2xl">
				</div>
			</div>
		</div>

		<div class="bg-gray-50 w-full h-full flex flex-col justify-center items-center py-24">
			<div class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
				<div class="text-[14px]">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
					OXI Oyster & Wine Live House
					</span>
				</div>
				<h3 class="text-[48px] font-bold mb-8">Life</h3>
			</div>
			<div 
			class="w-full sm:w-[60%] xl:w-[100%] flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center px-4">
				<div 
				data-aos="fade-up"
			  data-aos-easing="linear"
			  data-aos-duration="1000"
			  data-aos-delay="300"
				class="w-[90%] xl:w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-1.jpg);">
				</div>
				<div 
				data-aos="fade-up"
			  data-aos-easing="linear"
			  data-aos-duration="1000"
			  data-aos-delay="600"
			  class="w-[90%] xl:w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
				</div>
				<div class="w-full xl:w-auto flex flex-col space-y-6 justify-center items-center">
					<div 
					data-aos="fade-up"
				  data-aos-easing="linear"
				  data-aos-duration="1000"
				  data-aos-delay="900"
				  data-aos-offset="50px"
					class="w-[90%] xl:w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-3.jpg);">
					</div>
					<div 
					data-aos="fade-up"
				  data-aos-easing="linear"
				  data-aos-duration="1000"
				  data-aos-delay="1200"
				  data-aos-offset="50px"
					class="w-[90%] xl:w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-4.jpg);">
					</div>
				</div>
			</div>
		</div>

		<div 
		class="bg-gray-50 w-full flex justify-center items-center py-24 px-4">
			<div class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
				<div class="text-[14px]">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
					OXI Oyster & Wine Live House
					</span>
				</div>
				<h3 class="text-[48px] font-bold mb-8">THE BLOG</h3>
				<div 
				class="flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center">
					<NuxtLink to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3n5XYuMiCAxVyr1YBHaenBz8QFnoECA0QAQ&url=https%3A%2F%2Fwww.walkerland.com.tw%2Farticle%2Fview%2F375249&usg=AOvVaw2JEL3fZqLmaWJHLc4ifLc3&opi=89978449" target="_blenk"
					class="group">
						<div 
						class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								2023
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] group-hover:text-red-500 transition-all">BEST PLACES FOR WINE</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup</p>
							</div>
						</div>
					</NuxtLink>
					<NuxtLink to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3n5XYuMiCAxVyr1YBHaenBz8QFnoECA0QAQ&url=https%3A%2F%2Fwww.walkerland.com.tw%2Farticle%2Fview%2F375249&usg=AOvVaw2JEL3fZqLmaWJHLc4ifLc3&opi=89978449" target="_blenk"
					class="group">
						<div class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								2023
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] group-hover:text-red-500 transition-all">BEST PLACES FOR WINE</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup</p>
							</div>
						</div>
					</NuxtLink>
					<NuxtLink to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3n5XYuMiCAxVyr1YBHaenBz8QFnoECA0QAQ&url=https%3A%2F%2Fwww.walkerland.com.tw%2Farticle%2Fview%2F375249&usg=AOvVaw2JEL3fZqLmaWJHLc4ifLc3&opi=89978449" target="_blenk"
					class="group">
						<div class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								2023
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] group-hover:text-red-500 transition-all">BEST PLACES FOR WINE</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all">A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup</p>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
			<div>
				
			</div>
		</div>

		<NuxtFooter />

		<div 
		@click="Top"
		:class="{ 'opacity-100': GoTop }"
		class="fixed bottom-8 right-4 w-12 h-12 z-40 bg-gray-900 rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer opacity-0">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
			</svg>
		</div>
	</div>
</template>

<style scoped>
.background-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.background-container:before {
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(/images/oxi-o.jpg) center 0 no-repeat;
  background-size: cover;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}


</style>
