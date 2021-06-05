export function checkLogin() {
    if (localStorage.p === undefined) {
        return false
    }
    if (localStorage.s === undefined) {
        return false
    }
    if (localStorage.t_s === undefined) {
        return false
    }
    if (localStorage.t_t === undefined) {
        return false
    }
    return true
}