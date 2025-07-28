const z = require('zod');
const { uuid } = require('uuidv4');

const Agent = z.object({
    id: z.uuidv4(),
    nome: z.string(),
    dataDeIncorporacao: z.string(),
    cargo: z.string(),
});

const agents = [];

const getAllAgents = () => agents;

const getAgent = (id) => agents.filter((obj) => obj.id === id); 

const postAgent = (obj) => {
    const result = Agent.safeParse(obj);
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    agents.push({ id: uuid(), ...result.data });
    return true;
}

const putAgent = (id, obj) => {
    const index = agents.findIndex(obj => obj.id === id);
    if (index === -1) {
        console.error(`Agent with id ${id} not found.`);
        return false;
    }

    const result = Agent.safeParse(obj);
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    agents[index] = obj;
}

const patchAgent = (id, partialObj) => {
    const index = agents.findIndex(obj => obj.id === id);
    if (index === -1) {
        console.error(`Agent with id ${id} not found.`);
        return false;
    }

    const result = Agent.safeParse({ ...agents[index], ...partialObj });
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    agents[index] = result.data;
    return true;
}

const deleteAgent = (id) => {
    const newAgents = agents.filter((obj) => obj.id !== id);
    if (Agents.length === newAgents.length) {
        console.error(`Agent with id ${id} not found.`);
        return false;
    }

    agents = newAgents;
    return true;
}

module.exports = { 
    getAllAgents, 
    getAgent, 
    postAgent, 
    patchAgent 
};