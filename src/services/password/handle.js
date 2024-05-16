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

async function handle(){
    let characters = []
    let password = ''

    const passowordLength = process.env.PASSWORD_LENGTH
    characters = await permitedCharacters()
   

    for(let i =0; i < passowordLength; i++){
        const index = Math.floor(Math.random( )* characters.length)
        password += characters[index]
    }
    return password
}

export default handle