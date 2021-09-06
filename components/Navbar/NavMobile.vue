<template>
  <nav>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        ></div>
      </div>
    </transition>
    <aside
      class="fixed top-0 left-0 z-30 w-full h-auto overflow-auto transition-all duration-300 ease-in-out transform bg-white "
      :class="isOpen ? 'translate-y-0' : '-translate-y-full'"
    >
      <div>
        <div class="flex items-center justify-between">
          <img src="@/assets/images/logo.png" class="h-16" />
          <button @click="drawer">
            <font-awesome-icon :icon="['fas', 'user']" />
          </button>
        </div>
        <div class="text-center">
          <ul>
            <li v-for="item in items" :key="item.id" class="mobile-list-item">
              <a href="/">{{ item.label }} </a>
            </li>
          </ul>
          <div class="flex items-center justify-center py-4">
            <button class="btn__user">
              <font-awesome-icon :icon="['fas', 'user']" />マイページ
            </button>
            <button class="btn__lang">
              <font-awesome-icon :icon="['fas', 'globe']" />ENGLISH
            </button>
          </div>
        </div>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        { id: 1, label: "出展社検索" },
        { id: 2, label: "製品検索" },
        { id: 3, label: "出展社 プレゼンテーション" },
        { id: 4, label: "H.C.R. セミナー" },
        { id: 5, label: "選び方・使い方 セミナー" },
        { id: 6, label: "国際シンポジウム" }
      ]
    };
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27 && this.isOpen) this.isOpen = false;
    });
  },
  created() {
    this.$root.$refs.NavMobile = this;
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style>
.mobile-list-item {
  @apply bg-primary border-b py-2 text-white font-medium;
}
.mobile-list-item:nth-child(-n + 3) {
  @apply bg-secondary;
}
.btn__user {
  @apply flex items-center p-1 px-2 py-1 mr-4 text-base font-semibold text-white rounded bg-primary hover:bg-green-400;
}

.btn__lang {
  @apply flex items-center p-1 px-3 py-1 text-base font-semibold text-white rounded bg-secondary hover:bg-blue-400;
}

.btn__icon {
  @apply w-5 h-5 mr-1;
}
</style>
