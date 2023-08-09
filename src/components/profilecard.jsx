import React from "react";
import { BiLogoInstagramAlt, BiLogoTwitter, BiLogoFacebookCircle } from "react-icons/bi";

const profilecard = () => {
  
  //usestate

  const ob={
      imglink:"https://th.bing.com/th/id/OIP.w6Cs6qz234c71XloeqKdwgHaHa?pid=ImgDet&rs=1",
      name: "webx the dev"
      }
  
  return (
    <>
      <div className="w-full bg-gray-100 border border-gray-200 rounded-lg shadow-lg">
        <div className="flex flex-wrap items-left text-left px-2 pb-8 ">
          <div className="w-1/2 px-2 ">
            <img
              className="w-24 h-24 my-4 rounded-full shadow-lg"
              src={ob.imglink}
              alt="profile"
            />
            <div className="flex mt-4 space-x-3 md:mt-6">
                <a href=" " className="items-center gap-1 inline-flex text-black hover:text-green-500">
                <BiLogoInstagramAlt className="align-baseline"/> <p className="text-sm">Instagram <br/></p>     
                </a>
                
                <a href=" " className="items-center gap-1 inline-flex text-black hover:text-green-500">
                <BiLogoFacebookCircle className="align-baseline"/> <p className="text-sm">Facebook</p>     
                </a>
                <a href=" " className="items-center gap-1 inline-flex text-black hover:text-green-500">
                <BiLogoTwitter className="align-baseline"/> <p className="text-sm">Twitter</p>     
                </a>
            </div>
          </div>
          <div className="w-1/2">
            <h5 className="mb-1 mt-4 text-2xl font-medium text-gray-900">
              {ob.name}
            </h5>
            <p className="text-sm text-gray-500">Employee Id: 123456789</p>
            <p className="text-sm text-gray-500">Department: CSE</p>
            <p className="text-sm text-gray-500">Phone no: xxxxxxxx </p>            
          </div>
        </div>
      </div>
    </>
  );
};

export default profilecard;
