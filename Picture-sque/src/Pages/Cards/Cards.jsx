import React from "react";
import "./Cards.css";
import { cardsData } from "../Data";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Axios from "axios";

const Cards = () => {
  const [posts1, setPosts1] = useState([]);
  // console.log(currentUser)
  useEffect(() => {
    Axios.get(`https://backend-0sjh.onrender.com/cr`)
      .then((res) => {
        setPosts1(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [posts2, setPosts2] = useState([]);
  // console.log(currentUser)
  useEffect(() => {
    Axios.get(`https://backend-0sjh.onrender.com/ps`)
      .then((res) => {
        setPosts2(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [posts3, setPosts3] = useState([]);
  // console.log(currentUser)
  useEffect(() => {
    Axios.get(`https://backend-0sjh.onrender.com/us`)
      .then((res) => {
        setPosts3(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        if(id===1){        
          return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={posts1}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
          }
        else if(id===2){
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={posts2}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        }
        else{
          return (
            <div className="parentContainer" key={id}>
              <Card
                title={card.title}
                color={card.color}
                barValue={posts3}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cards;
