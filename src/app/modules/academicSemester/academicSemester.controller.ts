import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};
const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const updateOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.updateOneIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};
const deleteOneIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.deleteOneIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  updateOneIntoDB,
  getOneFromDB,
  deleteOneIntoDB
};
