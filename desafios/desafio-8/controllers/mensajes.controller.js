// const fs = require("fs");
// const path = require("path");

// class Message {
//   messages = [];
//   constructor() {
//     this.messages = [];
//   }

//   checkMessages = async (req, res) => {
//     //leo el archivo mensajes
//     let msg = JSON.parse(this.readMessage());
//     this.messages.push(msg);
//     console.log(this.messages);
//     return this.messages;
//   };

//   listMessages = (req, res) => {
//     let msg = JSON.parse(this.readMessage());
//     console.log(msg);
//     return this.messages;
//   };
//   saveMessage = (req, res) => {
//     console.log(req.body);

//     // let date = new Date().toLocaleTimeString();
//     // const { email, message } = req.body;

//     // mensajes.push({
//     //   email: email,
//     //   message: message,
//     //   date: date,
//     // });
//   };

//   readMessage = (req, res) => {
//     const data = fs.readFile(
//       path.resolve(__dirname, "../data/mensajes.txt"),
//       "utf-8",
//       (error, archivo) => {
//         if (error) {
//           console.log(`Ocurrió un error ${error}`);
//         } else {
//           if (archivo.length > 0) {
//             console.log("existe archivo", archivo);
//             return archivo;
//           } else {
//             return [];
//           }
//         }
//       },
//     );
//     return data;
//   };
// }
// module.exports = new Message();
