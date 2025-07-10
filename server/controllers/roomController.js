import Hotel from "../models/Hotel.js";

// api to create new room for hotel
export const createRoom = async(req, res)=>{
    try{
        const {roomType,pricePerNight,amenities} = req.body;
        const hotel = await Hotel.findOne({owner:req.auth.userId});

        if(!hotel) return res.json({success:false, message:"Hotel not found"}) ;

        // uploadImages to cloudinary

        const uploadImages = req.files.map(async(file)=>{
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;

        })

        const images = await Promise.all(uploadImages);
        await Room.create({
            hotel:hotel_id,
            roomType,
            pricePerNight: +pricePerNight,
            amenitie: JSON.parse(amenities),
            images,
        })

        res.json({success:true, message:"room created Successfully"});

    }catch(error){
        res.json({success:false, message:error.message});

    }

};


// api to get room for hotel
export const getRooms = async(req,res)=>{

}

// api to get specific room for hotel
export const getOwnerRooms = async(req,res)=>{

}


// api to toogle room  avialabity 
export const toogleRoomAvailability = async(req,res)=>{

}