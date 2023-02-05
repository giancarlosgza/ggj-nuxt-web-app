<template>
  <div>
    <section class="section section-hero">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="overline">The Game</p>
            <h1 class="text-hero mb-5">Thirsty
              <span class="text-gradient secondary">Roots</span>
            </h1>
            <NuxtLink to="/play"
                      class="btn btn-primary btn-cta">
              Play now
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section sc-sm">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <i class="material-icons-outlined icon-wrap icon-wrap-primary mb-3">&#xea28;</i>
            <h2 class="fw-bold">PLAY <span class="text-gradient secondary">NOW</span></h2>
          </div>
        </div>
      </div>
    </section>

    <section class="section sc-sm sc-secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <i class="material-icons-outlined icon-wrap icon-wrap-primary mb-3">&#xe021;</i>
            <h2 class="fw-bold">DEVELOPED IN
              <span class="text-gradient primary">GAME MAKER</span></h2>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Thirsty Roots',
  meta: [
    {name: 'description', content: 'Thirsty Roots: The Game'}
  ]
})
</script>