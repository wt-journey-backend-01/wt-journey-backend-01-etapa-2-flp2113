const casesController = require('../repositories/cases.js');

const getAll = () => { return casesController.getAllCases(); }

const getCase = (id) => { return casesController.getCase(id); }

const postCase = (obj) => { return casesController.postCase(obj); }

const putCase = (id, obj) => { return casesController.putCase(id, obj); }

const patchCase = (id, obj) => { return casesController.patchCase(id, obj); }

const deleteCase = (id) => { return casesController.deleteCase(id, obj); }
