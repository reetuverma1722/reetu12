import React from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Home = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
   new swal({
        title: "Are you sure you want to logout?",
        // text: "You will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: [
          ' Cancel ',
          'Logout'
        ],
        dangerMode: true,
      }).then(function(isConfirm) {
        if (isConfirm) {
            localStorage.removeItem("token");
            Navigate('/login');
            new swal({
            title: 'Logout!',
            text: 'Logout Successfully',
            icon: 'success'
          }).then(function() {
           
               console.log("Logout SuccessFully")
          });
        } 
      })


  };

  return (
    <>
      <Header handleLogout={handleLogout} />
     <iframe src='https://www.flexiquiz.com/Help/publish/how-to-embed-a-quiz' className='frame' />
      
    </>
  );
};

export default Home;
