// import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage';

export const firebaseConfig = {
     apiKey: "AIzaSyDa9XcpKFN-DYekDbGWJZ01oU9CVbYiO_I",
     authDomain: "ecommerce-react-92460.firebaseapp.com",
     projectId: "ecommerce-react-92460",
     storageBucket: "ecommerce-react-92460.appspot.com",
     messagingSenderId: "357056610327",
     appId: "1:357056610327:web:1cc99b47cc10788bbcdc52"
   };
//    firebase.initializeApp(firebaseConfig);

// export const fetchJSON = async (jsonName) => {
//       try {
//         response.setHeader('Access-Control-Allow-Origin', '*');
//         const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
//         const storageRef = firebase.storage().ref();
//         // Get a reference to the JSON file
//         const jsonRef = storageRef.child(jsonName);
//         // Fetch the JSON file
//         const url = await jsonRef.getDownloadURL();
//         const response = await fetch(corsProxyUrl+url);
//         const data = await response.json();

//         // Use the parsed JSON data
//         return data
//       } catch {
//         console.error("Not fetched");
//       }
//     };



  //   useEffect(()=>{
  //   const fetching = async () => {
  //     const data = await fetchJSON('shoesTrend.json');
  //     setData(data);
  //   }
  //   fetching()
  // },[])
  // useEffect(()=>{
  //  console.log(setData);
   
  // },[setData])