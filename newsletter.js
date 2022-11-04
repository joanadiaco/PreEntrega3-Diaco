class Email {
    constructor(correo) {
        this.correo = correo;
    }
}

arrayEmails = [];



const formularioNews = document.getElementById("newsForm");

formularioNews.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("correo");
    console.log("El email ingresado es: " + correo.value);
    console.log("Email registrado!");

    const cliente = new Email(correo.value);
    arrayEmails.push(correo);
    console.log(arrayEmails);


    formularioNews.reset();
})

const clienteJSON = JSON.stringify(correo);
console.log(clienteJSON, typeof clienteJSON);

localStorage.setItem("correo", clienteJSON);