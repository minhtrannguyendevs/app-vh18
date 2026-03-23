// import React from "react";
import images1 from "../images/images1.png";
function Gallery() {
  return (
    <div>
    <h2>Gallery</h2>
    <Profile />
    <hr />
    <Profile2 />
    </div>
  );
}
export const Profile = () => {
    return (
        <>
            <img src="image/image.png" width={150} height={200} alt="Background" />
        </>
    );
}
export const Profile2 = () => {
    return (
        <>
            <img src="image/image1.png" width={150} height={200} alt="Background" />
            <img src={images1} width={100} height={150}/>
        </>
    );
}
export default Gallery;