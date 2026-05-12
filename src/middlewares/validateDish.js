export const validateDish = (req, res, next) => {
    const { name, price, category_id} = req.body;

    if(!name){
        return res.status(400).json({
            error: 'El nombre es obligatorio'
        })
    }
     if(price == null){
        return res.status(400).json({
            error: 'El precio es obligatorio'
        })
    }
     if(price<0){
        return res.status(400).json({
            error: 'El precio no puede ser negativo'
        })
    }
    if(!category_id){
        return res.status(400).json({
            error:'La categoría es obligatoria'
        })
    }
    next()
}