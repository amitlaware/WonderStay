import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { assets, facilityIcons, roomsDummyData, roomCommonData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();
    const [mainImage, setMainImage] = useState(null);

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])
    return room && (
        <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl-px-32">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
                    <span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>
            {/* {Room rating} */}
            <div className="flex items-center gap-1 mt-2">
                <StarRating />
                <p className='ml-2' >200+ reviews</p>
            </div>
            {/* {Room address} */}
            <div className="flex items-center gap-1 text-gray-500 mt-2">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>

            {/* { Room images } */}
            <div className="flex flex-col lg:flex-row mt-6 gap-6">
                <div className="lg:w-1/2 w-full">
                    <img src={mainImage} alt="room-image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)}
                            key={index} src={image} alt="room-image" className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3  outline-orange-500'} `} />
                    ))}
                </div>
            </div>

            {/* {Room HighLights} */}

            <div className="flex flex-col md:flex-row md:justify-between mt-10">
                <div>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience Like never before</h1>
                    <div className='flex flex-wrap gap-4 mb-6 mt-3'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex flex-row px-3 py-2 items-center gap-2 bg-gray-100 rounded-lg'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className='text-2xl font-medium text-gray-700'>${room.pricePerNight} / night</span>
                </div>
            </div>


            {/* { Room checkout check-in form} */}

            <form className="flex flex-col md:flex-row items-start md:items-center justify-between  bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl">

                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>

                    {/* {check in} */}
                    <div className="flex flex-col">
                        <label htmlFor="checkInDate" className='font-medium'>check-In</label>
                        <input type="date " placeholder="Check-In" id="checkInDate"
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required />
                    </div>
                    <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
                    {/* checkout */}
                    <div className="flex flex-col">
                        <label htmlFor="CheckOutDate" className='font-medium'>check-Out</label>
                        <input type="date " placeholder="Check-Out" id="CheckOutDate"
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required />
                    </div>

                    <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
                    {/* Guests */}
                    <div className="flex flex-col">
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" placeholder="0" id="guests" className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none ' required />
                    </div>

                </div>
                <button type='submit' className='bg-blue-500 hover:bg-blue-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-24 py-3 md:py-4 text-base cursor-pointer'>Check Avalability</button>

            </form>

            {/* Common Specifications */}

            <div className='mt-25 space-y-4'>
                {roomCommonData.map((spec, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <img src={spec.icon} alt={`${spec.title}`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="max-w-3xl  border-y  border-gray-300 my-15  py-10  text-gray-800">
                <p>Guests will be allocated on the ground floor according to availability.
                    You get a comfortable two bedroom apartment that has a true city feeling.
                    The price quoted is for two guests. At the guest slot, please mark the number
                    of guests to get the exact price for groups. The guests will be allocated
                    ground floor according to availability. You get the comfortable two bedroom
                    apartment that has a true city feeling.
                </p>
            </div>
            {/* {Hosted by} */}
            <div className="flex flex-col items-start gap-4">
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="Host" className='h-14  w-14  md:h-18  md:w-18 rounded-full' />
                    <div className="">
                        <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                        <div className="flex items-center mt-1">
                            <StarRating />
                            <p className='ml-2'>200+ reviews</p>
                        </div>
                    </div>
                </div>
                <button className='px-6 py-2.5 mt-4 rounded text-white bg-blue-500 hover:bg-blue-dull trasition-all cursor-pointer'>Contact Now</button>
            </div>
        </div>
    )
}

export default RoomDetails;