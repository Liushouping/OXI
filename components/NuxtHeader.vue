<script setup>
const headerHeight = ref(30);
const headerBackgroundColor = ref('transparent');
const headerTextColor = ref("white");
const headerShadow = ref(false);
const headerIcon = ref(true);

const menu = ref(false);

const handleScroll = () => {
	const scrollY = window.scrollY || window.pageYOffset;
    headerHeight.value = scrollY > 110 ? 110 : 30;
    headerBackgroundColor.value = scrollY > 60 ? 'white' : 'transparent';
    headerTextColor.value = scrollY > 60 ? 'black' : 'white';
    headerShadow.value = scrollY > 60;
    headerIcon.value = scrollY < 60;
};

const scrollfooter = () => {
  const targetElement = document.getElementById("CONTACT");
  targetElement.scrollIntoView({ 
  	behavior: 'smooth',
  	block: 'end'
  });
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<div>
		<header 
		class="w-full fixed top-0 flex justify-center z-30">
			<nav class="w-full py-12 px-4 flex justify-center transition-all duration-1000" 
			:class="{ 'shadow-sm': headerShadow }"
			:style="{ height: `${headerHeight}px`, backgroundColor: headerBackgroundColor, color: headerTextColor }">
				<div class="max-w-[960px] w-full flex flex-row justify-between items-center">
					<NuxtLink to="/">
						<img data-not-lazy src="~/assets/images/OXI-LOGO-Y.png" data-aos="fade-right" style="width: 60px;height: auto;" alt="logo">
					</NuxtLink>
					<div 
					class="flex md:hidden cursor-pointer"
					@click="menu =! menu">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
						</svg>
					</div>
					<ul 
					data-aos="fade-down"
					class="hidden md:flex space-x-2 sm:space-x-6 font-bold text-[14px]">
						<li><NuxtLink to="/">HOME</NuxtLink></li>
						<li><NuxtLink to="/news">NEWS</NuxtLink></li>
						<li><NuxtLink to="/menu">MENU</NuxtLink></li>
						<li><NuxtLink to="/live">LIVE</NuxtLink></li>
						<li><span @click="scrollfooter" class="cursor-pointer">CONTACT</span></li>
					</ul>
					<ul 
					data-aos="fade-left"
					class="hidden md:flex space-x-2 md:space-x-4 items-center ">
						<li><a href="https://www.facebook.com/OXI.taipei/" target="_blank"><svg version="1.1" viewBox="0 0 512 512" :class="{ 'fill-white': headerIcon }" class="w-4 h-4" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M374.244,285.825l14.105,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.116,0l0,-78.291c0,0 -36.407,-6.214 -71.213,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.541 32.798,3.865 49.709,3.865c16.911,0 33.511,-1.324 49.708,-3.865l0,-222.31l74.128,0Z"/></svg></a>
						</li>
						<li><a href="https://www.instagram.com/oxi_taipei/" target="_blank"><svg style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 600 600" :class="{ 'fill-white': headerIcon }" class="w-6 h-6" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="matrix(1.01619,0,0,1.01619,44,43.8384)"><path d="M251.921,0.159C183.503,0.159 174.924,0.449 148.054,1.675C121.24,2.899 102.927,7.157 86.902,13.385C70.336,19.823 56.287,28.437 42.282,42.442C28.277,56.447 19.663,70.496 13.225,87.062C6.997,103.086 2.739,121.399 1.515,148.213C0.289,175.083 0,183.662 0,252.08C0,320.497 0.289,329.076 1.515,355.946C2.739,382.76 6.997,401.073 13.225,417.097C19.663,433.663 28.277,447.712 42.282,461.718C56.287,475.723 70.336,484.337 86.902,490.775C102.927,497.002 121.24,501.261 148.054,502.484C174.924,503.71 183.503,504 251.921,504C320.338,504 328.917,503.71 355.787,502.484C382.601,501.261 400.914,497.002 416.938,490.775C433.504,484.337 447.553,475.723 461.559,461.718C475.564,447.712 484.178,433.663 490.616,417.097C496.843,401.073 501.102,382.76 502.325,355.946C503.551,329.076 503.841,320.497 503.841,252.08C503.841,183.662 503.551,175.083 502.325,148.213C501.102,121.399 496.843,103.086 490.616,87.062C484.178,70.496 475.564,56.447 461.559,42.442C447.553,28.437 433.504,19.823 416.938,13.385C400.914,7.157 382.601,2.899 355.787,1.675C328.917,0.449 320.338,0.159 251.921,0.159ZM251.921,45.551C319.186,45.551 327.154,45.807 353.718,47.019C378.28,48.14 391.619,52.244 400.496,55.693C412.255,60.263 420.647,65.723 429.462,74.538C438.278,83.353 443.737,91.746 448.307,103.504C451.757,112.381 455.861,125.72 456.981,150.282C458.193,176.846 458.45,184.814 458.45,252.08C458.45,319.345 458.193,327.313 456.981,353.877C455.861,378.439 451.757,391.778 448.307,400.655C443.737,412.414 438.278,420.806 429.462,429.621C420.647,438.437 412.255,443.896 400.496,448.466C391.619,451.916 378.28,456.02 353.718,457.14C327.158,458.352 319.191,458.609 251.921,458.609C184.65,458.609 176.684,458.352 150.123,457.14C125.561,456.02 112.222,451.916 103.345,448.466C91.586,443.896 83.194,438.437 74.378,429.621C65.563,420.806 60.103,412.414 55.534,400.655C52.084,391.778 47.98,378.439 46.859,353.877C45.647,327.313 45.391,319.345 45.391,252.08C45.391,184.814 45.647,176.846 46.859,150.282C47.98,125.72 52.084,112.381 55.534,103.504C60.103,91.746 65.563,83.353 74.378,74.538C83.194,65.723 91.586,60.263 103.345,55.693C112.222,52.244 125.561,48.14 150.123,47.019C176.687,45.807 184.655,45.551 251.921,45.551Z"/><path d="M251.921,336.053C205.543,336.053 167.947,298.457 167.947,252.08C167.947,205.702 205.543,168.106 251.921,168.106C298.298,168.106 335.894,205.702 335.894,252.08C335.894,298.457 298.298,336.053 251.921,336.053ZM251.921,122.715C180.474,122.715 122.556,180.633 122.556,252.08C122.556,323.526 180.474,381.444 251.921,381.444C323.367,381.444 381.285,323.526 381.285,252.08C381.285,180.633 323.367,122.715 251.921,122.715Z" :class="{ 'fill-white': headerIcon }" class="w-6 h-6" /><path d="M416.627,117.604C416.627,134.3 403.092,147.834 386.396,147.834C369.701,147.834 356.166,134.3 356.166,117.604C356.166,100.908 369.701,87.374 386.396,87.374C403.092,87.374 416.627,100.908 416.627,117.604Z" :class="{ 'fill-white': headerIcon }" class="w-6 h-6" /></g></svg></a>
						</li>
						<li>
							<a href="https://line.me/R/ti/p/@544kprjh" target="_blank">
								<svg class="w-6 h-6" :class="{ 'fill-white': headerIcon }" id="_圖層_2" data-name="圖層 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.67 367.32">
								  <g id="_圖層_1-2" data-name="圖層 1">
								    <path d="M383.67,145.51v21.71c-.25,1.07-.5,2.13-.74,3.2-1.89,8.73-3.11,17.68-5.78,26.16-7.51,23.82-22.09,43.33-38.94,61.3-19.11,20.37-40.77,37.78-63.2,54.27-24.3,17.88-49.19,34.89-75.89,49.03-5.08,2.69-10.73,4.65-16.35,5.89-5.2,1.14-7.87-1.82-7.88-7.23,0-1.48,.2-2.98,.42-4.45,1.02-6.77,2.22-13.51,3.11-20.3,1.98-15.02-1.49-20.14-16.41-23.61-10.53-2.45-21.33-3.82-31.72-6.72-41.22-11.5-76.76-32.23-102.34-67.24C-1.37,197.37-8.32,153.41,10.42,106.84,25.03,70.52,51.9,44.8,85.87,26.39,129.63,2.69,176.45-4.38,225.5,2.51c40.02,5.62,75.97,20.71,106.61,47.37,23.81,20.71,40.68,45.98,48.11,76.99,1.47,6.14,2.31,12.43,3.45,18.65Zm-192.99,6.21c.25-.11,.5-.23,.74-.34,.74,.95,1.5,1.88,2.21,2.84,11.86,16.18,23.62,32.45,35.69,48.47,1.7,2.25,4.75,4.31,7.47,4.8,6.69,1.2,11.29-3.77,11.3-11.46,.03-24.32,.02-48.64-.01-72.96,0-1.48-.18-3-.53-4.43-1.04-4.28-4.82-7.35-9.11-7.56-4.2-.21-8.42,2.61-9.71,6.78-.54,1.75-.73,3.67-.73,5.51-.06,13.72-.03,27.44-.04,41.16,0,1.02-.14,2.04-.26,3.67-1.06-1.36-1.68-2.12-2.27-2.92-11.96-16.27-23.89-32.55-35.87-48.8-3.6-4.88-7.32-6.31-11.81-4.76-4.63,1.6-6.76,4.94-6.76,10.78-.02,17.46,0,34.92,0,52.38,0,7.73-.09,15.47,.06,23.2,.12,6.15,5.28,10.4,11.29,9.58,4.9-.67,8.32-4.77,8.34-10.33,.06-15.2,.02-30.41,.02-45.61Zm91.05-20.47c1.51,0,2.85,0,4.18,0,7.61,0,15.22,.07,22.82-.03,6.64-.09,10.84-4.23,10.74-10.33-.1-5.86-4.39-9.8-10.85-9.82-11.97-.04-23.95-.04-35.92,0-7.02,.02-11.07,4.13-11.07,11.23-.02,24.82-.03,49.64,0,74.46,0,6.95,3.97,10.94,10.84,10.96,12.1,.04,24.2,.03,36.29-.01,1.35,0,2.76-.1,4.03-.52,4.69-1.54,7.16-5.69,6.6-10.83-.48-4.47-3.89-8.12-8.65-8.31-8.22-.33-16.45-.2-24.68-.27-1.43-.01-2.87-.12-4.17-.18v-18.08c9.06,0,17.78,.02,26.49,0,6.74-.02,11.05-3.91,11.1-9.93,.05-6.08-4.16-10.11-10.89-10.2-7.36-.1-14.72-.03-22.08-.03-1.57,0-3.14,0-4.79,0v-18.09Zm-192.89,56.52c0-2.08,0-3.43,0-4.78,0-19.94,0-39.89-.01-59.83,0-1.49,.07-3.03-.26-4.46-1.06-4.6-5.69-7.95-10.25-7.61-4.94,.37-8.9,4.19-9.14,9.21-.22,4.6-.12,9.22-.12,13.83,0,20.82-.03,41.63,.01,62.44,.01,6.68,3.65,11.04,9.47,11.1,12.96,.13,25.93,.11,38.89,0,5.32-.05,9.37-4.33,9.52-9.58,.15-5.27-3.56-9.83-8.93-10.07-8.09-.36-16.19-.2-24.29-.25-1.47-.01-2.94,0-4.89,0Zm47.7-28.3h-.03c0,12.35-.07,24.7,.06,37.05,.02,2.16,.47,4.51,1.44,6.41,2,3.91,6.73,5.67,10.88,4.54,4.32-1.17,7.29-4.9,7.3-9.7,.05-25.57,.03-51.14,0-76.71,0-1.1-.19-2.25-.55-3.28-1.55-4.44-6.16-7.3-10.52-6.64-4.96,.76-8.52,4.63-8.56,9.79-.1,12.85-.03,25.69-.03,38.54Z"/>
								  </g>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
		<Teleport to="body">
		<Transition name="slide-up">
		    <div 
		    v-if="menu" 
		    class="fixed top-0 left-0 w-full h-screen bg-gray-900 flex justify-center items-center z-[101]">
		      <span @click="menu =! menu" class="fixed top-8 right-4 cursor-pointer">
		        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
				  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
		      </span>
		      <div class="flex justify-center items-center">
		      	<ul class="flex flex-col justify-center items-center text-white md:hidden space-y-6 font-bold text-[14px]">
		      		<li><NuxtLink to="/" @click="menu =! menu">HOME</NuxtLink></li>
							<li><NuxtLink to="/news" @click="menu =! menu">NEWS</NuxtLink></li>
							<li><NuxtLink to="/menu" @click="menu =! menu">MENU</NuxtLink></li>
							<li><NuxtLink to="/live" @click="menu =! menu">LIVE</NuxtLink></li>
							<li><span class="cursor-pointer" @click="menu =! menu;scrollfooter();">CONTACT</span></li>
						</ul>
		      </div>
		    </div>
		</Transition>
		</Teleport>
	</div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
	transform: translateY(-1%);
  opacity: 0;
}

.slide-up-leave-to {
	transform: translateY(-1%);
  opacity: 0;
}
</style>
