'use server'

import { configCloudinary, uploadToCloudinary } from '../util/cloudinary';
import prisma from '../prisma';

const uploadUserImage = async (image:string,email:string)=>{

    try{

        configCloudinary();

        const result = await uploadToCloudinary(image);

        const user = await prisma.user.update({
            where:{
                email
            },
            data:{
                image:{
                    public_id:result.public_id,
                    url:result.url
                }
            }
        })

        return {
            success:true,
            user
        }
    }catch(err:any){
        console.log(err.message)
        return {
            success:false,
            message:'Something went wrong! Please try again later'
        }
    }

}

export { uploadUserImage }