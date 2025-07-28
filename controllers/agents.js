const agentsRepository = require('../repositories/agents.js');

const getAll = () => { return agentsRepository.getAllAgents(); }

const getAgent = (id) => { return agentsRepository.getAgent(id); }

const postAgent = (obj) => { return agentsRepository.postAgent(obj); }

const putAgent = (id, obj) => { return agentsRepository.putAgent(id, obj); }

const patchAgent = (id, obj) => { return agentsRepository.patchAgent(id, obj); }

const deleteAgent = (id) => { return agentsRepository.deleteCase(id, obj); }


module.exports = {
    getAll,
    getAgent,
    postAgent,
    putAgent,
    patchAgent,
    deleteAgent
};