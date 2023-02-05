<template>
  <div>
    <!-- Modal -->
    <div class="modal fade"
         id="tutorialModal"
         tabindex="-1"
         aria-labelledby="tutorialModalLabel"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5"
                id="tutorialModalLabel">How to play?</h1>
            <button type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="card card-outline mb-3">
              <div class="card-body d-flex">
                <img src="@/assets/images/icons/pixel-arrow.png"
                     class="img-fluid img-left me-2"
                     title="Pixel Arrow icon by Icons8"
                     alt="Pixel Arrow icon by Icons8">
                <p class="subtitle-1 align-self-center mb-0">Move to left</p>
              </div>
            </div>

            <div class="card card-outline mb-3">
              <div class="card-body d-flex">
                <img src="@/assets/images/icons/pixel-arrow.png"
                     class="img-fluid img-top me-2"
                     title="Pixel Arrow icon by Icons8"
                     alt="Pixel Arrow icon by Icons8">
                <p class="subtitle-1 align-self-center mb-0">Move to top</p>
              </div>
            </div>

            <div class="card card-outline mb-3">
              <div class="card-body d-flex">
                <img src="@/assets/images/icons/pixel-arrow.png"
                     class="img-fluid img-right me-2"
                     title="Pixel Arrow icon by Icons8"
                     alt="Pixel Arrow icon by Icons8">
                <p class="subtitle-1 align-self-center mb-0">Move to right</p>
              </div>
            </div>

            <div class="card card-outline mb-3">
              <div class="card-body d-flex">
                <img src="@/assets/images/icons/pixel-arrow.png"
                     class="img-fluid img-bottom me-2"
                     title="Pixel Arrow icon by Icons8"
                     alt="Pixel Arrow icon by Icons8">
                <p class="subtitle-1 align-self-center mb-0">Move to bottom</p>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal">Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TutorialModal"
}
</script>
