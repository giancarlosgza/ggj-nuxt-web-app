<template>
  <div>
    <p class='subtitle-1 mb-2'>Tema del sistema</p>
    <div class='d-flex'>
      <div v-for='color of colors' :key='color'>
        <input
            :id='color'
            v-model='$colorMode.preference'
            :value='color'
            type='radio'
            class='btn-check'
            name='themeOptions'
            autocomplete='off'
        />
        <label
            class='btn btn-default-outline is-chip ripple ripple-primary'
            :for='color'>
          <span v-if="color === 'system'">Sistema</span>
          <span v-if="color === 'light'">Claro</span>
          <span v-if="color === 'dark'">Oscuro</span>
          <!--          {{ color }}-->
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const colors = ['system', 'light', 'dark']
// const selectedColor = colorMode.value || 'system'

console.log(colorMode.value)
</script>
