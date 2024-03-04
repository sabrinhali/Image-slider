import { useState } from "react"

export default function FirstP(props) {

  const [index , setIndx] = useState(0)

    const handleNext = () => {
      setIndx(index +1);
    }
    const handlePrev =() => {
      if(index > 0){
        setIndx(index -1)
      }
    
    }
  
  const images = [
    "https://img.freepik.com/free-photo/river-old-view-melaka-malacca_1122-1642.jpg?w=740&t=st=1709553901~exp=1709554501~hmac=824a734d96e1041045f7d2062151f54510ea26affb5adc6ed1248a4f38784114",
  "https://img.freepik.com/premium-photo/gondolas-grand-canal_219717-5188.jpg?w=740",
  "https://img.freepik.com/free-photo/central-park-manhattan-new-york-huge-beautiful-park-surrounded-by-skyscraper-with-pond_181624-50335.jpg?t=st=1709554382~exp=1709557982~hmac=b37646dcc0544cd5cd13405397b93e0c4fdac849e661abca6f2b6f5d2621e593&w=740",
 "https://img.freepik.com/free-photo/beijing-city-aerial-view-with-urban-buildings-lake_649448-53.jpg?t=st=1709554454~exp=1709558054~hmac=306b849cb73db458e2acf9696e7e0c6d9a07efb394d022566d3843cef2dec473&w=826"]

  return (
    <>
    <div className='bg-stone-500 h-[600px] w-[100%] items-center'>

    <div>
    <h1 className='text-black text-4xl bg-white mb-8 text-center py-5 rounded-lg'>{props.title}</h1>
  </div>

    <div className="ml-[350px]">
      <img  className='h-[400px] w-[600px] rounded-lg'  src={images[index]} alt="sawir ayaa ku jiro meesha" />
     </div>

     <div className='ml-[520px] mt-8'>
     <button onClick={handlePrev} className='mr-10 py-2 px-5 bg-white rounded-lg '>Previous</button>
     <button onClick={handleNext} className="ml-5 py-2 px-5 bg-white rounded-lg">Next</button>
     </div>

    </div>
  
    

    
    
    
    
    
    
    
    </>
  
  )
}
