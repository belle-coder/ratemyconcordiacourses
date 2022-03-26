import React, { useRef, useState } from "react";
import { View, ImageBackground } from "react-native";
import CardStack, { Card } from "react-native-card-stack-swiper";
import { CardItem } from "../components";
import styles from "../assets/styles";
import DEMO from "../assets/data/demo";

const Home = () => {
 // const [swiper, setSwiper] = useState<CardStack | null>(null);
  const swiperRef = useRef(null);
  const onXPress = ()=>{
    swiperRef?.current?.swipeLeft();
  }
  const onHeartPress = ()=>{
    swiperRef?.current?.swipeRight();
  }

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={styles.containerHome}>

        <CardStack
          loop
          verticalSwipe={false}
          renderNoMoreCards={() => null}
         // ref={(newSwiper): void => setSwiper(newSwiper)}
          ref={swiperRef}
        >
          {DEMO.map((item) => (
            <Card key={item.id}>
              <CardItem
                hasActions
                image={item.image}
                name={item.name}
                description={item.description}
                onHeartPress={onHeartPress}
                onXPress={onXPress}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
