<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  created () {
    console.log('layout created')
  }
}
</script>