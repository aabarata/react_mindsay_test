import { selector, useRecoilValue } from 'recoil';
import { imageState } from './../../components/App';

const imagesAmount = selector({
    key: 'imagesLength',
    get: ({get}) => {
        const images = get(imageState);
        return images.length;
    },
});

function Images() {
    const count = useRecoilValue(imagesAmount);

    return (
      <>
        <h3>Sub title of images</h3>
        <div>
            Body of images. Nr of images: { count }
        </div>
      </>
    );
  }
  
  export default Images;