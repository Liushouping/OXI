<script setup>
const scrollabout = () => {
  const targetElement = document.getElementById("ABOUT");
  targetElement.scrollIntoView({ 
  	behavior: 'smooth',
  	block: 'end'
  });
}
</script>
<template>
	<div class="bg-gray-900 relative w-full h-screen bg-cover flex justify-center items-center"
	style="background-image: url(/images/banner_1920.webp);">
		<div class="text-white z-20">
			<h1 
			class="text-[24px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-anton" 
			data-aos="zoom-in"
			data-aos-offset="300"
     		data-aos-easing="ease-in-sine">OXI Oyster & Wine Live House</h1>
			<div class="flex justify-center space-x-4 mt-8">
				<NuxtLink 
				to="https://inline.app/booking/-Ngbrwze3vHUTAffeuYF:inline-live-3/-NgbrxCXd4dTKjDlLEsM" 
				class="bg-[#CFA76A] text-white text-[14px] font-bold rounded-xl px-6 py-2"
				target="_blank"
				data-aos="fade-right"
			    data-aos-easing="ease-in-sine">BOOK NOW
				</NuxtLink>
				<NuxtLink 
				to="#MENU" 
				class="bg-[#FDD290] text-white text-[14px] font-bold rounded-xl px-6 py-2"
				data-aos="fade-left"
			    data-aos-easing="ease-in-sine">LOOK MENU</NuxtLink>
			</div>
		</div>
		<span 
		data-aos="zoom-in"
		data-aos-delay="150"
		class="w-[10px] h-[10px] absolute bottom-36 text-white z-20">
			<button class="cursor-pointer" @click="scrollabout">
				<div class="relative border-[3px] h-[48px] px-[12px] rounded-2xl flex justify-center items-center">
				    <span class="hrheight"></span>
				</div>
			</button>
		</span>
		<div class="bg-gray-900/10 w-full h-screen absolute bottom-0 left-0 z-[9]">
		</div>
<!-- 		<div class="w-full h-screen absolute bottom-0 left-0 z-10" 
		style="background: linear-gradient(0deg, rgb(0, 0, 0) 10%, rgba(0, 0, 0, 0) 30%);"> -->
		<div class="w-full h-screen absolute bottom-0 left-0 z-10" 
		style="background: linear-gradient(0deg,rgb(2, 0, 36, 1) 0%, rgb(0, 0, 0, 1) 0%, rgba(9, 9, 121, 0) 30%);">
		</div>
	</div>
</template>

<style>
/*	.bg-img {
		background: linear-gradient(
			to top,
			rgb(0 0 0 / 0.5),
			rgb(0 0 0 / 0)
		),
		url(/images/OXI-all.jpg)
	}*/
	.hrheight {
        position: absolute;
        width: 2px;
        height: 0px;
        background: white;
        animation-name: TopToBottom;
        animation-iteration-count: infinite;
        animation-duration: 2s;
    }

    @keyframes TopToBottom {
        0% {
            height: 0px;
            top:20%;
        }
        100% {
            height: 20px; 
            top:30%;
        }
    }
</style>