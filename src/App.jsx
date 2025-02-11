import "./App.css";
import BoxColor from "./components/BoxColor";
import ClickablePicture from "./components/ClickablePicture";
import CreditCard from "./components/CreditCard";
import DriverCard from "./components/DriverCard";
import Greetings from "./components/Greetings";
import IdCard from "./components/IdCard";
import LikeButton from "./components/LikeButton";
import Random from "./components/Random";
import Rating from "./components/Rating";
import imgGlasses from "./assets/images/glasses.png";
import Dice from "./components/Dice";
import Carousel from "./components/Carousel";
import NumbersTable from "./components/NumbersTable";
import FaceBook from "./components/Facebook";
import SignupPage from "./components/SignupPage";
import RGBColorPicker from "./components/RGBColorPicker";

function App() {

  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <IdCard
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={"1992-07-14"}
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={"1988-05-11"}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <Greetings langPeople="es">Spanish</Greetings>
      <Greetings langPeople="it">Italian</Greetings>

      <Random min={1} max={6}/>
      <Random min={-5} max={10}/>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
      />
          
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
          
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />

      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />

      <LikeButton/>

      <ClickablePicture 
        img="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        imgClicked={imgGlasses}
      />

      <Dice/>

      <Carousel
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />

      <NumbersTable limit={12}/>

      <FaceBook/>

      <SignupPage/>
      
      <RGBColorPicker/>
    </div>
  );
}

export default App;
