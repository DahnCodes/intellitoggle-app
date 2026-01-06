<script setup lang="ts">
import BaseCard from './ui/BaseCard.vue'

import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'
</script>

<template>
  <section
    class="relative min-h-[700px] flex text-[#ffffff] overflow-hidden bg-gradient-to-b from-[#42389E] to-[#1A1C3D]"
  >
    <img
      src="/assets/ai.jpg"
      alt="aiimage"
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    />

    <div class="relative z-10 max-w-6xl mx-auto p-[120px] text-center">
      <span
        class="inline-block mb-4 px-[32px] py-[10px] text-sm rounded-full bg-[#F9A71E] text-[#000000]"
      >
        Coming Soon
      </span>

      <h2 class="text-3xl md:text-4xl font-semibold mt-[20px]">
        DartCodeAI That Actually Changes Flagging
      </h2>

      <div class="grid grid-cols-2 gap-[64px] mt-[40px] md:grid-cols-1 md:grid">
        <BaseCard
          :image-src="one"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          description="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
        />
        <BaseCard
          :image-src="two"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          description="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
        />
        <BaseCard
          :image-src="three"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          description="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
        />
        <BaseCard
          :image-src="four"
          title="AutoFlag AI (LLM-Assisted Flag Creation)"
          description="Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you."
        />
      </div>

      <div class="mt-[40px]">
        <h2 class="text-[#F9A71E]">Enterprise Only</h2>
        <div
          class="flex border-[#EDECF6] border-[0.2px] justify-between px-[33px] py-[28px] rounded-[12px] h-[111px] items-center backdrop-blur-[5px] mt-[40px]"
        >
          <h2><span>Be The First</span> To Try Out Our New AI Features.</h2>
          <form>
            <input type="email" placeholder="Enter Email Address" />
            <button
              class="bg-[#F9A71E] w-[214px] h-[53px] rounded-[8px] border-none"
            >
              Join AI Early Access
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
