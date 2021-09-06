<template>
  <div>
    <div class="slider">
      <img src="../assets/images/main-banner.png" alt="banner" />
    </div>
    <div class="main-banner">
      <div class="relative">
        <img
          src="../assets/images/banner-left.png"
          alt="banner-left"
          class="w-screen"
        />
        <div class="banner__span">
          東京ビッグサイト 青海展示棟の 混雑状況はこちらで確認
        </div>
      </div>
      <div class="banner__right">
        <img
          src="../assets/images/banner-right.png"
          alt="banner-right"
          class="w-screen"
        />
        <div class="banner__span">リアル展来場証の印刷はこちら (PDF)</div>
      </div>
    </div>
    <div class="mt-6 feature-container">
      <div class="flex mb-4 rounded bg-secondary lg:mr-2 xl:mr-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);" />
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
      <div class="flex mb-4 rounded bg-secondary lg:mx-2 xl:mx-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);" />
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
      <div class="flex mb-4 rounded bg-secondary lg:ml-2 xl:ml-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);" />
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
    </div>
    <div class="feature-container">
      <div class="flex mb-4 rounded bg-primary lg:mr-2 xl:mr-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);" />
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
      <div class="flex mb-4 rounded bg-primary lg:mx-2 xl:mx-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);" />
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
      <div class="flex mb-4 rounded bg-primary lg:ml-2 xl:ml-2">
        <div>
          <img src="../assets/images/trien-lam.jpg" alt="feature" style="clip-path: polygon(0 0, 100% 0, 75% 99%, 0% 100%);"/>
        </div>
        <div class="self-center block text-center text-white">
          <div class="font-semibold">出展社検索</div>
          <div class="feature__text">
            説明テキスト説明テキスト説 明テキスト説明テキスト説明
          </div>
        </div>
      </div>
    </div>
    <div class="news__container">
      <div class="news__container-new">
        <div class="text-xl font-black text-center">お知らせ</div>
        <div class="flex items-center py-4 mt-2">
          <div class="mr-10 text-sm text-green-500">2021.05.01</div>
          <div class="text-base font-semibold">
            お知らせテキストお知らせテキストお知らせテキストお
            知らせテキストお知らせテキストお知らせテキスト
          </div>
        </div>
        <div class="flex items-center py-4">
          <div class="mr-10 text-sm text-green-500">2021.05.01</div>
          <div class="text-base font-semibold">
            お知らせテキストお知らせテキストお知らせテキストお
            知らせテキストお知らせテキストお知らせテキスト
          </div>
        </div>
        <div class="flex items-center py-4">
          <div class="mr-10 text-sm text-green-500">2021.05.01</div>
          <div class="text-base font-semibold">
            お知らせテキストお知らせテキストお知らせテキストお
            知らせテキストお知らせテキストお知らせテキスト
          </div>
        </div>
      </div>
      <div class="news__container-social">
        <div>
          <iframe
            class="w-full h-80 lg:w-full"
            title="youtube"
            src="https://www.youtube.com/embed/kJQP7kiw5Fk"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.slider {
  @apply flex justify-center lg:mx-auto lg:mt-6 xl:mt-6 2xl:mt-6 md:w-5/6 md:m-auto lg:ml-auto lg:w-11/12 xl:w-w77 xl:m-auto;
}
.main-banner {
  @apply flex flex-col mt-2 lg:flex-row xl:flex-row 2xl:flex-row md:flex-row md:w-5/6 md:m-auto md:mt-4 lg:m-auto lg:mt-4 lg:w-11/12 xl:m-auto xl:mt-6 xl:w-w77 2xl:w-full 2xl:mt-6;
}
.banner__right {
  @apply mx-auto mt-4 md:mt-0 md:ml-2 lg:mt-0 lg:ml-2 xl:mt-0 xl:ml-2 2xl:mt-0 2xl:ml-2 relative;
}
.banner__span {
  @apply absolute font-semibold text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-2/4 left-2/4 sm:text-lg md:text-xs;
}
.feature-container {
  @apply flex flex-col md:mx-auto md:w-10/12 lg:flex-row lg:w-11/12 lg:mx-auto xl:flex-row xl:w-w77 xl:mx-auto;
}
.feature__text {
  @apply px-12 pt-2 text-sm break-all lg:p-0 lg:text-xs xl:px-0 xl:text-xs;
}
.news__container {
  @apply flex flex-col w-full xl:w-w77 lg:mx-auto md:w-10/12 md:mx-auto lg:flex-row lg:w-11/12 xl:flex-row 2xl:flex-row;
}

.news__container-new {
  @apply divide-y divide-gray-200 lg:w-full lg:mr-2 xl:w-full xl:mr-2 2xl:w-full 2xl:mr-2;
}

.news__container-social {
  @apply mt-6 lg:w-full lg:ml-2 xl:w-full xl:ml-2 2xl:w-full 2xl:ml-2;
}
</style>
