<template>
  <span v-if="count > 0" class="badge">
    {{ count }}
  </span>
</template>

<script>
export default {
  name: "counter-badge",
  props: ["count"],
};
</script>
