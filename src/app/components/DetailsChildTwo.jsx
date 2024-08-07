"use client"
import { useEffect, useState } from 'react';
import data from "../Data/Data.json";
import DetailsChild from './DetailsChild'
import DownloadImageButton from '../DownloadImage/Canva2';
import style from "../page.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsChildTwo = ({id}) => {
  const [fileState, setFileState] = useState(null);
  const [state, setState] = useState(null);
  const [textState, setTextState] = useState({
    title:  "" ,   description: ""
  });

  useEffect(() => {
    const findid = data.find(e => e.id == id);
    if (findid) {
      setState(findid);
      setTextState({ ...textState , title: findid.title, description: findid.description });
    }
  }, [id]);

  const editPopupFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileState(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const editPopup = (e) => {
    const { name, value } = e.target;
    setTextState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleAction = (e) => {
    e.preventDefault();
    if (state.titile == "" || state.description == "" || state.image == "") {
        toast.warning("Please input filed")
    } else {
      if (state) {
        const updatedState = {
          ...state,
          title: textState.title,
          description: textState.description,
          image: fileState
        };
        setState(updatedState);
        console.log(updatedState);
      }
      toast.success('Updated Scucessfully')
    }

  };
  return (<div>
           <DetailsChild state={state}/>
      <div className='popup'>
        <form onSubmit={handleAction} className='scrollauto'>
          {/* <label htmlFor="image">Change Image
            <input type="file" onChange={editPopupFile} />
          </label> */}
                <input
                type="file"
                id="file-input"
                accept="image/*"
                onChange={editPopupFile}
                style={{ display: 'none' }}
            />
            <label htmlFor="file-input" className="file-input-label">
             <img src={fileState}  alt="Upload" />
            </label>
          <label htmlFor="title">Title
            <input name='title' type="text" value={textState.title} onChange={editPopup} />
          </label>
          <label htmlFor="description">Description
            <input name='description' value={textState.description} type="text" onChange={editPopup} />
          </label>
        <input type="submit" value={'Customize'} />
      </form>
      <ToastContainer/>
      <DownloadImageButton state={state} />
      </div>

    </div>
      
    
    )
}
export default DetailsChildTwo;