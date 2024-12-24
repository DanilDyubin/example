import { useDispatch } from 'react-redux';
import { addImgsIds } from '../redux/slices/scheduleSlice';

export function useUploadImages() {
  const dispatch = useDispatch();

  const uploadImages = async (files) => {
    if (!files.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append('upl_img', file));

    try {
      const response = await fetch(
        'https://msi.stage-detection.contextmachine.cloud/upload_images',
        {
          method: 'POST',
          body: formData,
        },
      );
      if (!response.ok) {
        throw new Error(`Ошибка загрузки: ${response.status}`);
      }

      const result = await response.json();
      if (result.upload_img_ids) {
        dispatch(addImgsIds(result.upload_img_ids));
      }
      return result.upload_img_ids;
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };
  return { uploadImages };
}
