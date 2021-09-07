<template>
  <section>
    <div class="category">製品検索</div>
    <div class="container mx-auto w-w1050">
      <div class="header">製品カテゴリーからの検索</div>
      <div
        class="relative grid grid-cols-9 sm:grid-cols-5 xs:grid-cols-4 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-9 2xl:grid-cols-9"
      >
        <category
          v-for="item in items"
          :key="item.id"
          @handlePopup="handlePopup"
        >
          <template #icon>
            <font-awesome-icon :icon="item.icon" />
          </template>
          <template #title>
            {{ item.title }}
          </template>
        </category>
      </div>
      <!-- popover -->
      <div class="relative">
        <div
          class="flex items-center justify-center py-2 bg-gray-200 rounded popover"
          v-show="isHidden"
        >
          <div class="flex-grow">
            <div
              class="flex items-center justify-center w-10 h-10 mx-3 text-3xl text-white rounded bg-primary"
            >
              <font-awesome-icon icon="search" />
            </div>
          </div>
          <div class="flex flex-wrap ">
            <div
              for="checkbox"
              v-for="item in choices"
              :key="item.id"
              class="relative flex justify-center px-8 border rounded py-0.5 text-primary mt-px mr-2 my-1"
              :class="[item.checked ? 'bg-primary' : 'bg-white']"
            >
              <label v-if="item.checked">
                <span class="text-xs font-semibold text-white">
                  {{ item.title }}</span
                >
                <input
                  type="checkbox"
                  id="checkbox"
                  :checked="item.checked"
                  @change="onChange(item)"
                  hidden
                />
                <label
                  for="checkbox"
                  class="absolute w-3 h-3 bg-white border border-white rounded-full cursor-pointer top-2 right-2 ticker"
                ></label>
              </label>
              <label v-else>
                <span class="text-xs font-semibold "> {{ item.title }}</span>
                <input
                  type="checkbox"
                  id="checkbox"
                  hidden
                  :checked="item.checked"
                  @change="onChange(item)"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-center py-4">
        <button
          v-if="!isHidden"
          class="px-8 py-4 font-semibold border-2 rounded-lg text-primary border-primary hover:bg-secondary hover:text-white hover:border-secondary"
        >
          全てのカテゴリーを選択
        </button>
      </div>

      <div class="header">機能検索</div>
      <div
        class="grid grid-cols-6 gap-x-3 gap-y-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6"
      >
        <div
          for="checkbox"
          v-for="item in btn"
          :key="item.id"
          class="flex justify-center p-0.5 border rounded border-primary text-primary first:border-red-500 first:text-red-500 relative"
          :class="[item.checked ? 'bg-primary' : 'bg-white']"
        >
          <label v-if="item.checked">
            <span class="text-xs font-semibold text-white">
              {{ item.title }}</span
            >
            <input
              type="checkbox"
              id="checkbox"
              :checked="item.checked"
              @change="onChange(item)"
              hidden
            />
            <label
              for="checkbox"
              class="absolute w-3 h-3 bg-white border border-white rounded-full cursor-pointer top-2 right-2 ticker"
            ></label>
          </label>
          <label v-else>
            <span class="text-xs font-semibold "> {{ item.title }}</span>
            <input
              type="checkbox"
              id="checkbox"
              hidden
              :checked="item.checked"
              @change="onChange(item)"
            />
          </label>
        </div>
      </div>

      <div class="header">キーワードからの検索</div>
      <div class="relative">
        <input
          placeholder="キーワード"
          class="box-border w-full px-6 py-1 border rounded-full focus:outline-none focus:ring-1 focus:border-primary"
        />
        <font-awesome-icon
          icon="search"
          class="absolute top-2 right-5 text-primary"
        />
      </div>
      <div class="grid grid-cols-3 gap-4 mt-12 border-b-2 border-primary">
        <div>
          <span class="font-semibold">対象製品:</span>
          <span class="text-2xl font-bold">1000</span>
          <span class="font-semibold"> 件</span>
        </div>
        <div class="col-span-2 mb-4 ">
          <div class="flex items-center">
            <a href="#" class="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </a>
            <a
              v-for="item in num"
              :key="item"
              href="#"
              class="px-2 text-primary"
            >
              {{ item }}</a
            >
            <a href="#" class="px-2 text-primary">
              ...
            </a>
            <a href="#" class="px-2 text-primary">
              14
            </a>
            <a href="#" class="text-primary hover:text-gray">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <section>
        <product-list :products="this.products"></product-list>
      </section>
      <div class="flex items-center justify-center">
        <a href="#" class="text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </a>
        <a v-for="item in num" :key="item" href="#" class="px-2 text-primary">
          {{ item }}</a
        >
        <a href="#" class="px-2 text-primary">
          9
        </a>
        <a href="#" class="px-2 text-primary">
          10
        </a>
        <a href="#" class="text-primary hover:text-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import Category from "@/components/Category/Category.vue";
