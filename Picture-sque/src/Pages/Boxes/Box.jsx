import './Box.css'

export default function Card() {
    return(
        <>
        
        <h1 className='side'>What we do </h1>
        <hr></hr>
        <div className='carcontainer'>

        <div className="card" style={{"--clr":"#F5E9CF"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>
        </div>
        <div className="card" style={{"--clr":"#AAE3E2"}} >
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        <div className="card" style={{"--clr":"#FFAACF"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        </div>
        <div className="carcontainer">
        <div className="card" style={{"--clr":"#CBE4DE"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        <div className="card" style={{"--clr":"#F8F988"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        <div className="card" style={{"--clr":"#FFD4D4"}}>
            <div className="text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing  </p></div>

        </div>
        </div>
        <div className="carcontainer">
        <div className="card" style={{"--clr":"#DEFCF9"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        <div className="card" style={{"--clr":"#FFA3FD"}}>
            <div className="text"><p>Lorem ipsum dolor sit amet consectetur adipisicing </p></div>

        </div>
        <div className="card" style={{"--clr":"#E5E0FF"}}>
            <div className="text"><p>Lorem ipsum, dolor sit amet consectetur adipisicing  </p></div>

        </div>
        </div>
        </>
    )
    
}