import Image from "next/image";
import React, { useRef, useState } from "react";
import HomeScreenImage from "../../../public/assets/images/about-hero.jpg";

function Hero() {
  const [heroMessage, setHeroMessage] = useState<string>(
    "Change awaits in the journey and destination"
  );
  const heroMainMessageRef = useRef<HTMLDivElement | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    if (heroMainMessageRef.current) {
      setHeroMessage(event.target.innerHTML);
    }
  };

  const heroRef = useRef<HTMLInputElement>(null);
  const handleImageClick = () => {
    heroRef.current?.click();
  };

  const [heroImage, setHeroImage] = useState<string | ArrayBuffer | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target?.files ? event.target?.files[0] : undefined;

    if (file) {
      // dispatch(setHeroImage(file));
      // const activeStore = localStorage.getItem("seleted-store");
      // if (activeStore) {
      //   const formData = new FormData();
      //   formData.append("name", "heroImage");
      //   formData.append("image", file);
      //   const Store = JSON.parse(activeStore);
      //   const res = await dispatch(
      //     addSiteImage({ storeId: Store.store, data: formData })
      //   );
      //   res.type === "success" && dispatch(setHeroImage(res.payload.data.url));
      // }

      const reader = new FileReader();

      reader.onloadend = () => {
        // Use reader.result to get the image data as a base64 string or ArrayBuffer
        setHeroImage(reader.result);
      };

      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="hero-container">
      {/* <Image src={HomeScreenImage} alt="source" /> */}

      {heroImage ? (
        <Image
          src={heroImage as string}
          alt="source"
          width={100}
          height={100}
        />
      ) : (
        <Image src={HomeScreenImage} alt="source" />
      )}

      <div className="hero-text">
        <p
          onBlur={handleTextChange}
          ref={heroMainMessageRef}
          contentEditable
          suppressContentEditableWarning
        >
          {heroMessage}
        </p>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={heroRef}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <div
        onClick={handleImageClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "1",
          marginTop: "150px",
        }}
      >
        {
          <Image
            src="/assets/images/attach.svg"
            alt="source"
            width={50}
            height={50}
          />
        }
      </div>
    </div>
  );
}

export default Hero;
