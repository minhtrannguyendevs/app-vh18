// import React from "react";
import images1 from "../images/images1.jpg";
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
            <img src="image/image.jpg" width={250} height={200} alt="Background" />
        </>
    );
}
export const Profile2 = () => {
    return (
        <>
            <img src="image/book1.png" width={250} height={200} alt="Background" />
            <img src={images1} width={250} height={200} alt="Image 1" />
        </>
    );
}
export default Gallery;