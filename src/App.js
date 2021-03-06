import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './component/HomePage/Index/Index';
import ClassIndex from './component/OurClass/ClassIndex/ClassIndex';
import PricingBody from './component/Pricing/PricingBody/PricingBody';
import NotFound from './component/NotFound/NotFound';
import PricingBodyPartital from './component/Pricing/PricingBodyPartital/PricingBodyPartital';
import JoinUs from './component/JoinUs/JoinUs';
import Header from './component/HomePage/Header/Header';
import DreamComponent from './component/HomePage/DreamComponent/DreamComponent';
import Footer from './component/HomePage/Footer/Footer';
import PricingHeader from './component/Pricing/PricingHeader/PricingHeader';
import firebaseConfig from './component/firebaseConfig';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Index></Index>
        </Route>
        <Route exact path="/">
          <Index></Index>
        </Route>
        <Route path="/OurClass">
      <ClassIndex></ClassIndex>
        </Route>
        <Route path="/Pricing">
         <PricingBody></PricingBody>
        </Route>
        <Route path="/AboutUs">
          <PricingHeader titleOfClass="ABOUT US"></PricingHeader>
          <DreamComponent></DreamComponent>
          <Footer></Footer>
        </Route>
        <Route path="/Services">
          <ClassIndex></ClassIndex>
        </Route>
        <Route path="/ContactUs">
          <PricingHeader titleOfClass="CONTACT US"></PricingHeader>
          <PricingBodyPartital></PricingBodyPartital>
          <Footer></Footer>
        </Route>
        <Route path="/JoinUs">
          <PricingHeader titleOfClass="YOUR GYM MEMBERSHIP" ></PricingHeader>
          <PricingBodyPartital></PricingBodyPartital>
          <Footer></Footer>
        </Route>
        <Route path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
