import { StatusBar } from 'react-native';


import Home from '@/screens/home';
import { TasksProvider } from '@/context/taskContext';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'light-content'}
        translucent
      />

      <TasksProvider>
        <Home />
      </TasksProvider>
    </>
  );
}
