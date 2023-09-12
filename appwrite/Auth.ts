
import { account,ID } from "./appwrite.config";


const SignUp = async(name: string, email:any, password:string) => {
    try {
        const res = await account.create(ID.unique(), email, password, name);
        console.log(res);

    } catch(e) {
        console.log(e);
    }
}

const SignIn = async(email:string, password:string) => {
    try {
        const res = await account.createEmailSession(email,password);

        console.log(res);
    } catch (error) {
        console.log(error);
    }
}


export {SignIn, SignUp}