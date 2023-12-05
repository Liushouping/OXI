<script setup>
const GoTop = ref(false);
const GoScroll = () => {
  GoTop.value = scrollY > 240;
};
function Top() {
	document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
onMounted(() => {
  window.addEventListener('scroll', GoScroll);
});
onBeforeUnmount(() => {
	window.removeEventListener('scroll', GoScroll);
});
</script>
<template>
	<div 
	@click="Top"
	:class="{ 'opacity-100': GoTop }"
	class="fixed bottom-8 right-4 w-12 h-12 z-40 bg-gray-900 rounded-full flex justify-center items-center transition-all duration-500 cursor-pointer opacity-0">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-50">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
		</svg>
	</div>
</template>