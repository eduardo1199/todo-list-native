import { View, Image, TextInput, TouchableOpacity, StatusBar, Text } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons'
import AntDesign from '@expo/vector-icons/AntDesign'
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function App() {
  const [task, setTask] = useState('')

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#0D0D0D"
        barStyle={'light-content'}
      />

      <View style={styles.image}>
        <Image alt='logo' source={require('../assets/logo.png')} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput 
            value={task}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setTask}
            placeholderTextColor="#555555"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <AntDesign name="pluscircleo" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.statusFeedback}>
            <Text style={styles.statusTextCreate}>Criadas</Text>
            <View style={styles.statusQuantity}>
              <Text style={styles.textStatusQuantity}>0</Text>
            </View>
          </View>
          <View style={styles.statusFeedback}>
            <Text style={styles.statusTextFinish}>Concluídas</Text>
            <View style={styles.statusQuantity}>
              <Text style={styles.textStatusQuantity}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerTasks}>
          <View style={styles.taskContent}>
            <View style={styles.markedTask}>
              <BouncyCheckbox
                size={25}
                fillColor="#4EA8DE"
                iconStyle={{ borderColor: "white" }}
                text='nteger urna interdum massa libero auctor neque turpis turpis semper'
                innerIconStyle={{ borderWidth: 2 }}
                isChecked={true}
                onPress={(isChecked: boolean) => {console.log(isChecked)}}
              />
              <Text style={styles.textTask}>{`Integer urna interdum massa libero auctor neque turpis turpis semper.`}</Text>
            </View>
            <TouchableOpacity style={styles.removeTaskButton}>
              <EvilIcons name="trash" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
