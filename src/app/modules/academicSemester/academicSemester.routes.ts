import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/',

  AcademicSemesterController.insertIntoDB
);
router.get(
  '/',

  AcademicSemesterController.getAllFromDB
);
router.get('/:id', AcademicSemesterController.getOneFromDB);
router.patch('/:id', AcademicSemesterController.updateOneIntoDB);
router.delete('/:id', AcademicSemesterController.deleteOneIntoDB);
export const AcademicSemesterRoutes = router;
