import { asyncHandler } from "/home/guptagaurav/Backend/Video 7/src/utils/asyncHandler";
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const registerUser= asyncHandler( async(req,res)=>{
    //take user details from ffrontend
    //validation (check whether the field id empty or Not)
    // check if user already exist
    // check for image
    // check for avatar
    // upload them to cloudinary
    // create user object
    // create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {fullName,email, username,password} =req.body


    if([fullName,email,password,username].some((field)=> field?.trim()==="")) return null;
    const existedUser=User.findOne({
        $or:[{ username }, { email }]
    })

    if(existedUser) return null


    const avatarLocalPath=req.files?.avatar[0]?.[path]
    const coverImagePath=req.files?.coverImage[0]?.[path]

    if(!avatarLocalPath) return null

    const avatar=await uploadOnCloudinary(avatarLocalPath)
    const cover=await uploadOnCloudinary(coverImagePath)


    if(!avatar) return null

    const user=await username.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage.url || "",
        email,
        password,
        username:username.toLowerCase()
    })


    const isUserCreated = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!isUserCreated) return null;

    return res.status(201)
})

export {registerUser}