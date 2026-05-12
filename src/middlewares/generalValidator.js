export const validateTableCapacity = (req, res, next) => {
    const { capacity } = req.body;
    if (capacity && (capacity <= 0 || capacity > 20)) { // Ejemplo: máximo 20 personas
        return res.status(400).json({ error: 'Capacidad de mesa inválida (rango 1-20).' });
    }
    next();
};