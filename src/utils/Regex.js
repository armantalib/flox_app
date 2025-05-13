export function oneNumberRegex(value){
    return value.match("^[0-9](\.[0-9][0-9]?)?$")
}

export const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }

    return (false)
}