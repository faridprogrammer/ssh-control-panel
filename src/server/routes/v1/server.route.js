import express from "express";
import db from "../../services/database.js";

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const servers = await db.prisma.server.findMany();
    res.status(200).json(servers);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while getting the servers");
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const server = await db.prisma.server.findUnique({
      where: { id: Number(id) },
    });

    if (!server) {
      return res.status(404).send("Server not found");
    }

    res.status(200).json(server);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while getting the Server");
  }
});

router.post("/create", async (req, res) => {
  const { title, userName, password, ip, port } = req.body;

  try {
    const contact = await db.prisma.server.create({
      data: { title, userName, password, ip, port },
    });

    res.status(201).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while creating the Server");
  }
});

router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;

  try {
    const contact = await db.prisma.contact.update({
      where: { id: Number(id) },
      data: { firstName, lastName, email },
    });

    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while updating the contact");
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await db.prisma.contact.delete({
      where: { id: Number(id) },
    });

    res.status(200).json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while deleting the contact");
  }
});

export default router;