import Button from "@/components/Button/CustomBtn.vue";
import ProductList from "@/components/ProductList/ProductList.vue";
export default {
  components: { Category, Button, ProductList },
  data() {
    return {
      isHidden: false,
      products: [
        {
          id: 1,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 2,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "( 株 ) 出展社名",
          name: "( 株 ) 出展社名",
          title:
            "きちんとストレス管理 advance 改訂第 1 版　介護職 員のセルフケアから職場復帰支 援まで",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 3,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title:
            "社会福祉法人会計基準　関係資料集―社会福祉法人制度改革対応版 （第２版）",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 4,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title: "介護実習指導者テキスト 改訂２版",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 5,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 6,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "( 株 ) 出展社名",
          name: "( 株 ) 出展社名",
          title:
            "きちんとストレス管理 advance 改訂第 1 版　介護職 員のセルフケアから職場復帰支 援まで",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 7,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title:
            "社会福祉法人会計基準　関係資料集―社会福祉法人制度改革対応版 （第２版）",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        },
        {
          id: 8,
          image: require("@/assets/images/trien-lam.jpg"),
          alt: "月刊 福祉 2020 年 10 月号 [ 雑誌 ]",
          name: "( 株 ) 出展社名",
          title: "介護実習指導者テキスト 改訂２版",
          description:
            "実習指導の理論と実際、実習指導の方法と展開、実習スーパービジョンの意義"
        }
      ],
      items: [
        { id: 1, title: "移動機器（車いす等)", icon: "box" },
        { id: 2, title: "移動機器（車いす等)", icon: "broom" },
        { id: 3, title: "移動機器（車いす等)", icon: "bus" },
        { id: 4, title: "移動機器（車いす等)", icon: "calendar" },
        { id: 5, title: "移動機器（車いす等)", icon: "capsules" },
        { id: 6, title: "移動機器（車いす等)", icon: "carrot" },
        { id: 7, title: "移動機器（車いす等)", icon: "cheese" },
        { id: 8, title: "移動機器（車いす等)", icon: "certificate" },
        { id: 9, title: "移動機器（車いす等)", icon: "chart-pie" },
        { id: 10, title: "移動機器（車いす等)", icon: "coffee" },
        { id: 11, title: "移動機器（車いす等)", icon: "comment" },
        { id: 12, title: "移動機器（車いす等)", icon: "cookie" },
        { id: 13, title: "移動機器（車いす等)", icon: "cloud" },
        { id: 14, title: "移動機器（車いす等)", icon: "clone" },
        { id: 15, title: "移動機器（車いす等)", icon: "child" },
        { id: 16, title: "移動機器（車いす等)", icon: "baby-carriage" },
        { id: 17, title: "移動機器（車いす等)", icon: "envelope" },
        { id: 18, title: "移動機器（車いす等)", icon: "archive" }
      ],
      btn: [
        { id: 1, title: "新製品", checked: false },
        { id: 2, title: "操作しやすい", checked: false },
        { id: 3, title: "多機能", checked: false },
        { id: 4, title: "小型・軽量化", checked: false },
        { id: 5, title: "カスタム可能", checked: false },
        { id: 6, title: "耐久性を重視", checked: false },
        { id: 7, title: "安全性に配慮", checked: false },
        { id: 8, title: "デザインにこだわり", checked: false },
        { id: 9, title: "災害時も役立つ", checked: false },
        { id: 10, title: "介護保険適用", checked: false },
        { id: 11, title: "サポート充実", checked: false },
        { id: 12, title: "試用可能", checked: false }
      ],
      num: [1, 2, 3, 4, 5, 6, 7, 8],
      choices: [
        { id: 1, title: "施設建築、施設用床材・壁材", checked: false },
        {
          id: 2,
          title: "自然エネルギー・省エネルギー技術機器",
          checked: false
        },
        { id: 3, title: "再資源・水浄化処理機器", checked: false },
        { id: 4, title: "洗濯機、乾燥機、掃除機、脱臭器", checked: false },
        { id: 5, title: "いす・座位保持／立ち上がり補助用品", checked: false },
        { id: 6, title: "家具、テーブル、洗面台", checked: false },
        { id: 7, title: "災報知設備、自動消火設備", checked: false },
        { id: 8, title: "防災・避難用品", checked: false },
        { id: 9, title: "自家発電・蓄電装置", checked: false },
        { id: 10, title: "介護職員用衣類", checked: false },
        { id: 11, title: "その他", checked: false }
      ]
    };
  },
  methods: {
    onChange: function(e) {
      e.checked = !e.checked;
    },
    handlePopup() {
      this.isHidden = !this.isHidden;
    }
  }
};
</script>

<style>
.category {
  @apply flex justify-center items-center font-semibold text-2xl bg-green-100 h-12;
}
.header {
  @apply font-semibold flex items-center justify-center my-4;
}
.header::after {
  content: "";
  height: 1px;
  background-color: silver;
  flex-grow: 1;
  margin-left: 15px;
}
.ticker::after {
  border: 2px solid green;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  position: absolute;
  transform: rotate(-45deg);
  width: 9px;
}
.popover::before {
  content: "";
  border: 20px solid;
  border-color: transparent transparent #e5e7eb transparent;
  position: absolute;
  top: -35px;
}
</style>
