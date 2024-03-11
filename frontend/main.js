import "core-js/stable";
import "regenerator-runtime/runtime";
import "./assets/css/style.css";

import Login from "./modules/Login";
import Cadastro from "./modules/createContact";

const login = new Login(".form-login");
const cadastro = new Login(".form-cadastro");
const criaContato = new Cadastro(".form-cadastro");
login.init();
cadastro.init();
criaContato.init();
