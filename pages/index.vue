<script setup>

</script>

<template>
	<div>
		<NuxtHeader />
		<NuxtBanner />

		<div 
		id="ABOUT"
		class="relative w-full h-full pt-24 pb-36 bg-gray-50 flex items-center justify-center overflow-hidden">
			<div class="w-full sm:w-[75%] flex flex-col space-y-6">

				<div class="w-full flex flex-col justify-center items-center">
					<div 
					class="w-full px-4 flex flex-col justify-center items-center">
						<div class="text-[14px]">
						  <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
						    OXI Oyster & Wine Live House
						  </span>
						</div>
						<h3 class="text-[48px] font-bold">WELCOME</h3>
					</div>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4">
					<div class="flex flex-col justify-center items-center">
						<div class="aspect-square">
	            <img loading="lazy" src="/images/welcome_1.webp" class="rounded-full w-full h-full object-cover p-12 sm:p-0">
	        	</div>
						<div class="mt-4 w-full flex flex-col justify-center items-center lg:items-start">
							<h5 class="text-[36px] font-bold text-[#CFA76A]">LIVE BAND</h5>
							<p class="text-[14px] text-[#CFA76A]">LIVE BAND 的 專業演出，帶您沉浸 音樂饗宴的美好世界</p>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center">
						<div class="aspect-square">
	            <img loading="lazy" src="/images/welcome_2.webp" class="rounded-full w-full h-full object-cover p-12 sm:p-0">
	        	</div>
						<div class="mt-4 w-full flex flex-col justify-center items-center lg:items-start">
							<h5 class="text-[36px] font-bold text-[#CFA76A]">好酒聖地</h5>
							<p class="text-[14px] text-[#CFA76A]">從經典紅酒到創意調酒，為每個時 刻注入完美風味</p>
						</div>
					</div>
					<div class="flex flex-col justify-center items-center">
						<div class="aspect-square">
	            <img loading="lazy" src="/images/welcome_3.webp" class="rounded-full w-full h-full object-cover p-12 sm:p-0">
	        	</div>
						<div class="mt-4 w-full flex flex-col justify-center items-center lg:items-start">
							<h5 class="text-[36px] font-bold text-[#CFA76A]">美食天堂</h5>
							<p class="text-[14px] text-[#CFA76A]">從異國美食到隱藏菜單，每一次用餐 都成為一場味蕾探險</p>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div 
		class="background-container">
		  <div class="overlay"></div>
		  <div 
		  class="content">
		    <h3 
		    class="text-white text-[24px] sm:text-[48px] font-bold">Music and Wine</h3>
		  </div>
		</div>

		<div 
		id="MENU"
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center px-4">
			<div class="w-full sm:w-[60%] flex flex-col z-10">
				<div class="w-full mb-8">
					<h5 class="font-bold text-[36px] text-gray-900">美味菜單 MENU</h5>
				</div>
				<div 
				class="relative flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
					<img loading="lazy" src="/images/new_menu_1.jpg" class="w-full lg:w-1/2">
					<img loading="lazy" src="/images/new_menu_2.jpg" class="w-full lg:w-1/2">
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
			<div class="w-full flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center px-4">
				<div 
				class="w-full lg:w-[50%]">
					<Swiper
					class="bg-red-300 flex justify-center w-full items-center overflow-auto cursor-pointer"
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
					    <img loading="lazy" src="~/assets/images/lives/live_1.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
					  <SwiperSlide class="w-full">
					    <img loading="lazy" src="~/assets/images/lives/live_2.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
					  <SwiperSlide class="w-full">
					    <img loading="lazy" src="~/assets/images/lives/live_3.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
					  <SwiperSlide class="w-full">
					    <img loading="lazy" src="~/assets/images/lives/live_4.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
					  <SwiperSlide class="w-full">
					    <img loading="lazy" src="~/assets/images/lives/live_5.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
					  <SwiperSlide class="w-full">
					    <img loading="lazy" src="~/assets/images/lives/live_6.png" class="max-h-[100%] h-auto">
					  </SwiperSlide>
