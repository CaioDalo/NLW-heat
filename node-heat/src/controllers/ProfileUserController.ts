import {request, Request, response, Response} from 'express';
import { ProfileUserService } from '../services/ProfileUserService';


class ProfileUserController {
    async handle(req: Request, res: Response) {
        const { user_id } = request

        const service = new ProfileUserService()

        const result = await service.execute(user_id)

        return response.json(result)
    }
}

export { ProfileUserController }