
import Navbar from './Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/';
import theme from "../Theme/Theme";
import SignUp from './SignUpPage/SignUpPage';
import SignIn from './SignInPage/signInForm';
import NewCreateBill from '../Container/CreateBill';
import ViewBill from '../Container/ViewBills/ViewBill';
import EditBill from '../Container/EditBill/EditBill';

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/bills/create" element={<NewCreateBill />} />
        <Route path="/bills/1" element={<ViewBill />} />
        <Route path="/bills/1/edit" element={<EditBill />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

