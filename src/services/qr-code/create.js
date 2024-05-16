import prompt from "prompt"
import promptQRCode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js"

async function createQRCODE(){
    prompt.start()
    
    prompt.get(promptQRCode, handle) 
}

export default createQRCODE