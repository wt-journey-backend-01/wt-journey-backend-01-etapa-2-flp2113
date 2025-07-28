const express = require('express');
const casesController = require('../controllers/cases.js');
const { ReasonPhrases, StatusCodes, getReasonPhrase } = require('http-status-codes');

const casesRouter = express.Router();

casesRouter.route('/casos')
    .get((_, res) => {
        res.status(StatusCodes.OK)
           .send(casesController.getAll());
    })
    .post((req, res) => {
        if (!casesController.postCase(req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });

        res.status(StatusCodes.CREATED)
           .send(getReasonPhrase(StatusCodes.CREATED));
    });

casesRouter.route('/casos/:id')
    .get((req, res) => {
        res.status(StatusCodes.OK)
           .send(casesController.getCase(req.params.id));
    })
    .put((req, res) => {
        if (!casesController.putCase(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
        
        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.CREATED));
    })
    .patch((req, res) => {
        if (!casesController.patchCase(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
        
        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.OK));
    })
    .delete((req, res) => {
        if (!casesController.deleteCase(req.params.id, req.body))
            res.status(StatusCodes.INTERNAL_SERVER_ERROR)
               .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });

        res.status(StatusCodes.OK)
            .send(getReasonPhrase(StatusCodes.OK));
    });

module.exports = casesRouter;