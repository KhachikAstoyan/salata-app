import React from "react";
import {ChevronLeft} from "./Icons.js";

function ItemList(){

    return(
        <div className="w-10/12 flex ml-8 p-4 bg-primary-itemsBg">
            <div className="">
                <p className="text-mainText text-base font-medium">1. Regular Salad</p>
                <div className="float-right">
                    <div className="flex">
                        <p className="text-sm text-base font-normal">Listen in English</p>
                        <div>
                            <img src="./listen audio.png" className="w-20 h-8 relative left-20"></img>
                        </div>
                    </div>
                    <div className="flex">
                        <p className="text-sm text-base font-normal">Listen in Spanish</p>
                        <div>
                            <img src="./listen audio.png" className="w-20 h-8 relative left-20 mr-16    "></img>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default ItemList;