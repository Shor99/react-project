import { useState } from "react";
import Cards from "./Cards";
import NavBar from "./NavBar";
import Title from "./Title";
function MainPage() {
    const cards = [
        {
          id: 10024,
          name: "Tacko Sell",
          description: "Mexican restaurant",
          phoneNumber: "04-2222222",
          address: 'Denis Rodmann 91 , Haifa',
          imageUrl:
            "https://images.pexels.com/photos/4958522/pexels-photo-4958522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
            id: 10025,
            name: "Dogies",
            description: "Dogs adaption agancy",
            phoneNumber: "03-3233322",
            address: 'Penny Hardaway 1 , Tel Aviv',
            imageUrl:
              "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            id: 10026,
            name: "WearMe",
            description: "Clothes Store",
            phoneNumber: "02-1232522",
            address: 'Kevin Mchale 32 , Jerusalem',
            imageUrl:
              "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }
      ];
      const [origData, setOrigData] = useState(cards);
      const [buisnesses, setBuisnesses] = useState(cards);

     
      function searchBuisness(value) {
        let result = [...origData];
        if (value.length > 0) {
            result = origData.filter(buisness =>
              buisness.name.toLowerCase().includes(value.toLowerCase())
            )
        }

        setBuisnesses(result);
    }
    
  
      return (
        <>
            <NavBar/>
            <Title mainTxt="BizAd">
                <h3>Advertising your buisness</h3>
            </Title>
            <Cards list = {buisnesses} search = {searchBuisness}/>
        </>
      );
    }

export default MainPage