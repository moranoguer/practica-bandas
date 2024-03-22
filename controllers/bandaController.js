const bandas = require("../db/index");

const bandaController = {
    index: function (req, res) {
        let lista = bandas.lista;
        let resultado = [];

        for (let i = 0; i < lista.length; i++) {
            let banda = lista[i];
            resultado.push(banda)
            
        }
        
        return res.render("listadoBandas", {lista: resultado})
    },

    detalle: function (req, res) {
        let lista = bandas.lista;
        let id = req.params.id;
        if (id > lista.length) {
            return res.send("El id ingresado no forma parte de la lista de bandas")
        } else {
            let bandaElegida = lista[id-1]
            return res.render("detalleBanda", {elegida: bandaElegida})
        }
    },
    
    genero: function (req, res) {
        let lista = bandas.lista;
        let genero = req.params.genero.toLowerCase()
        let resultado = []

        for (let i = 0; i < lista.length; i++) {
            let nombre = lista[i].nombre;
            if (lista[i].genero.toLowerCase() == genero) {
               resultado.push(nombre) 
            }
        }

        if (resultado.length == 0) {
            return res.send("No hay bandas de ese género")
        } else {
            return res.render("porGenero", {lista: resultado})
        }
    }
}


module.exports = bandaController