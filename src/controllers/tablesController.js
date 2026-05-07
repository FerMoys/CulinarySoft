import * as tablesService from '../services/tablesService.js'

export const getTables = async(req,res) => {
    try{
        const tables = await tablesService.getAllTables()
        res.status(200).json(tables)
    }catch(error){
        res.status(500).json({error: 'Error al obtener las mesas'})
    }
}

export const getTable = async(req,res) => {
    const{id} = req.params;
    try{
        const table = await tablesService.getTable(id);
        res.status(200).json(table)
    }catch(error){
        res.status(500).json({error: error.message})
    }
    
}

export const updateTable = async(req,res) => {
    const {id} = req.params;
    const updates = req.body;

    try{
        const updated = await tablesService.updateTable(id, updates);
        res.status(201).json(updated);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const createTable = async(req,res) => {
    const tableData = req.body
    try{
        const createdTable = await tablesService.createTable(tableData)
        res.status(201).json(createdTable)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const cancelTable = async(req,res) => {
    const {id} = req.params
    try{
        const cancelledTable = await tablesService.cancelTable(id);
        res.status(201).json(cancelledTable)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}