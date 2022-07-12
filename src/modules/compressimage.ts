import sharp from 'sharp';

const compressImage = async (
  imagePathSource: string,
  width: number,
  height: number,
  imagePathDestination: string
) => {
  try {
    // convert the image using sharp
    await sharp(imagePathSource)
      .resize({
        width: width,
        height: height,
      })
      .toFormat('jpeg', { mozjpeg: true })
      .toFile(imagePathDestination);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default compressImage;
