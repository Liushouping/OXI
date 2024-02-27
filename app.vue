<template>
  <div>
    <NuxtLayout class="tracking-[1px]">
      <NuxtPage />
      <NuxtGotop />
    </NuxtLayout>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Noto+Serif+TC:wght@300;500;900&display=swap');

:root {
  font-family: 'Noto Serif TC', serif;
  letter-spacing: 1px;
}

.font-anton {
  font-family: 'Anton', sans-serif;
}

/*.page-enter-active,
.page-leave-active {
  transition: all .4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}*/
</style>