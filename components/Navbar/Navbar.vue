<template>
  <div class="navbar">
    <ul class="nav__list">
      <li v-for="item in items" :key="item.id" class="nav__list-item">
        <NuxtLink to="/">{{ item.label }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, label: '出展社検索' },
        { id: 2, label: '製品検索' },
        { id: 3, label: '出展社 プレゼンテーション ' },
        { id: 4, label: 'H.C.R. セミナー' },
        { id: 5, label: '選び方・使い方 セミナー' },
        { id: 6, label: '国際シンポジウム' },
      ],
    }
  },
}
</script>

<style scoped>
.navbar {
  @apply bg-navbar h-12 justify-center hidden lg:flex xl:flex 2xl:flex;
}
.nav__list {
  @apply text-white list-none text-sm font-semibold flex items-center text-center;
}
.nav__list-item {
  @apply lg:w-w41 xl:w-w43 2xl:w-44 w-40 hover:bg-opacity-80 hover:bg-green-50 hover:h-full flex items-center justify-center hover:text-green-500;
}

.nav__list-item:nth-child(-n+3) {
  @apply bg-secondary h-full flex items-center justify-center hover:bg-green-50 hover:text-green-500;
}
</style>
