const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const dashboardRouter = require("./routes/dashboard");
const Usuario = require("./models/Usuario");


mongoose.connect('mongodb://localhost/login');

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use("/api", authRouter);
app.use("/api", dashboardRouter);

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

// Ruta para crear un nuevo usuario
app.post("/api/usuarios", async (req, res) => {
  const { nombre, email, password } = req.body;
  const usuario = new Usuario({ nombre, email, password });
  await usuario.save();
  res.send({ message: "Usuario creado con éxito" });
});

// Ruta para obtener todos los usuarios
app.get("/api/usuarios", async (req, res) => {
  const usuarios = await Usuario.find();
  res.send(usuarios);
});

// Ruta para obtener un usuario por ID
app.get("/api/usuarios/:id", async (req, res) => {
  const id = req.params.id;
  const usuario = await Usuario.findById(id);
  res.send(usuario);
});

// Ruta para actualizar un usuario
app.put("/api/usuarios/:id", async (req, res) => {
  const id = req.params.id;
  const { nombre, email, password } = req.body;
  const usuario = await Usuario.findByIdAndUpdate(id, { nombre, email, password });
  res.send({ message: "Usuario actualizado con éxito" });
});

// Ruta para eliminar un usuario
app.delete("/api/usuarios/:id", async (req, res) => {
  const id = req.params.id;
  await Usuario.findByIdAndRemove(id);
  res.send({ message: "Usuario eliminado con éxito" });
});