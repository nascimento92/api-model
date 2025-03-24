import { TokenManagement } from "../../../shared/utils/utils.tokenManagement";

class LoginService {
  private managementToken: TokenManagement;

  constructor() {
    this.managementToken = new TokenManagement();
  }

  async login(email: string, password: string) {
    try {
    } catch (error) {
      console.error(error);
      return {
        statuscode: 500,
        message: error,
      };
    }
  }

  
}

export const loginService = new LoginService();
