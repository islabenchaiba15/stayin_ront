import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">islam</h1>
      <AddressLink>dechret ouled moussa</AddressLink>
      <PlaceGallery/>
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            islam benchaiba
          </div>
          Check-in: 15/12/2002<br />
          Check-out:  15/12/2002<br />
          Max number of guests:200
        </div>
       
      </div>
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <div>
          <h2 className="font-semibold text-2xl">Extra info</h2>
        </div>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">islam</div>
      </div>



{/* 
           <div className=" text-center">
            <Link  onClick={reserver} className="inline-flex gap-2 bg-primary mr-5 gap-2 text-white py-2 px-4 items-center rounded-full" to={'/booking/'+place._id}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
                Reserver</Link>
            </div> */}
      
    </div> 
  );
}