<template>
  <div>
    <!--    <p class='subtitle-1 mb-2'>Tema del sistema</p>-->
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
            class='btn btn-default-outline is-chip text-capitalize'
            :for='color'>
          {{ color }}
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
