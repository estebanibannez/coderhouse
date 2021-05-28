exports.getVisitas = (req, res) => {
  try {
    return res.json({ visitas: Contadores});
  } catch (error) {
    return res.json({
      status: `Ocurrio un error ${error}`,
    });
  }
};
