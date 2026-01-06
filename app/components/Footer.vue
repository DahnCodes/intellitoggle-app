<template>
  <section class="p-[120px]">
    <div class="relative h-[375px] bg-gradient-to-b from-[#42389E] to-[#1A1C3D] w-[1024px] mx-auto flex flex-col items-center justify-center text-[#ffffff] gap-[16px] rounded-[12px]">
       <img
      src="/assets/pattern.png"
      alt="aiimage"
      class="absolute inset-0 w-full h-full object-cover"
    />
      <h2>Launch Features Confidently With AI Driven Feature Flags</h2>
      <p>Start for free, scale as your team grows</p>
      <div class="flex gap-[20px]">
        <button class="bg-[#F9A71E] w-[214px] h-[43px] rounded-[8px] border-none"><span>Start for $1/mo</span></button>
        <button class="border-[#F9A71E] bg-transparent w-[214px] rounded-[8px] h-[43px] text-[#F9A71E]">Join Early AI Access</button>
      </div>
    </div>
  </section>
  <footer class="bg-[#ECEBF5] py-[40px] px-[120px]">
    <div class="flex justify-between">
      <div class="max-w-[259px]">
        <img src="../assets/footerlogo.png" alt="Logo" />
        <p class="text-[#4A4B4D]">
          IntelliToggle is built by AORTEM, a company focused on powering
          scalable, multi-platform developer tools.
        </p>
        <img src="../assets/gitlogo.png" alt="Social Media Links" />
      </div>

      <div>
        <p class="text-[#5F5F60]">Resources</p>

        <p class="text-[#323338] font-semibold">
          Why IntelliToggle Is Different
        </p>
        <p>Customer Support</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
      </div>

      <div>
        <p class="text-[#5F5F60]">Company</p>

        <p>Pricing</p>
        <p>Documentation</p>
        <p>About Us</p>
      </div>

      <div>
        <p>Subscribe to Newsletter</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            class="p-[10px] rounded-[8px] border border-[#CCCCCC] w-[250px]"
          />
          <button class="bg-[#F9A71E] w-[214px] h-[43px] rounded-[8px] border-none">Submit</button>
        </form>
      </div>
    </div>
  </footer>
</template>
