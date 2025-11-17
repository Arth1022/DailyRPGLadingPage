// Em Image.jsx
import a from '../assets/a.jpg';

function Image() {
  return (
    <div className="
                    border-b-3            
                    border-yellow-500    
                    ">
      <img 
        src={a} 
        alt="Hero" 
        className="w-full h-170 object-cover" 
      />

    </div>
  )
}

export default Image;