import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.render("pages/page");
};
export const dogs = (req: Request, res: Response) => {
  res.send("racas de cachorros");
};
export const cats = (req: Request, res: Response) => {
  res.send("racas de gatos");
};
export const fishes = (req: Request, res: Response) => {
  res.send("racas de peixes");
};
