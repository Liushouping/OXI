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
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-start">
			<div class="w-1/6 h-[200px] sticky top-36 flex flex-col gap-2 justify-center items-end pl-4 pr-2 sm:px-4">
				<SocialShare
				    v-for="network in ['facebook', 'twitter', 'whatsapp']"
				    :key="network"
				    :network="network"
				    :styled="false"
				    :label="false"
				    url="https://oxi.taipei/news"
				    class="p-4 rounded-none"
				/>
			</div>
			<div class="w-full md:w-[760px] flex flex-col z-10">
				<div class="w-full mb-8 px-2 xl:px-0 space-y-2">
					<span class="bg-red-600 px-2 py-1 text-gray-50 rounded-lg text-[14px] tracking-[2px] font-bold">主打活動</span>
					<h5 class="font-bold text-[24px] sm:text-[36px] text-gray-900 px-2">一百萬等你來拿！OXI餐酒館水煮魚命名活動，農曆年前誕生百萬富翁！</h5>
				</div>
				
				<div 
				data-aos="fade-up"
				class="relative px-4 2xl:px-0">
					<img src="/images/name.jpg" class="rounded-xl">

					<p class="font-light text-[14px] text-gray-900 mt-8 tracking-[2px]">在這個充滿創意與驚喜的季節，台北信義區知名的OXI Oyster & Wine Live House餐酒館推出「百萬元水煮魚命名活動」。這不僅是一次品嚐美食的絕佳機會，更是一場展現您創意，並有機會將百萬獎金帶走。即日起至2024年1月31日，只要來到OXI餐酒館，品嚐這道特色水煮魚料理，並為其賦予一個獨特的名字，上網登錄您的發票及資訊，即有機會成為農曆新年前的下一個百萬富翁。
					<br><br>
					由OXI餐酒館專業的主廚團隊精心研發，這道水煮魚完美平衡了台灣人喜愛的麻、香及辣口感，已經成為眾多部落客和媒體大力推薦的熱門料理，更是來店消費者的必點之選。而現在，我們希望為這道明日之星的料理尋找一個能夠完美代表其特色的名稱，同時邀請所有美食愛好者來享受這道美味，並發揮您的創意，一展身手並有機會得到百萬獎金。
					<br><br>
					隨著活動的火熱進行，所有的目光都將集中於2024年2月5日的大日子。我們將在OXI餐酒館的官方粉絲專頁上公告活動的得主。不要錯過這個成為百萬富翁的絕佳機會，立即前往OXI餐酒館，品嚐這道獨特的水煮魚料理，參與這場百萬大贏家的命名活動！</p>

					<hr class="my-8">

					<ul class="font-light text-[14px] text-gray-900 tracking-[2px]">
						<li class="font-bold text-[16px] text-gray-900 mb-2 tracking-[2px]">活動資訊</li>
						<li>參與方式：來店品嚐水煮魚並登錄發票及資訊，即可獲得抽獎資格。</li>
						<li>活動期間：即日起至2024年1月31日。</li>
						<li>開獎時間：2024年2月5日，將於OXI官方粉絲專頁公佈得獎諮詢。</li>
						<li>活動地點：OXI Oyster & Wine Live House餐酒館 – ATT VALLEY B1。</li>
					</ul>
				</div>
			</div>
			<span class="absolute top-96 -left-12 text-[96px] text-gray-900 opacity-10 font-bold z-0">DRINK</span>

			<span class="absolute top-12 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Taipei</span>
			<span class="absolute top-44 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Music</span>
			<span class="absolute top-80 right-4 text-[96px] text-gray-900 opacity-10 font-bold z-0">Wine</span>
		</div>

		<NuxtFooter />
	</div>
</template>