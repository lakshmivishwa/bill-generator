
import Navbar from './Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import SignIn from './SignInPage/signInForm';
import CreateBill from './Bills/CreateBill/GenerateBill/generateBill';
import ViewBill from './Bills/ViewBills/ViewBill';
import EditBill from './Bills/EditBill/EditBill';
// import List from '../Bills/ItemList/ItemList';
// import BillPreview from './Bills/BillPreview/BillPreview';
// import NewCreateBill from '../Bills/NewCreateBill';
import { ThemeProvider } from '@mui/material/';
import theme from "../Theme/Theme";
import SignUp from './SignUpPage/SignUpPage';

console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/bills/create" element={<CreateBill />} />
        <Route path="/bills/1" element={<ViewBill />} />
        <Route path="/bills/1/edit" element={<EditBill />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