<!-- 					    <div class="flex flex-row space-x-4 pt-8 justify-start">
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
			class="w-full flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center px-4">
				<div 
				class="w-[90%] xl:w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-1.jpg);">
				</div>
				<div 
			  class="w-[90%] xl:w-[400px] h-[820px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
				</div>
				<div class="w-full xl:w-auto flex flex-col space-y-6 justify-center items-center">
					<div 
					class="w-[90%] xl:w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-3.jpg);">
					</div>
					<div 
					class="w-[90%] xl:w-[400px] h-[400px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-4.jpg);">
					</div>
				</div>
			</div>
		</div>

		<div 
		class="bg-gray-50 w-full h-full flex justify-center items-center py-24 px-4">
			<div 
			class="w-[90%] lg:w-[60%] px-4 flex flex-col justify-center items-center">
				<div class="text-[14px]">
					<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
					OXI Oyster & Wine Live House
					</span>
				</div>
				<h3 class="text-[48px] font-bold mb-8">THE BLOG</h3>
				<div 
				class="flex flex-col xl:flex-row space-y-6 xl:space-y-0 space-x-0 xl:space-x-6 justify-center items-center">
					<NuxtLink 
					to="https://lizzzstyle.tw/oxi-oysterwine-live-house/" target="_blenk"
					class="group">
						<div 
						class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[400px] lg:h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-4.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								文章推薦
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] font-bold group-hover:text-red-500 transition-all">信義區餐酒館推薦！推海鮮義大利麵、麻辣水煮魚 週末假日有live band演出超適合約會聚餐</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all line-clamp-3">一進去Oxi oyster & wine live house ，就可以感受到週遭挺熱鬧的氛圍～入口處會看到Oxi oyster & wine live house 的招牌，往右手邊處走去可以找到櫃檯報到處。</p>
							</div>
						</div>
					</NuxtLink>
					<NuxtLink to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiQqpmf2OOCAxURdfUHHWY2DJUQFnoECAgQAQ&url=https%3A%2F%2Fbigshark.tw%2Foxi-oyster-wine-live-house%2F&usg=AOvVaw2dlANldWCocG2BjzqXzM4O&opi=89978449" target="_blenk"
					class="group">
						<div class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[400px] lg:h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-1.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								文章推薦
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] font-bold group-hover:text-red-500 transition-all">【台北美食】oxi oyster &wine live house，質感現場演唱餐酒館，信義美食推薦（菜單）</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all line-clamp-3">oxi oyster & wine live house位於台北信義區的Att valley廣場B1內，Att valley廣場內有有一些美食餐廳，旁邊就有知名的刁民酸菜魚。oxi oyster & wine live house 的氣氛超棒</p>
							</div>
						</div>
					</NuxtLink>
					<NuxtLink to="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3n5XYuMiCAxVyr1YBHaenBz8QFnoECA0QAQ&url=https%3A%2F%2Fwww.walkerland.com.tw%2Farticle%2Fview%2F375249&usg=AOvVaw2JEL3fZqLmaWJHLc4ifLc3&opi=89978449" target="_blenk"
					class="group">
						<div class="flex justify-center items-center flex-col space-y-4">
							<div class="relative min-w-[90%] sm:min-w-[400px] w-full h-[400px] lg:h-[300px] bg-cover rounded-2xl" style="background-image: url(/images/oxi-2.jpg);">
								<span class="px-4 py-0 bg-[#00000080] rounded-sm text-white absolute bottom-4 left-4 text-[12px] tracking-[1px]">
								文章推薦
								</span>
							</div>
							<div class="mt-8 px-0">
								<h5 class="text-[21px] font-bold group-hover:text-red-500 transition-all">台北信義餐酒|OXI Oyster & Wine Live House．夜生活好去處，聽live演唱吃精緻美食愜意又享受</h5>
								<p class="text-[14px] font-light mt-4 group-hover:text-red-400 transition-all line-clamp-3">位於台北信義區的精緻餐酒館-「OXI Oyster & Wine Live House」，同時也是音樂酒吧(live house)，第一次體驗開放式用餐空間的餐酒館</p>
							</div>
						</div>
					</NuxtLink>
				</div>
			</div>
			<div>
				
			</div>
		</div>

		<NuxtFooter />
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
