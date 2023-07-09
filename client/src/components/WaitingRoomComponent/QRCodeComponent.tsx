import { useEffect, useRef } from 'react';
import QRCodeStyling from 'qr-code-styling';

import logo from '../../assets/logo.png';

const QRCodeComponent = () => {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const customerId = localStorage.getItem('customerId');
  useEffect(() => {
    const qrCode = new QRCodeStyling({
      data: `${customerId}`,
      width: 300,
      height: 300,
      type: 'svg',
      image: logo,
      dotsOptions: {
        type: 'rounded',
        color: '#000',
      },
      backgroundOptions: {
        color: '#ffff',
      },
      imageOptions: {
        crossOrigin: 'anonymous',
        margin: 20,
        imageSize: 4,
      },
    });

    if (qrCodeRef.current) {
      qrCode.append(qrCodeRef.current);
      qrCode.update();
    }
  }, []);

  return <div ref={qrCodeRef} />;
};

export default QRCodeComponent;
