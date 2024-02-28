<template>
	<div 
	class="background-container">
		<div class="overlay"></div>
		<div 
		class="content">
			<p class="text-white text-[24px] sm:text-[48px] font-bold">Music and Wine</p>
		</div>
	</div>
</template>

<style>
.background-container {
  position: relative;
  height: 400px;
  overflow: hidden;
}
/*.background-container:before {
  content: ' ';
  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url(/images/oxi-o.jpg) center 0 no-repeat;
  background-size: cover;
}*/
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>