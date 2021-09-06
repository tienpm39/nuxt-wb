<template>
  <div class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
    <div v-for="product in products" :key="product.id">
      <product-item :product="product" :key="product.id"></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "../ProductItem/ProductItem.vue";
export default {
  props: ["products"],
  components: {
    ProductItem
  }
};
</script>
