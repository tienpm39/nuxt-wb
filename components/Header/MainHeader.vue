<template>
  <header class="contain">
    <img src="@/assets/images/logo.png" class="h-16" />
    <div class="flex">
      <button class="btn__user">
        <font-awesome-icon :icon="['fas', 'user']" />マイページ
      </button>
      <button class="btn__lang">
        <font-awesome-icon :icon="['fas', 'globe']" />ENGLISH
      </button>
      <button class="btn__menu" @click="drawer">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    drawer() {
      this.$root.$refs.NavMobile.drawer();
    }
  }
};
</script>

<style scoped>
.contain {
  @apply flex justify-between items-center h-16;
}

.btn__user {
  @apply items-center hidden p-1 px-2 py-1 mr-4 text-base font-semibold text-white rounded bg-primary lg:flex xl:flex 2xl:flex hover:bg-green-400;
}

.btn__lang {
  @apply items-center hidden p-1 px-3 py-1 text-base font-semibold text-white rounded bg-secondary lg:flex xl:flex 2xl:flex mr-4 hover:bg-blue-400;
}

.btn__menu {
  @apply block lg:hidden xl:hidden 2xl:hidden mr-4;
}

.btn__icon {
  @apply w-5 h-5 mr-1;
}
</style>
