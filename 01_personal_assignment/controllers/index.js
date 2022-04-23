displayName = (req, res) => {
  const data = 'Citlalli Gonzalez';
  res.status(200).send(data);
};

module.exports = {
  displayName,
};
