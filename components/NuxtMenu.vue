<script setup>
onMounted(() => {
     Fancybox.bind('[data-fancybox="gallery"]', {
        //
      });    
});
</script>
<template>
	<div 
	id="MENU"
	class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-center px-4">
		<div class="w-full sm:w-[90%] xl:w-[60%] flex flex-col z-10">
			<div class="w-full mb-8">
				<h5 class="font-bold text-[36px] text-gray-900">美味菜單 MENU</h5>
			</div>
			<div 
			class="relative flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
				<a data-fancybox="gallery" data-src="/images/new_menu_1.jpg" data-caption="OXI MENU" class="w-full lg:w-1/2 cursor-zoom-in">
			        <img loading="lazy" src="/images/new_menu_1.jpg" class="w-full">
			    </a>
			    <a data-fancybox="gallery" data-src="/images/new_menu_2.jpg" data-caption="OXI MENU" class="w-full lg:w-1/2 cursor-zoom-in">
			        <img loading="lazy" src="/images/new_menu_2.jpg" class="w-full">
			    </a>
			</div>
		</div>
		<span class="absolute top-96 -left-12 text-[96px] text-gray-900 opacity-10 font-bold z-0">DRINK</span>

		<span class="absolute top-12 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Taipei</span>
		<span class="absolute top-44 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Music</span>
		<span class="absolute top-80 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Wine</span>
	</div>
</template>