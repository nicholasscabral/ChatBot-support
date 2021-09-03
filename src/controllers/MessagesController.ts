import { Request, Response } from "express";
import { MessageService } from "../services/MessagesService";

class MessageController {
  async create(req: Request, res: Response) {
    const messagesService = new MessageService();
  }
}

export { MessageController };
