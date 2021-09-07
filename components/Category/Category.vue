<template>
  <div class="box-border w-20 mx-4 h-28 mx-">
    <div
      ref="isHidden"
      class="flex items-center justify-center m-auto mb-1 text-5xl text-white rounded cursor-pointer w-14 h-14 bg-primary"
    >
      <slot name="icon"></slot>
    </div>
    <div class="text-xs text-center decoration-clone">
      <slot name="title"></slot>
    </div>
  </div>
</template>