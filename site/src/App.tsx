import Taskbar from "./components/Taskbar"
import MainWindow from "./windows/MainWindow";
import NowDoing from "./windows/NowDoing";
import WhatsNew from "./windows/WhatsNew";
import Wall from "./windows/Wall";
import MsPaint from "./windows/MsPaint";

export default function App() {

  return (
    <div>
      <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url('/background.jpg')` }} />
      <MainWindow />
      <MsPaint />
      <Wall />
      <NowDoing />
      <WhatsNew />
      <Taskbar /> 
    </div>
  );
}