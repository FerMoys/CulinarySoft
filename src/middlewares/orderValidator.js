export const validateOrderData = (req, res, next) => {
    const { state_id, type_id } = req.body;
    if (!state_id || !type_id) {
        return res.status(400).json({ error: 'state_id y type_id son obligatorios.' });
    }
    next();
};

export const validatePositiveAmount = (req, res, next) => {
    const amount = req.body.amount
    if (!amount || amount <= 0) {
        return res.status(400).json({ error: 'La cantidad debe ser un número mayor a cero.' });
    }
    next();
};