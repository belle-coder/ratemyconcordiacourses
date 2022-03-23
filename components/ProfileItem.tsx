import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import { DataT } from "../types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";

const ProfileItem = ({
  id,
  info1,
  info2,
  info3,
  info4,
  match,
  description,
  name,
}: DataT) => (
  <View style={styles.containerProfileItem}>
    <View style={styles.matchesProfileItem}>
      <Text style={styles.matchesTextProfileItem}>
        <Icon name="heart" size={13} color={WHITE} /> {match}% Match!
      </Text>
    </View>

    <Text style={styles.name}>{name}</Text>

    <Text style={styles.name}>{description}</Text>
    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="person" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info1}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="pizza" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info2}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="airplane" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info3}</Text>
    </View>

    <View style={styles.info}>
      <Text style={styles.iconProfile}>
        <Icon name="calendar" size={12} color={DARK_GRAY} />
      </Text>
      <Text style={styles.infoContent}>{info4}</Text>
    </View>
  </View>
);

export default ProfileItem;
