import compressImage from '../../modules/compressimage';
import fs from 'fs';
import path from 'path';

describe('Test Compress Image module', () => {
  it('success', async () => {
    const imageSourcePath = path.join(
      __dirname.substring(0, __dirname.length - 19),
      'images',
      'full',
      'fjord.jpg'
    );
    const imageDestPath = path.join(
      __dirname.substring(0, __dirname.length - 19),
      'images',
      'thumbnails',
      'fjord.jpg'
    );

    if (fs.existsSync(imageDestPath)) {
      fs.unlinkSync(imageDestPath);
    }

    await compressImage(imageSourcePath, 200, 200, imageDestPath);

    expect(fs.existsSync(imageDestPath)).toBeTrue();
  });
});
