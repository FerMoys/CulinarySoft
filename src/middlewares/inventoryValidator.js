export const validateProduct = (productData) => {
    const {name, stock, unit, minimum_stock} = productData;

    if(!name){
        throw new Error('Nombre obligatorio');
    }
    if(stock == null){
        throw new Error('Stock obligatorio');
    }
    if(stock<0){
        throw new Error('Stock inválido');
    }
    if(!unit){
        throw new Error('Unidad obligatoria');
    }
    if(minimum_stock == null){
        throw new Error('Stock mínimo obligatorio;')
    }
    if(minimum_stock < 0){
        throw new Error('Stock mínimo inválido');
    }
}