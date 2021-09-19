//Define a utilização do model cliente e a dependência HTTP-STATUS
const ccont = require('../models/ccont.js');
const status = require('http-status');

//Cria o método insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const cliente = req.body.cliente;
    const l_cont = req.body.l_cont;
    const n_cont = req.body.n_cont;
    const tipo = req.body.tipo;
    const sts = req.body.sts;
    const categ = req.body.categ;

    ccont.create({
        cliente: cliente,
        l_cont: l_cont,
        n_cont: n_cont,
        tipo: tipo,
        sts: sts,
        categ: categ,
    })
    .then (ccont => {
        if (ccont) {
            res.status(status.OK).send(ccont);
        }   else {
            res.status(status.NOT_FOUND).send();
        }
    })
    .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    ccont.findAll()
        .then(ccont => {
            if (ccont) {
                res.status(status.OK).send(ccont);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    ccont.findByPk(id)
        .then(ccont => {
            if (ccont) {
                res.status(status.OK).send(ccont);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const cliente = req.body.cliente;
    const l_cont = req.body.l_cont;
    const n_cont = req.body.n_cont;
    const tipo = req.body.tipo;
    const sts = req.body.sts;
    const categ = req.body.categ;

    ccont.findByPk(id)
        .then(ccont => {
            if (ccont) {
                ccont.update({
                    client: cliente,
                    l_cont: l_cont,
                    n_cont: n_cont,
                    tipo: tipo,
                    sts: sts,
                    categ: categ
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    ccont.findByPk(id)
        .then(ccont => {
            if (ccont) {
                ccont.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};


