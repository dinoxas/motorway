import React, { useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Modal } from 'react-responsive-modal';
import {
  Button,
  Content,
  UserInfo,
  UserWrapper,
  UserText,
  Avatar,
  CarImage,
  ModalContent,
  Placeholder
} from '../styles/ImageStyles';
import 'react-responsive-modal/styles.css';
import '../Modal.css';

const Image = ({ img }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const {
    description,
    likes,
    alt_description,
    url,
    user: { profile_image, username }
  } = img;

  return (
    <>
      <Content>
        <UserInfo>
          <UserWrapper>
            <Avatar
              style={{ backgroundImage: `url(${profile_image}.webp)` }}
            ></Avatar>{' '}
            <UserText>@{username}</UserText>
          </UserWrapper>

          <UserText>
            <span role='img' aria-label='heart'>
              ❤️
            </span>{' '}
            {likes}
          </UserText>
        </UserInfo>
        <ProgressiveImage src={`${url}.webp`} placeholder=''>
          {(src, loading) => {
            return loading ? (
              <Placeholder />
            ) : (
              <CarImage src={src} alt={alt_description} />
            );
          }}
        </ProgressiveImage>

        <Button onClick={onOpenModal}>View image</Button>
      </Content>
      <Modal
        open={open}
        onClose={onCloseModal}
        focusTrapped={false}
        classNames={{
          modal: 'customModal'
        }}
        center
      >
        <img src={`${url}.webp`} alt={alt_description} />

        {description && <ModalContent>{description}</ModalContent>}
      </Modal>
    </>
  );
};

export default Image;
