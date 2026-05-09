import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { LuMapPin } from 'react-icons/lu';

const DestinationCard = ({destination}) => {
    const {imageUrl,description,duration,destinationName,category,country,price,_id} = destination;
    return (
        <div className="border">
      <Image
        className=""
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      />

      <div className="p-2">
        <div className="flex items-center gap-1">
          <LuMapPin /> <span>{country}</span>
        </div>
        <div className="flex justify-between">
          <div>
            <div>
              <h2 className="text-xl font-bold">{destinationName}</h2>
            </div>
            <div className="flex gap-1 items-center">
              <FaRegCalendar /> {duration}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold">$ {price}</h3>
          </div>
        </div>
        <Link href={`/destinations/${_id}`}><Button variant="ghost" className={'mt-1 text-cyan-500'}> <FiExternalLink/> Book Now</Button></Link>
      </div>
    </div>
        
    );
};

export default DestinationCard;