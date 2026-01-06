<script setup lang="ts">
defineProps<{
  imageSrc: string
  title: string
  description?: string
}>()
</script>

<template>
  <div
    class="bg-[#ffffff]/2% border-[0.2px] backdrop-blur-[5px] border-[#ffffff] rounded-[12px] p-[24px] h-[196px] text-[#ffffff]"
  >
  <img
      v-if="imageSrc"
      :src="imageSrc"
      :alt="title"
      class="w-[46px] h-[46px]"
    />

    <h3 class="text-lg font-semibold">
      {{ title }}
    </h3>

    <p v-if="description" class="mt-2 text-sm">
      {{ description }}
    </p>

    <!-- Optional extra content -->
    <div class="mt-4">
      <slot />
    </div>
  </div>
</template>
