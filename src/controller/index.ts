import { Request, Response } from 'express';

class IndexController {

    constructor() {
    }

    home(_req: Request, res: Response): void {
        res.status(200).send("Hello from API");
    }

    test(_req: Request, res: Response): void {
        res.status(200).json({
            code: 0,
            message: "It works!"
        });
    }

    create(req: Request, res: Response): void {
        const data = req.body as Record<string, unknown>;
        console.log('Data:', data);
        res.status(201).json({ code: 0, data });
    }

    update(req: Request, res: Response): void {
        const { name } = req.params;
        res.status(200).json({
            name
        });
    }
}

export default new IndexController();
