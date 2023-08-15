import express from 'express';
import {addStudent,getStudents, deleteStudent, updateStudent} from '../controllers/student';
//add routers from controllers
const router = express.Router();
router.post('/add-student',addStudent)
router.get('/get-students', getStudents);
router.post('/update-student', updateStudent);
router.post('/remove-student', deleteStudent);

export default router;