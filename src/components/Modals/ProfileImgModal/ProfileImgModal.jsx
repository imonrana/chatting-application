import React, { useState } from "react";
import Button from "../../Button/Button";
import profilePhoto from "../../../assets/profile_pic.png";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const ProfileImgModal = ({ setProfileImgUpdate, profileImgUpdate, setChildCropData}) => {


  // React Croper

  const [image, setImage] = useState("");
  let [cropData, setCropData] = useState(profilePhoto)
  const [cropper, setCropper] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };
  setChildCropData(cropData)

  function handelClose() {
    setProfileImgUpdate(false);
  }

  return (
    <div
      className={` ${
        profileImgUpdate ? "animate-zoomIn" : "animate-zoomOut"
      } absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.60)] z-[999] transition-all  duration-500`}
    >
      
          
      <div className=" h-screen flex justify-center items-center ">
        <div className="w-1/2 border shadow-xl bg-white p-5 rounded-lg space-y-5 ">
          <label className="font-poppins text-2xl font-semibold text-black">
            Choose Your Profile Photo
          </label>
          <figure className="flex gap-x-5" >
          <div className="img-preview min-h-[100px] min-w-[100px] rounded-full overflow-hidden">
          <img src={cropData} alt="cropped" />
          </div>
          
          </figure>
          
          <fieldset>
            <input type="file"  onChange={onChange} className="border w-full font-nunito" />
          </fieldset>
         
            {/* react cropper */}
            
            {
              image && 
              
            <Cropper className='w-full h-[300px]'
            
            zoomTo={0.5}
            initialAspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          /> 
            }
            
         

          <div className="space-x-5 font-poppins text-lg text-white   ">
            <Button className=" px-3 rounded-lg hover:bg-[#3468f7] transition-all duration-500">
              Submit
            </Button>
            <Button
              onClick={handelClose}
              className=" px-3 rounded-lg hover:bg-[#3468f7] transition-all duration-500"
            >
              Cancel
            </Button>
            <Button onClick={getCropData}
            className=" px-3 rounded-lg hover:bg-[#3468f7] transition-all duration-500">
              Crop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileImgModal;
