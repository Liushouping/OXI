<script setup>
const GoTop = ref(false);

const GoScroll = () => {
    GoTop.value = scrollY < 120;
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
		class="relative w-full h-full py-24 bg-gray-100 flex items-center justify-center">
			<div class="w-full md:w-[960px] flex flex-col lg:flex-row space-y-6 md:space-y-0">
				<div class="w-full lg:w-1/2 flex flex-col justify-center items-center">
					<div class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
						<div class="text-[14px] font-extrabold">
						  <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
						    OXI Oyster & Wine Live House
						  </span>
						</div>
						<h3 class="text-[48px] font-bold">WELCOME</h3>
						<p class="mt-6 text-[14px] font-light text-center">Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味</p>
					</div>
				</div>
				<div class="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
					<img src="/images/OXI-door.jpg" class="w-[400px] rounded-xl">
				</div>
			</div>
		</div>

		<div class="w-full h-[400px] bg-cover bg-fixed flex justify-center items-center" 
		style="background-image: url(/images/OXI-all.jpg);">
			<h3 class="text-white text-[24px] sm:text-[48px] font-bold">Music and Wine</h3>
		</div>

		<div 
		id="MENU"
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center">
			<div class="w-full md:w-[960px] flex flex-col px-6 md:px-0">
				<div class="w-full mb-8">
					<h5 class="font-bold text-[36px] text-gray-900 px-2">美味菜單 MENU</h5>
				</div>
				<div class="relative">
					<!-- <img src="/images/orders/01.jpg" class="h-[960px]"> -->
					<Swiper
						class="w-[90%] md:w-[50%]"
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
					    <SwiperSlide>
					      <img src="/images/orders/01.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/02.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/03.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/04.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/05.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/06.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/07.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/08.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/09.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/10.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/11.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/12.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/13.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/14.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/15.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/16.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/17.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/18.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/19.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <SwiperSlide>
					      <img src="/images/orders/20.jpg" class="max-h-[840px] h-full">
					    </SwiperSlide>
					    <div class="flex flex-row space-x-6 pt-8 justify-between">
					    	<button class="relative nuxtnt h-[60px] w-[60px] rounded-full border border-gray-900 flex justify-center items-center z-20">
						    	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
								</svg>
						    </button>
						    <button class="prevel h-[60px] w-[60px] rounded-full border border-gray-900 flex justify-center items-center z-20">
						    	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-900">
								  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
								</svg>
							</button>
					    </div>
					  </Swiper>
				</div>
			</div>
			<span class="absolute top-96 -left-12 text-[96px] text-gray-900 opacity-10 font-bold z-0">DRINK</span>
			<!-- <span class="absolute top-[200px] left-12 text-[96px] text-gray-900 opacity-10 font-bold z-0">OXI</span> -->
			<span class="absolute top-12 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Taipei</span>
			<span class="absolute top-44 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Music</span>
			<span class="absolute top-72 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Wine</span>
		</div>

		<div class="bg-gray-50 w-full h-full flex flex-col justify-center items-center py-24">
			<div class="w-full sm:w-[60%] px-4 flex flex-col justify-center items-center">
				<div class="text-[14px] font-extrabold">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
					OXI Oyster & Wine Live House
					</span>
				</div>
				<h3 class="text-[48px] font-bold mb-8">Life</h3>
			</div>
			<div class="flex flex-col md:flex-row space-y-6 md:space-y-0 space-x-0 md:space-x-6 justify-center items-center">
				<div class="w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-1.jpg);">
				</div>
				<div class="w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
				</div>
				<div class="flex flex-col space-y-6">
					<div class="w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-3.jpg);">
					</div>
					<div class="w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-4.jpg);">
					</div>
				</div>
			</div>
		</div>

		<div class="w-full flex justify-center items-center py-24 px-4">
			<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FTaipei&showTitle=0&showPrint=0&src=NjdhOGU3NmE3MTc0ZjhiODkxMDlmMzQ5Y2VmM2I5NWNlYjgwOWRiZjdkNzg0ZGY5Y2RhYjExZDk0YmRhYTI2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=emgtdHcudGFpd2FuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D81B60&color=%23cc003c" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>
		</div>

		<NuxtFooter />

		<div 
		@click="Top"
		:class="{ 'opacity-0': GoTop }"
		class="fixed bottom-8 right-4 w-12 h-12 z-40 bg-gray-900 rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
			  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
			</svg>
		</div>
	</div>
</template>

<style scoped>
.swiper-container-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
