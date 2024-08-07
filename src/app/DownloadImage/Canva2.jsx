import React from 'react';
import html2canvas from 'html2canvas';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DownloadImageButton = ({state}) => {
   console.log(state)
  const handleDownload = () => {
    const content = document.getElementById('Content_Dowanload');

    // html2canvas(content, { backgroundColor: null })
    html2canvas(content, {
      background: state.backgroundGradient,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover",
      backgroundPosition: "center",
      logging: true, // Enable logging to help debug
      useCORS: true // Enable Cross-Origin Resource Sharing if you have external images
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'product-details.png';
      link.click();
      if (state) {
        toast.success('Downloading')
      }
    });
  };

  return (
    <>
      <button style={{ padding:"1rem"}} onClick={handleDownload}>
        Download
      </button>
      <ToastContainer/>
    </>
  );
};

export default DownloadImageButton;
