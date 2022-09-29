import { initializeApp } from 'firebase/app';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzeKg13VkyhzGc3o87IR6XXnec85jEJFI",
  authDomain: "milaap-ed320.firebaseapp.com",
  projectId: "milaap-ed320",
  storageBucket: "milaap-ed320.appspot.com",
  messagingSenderId: "3295850784",
  appId: "1:3295850784:web:d52e3342bab68298c7e745"
  //...
};

const app = initializeApp(firebaseConfig);

export default app