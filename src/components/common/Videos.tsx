import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player/youtube";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

const Videos = ({ data }: any) => {
  const [videoId, setVideoId] = useState(null);
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const handlePopup = (key: any) => {
    setVideoId(key);
    onOpen();
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          onClose={onClose}
          className="w-full h-full"
        >
          <ModalContent className="w-[100vw] h-[70vh] bg-slate-900 text-gray-200 p-4 rounded-md">
            <ModalHeader className="flex flex-col gap-1 items-center">
              Movie Title
            </ModalHeader>
            <ModalBody className="flex-grow w-full h-full">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                width="100%"
                height="100%"
                playing={true}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
      <div className="flex relative w-[280px] h-[200px] items-center justify-center">
        <Image
          isBlurred
          width={280}
          height={200}
          src={`https://img.youtube.com/vi/${data.key}/mqdefault.jpg`}
          alt="NextUI Album Cover"
        />
        <FaPlayCircle
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl z-10 text-black cursor-pointer hover:text-white"
          onClick={() => handlePopup(data.key)}
        />
      </div>
      <div className="w-full flex flex-wrap">
      <h3 className="pl-2 text-slate-400 font-semibold text-wrap">
        {data?.name}
      </h3>
      </div>
    </div>
  );
};

export default Videos;
