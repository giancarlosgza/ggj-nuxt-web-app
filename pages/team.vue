<template>
  <div>
    <div class="section sc-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
              <h1 class="font-press-start mb-1">Team</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <!-- DEVELOPERS -->
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/epic-item-spring-water.png"
                   width="85" height="85"
                   class="img-fluid" alt="Spring Water Icon">
              <h2>Matias Marin</h2>
              <p class="subtitle-1 text-muted mb-0">GameMaker Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/epic-item-like-water.png"
                   width="85" height="85"
                   class="img-fluid" alt="Like Water Icon">
              <h2>Eli Lopez</h2>
              <p class="subtitle-1 text-muted mb-0">GameMaker & Firebase Developer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/rare-item-fortune-shroom.png"
                   width="85" height="85"
                   class="img-fluid" alt="Fortune Shroom Icon">
              <h2>Giancarlos Garza</h2>
              <p class="subtitle-1 text-muted mb-0">Web Developer & Assets Designer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/common-item-torch.png"
                   width="85" height="85"
                   class="img-fluid" alt="Mimic Icon">
              <h2>Alejandro Avila</h2>
              <p class="subtitle-1 text-muted mb-0">Items Gameplay</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/rare-item-random.png"
                   width="85" height="85"
                   class="img-fluid" alt="Random Icon">
              <h2>Juan Lopez</h2>
              <p class="subtitle-1 text-muted mb-0">GameMaker Gameplay</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <img src="@/assets/images/icons/common-item-water-drop.png"
                   width="85" height="85"
                   class="img-fluid" alt="Water Drop Icon">
              <h2>Misael Islas</h2>
              <p class="subtitle-1 text-muted mb-0">GameMaker Gameplay</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="section sc-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h1 class="font-press-start mb-1">Technologies</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container my-5">
      <div class="row">
        <!-- DEVELOPERS -->
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <h2>GameMaker</h2>
              <p class="subtitle-1 text-muted mb-0">Game Engine</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <h2>Firebase</h2>
              <p class="subtitle-1 text-muted mb-0">Multiplayer</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card card-outline is-interactive">
            <div class="card-body">
              <h2>Nuxt3</h2>
              <p class="subtitle-1 text-muted mb-0">Website</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Team',
  meta: [
    {name: 'description', content: 'Team of Thirsty Roots: The Game'}
  ]
})
</script>
