import React, { useState } from 'react';
import avatar from '../images/file_profile.png';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db, storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
// import { addDoc, collection } from "firebase/firestore";
import { Navigate, useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            // console.log(res.user)
            // try{
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            // }
            // catch(err)
            // {
            //   console.log("not able to set doc: ",err);
            // }
            await setDoc(doc(db, 'userChats', res.user.uid), {});
            navigate('/');
            console.log('navigated to homepage');
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>OnChat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{ display: 'none' }} type='file' id='file' />
          <label htmlFor='file'>
            <img src={avatar} alt='' style={{ height: '40px' }} />
            <span>Add your avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}

          {/* {err && <Navigate to={'/'} replace={true} />} */}
        </form>
        <p>
          You do have an account?<Link to='/login'>Login</Link>{' '}
        </p>
      </div>
    </div>
  );
};
export default Register;
