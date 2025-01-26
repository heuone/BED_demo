import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/itemService";


export const getAllItems = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
   try{
    const items = await itemService.getAllItems();
    res.status(200).json({message: "Items retreived", data: items});
   } catch (error: any) {
    next(error);
   }
};

export const createItem = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
        try {
            const newItem = await itemService.createItem(req.body);
            res.status(201).json({ message: "Item created", date: newItem});
        } catch (error: any) {
            next(error);
    } 
};

export const updateItem = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
        try {
            const newItem = await itemService.updateItem(req.params.id, req.body);
            res.status(201).json({ message: "Item updated", date: newItem});
        } catch (error: any) {
            next(error);
    } 
};

export const deleteItem = async (req: Request,res: Response,next: NextFunction): Promise<void> => {
        try {
            const newItem = await itemService.deleteItem(req.params.id);
            res.status(201).json({ message: "Item deleted", date: newItem});
        } catch (error: any) {
            next(error);
    } 
};