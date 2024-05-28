import { asyncHandler } from "/home/guptagaurav/Backend/Video 7/src/utils/asyncHandler";


const registerUser= asyncHandler(async (req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})


export {registerUser}