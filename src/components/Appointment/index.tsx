import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';

export type GuildProps = {

}

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
}

export function Appointment({
  data, ...rest
}: Props) {
  return (
    <RectButton>
      <View style={styles.container}>
        <GuildIcon />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {data.guild.name}
            </Text>
          </View>
        </View>

      </View>
    </RectButton>
  )
}