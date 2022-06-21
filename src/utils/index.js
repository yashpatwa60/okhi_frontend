const TOKEN_KEY = 'token'

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY)
}