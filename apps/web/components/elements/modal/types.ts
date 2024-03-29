import { ReactNode } from 'react';
import { ModalProps as AntdModalProps } from 'antd/lib/modal';

export interface ModalProps extends AntdModalProps {
  children: ReactNode;
  open: boolean;
  onCancel?: () => void;
}
