import { Modal } from "semantic-ui-react";
import Image from "next/image";

const ImageModal = (props) => {
  const { open, setOpen, image } = props;
  return (
    <Modal open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} size="tiny" closeIcon>
      <Modal.Content>
        <Image src={image} alt="product image" width={300} height={300} className="mx-auto py-3" />
      </Modal.Content>
    </Modal>
  );
};

export default ImageModal;
