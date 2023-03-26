'use client';
import {
  CopyOutlined,
  QrcodeOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  SettingOutlined,
  BulbFilled,
  BulbOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

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

export function SettingIcon({ ...rest }: any): any {
  return <SettingOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function LogoutIcon({ ...rest }: any): any {
  return <LogoutOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function LightBulbIcon({ ...rest }: any): any {
  return <BulbOutlined {...rest} style={{ fontSize: '170%' }} />;
}

export function DarkBulbIcon({ ...rest }: any): any {
  return <BulbFilled {...rest} style={{ fontSize: '170%' }} />;
}
