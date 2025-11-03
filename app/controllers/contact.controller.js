const ContactService = require("../services/contact.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res) => {
  const service = new ContactService(await MongoDB.connect());
  const result = await service.create(req.body);
  return res.send(result);
};

exports.findAll = async (req, res) => {
  const service = new ContactService(await MongoDB.connect());
  return res.send(await service.find());
};

exports.findOne = async (req, res) => {
  const service = new ContactService(await MongoDB.connect());
  return res.send(await service.findById(req.params.id));
};

exports.update = async (req, res) => {
  const service = new ContactService(await MongoDB.connect());
  return res.send(await service.update(req.params.id, req.body));
};

exports.delete = async (req, res) => {
  const service = new ContactService(await MongoDB.connect());
  return res.send(await service.delete(req.params.id));
};
