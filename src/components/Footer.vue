<script>
export default {
  name: "footer-bar",
};
</script>

<template>
  <div
    style="background: #16191f; z-index: 30"
    class="p-16 flex justify-between mt-36"
  >
    <div class="h-100 items-center">
      <span style="color: #929292">
        © 2021 MoovieTime. All rights reserved.
      </span>
    </div>
    <img src="/logo/MoovieTime-Logo-Grey.png" style="width: 100px" />
    <div class="h-100 items-center">
      <span style="color: #929292">Made with Vue x Tailwind</span>
    </div>
  </div>
</template>
