<template>
  <div className='relative w-full h-full'>
    <div :style="{ transform: 'translate(-50%,-50%)' }" class='absolute top-1/2 left-1/2'>
      <slot />
    </div>
  </div>
</template>