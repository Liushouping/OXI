<template>
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
	<div class="w-full flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center px-4">
		<div 
		class="w-full xl:w-[50%] px-4 sm:px-12">
			<Swiper
			class="flex justify-center w-full items-center overflow-auto cursor-pointer"
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
			}">
				<SwiperSlide class="w-full cursor-pointer">
					<img data-not-lazy src="~/assets/images/lives/live_1.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img data-not-lazy src="~/assets/images/lives/live_2.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img data-not-lazy src="~/assets/images/lives/live_3.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img data-not-lazy src="~/assets/images/lives/live_4.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img data-not-lazy src="~/assets/images/lives/live_5.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img data-not-lazy src="~/assets/images/lives/live_6.png" class="max-h-[100%] h-auto">
				</SwiperSlide>
<!-- 				<div class="flex flex-row space-x-4 pt-8 justify-start">
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
				</div> -->
			</Swiper>
		</div>
	</div>
</div>
</template>