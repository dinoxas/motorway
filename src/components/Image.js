import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
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
import { Modal } from 'react-responsive-modal';
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
            <picture>
              <source srcSet={`${profile_image}.webp`} type='image/webp' />
              <source srcSet={`${profile_image}.jpg`} type='image/jpeg' />
              <Avatar src={`${profile_image}.jpg`} alt='' />
            </picture>

            <UserText>@{username}</UserText>
          </UserWrapper>

          <UserText>
            <span role='img' aria-label='heart'>
              ❤️
            </span>{' '}
            {likes}
          </UserText>
        </UserInfo>
        <LazyLoad placeholder={<Placeholder />}>
          <picture>
            <source srcSet={`${url}.webp`} type='image/webp' />
            <source srcSet={`${url}.jpg`} type='image/jpeg' />
            <CarImage src={`${url}.jpg`} alt={alt_description} />
          </picture>
        </LazyLoad>

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
        <picture>
          <source srcSet={`${url}.webp`} type='image/webp' />
          <source srcSet={`${url}.jpg`} type='image/jpeg' />
          <img src={`${url}.jpg`} alt={alt_description} />
        </picture>

        {description && <ModalContent>{description}</ModalContent>}
      </Modal>
    </>
  );
};

export default Image;
