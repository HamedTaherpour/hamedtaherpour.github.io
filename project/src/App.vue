<template>
  <div class="font-App h-screen w-full bg-white">
    <div class="container h-full">
      <div
        id="profile"
        class="flex flex-col md:flex-row items-center justify-center md:justify-around h-full"
      >
        <img
          src="/public/img/avatar.jpg"
          title="This is me"
          alt="Hamed Taherpour"
          class="rounded-full w-56 shadow-2xl"
        />
        <div class="mt-5 md:mt-0">
          <h1 class="text-2xl font-medium font-">
            Hello, My name is Hamed Taherpour.
          </h1>
          <h3 class="text-lg mt-3 tracking-wider">
            I'm a front-end
            <img class="w-5 inline-block" src="/public/img/vue_logo.png" />
            developer at
            <a href="https://majaziland.me/" class="text-link" target="_blank"
              >Majaziland</a
            >
            <br />
            I love
            <a href="https://tailwindcss.com/" class="text-link" target="_blank"
              >Tailwindcss</a
            >
          </h3>
          <div class="flex flex-wrap justify-start items-center gap-x-4 mt-5">
            <a href="https://join.skype.com/invite/iZ84fXhcShAo" target="_blank">
              <img
                class="w-5"
                src="/public/img/skype.png"
                alt="skype"
                title="skype"
              />
            </a>
            <a href="https://github.com/HamedTaherpour" target="_blank">
              <img
                class="w-5"
                src="/public/img/github.png"
                alt="github"
                title="my open source project"
              />
            </a>
            <a href="https://twitter.com/hamed_taherpour" target="_blank">
              <img
                class="w-5"
                src="/public/img/twitter.png"
                alt="twitter"
                title="follow me on twitter"
              />
            </a>
            <a href="https://t.me/HamedTaherpour" target="_blank">
              <img
                class="w-5"
                src="/public/img/telegram.png"
                alt="telegram"
                title="telegram"
              />
            </a>
            <a href="https://wa.me/09371508754" target="_blank">
              <img
                class="w-5"
                src="/public/img/whatsapp.png"
                alt="whatsapp"
                title="whatsapp"
              />
            </a>
            <a
              href="https://www.instagram.com/hamed.taherpour/"
              target="_blank"
            >
              <img
                class="w-5"
                src="/public/img/instagram.png"
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
