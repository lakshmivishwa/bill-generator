
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './signInForm';
import CreateBill from '../Bills/CreateBill/CreateBill';
import ViewBill from '../Bills/ViewBills/ViewBill';
import EditBill from '../Bills/EditBill';
// import List from '../Bills/ItemList/ItemList';
import BillReview from '../Bills/BillReview/BillReview';
// import NewCreateBill from '../Bills/NewCreateBill';
import { ThemeProvider } from '@mui/material/';
import theme from "../Theme/Theme"

// export const Theme = createTheme({
//   palette: {
//     primary: {
//       main: '#24204f',
//     },
//     secondary: {
//       main: '#FF0000',
//     },
//     info: {
//       main: '#a0f2e3',
//       light: "#066b8a"
//     },
//     background: {
//       default: "#64748B"
//     }
//   },
// });
console.log(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
         
          <Route path="/login" element={<SignIn />} />
          <Route path="/bills/create" element={<CreateBill />} />
          <Route path="/bills/1" element={<ViewBill />} />
          <Route path="/bills/1/edit" element={<EditBill />} />
          <Route path="/bills/create/billReview" element={<BillReview />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

