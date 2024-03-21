<script setup>
useHead({
  title: 'Menu | OXI Oyster & Wine Live House | Taipei',
  link: [
    {
      rel: 'canonical', 
      href: 'https://oxi.taipei/menu'
    }
  ]
})

const images = [
	{
		src: "/images/new_menu_1.jpg",
        alt: "menu"
	},
	{
		src: "/images/new_menu_2.jpg",
        alt: "menu"
	}
];
onMounted(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {

    });    
});
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

		<div 
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center px-4">
			<div class="w-full xl:w-[960px] flex flex-col z-10">
				<div class="w-full mb-8 px-4 xl:px-0">
					<h5 class="font-bold text-[36px] text-gray-900 px-2">美味菜單 MENU</h5>
				</div>
				<div 
				class="relative flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
<!-- 					<a 
				    v-for="(image, index) in images"
	      			:key="index"
				    data-fancybox="gallery" 
				    :data-src="image.src"
				    class="w-full lg:w-1/2 cursor-zoom-in">
				        <img loading="lazy" :src="image.src" :alt="image.alt" class="w-full">
				    </a> -->
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