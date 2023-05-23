<script>
export default {
  data: () => ({
    list: []
  }),
  methods: {
  }
}
</script>

<template>
  <section aria-label="Notifications" tabindex="-1" class="sonner__toast-wrapper">
    <ul>
      <li v-for="(item, index) in list" :key="index" class="sonner-toaster" data-theme="light">
        {{ item.name }}
      </li>
    </ul>
  </section>
</template>

<style scope>
.sonner__toast-wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  --front-toast-height: 53.5px;
  --offset: 32px;
  --width: 356px;
  --gap: 14px;
}

.sonner-toaster {
  position: relative;
  width: var(--width);
  font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  bottom: 0;
  right: 0;
  --gray1: hsl(0, 0%, 99%);
  --gray2: hsl(0, 0%, 97.3%);
  --gray3: hsl(0, 0%, 95.1%);
  --gray4: hsl(0, 0%, 93%);
  --gray5: hsl(0, 0%, 90.9%);
  --gray6: hsl(0, 0%, 88.7%);
  --gray7: hsl(0, 0%, 85.8%);
  --gray8: hsl(0, 0%, 78%);
  --gray9: hsl(0, 0%, 56.1%);
  --gray10: hsl(0, 0%, 52.3%);
  --gray11: hsl(0, 0%, 43.5%);
  --gray12: hsl(0, 0%, 9%);
  --border-radius: 6px;
  box-sizing:border-box;
  padding:0;
  margin:0;
  list-style:none;
  outline:none;
  z-index:999999999;
}

.sonner-toaster {
  padding:16px;
  background:var(--normal-bg);
  border:1px solid var(--normal-border);
  color:var(--normal-text);
  border-radius:var(--border-radius);
  box-shadow:0 4px 12px #0000001a;
  width:var(--width);
  font-size:13px;
  display:flex;
  align-items:center;
  gap:6px;
  font-weight: 500;
}

.sonner-toaster[data-theme="light"]{
  --normal-bg: #fff;
  --normal-border: var(--gray3);
  --normal-text: var(--gray12);
  --success-bg: hsl(143, 85%, 96%);
  --success-border: hsl(145, 92%, 91%);
  --success-text: hsl(140, 100%, 27%);
  --error-bg: hsl(359, 100%, 97%);
  --error-border: hsl(359, 100%, 94%);
  --error-text: hsl(360, 100%, 45%);
}
</style>
