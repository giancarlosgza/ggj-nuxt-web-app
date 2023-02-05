<template>
  <div>
    <section class="section section-hero sc-bg-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p class="badge badge-default font-press-start mb-3">THE GAME</p>
            <h1 class="text-hero mb-5">Thirsty<span class="text-gradient secondary">Roots</span>
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
        <div class="row justify-content-between">
          <div class="col-md-4">
            <img src="@/assets/images/icons/common-item-water-drop.png"
                 class="img-fluid img-animated" alt="Water Drop Icon">
            <h2 class="font-press-start">PLAY <span class="text-gradient secondary">NOW</span></h2>
            <p class="subtitle-1 text-muted mb-3">
              Join the excitement and become a part of the action with our brand new game! Immerse yourself in a world
              of fun, challenge your skills, and play with friends.
            </p>

            <NuxtLink to="/play"
                      class="btn btn-default-outline">
              Start new game
            </NuxtLink>
          </div>
          <div class="col-md-4">
            <img src="@/assets/images/icons/common-item-torch.png"
                 class="img-fluid img-animated" alt="Torch Icon">
            <h2 class="font-press-start">DARK <span class="text-gradient secondary">MODE</span></h2>
            <p class="subtitle-1 text-muted mb-3">
              Switch from a bright and lively interface to a cool and calm dark mode.
            </p>

            <IncludeColorModePicker/>
          </div>
        </div>
      </div>
    </section>

    <section class="section sc-sm sc-equal sc-bg-2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <img src="@/assets/images/icons/epic-item-spring-water.png"
                 class="img-fluid img-animated" alt="Spring Water Icon">
            <h2 class="font-press-start">DEVELOPED IN
              <span class="text-gradient secondary">GAME MAKER</span></h2>
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