<script setup>
useHead({
  title: 'Not Found Page | OXI Oyster & Wine Live House | Taipei',
})
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
		class="bg-gray-50 relative w-full h-[600px] flex justify-center items-center">
			<div class="w-full flex flex-col justify-center items-center">

				<p class="text-[156px] font-anton text-gray-950 tracking-[6px]">Oops!</p>
				<p class="text-[24px] font-anton text-gray-800">We can't find that page ...</p>
				<div class="flex flex-row space-x-4">
					<NuxtLink
					to="javascript:;"
					@click="$router.back()"
					class="bg-gray-800 text-[12px] px-6 py-2 font-light text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
						<span class="mr-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
							  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
							</svg>
						</span>
						Back
					</NuxtLink>

					<NuxtLink
					to="/"
					class="bg-gray-800 text-[12px] px-6 py-2 font-light text-gray-50 rounded-lg flex flex-row items-center tracking-[1px] hover:bg-gray-700 transition-colors mt-8">
						Home
						<span class="ml-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
							  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
							</svg>
						</span>
					</NuxtLink>
				</div>
			</div>

		</div>

		<NuxtFooter />
	</div>
</template>
