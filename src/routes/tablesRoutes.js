import {Router} from 'express';
import {getTable, getTables, createTable, updateTable, cancelTable} from '../controllers/tablesController.js'
import {validateTableCapacity} from '../middlewares/generalValidator.js'

const router = Router()

router.get('/:id', getTable)
router.get('/', getTables)

router.post('/',validateTableCapacity, createTable)

router.patch('/:id', updateTable)
router.patch('/:id/cancel', cancelTable)

export default router;