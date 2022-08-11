import qrCode from '../assets/image-qr-code.png';

export default function QrCodeCard() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 mx-1 rounded-2xl bg-hslWhite max-w-[300px]">
      <img className="rounded-2xl" src={qrCode} alt="qr code" />
      <h1 className="text-hslDarkBlue font-bold text-xl px-5 pt-4 pb-3 leading-tight">Improve your front-end skills by building projects</h1>
      <p className="text-hslGrayishBlue px-1 pb-4 text-[15px] leading-tight">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}