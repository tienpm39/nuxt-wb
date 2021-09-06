<template>
  <div class="w-56 mx-auto my-12">
    <div class="w-full px-8 border-2 border-gray-100">
      <img :src="product.image" alt="" class="object-cover h-56" />
    </div>
      <div>
        <h5 class="mt-2 text-sm font-black">{{ product.name }}</h5>
        <div>
          <h6 class="my-3 font-bold text-green-700">{{ product.title }}</h6>
        </div>
        <div>
          <p class="text-sm font-medium leading-6 overflow-ellipsis">{{ product.description }}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      require: true
    }
  }
};
</script>
