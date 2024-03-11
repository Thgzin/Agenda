import validator from "validator";

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const emailInput = el.querySelector('input[name="email"]');
    const passwordInput = el.querySelector('input[name="password"]');
    let error = false;

    const isRegistrationForm = el.classList.contains("form-cadastro");

    if (!validator.isEmail(emailInput.value)) {
      let errorEmail;
      if (isRegistrationForm) {
        errorEmail = document.querySelector("#errorEmail");
      } else {
        errorEmail = document.querySelector("#errorLoginEmail");
      }

      emailInput.classList.add("error");
      errorEmail.innerHTML = "Email Inválido";
      error = true;
    } else {
      let errorEmail;
      if (isRegistrationForm) {
        errorEmail = document.querySelector("#errorEmail");
      } else {
        errorEmail = document.querySelector("#errorLoginEmail");
      }

      emailInput.classList.remove("error");
      errorEmail.innerHTML = "";
      emailInput.classList.add("good");
    }

    if (passwordInput.value.length < 3 || passwordInput.value.length > 15) {
      let errorPassword;
      if (isRegistrationForm) {
        errorPassword = document.querySelector("#errorPassword");
      } else {
        errorPassword = document.querySelector("#errorLoginPassword");
      }

      passwordInput.classList.add("error");
      errorPassword.innerHTML = "Senha inválida";
      error = true;
    } else {
      let errorPassword;
      if (isRegistrationForm) {
        errorPassword = document.querySelector("#errorPassword");
      } else {
        errorPassword = document.querySelector("#errorLoginPassword");
      }

      passwordInput.classList.remove("error");
      errorPassword.innerHTML = "";
      passwordInput.classList.add("good");
    }

    if (!error) el.submit();
  }
}
