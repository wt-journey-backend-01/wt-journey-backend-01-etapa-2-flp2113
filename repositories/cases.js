const z = require('zod');
const { uuid } = require('uuidv4');

const Case = z.object({
    id: z.uuidv4(),
    titulo: z.string(),
    descricao: z.string(),
    status: z.boolean(),
    agente_id: z.uuidv4()
});

const cases = [];

const getAllCases = () => cases;

const getCase = (id) => cases.filter((obj) => obj.id === id); 

const postCase = (obj) => {
    const result = Case.safeParse(obj);
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    cases.push({ id: uuid(), ...result.data });
    return true;
}

const putCase = (id, obj) => {
    const index = cases.findIndex(obj => obj.id === id);
    if (index === -1) {
        console.error(`Case with id ${id} not found.`);
        return false;
    }

    const result = Case.safeParse(obj);
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    cases[index] = obj;
}

const patchCase = (id, partialObj) => {
    const index = cases.findIndex(obj => obj.id === id);
    if (index === -1) {
        console.error(`Case with id ${id} not found.`);
        return false;
    }

    const updatedObj = { ...cases[index], ...partialObj };
    const result = Case.safeParse(updatedObj);
    if (!result.success) {
        console.error(result.error); 
        return false;
    }

    cases[index] = result.data;
}

const deleteCase = (id) => {
    const newCases = cases.filter((obj) => obj.id !== id);
    if (cases.length === newCases.length) {
        console.error(`Case with id ${id} not found.`);
        return false;
    }

    cases = newCases;
    return true;
}

module.exports = { 
    getAllCases, 
    getCase, 
    postCase, 
    patchCase 
};