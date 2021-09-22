import React from "react";
import {ChevronLeft} from "./Icons.js";
import Audio from "./Audio.js";

function ItemList(props){

    const Items = props.Items.map((item,index) =>{
        return(
            <li>
                <p className="font-medium text-lg ml-4 mt-4">{index+1}. {item}</p>
                <div className="grid p-6 justify-end">
                    <div className="flex">
                        <p className="text-sm text-mainText font-normal mt-8 mr-2">Listen in English</p>
                        <div className="w-36 h-16">
                            <Audio />
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-sm text-mainText font-normal mt-8 mr-2">Listen in Spanish</p>
                        <div className="w-36 h-16">
                            <Audio />
                        </div>
                    </div>
                </div>
            </li>
        )
    });

    return(
        <div className="flex bg-primary-itemsBg rounded-lg">
            <div className="w-full">
               <ul>
                   {Items}
               </ul>
            </div>
        </div>
    );

}

export default ItemList;