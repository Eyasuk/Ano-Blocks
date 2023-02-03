"use client";
import { CopyOutlined, QrcodeOutlined } from "@ant-design/icons";
// import { CopyOutlined, QrcodeOutlined,} from '@ant-design/types';
export function CopyIcon({ ...rest }: any): any {
  return <CopyOutlined {...rest} style={{ fontSize: "170%" }} />;
}

export function QrIcon({ ...rest }: any): any {
  return <QrcodeOutlined {...rest} style={{ fontSize: "170%" }} />;
}
