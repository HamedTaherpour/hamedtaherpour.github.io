<template>
  <div class="font-App h-screen w-full">
    <div class="h-full flex flex-col justify-center">
      <div
        id="profile"
        class="flex flex-col md:p-4 md:flex-row md:items-center md:justify-center md:gap-x-4"
      >
        <img
          src="/img/avatar.jpg"
          title="This is me"
          alt="Hamed Taherpour"
          class="block mx-auto md:mx-px w-52 md:w-56 h-52 rounded-full md:rounded-none object-cover transform transition hover:rotate-3 duration-300"
        />
        <div class="p-4">
          <h1 class="text-2xl font-medium">
            Hello, My name is Hamed Taherpour.
          </h1>
          <h3 class="text-lg mt-3 tracking-wider">
            I'm a front-end
            <img class="w-5 inline-block" src="/public/img/vue_logo.png" />
            developer at
            <a href="https://arzdigital.com" class="text-link" target="_blank"
              >ArzDigital</a
            >
            <br />
            I <span class="mr-1 text-rose-500 font-semibold">love ♥</span>
            <a href="https://tailwindcss.com/" class="text-link" target="_blank"
              >Tailwindcss</a
            >
          </h3>
          <div class="flex flex-wrap justify-start items-center gap-x-4 mt-5">
            <a
              class="transform transition hover:rotate-12 hover:scale-110 hidden"
              href="https://join.skype.com/invite/iZ84fXhcShAo"
              target="_blank"
            >
              <img class="w-6" src="/img/skype.png" alt="skype" title="skype" />
            </a>
            <a
              class="transform transition hover:rotate-12 hover:scale-110"
              href="https://github.com/HamedTaherpour"
              target="_blank"
            >
              <img
                class="w-6"
                src="/img/github.png"
                alt="github"
                title="my open source project"
              />
            </a>
            <a
              class="transform transition hover:rotate-12 hover:scale-110"
              href="https://twitter.com/hamed_taherpour"
              target="_blank"
            >
              <img
                class="w-6"
                src="/img/twitter.png"
                alt="twitter"
                title="follow me on twitter"
              />
            </a>
            <a
              class="transform transition hover:rotate-12 hover:scale-110"
              href="https://t.me/HamedTaherpour"
              target="_blank"
            >
              <img
                class="w-6"
                src="/img/telegram.png"
                alt="telegram"
                title="telegram"
              />
            </a>
            <a
              class="transform transition hover:rotate-12 hover:scale-110 hidden"
              href="https://wa.me/09371508754"
              target="_blank"
            >
              <img
                class="w-6"
                src="/img/whatsapp.png"
                alt="whatsapp"
                title="whatsapp"
              />
            </a>
            <a
              class="transform transition hover:rotate-12 hover:scale-110 hidden"
              href="https://www.instagram.com/hamed.taherpour/"
              target="_blank"
            >
              <img
                class="w-6"
                src="/img/instagram.png"
                title="follow me on instagram"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
