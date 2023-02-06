<template>
  <div>
    <div v-if="playerName"
         class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <GameCanvas :player-name="playerName"/>
        </div>
      </div>
    </div>

    <div v-else
         class="section sc-header">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-4 text-center">
            <h1 class="font-press-start mb-5">Choose your name</h1>

            <form action=""
                  @submit.prevent='onSubmit'
                  class="">
              <input type="text"
                     v-model="form.selectedName"
                     placeholder="Choose your player name"
                     class="form-control form-game mb-3">
              <input type="text"
                     v-model="form.selectedRoomId"
                     placeholder="Type or paste the game room id"
                     class="form-control form-game mb-3">
              <button class="btn btn-primary"
                      type="submit">Play
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Play Now!'
    }
  },
  data() {
    return {
      form: {
        selectedName: '',
        selectedRoomId: ''
      },
      playerName: '',
      roomId: ''
    }
  },
  methods: {
    onSubmit() {
      this.playerName = this.form.selectedName
      this.roomId = this.form.selectedRoomId
    }
  }
}
</script>
