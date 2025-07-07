import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";
const ListRoom = ()=>{
    const [rooms,setRooms] = useState(roomsDummyData);
    return(
        <div className="">
            <Title align='left' font='Outfit' title='Room Listings' subtitle='View, edit or manage all listed rooms.Keep  the information up-to-date to provide the best experience for users'></Title>
            <p className="text-gray-500 mt-8">All Rooms</p>

            <div className="w-full mt-3 max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
                <table className="w-full">
                    <thead className="bg-gray">
                        <tr>
                            <th className="py-3 px-4 text-gray-800 font-medium ">Name</th>
                            <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden ">Fascility</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Price /night</th>
                            <th className="py-3 px-4 text-gray-800 font-medium text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        {rooms.map((item,index)=>(
                            <tr key={index}>
                                <td className="py-3 px-4 text-gray-800 border-t border-gray-300">{item.roomType}</td>
                                <td className="py-3 px-4 text-gray-800 border-t border-gray-300 max-sm:hidden">{item.amenities.join(',')}</td>
                                <td className="py-3 px-4 text-gray-800 text-center border-t border-gray-300">{item.pricePerNight}</td>
                                <td className="py-3 px-4 text-gray-800 border-t border-gray-300">
                                    <button></button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListRoom;
