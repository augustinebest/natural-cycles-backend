import { Response } from "express";

const HttpSuccess = (
  res: Response,
  message: string,
  data: any,
  status: number
) => {
  return res.status(status).json({ message, data, status });
};

const HttpFailure = (res: Response, message: string, status: number) => {
  return res.status(status || 500).json({ message, status });
};

export { HttpSuccess, HttpFailure };
