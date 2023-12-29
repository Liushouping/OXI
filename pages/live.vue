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

		<div 
		class="bg-gray-50 relative w-full h-full flex justify-center items-center">
			<div class="w-full xl:w-[1280px] flex flex-col space-y-12 z-10">

				<div 
				data-aos="fade-up"
				class="relative flex flex-col lg:flex-row space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 px-4 pt-24">
					<div class="w-full lg:w-1/4">
						<div class="text-[14px]">
						  <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
						    OXI Oyster & Wine Live House
						  </span>
						</div>
						<h3 class="text-[36px] font-bold">OXI Oyster & Wine Live House</h3>
						<p class="mt-6 text-[14px] font-light text-left mb-8 lg:mb-0">Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味</p>
					</div>
					<div class="relative w-full lg:w-3/4 flex flex-row bg-gray-900">
						<img data-not-lazy src="~/assets/images/live/OXI_Live-15.jpg" class="w-1/2">
						<img src="/images/oxi-3.jpg" class="w-1/2">
					</div>
				</div>

				<div class="relative w-full py-24 flex flex-col md:flex-row justify-center items-center px-4 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
					<img src="/images/live-time-0.png" class="w-full md:w-1/3">
					<img src="/images/live-time-1.jpg" class="w-full md:w-1/3">
					<img src="/images/live-time-2.jpg" class="w-full md:w-1/3">
				</div>

				<div 
				data-aos="fade-right"
				class="w-full px-4 flex flex-col justify-center items-center pb-24">
					<div class="text-[14px]">
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-gray-950">
						    OXI Oyster & Wine Live House
						</span>
					</div>
					<h3 class="text-[48px] font-bold">WELCOME</h3>
					<p class="mt-6 text-[14px] font-light text-center mb-8 lg:mb-0">Oxi Oyster & Wine Live House提供法國直送生蠔、法式料理，以及多款世界知名紅白酒供您品味</p>
				</div>


			</div>

		</div>

		<NuxtFooter />
	</div>
</template>