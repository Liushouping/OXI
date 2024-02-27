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
					<img src="/images/lives/live_1.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img src="/images/lives/live_2.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img src="/images/lives/live_3.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img src="/images/lives/live_4.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img src="/images/lives/live_5.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
				<SwiperSlide class="w-full">
					<img src="/images/lives/live_6.jpg" class="max-h-[100%] h-auto">
				</SwiperSlide>
			</Swiper>
		</div>
	</div>
</div>
</template>