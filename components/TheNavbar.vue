<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <NuxtLink to="/"
                  class="navbar-brand">ThirstyRoots
        </NuxtLink>
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <NuxtLink to="/"
                        class="nav-link" aria-current="page">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/team"
                        class="nav-link">
                Team
              </NuxtLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li v-if="$route.name === 'play'"
                class="nav-item">
              <button class="btn btn-default me-3"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#tutorialModal">
                How to play
              </button>
            </li>
            <li class="nav-item">
              <NuxtLink to="/play"
                        class="btn btn-primary">
                PLAY NOW
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <TutorialModal/>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>
