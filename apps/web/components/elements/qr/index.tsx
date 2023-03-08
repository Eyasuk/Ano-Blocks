import { useEffect } from 'react';
import qrcode from 'qrcode-generator';
import { QrProps } from './types';

import styles from './qr.module.scss';

export default function Qr({ text }: QrProps): JSX.Element {
  useEffect(() => {
    const typeNumber: TypeNumber = 4;
    const errorCorrectionLevel: ErrorCorrectionLevel = 'L';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(text);
    qr.make();
    const element = document.getElementById('qr');
    if (element) {
      element.innerHTML = qr.createImgTag(8, 2);
    }
    // document.getElementsByClassName('qr')[0].innerHTML = qr.createImgTag();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.qr} id='qr'></div>
    </div>
  );
}
