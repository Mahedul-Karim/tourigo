import cloudinary from "cloudinary";

const configCloudinary = () => {
  cloudinary.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
};

const uploadToCloudinary = async (image: string) => {
  return await cloudinary.v2.uploader.upload(image, {
    folder: "tourigo",
  });
};

export { configCloudinary, uploadToCloudinary };
