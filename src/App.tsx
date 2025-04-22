import './App.css'
import "tailwindcss";
import { Button } from './components/ui/button';
import CustomButton from './CustomComponents/CustomButton';

function App() {

  return (
    <>
      <h1 className="text-1s font-bold underline bg-sky-500 hover:bg-sky-700 ">
        Hello world!
      </h1>

      <Button
        variant="ghost"
        className="text-primary hover:text-primary p-0 h-auto"
        onClick={() => {
          console.log("HERE")
        }}>Button</Button>

      <CustomButton
        title='TITLE'
        onClick={() => {
          console.log('CUStoM button')
        }} />
    </>

  )
}

export default App
