<template>
  <div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Color 1:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.color1"
          type="text"
          required
          placeholder="Color 1"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Color 2:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.color2"
          required
          placeholder="Color 2"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'TextInputForm',
  data() {
    return {
      form: {
        color1: '',
        color2: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.color1 = ''
      this.form.color2 = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>
