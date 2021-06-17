const socket = io();

socket.on("connect", () => {
  console.log("cliente conectado ");

  socket.on("productos", function (productos) {
    //console.log(productos);
    document.getElementById("datos").innerHTML = data2TableJS(productos);
  });

  //recibo los mensajes del servidor
  socket.on("messages", (mensajes) => {
    debugger
    renderMessages(mensajes);
  });
});

/* obtengo el formulario */
const form = document.querySelector("formulario");

function send(e, form) {
  debugger;
  e.preventDefault();
  const data = {
    title: form[0].value,
    price: form[1].value,
    thumbnail: form[2].value,
  };
  // const data = new FormData(document.getElementById("formulario"));

  fetch("/api/productos/guardar", {
    headers: {
      "content-type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((productos) => {
      console.log("respuesta", productos);
      form.reset();
      socket.emit("update", "ok");
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

socket.on("disconnect", () => {
  console.log("cliente desconectado");
});

//se pasa por parametro el arreglo de productos que viene del server
function data2TableJS(productos) {
  const plantilla = `
  <style>
      .table td,
      .table th {
          vertical-align: middle;
      }
  </style>

  {{#if productos.length}}
  <div class="table-responsive">
      <table class="table table-dark">
          <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Foto</th>
          </tr>
          {{#each productos}}
          <tr>
              <td>{{this.title}}</td>
              <td>$ {{ this.price }}</td>
              <td><img width="50" src={{this.thumbnail}} alt="not found"></td>
          </tr>
          {{/each}}
      </table>
  </div>
  {{/if}}
`;
  console.log(productos);
  var template = Handlebars.compile(plantilla);
  let html = template({ productos: productos, hayProductos: productos.length });
  return html;
}


//=============================== MENSAJES ============================//
//funcion que renderiza los mensajes
function renderMessages(data) {
  let html = data
    .map((elem) => {
      return `<div></div>
              <strong style="color:#148DFF"> ${elem.email}</strong>
              <strong style="color:#591D03">[ ${elem.date} ] </strong>
              <span class="badge badge-success"> <i>${elem.message}</i></span>
            
              </div>`;
    })
    .join(" ");

  document.querySelector("#messages").innerHTML = html;
}
//agrega mensajes
function addMessage(e) {
  let message = {
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value,
  };

  socket.emit("new-message", message);
  return false;
}
//=============================== MENSAJES ============================//