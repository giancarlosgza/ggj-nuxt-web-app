<template>
  <div>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container">
        <NuxtLink to="/"
                  class="navbar-brand">Thirsty Roots
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
                Dashboard
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/components"
                        class="nav-link">
                Rooms
              </NuxtLink>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <div class="dropdown">
                <button class="btn btn-default dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                  Username
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <button class="dropdown-item">Action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Another action</button>
                  </li>
                  <li>
                    <button class="dropdown-item">Something else here</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TheNavbar"
}
</script>
