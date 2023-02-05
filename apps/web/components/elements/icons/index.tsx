'use client';
import {
  CopyOutlined,
  QrcodeOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';
// import { CopyOutlined, QrcodeOutlined,} from '@ant-design/types';
export function CopyIcon({ ...rest }: any): any {
  return <CopyOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function QrIcon({ ...rest }: any): any {
  return <QrcodeOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function EyeIcon({ ...rest }: any): any {
  return <EyeOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function EyeInvisibleIcon({ ...rest }: any): any {
  return <EyeInvisibleOutlined {...rest} style={{ fontSize: '170%' }} />;
}
