<script setup>
useHead({
  title: 'News | OXI Oyster & Wine Live House | Taipei',
  link: [
    {
      rel: 'canonical', 
      href: 'https://oxi.taipei/news'
    }
  ]
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
		class="bg-gray-50 relative w-full h-full py-24 flex justify-center items-start">
			<div class="w-1/8 h-[200px] sticky top-36 flex flex-col gap-2 justify-center items-center items-end pl-4 pr-2 sm:px-4">
				<SocialShare
				    v-for="network in ['facebook', 'twitter', 'whatsapp']"
				    :key="network"
				    :network="network"
				    :styled="false"
				    :label="false"
				    url="https://oxi.taipei/news"
				    class="p-4 rounded-none"
				/>
<!-- 				<a 
				data-aos="fade-right"
				data-aos-duration="150"
				href="https://social-plugins.line.me/lineit/share?url=https://oxi.taipei/news" class="mt-4" target="_blank">
					<svg class="w-6 h-6 fill-gray-900" id="_圖層_2" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.67 367.32">
						<g id="_圖層_1-2" data-name="圖層 1">
						<path d="M383.67,145.51v21.71c-.25,1.07-.5,2.13-.74,3.2-1.89,8.73-3.11,17.68-5.78,26.16-7.51,23.82-22.09,43.33-38.94,61.3-19.11,20.37-40.77,37.78-63.2,54.27-24.3,17.88-49.19,34.89-75.89,49.03-5.08,2.69-10.73,4.65-16.35,5.89-5.2,1.14-7.87-1.82-7.88-7.23,0-1.48,.2-2.98,.42-4.45,1.02-6.77,2.22-13.51,3.11-20.3,1.98-15.02-1.49-20.14-16.41-23.61-10.53-2.45-21.33-3.82-31.72-6.72-41.22-11.5-76.76-32.23-102.34-67.24C-1.37,197.37-8.32,153.41,10.42,106.84,25.03,70.52,51.9,44.8,85.87,26.39,129.63,2.69,176.45-4.38,225.5,2.51c40.02,5.62,75.97,20.71,106.61,47.37,23.81,20.71,40.68,45.98,48.11,76.99,1.47,6.14,2.31,12.43,3.45,18.65Zm-192.99,6.21c.25-.11,.5-.23,.74-.34,.74,.95,1.5,1.88,2.21,2.84,11.86,16.18,23.62,32.45,35.69,48.47,1.7,2.25,4.75,4.31,7.47,4.8,6.69,1.2,11.29-3.77,11.3-11.46,.03-24.32,.02-48.64-.01-72.96,0-1.48-.18-3-.53-4.43-1.04-4.28-4.82-7.35-9.11-7.56-4.2-.21-8.42,2.61-9.71,6.78-.54,1.75-.73,3.67-.73,5.51-.06,13.72-.03,27.44-.04,41.16,0,1.02-.14,2.04-.26,3.67-1.06-1.36-1.68-2.12-2.27-2.92-11.96-16.27-23.89-32.55-35.87-48.8-3.6-4.88-7.32-6.31-11.81-4.76-4.63,1.6-6.76,4.94-6.76,10.78-.02,17.46,0,34.92,0,52.38,0,7.73-.09,15.47,.06,23.2,.12,6.15,5.28,10.4,11.29,9.58,4.9-.67,8.32-4.77,8.34-10.33,.06-15.2,.02-30.41,.02-45.61Zm91.05-20.47c1.51,0,2.85,0,4.18,0,7.61,0,15.22,.07,22.82-.03,6.64-.09,10.84-4.23,10.74-10.33-.1-5.86-4.39-9.8-10.85-9.82-11.97-.04-23.95-.04-35.92,0-7.02,.02-11.07,4.13-11.07,11.23-.02,24.82-.03,49.64,0,74.46,0,6.95,3.97,10.94,10.84,10.96,12.1,.04,24.2,.03,36.29-.01,1.35,0,2.76-.1,4.03-.52,4.69-1.54,7.16-5.69,6.6-10.83-.48-4.47-3.89-8.12-8.65-8.31-8.22-.33-16.45-.2-24.68-.27-1.43-.01-2.87-.12-4.17-.18v-18.08c9.06,0,17.78,.02,26.49,0,6.74-.02,11.05-3.91,11.1-9.93,.05-6.08-4.16-10.11-10.89-10.2-7.36-.1-14.72-.03-22.08-.03-1.57,0-3.14,0-4.79,0v-18.09Zm-192.89,56.52c0-2.08,0-3.43,0-4.78,0-19.94,0-39.89-.01-59.83,0-1.49,.07-3.03-.26-4.46-1.06-4.6-5.69-7.95-10.25-7.61-4.94,.37-8.9,4.19-9.14,9.21-.22,4.6-.12,9.22-.12,13.83,0,20.82-.03,41.63,.01,62.44,.01,6.68,3.65,11.04,9.47,11.1,12.96,.13,25.93,.11,38.89,0,5.32-.05,9.37-4.33,9.52-9.58,.15-5.27-3.56-9.83-8.93-10.07-8.09-.36-16.19-.2-24.29-.25-1.47-.01-2.94,0-4.89,0Zm47.7-28.3h-.03c0,12.35-.07,24.7,.06,37.05,.02,2.16,.47,4.51,1.44,6.41,2,3.91,6.73,5.67,10.88,4.54,4.32-1.17,7.29-4.9,7.3-9.7,.05-25.57,.03-51.14,0-76.71,0-1.1-.19-2.25-.55-3.28-1.55-4.44-6.16-7.3-10.52-6.64-4.96,.76-8.52,4.63-8.56,9.79-.1,12.85-.03,25.69-.03,38.54Z"/>
						</g>
					</svg>
				</a> -->
			</div>
			<div class="w-full md:w-[760px] flex flex-col z-10">
				<div class="w-full mb-8 px-2 xl:px-0 space-y-2">
					<span class="bg-red-600 px-2 py-1 text-gray-50 rounded-lg text-[14px] tracking-[2px] font-bold">主打活動</span>
					<h5 class="font-bold text-[24px] sm:text-[36px] text-gray-900 px-2">一百萬等你來拿！OXI餐酒館水煮魚命名活動，農曆年前誕生百萬富翁！</h5>
				</div>
				
				<div 
				data-aos="fade-up"
				class="relative px-4 2xl:px-0">
					<img src="/images/name.jpg" class="rounded-xl" loading="lazy">

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