import { Request, Response } from "express"
import UserModel from "../../models/UserModel"

const testUserApi = async (req:Request, res:Response) => {

    try{
        const user = new UserModel({
            userId:"123123", 
            pw:"123123"
        })

        await user.save()

        return res.json({
            ok:true,
            user
        })
    }catch (err) {
        return res.status(500).json({
            ok:false,
            error: err.message
        })
    }

    
}

export default testUserApi