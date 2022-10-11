<template>
  <div class="container">
    <!--Animated title-->
    <div class="animate-div">
      <p class="animate__animated animate__slideInDown">Contáctanos</p>
    </div>
    <div class="general-text" style="text-align: center">
      ¿Necesitas más información?<br />
      ¿Solicitar un presupuesto o conocer más sobre nuestros servicios? <br />
      Por favor, déjanos tu mensaje y datos de contacto, nos comunicaremos
      contigo en la brevedad. <br />
      ¡Muchas gracias!
    </div>
    <!-- Form Code -->
    <form @submit.prevent="myValidation" class="my-5">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Nombre(s)</label>
          <input
            type="text"
            class="form-control"
            required
            v-model="firstName"
          />
          <div v-if="firstNameError" class="error">{{ firstNameError }}</div>
        </div>
        <div class="col-md-6 mb-3">
          <label>Apellidos</label>
          <input type="text" class="form-control" required v-model="lastName" />
          <div v-if="lastNameError" class="error">{{ lastNameError }}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label>Correo electrónico</label>
          <input
            type="text"
            class="form-control"
            placeholder="name@example.com"
            required
            v-model="email"
          />
          <div v-if="emailError" class="error">{{ emailError }}</div>
        </div>
        <div class="col-md-6 mb-3">
          <label>Teléfono</label>
          <input
            type="tel"
            class="form-control"
            required
            v-model="phoneNumber"
          />
          <div v-if="phoneNumberError" class="error">
            {{ phoneNumberError }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Mensaje</label>
        <textarea
          class="form-control"
          rows="3"
          required
          v-model="message"
        ></textarea>
      </div>
      <div style="text-align: center">
        <button class="btn btn-secondary" type="submit">Enviar</button>
      </div>
    </form>
    <!-- End Form Code -->
  </div>
</template>

<script>
export default {
  name: "ContactoPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      // Errors
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneNumberError: "",
      messageError: "",
    };
  },
  methods: {
    myValidation() {
      //First/Last name regular expression validator
      //Orlando, orlando, ORLANDO, orlando glez, Ana Sofia, Orlando González, McMiller, John D'Largy, John Doe-Smith
      var regName = /^[a-zA-z ,'.áéíóú-]+$/;
      this.firstNameError = regName.test(this.firstName)
        ? ""
        : "Nombre(s) no válido";
      this.lastNameError = regName.test(this.lastName)
        ? ""
        : "Apellido(s) no válido";
      //Email regular expression validator
      /* eslint-disable */
      var regEmail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      this.emailError = regEmail.test(this.email) ? "" : "Correo no válido";
      //Phone number regular expression validator
      var regPhone = /^\d{10}$/;
      this.phoneNumberError = regPhone.test(this.phoneNumber)
        ? ""
        : "No es un número de 10 dígitos";
      console.log(this.firstNameError);
      // true || true == true
      // true || false == true
      // false || true == true
      // false || false == false
      if (
        !(
          this.firstNameError ||
          this.lastNameError ||
          this.emailError ||
          this.phoneNumberError ||
          this.messageError
        )
      )
        alert(
          "TODOS LOS DATOS SON CORRECTOS\nNombre(s): " +
            this.firstName +
            "\nApellido(s): " +
            this.lastName +
            "\nCorreo: " +
            this.email +
            "\nNúmero: " +
            this.phoneNumber +
            "\nMensaje: " +
            this.message
        );
    },
  },
};
</script>

<style>
</style>