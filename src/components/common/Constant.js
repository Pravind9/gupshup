class Constant {
    static BACKEND_BASE_PATH = "http://localhost:3003";
    static BACKEND_LOGOUT_PATH = "/api/user/logout";
    static BACKEND_REGISTER_PATH = "/api/user/register";
    static BACKEND_LOGIN_PATH = "/api/user/login";
    static FRONTEND_BASE_PATH = "http://localhost:3000";
    static FRONTEND_CONTEXT_ROOT = "/chat";

    static getBackendLogoutUri() {
        return this.BACKEND_BASE_PATH + this.BACKEND_LOGOUT_PATH;
    }

    static getBackendRegisterPath() {
        return this.BACKEND_BASE_PATH + this.BACKEND_REGISTER_PATH;
    }

    static getBackendLoginUri() {
        return this.BACKEND_BASE_PATH + this.BACKEND_LOGIN_PATH;
    }

    static getFrontEndContextPath(){
        return this.FRONTEND_BASE_PATH + this.FRONTEND_CONTEXT_ROOT;
    }
}

export default Constant;
