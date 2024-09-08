import './App.css'
import { Editor } from './components/Editor'
import FileExplorer from './components/FileExplorer/index.tsx'
import Header from './components/Header.tsx'
import MainContainer from './components/MainContainer.tsx'
import './userWorker.ts'

function App() {
  console.log('hello')
  return (
    <>
      <div className='border-2 w-full h-screen border-black'>
        <Header />
        <MainContainer>
          <FileExplorer />
          <Editor /></MainContainer>
      </div>


    </>
  )
}

export default App
