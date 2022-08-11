import qrCode from '../assets/image-qr-code.png';

export default function QrCodeCard() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 rounded-2xl bg-hslWhite w-[375px]">
      <img className="rounded-2xl" src={qrCode} alt="qr code" />
      <h1 className="text-hslDarkBlue font-bold text-2xl p-5">Improve your front-end skills by building projects</h1>
      <p className="text-hslGrayishBlue px-8 pb-6">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}