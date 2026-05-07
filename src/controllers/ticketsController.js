import * as ticketsService from '../services/ticketsService.js'

export const getTickets = async(req,res) => {
    try{
        const tickets = await ticketsService.getAllTickets();
        res.status(201).json(tickets)
    }catch(error){
        res.status(500).json({error: 'Error al obtener los tickets'})
    }
}

export const getTicket = async(req, res) => {
    const {id} = req.params;
    try{
        const ticket = await ticketsService.getTicket(id);
        if(!ticket){
            return res.status(404).json({error: 'Ticket no encontrado'})
        }
        res.status(201).json(ticket)
    }catch(error){
        res.status(500).json({error:'Error al obtener el ticket'})
    }
}

export const createTicket = async(req,res) => {
    const ticketData = req.body;
    try{
        const createdTicket = await ticketsService.createTicket(ticketData)
        res.status(201).json(createdTicket); 
    }catch(error){
        res.status(500).json({error:'Error al crear el ticket'})
    }
}

export const updateTicket = async(req,res) => {
    const {id} = req.params;
    const updates = req.body;

    try{
        const updated = await ticketsService.updateTicket(id, updates);
        res.status(201).json(updated);
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const cancelTicket = async(req,res) => {
    const {id} = req.params
    try{
        const cancelledTicket = await ticketsService.cancelTicket(id);
        res.status(201).json(cancelledTicket)
    }catch(error){
        res.status(500).json({error:'Error al cancelar el ticket'})
    }
}