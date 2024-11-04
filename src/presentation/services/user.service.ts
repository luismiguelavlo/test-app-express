import { CreateUserDTO, LoginUserDTO } from "../../domain";

export class UserService {
  signup = async (createUserDTO: CreateUserDTO) => {
    return {
      message: "se ha registrado correctamente",
    };
  };

  login = async (loginUserDTO: LoginUserDTO) => {
    return {
      message: "se ha logueado perfectamente",
    };
  };
}
