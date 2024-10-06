const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt-nodejs");
const Usuario = require("../models/Usuario");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).send({ message: "Usuario no encontrado" });
    }
    if (usuario.password !== password) {
      return res.status(401).send({ message: "Contraseña incorrecta" });
    }
    res.send({ message: "Autenticación exitosa" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al autenticar usuario" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const usuario = new Usuario({ nombre, email, password });
    await usuario.save();
    res.send({ message: "Usuario creado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al crear usuario" });
  }
});

module.exports = router;