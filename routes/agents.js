const express = require('express');
const agentsController = require('../controllers/agents.js');
const { ReasonPhrases, StatusCodes, getReasonPhrase } = require('http-status-codes');

const agentsRouter = express.Router();

agentsRouter.route('/agentes')
    .get((_, res) => {
        res.status(StatusCodes.OK)
           .send(agentsController.getAll());
    })
    .post((req, res) => {
        if (!agentsController.postAgent(req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });

        res.status(StatusCodes.CREATED)
           .send(getReasonPhrase(StatusCodes.CREATED));
    });

agentsRouter.route('/agentes/:id')
    .get((req, res) => {
        res.status(StatusCodes.OK)
           .send(agentsController.getAgent(req.params.id));
    })
    .put((req, res) => {
        if (!agentsController.putAgent(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
        
        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.CREATED));
    })
    .patch((req, res) => {
        if (!agentsController.patchAgent(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
        
        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.OK));
    })
    .delete((req, res) => {
        if (!agentsController.deleteAgent(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });

        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.OK));
    });

module.exports = agentsRouter;