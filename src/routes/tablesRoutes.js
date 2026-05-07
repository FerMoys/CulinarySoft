import {Router} from 'express';
import {getTable, getTables, createTable, updateTable, cancelTable} from '../controllers/tablesController.js'

const router = Router()

router.get('/:id', getTable)
router.get('/', getTables)

router.post('/', createTable)

router.patch('/:id', updateTable)
router.patch('/:id/cancel', cancelTable)

export default router;