import mongoose from 'mongoose'


export interface IUser extends mongoose.Document, userType {}

interface userType {
    userId:string 
    pw:string 
} 

const userSchema = new mongoose.Schema({
    userId: {
        type:String,
        required:true,
        unique:true 
    },
    pw: {
        type:String,
        required:true
    }
})

const UserModel = mongoose.model<IUser>('User', userSchema)

export default UserModel