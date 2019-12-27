<template>
<div>
    <h1>Header</h1>
    <cjs-child v-bind:message-from-father="message"></cjs-child>
</div>
</template>

<script lang="ts">
export default {
  props: {
    message: String
  }
}
</script>
