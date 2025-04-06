import {Injectable, CanActivate, ExecutionContext} from "@nestjs/common";

@Injectable()
//Ставим сессию чтобы после одного запроса на сайт наш токен не удалялся
export class AuthenticatedGuard implements CanActivate {
async canActivate(context: ExecutionContext){
    const request = context.switchToHttp().getRequest()

    return request.isAuthenticated()
}
}