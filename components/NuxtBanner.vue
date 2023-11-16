<template>
	<div class="bg-gray-900 relative w-full h-screen bg-cover flex justify-center items-center" 
	style="background-image: url(/images/OXI-all.jpg);">
		<div class="text-white z-20">
			<h1 
			class="text-[21px] sm:text-[32px] md:text-[48px] font-bold" 
			data-aos="zoom-in"
			data-aos-offset="300"
     		data-aos-easing="ease-in-sine">OXI Oyster & Wine Live House</h1>
			<div class="flex justify-center space-x-4 mt-8">
				<NuxtLink 
				to="https://inline.app/booking/-Ngbrwze3vHUTAffeuYF:inline-live-3/-NgbrxCXd4dTKjDlLEsM" 
				class="bg-orange-600 text-white text-[14px] font-bold rounded-xl px-6 py-2"
				target="_blank"
				data-aos="fade-right"
			    data-aos-easing="ease-in-sine">BOOK NOW</NuxtLink>
				<NuxtLink 
				to="#MENU" 
				class="bg-orange-400 text-white text-[14px] font-bold rounded-xl px-6 py-2"
				data-aos="fade-left"
			    data-aos-easing="ease-in-sine">LOOK MENU</NuxtLink>
			</div>
		</div>
		<span class="w-[10px] h-[10px] absolute bottom-28 text-white animate-bounce z-20">
			<NuxtLink to="#ABOUT">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</NuxtLink>
		</span>
		<div class="bg-gray-900/40 w-full h-screen absolute bottom-0 left-0 z-[9]">
		</div>
		<div class="w-full h-screen absolute bottom-0 left-0 z-10" 
		style="background: linear-gradient(0deg, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 30%);">
		</div>
	</div>
</template>