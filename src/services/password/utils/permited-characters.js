async function permitedCharacters(){
    let characters = []

    if(process.env.UPPERCASE_LETTERS === "true"){
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUWVXYZ")
    }

    if(process.env.LOWERCASE_LETTERS === "true"){
        characters.push(..."abcdefghijklmopqrstuwvxyz")
    }

    if(process.env.NUMBERS === "true"){
        characters.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === "true"){
        characters.push(..."!@#$%¨&*()-+=:?.,:ç|/")
    }
    return characters
}

export default permitedCharacters