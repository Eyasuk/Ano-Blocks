import React from 'react';
import { Modal as AntdModal } from 'antd/lib';
import { ModalProps } from './types';

export default function Modal({
  children,
  open,
  onCancel,
  ...rest
}: ModalProps): JSX.Element {
  return (
    <AntdModal open={open} onCancel={onCancel} footer={null} {...rest}>
      {children}
    </AntdModal>
  );
}
