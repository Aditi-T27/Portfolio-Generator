
import './T1.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import{DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import data from './data.json';  
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="name">Amaya</div>
                <ul className="list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Me</li>
                </ul>
            </div>
        </>
    );
}
function Image(){
    return(
        <>
        <div className="card-image">
         <img src="https://via.placeholder.com/300x200" alt="Project Image" />
         </div>
        </>
    )
}
function EduBox(){
    return(
        <div className="education-box">
        <div className="education-year">2020 - 2022</div>
        <div className="education-details">
          <h3>Higher Secondary Education</h3>
          <p>ABC School</p>
        </div>
      </div>
    );
}

function Education(){

return (
    <div className="ed-content">
        <div className='image-box'></div>
    <div className="education-container">
      <h2>Education</h2>
{/* <img src="https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&rs=1&pid=ImgDetMain" alt="" /> */}
     <EduBox/>
     <EduBox/>
     <EduBox/>
    

    </div>
    </div>
  );
}
// function Card() {
//     return (
//         <div className="card">
//            <Image/>
//            <div className="card-content">
//                 <h1>Project Title</h1>
//                 <p>This is a brief description of the project. It will highlight the main objectives and key features of the project, providing users with an overview of what it is about.</p>
//             </div>
//         </div>
//     );
// }
function Card({img,title,content}) {


    return (
       <>
            <img src={img} alt={title} className="card-image" />
            <div className="card-content">
                <h1>{title}</h1>
                <p>{content}</p>
        
        </div>
                </>


    );
}

function Container(){
    return(
    <>
    <h1 style={{textAlign:'center'}}>My Projects</h1>
       <DragDropContext>
        <Droppable droppableId="chars">
            {(provided)=>(
        <div className="container" {...provided.droppableProps} ref={provided.innerRef}>
              {data.map((card,index) => {return (
                <Draggable key={card.id} draggableId={card.id} index={index}>
                    {(provided)=>(
                 <div className="card" {...provided.dragHandleProps} {...provided.innerRef} ref={provided.innerRef}>
                <Card  img={card.img} title={card.title} content={card.content} />
                </div>
              )}
                </Draggable>

            )}
            )}
        </div>
           ) }
        </Droppable>
        </DragDropContext>
        </>
);

}

function Contact() {
    return (
        <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f8f9fa" }}>
            <h2>Contact Me</h2>
            <div style={{ margin: "1rem 0" }}>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 1rem", textDecoration: "none", color: "#0072b1" }}
                >
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5rem" }} />
                </a>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 1rem", textDecoration: "none", color: "#E4405F" }}
                >
                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "1.5rem" }} />
                </a>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ margin: "0 1rem", textDecoration: "none", color: "#1877F2" }}
                >
                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.5rem" }} />
                </a>
            </div>
            <div style={{ margin: "1rem 0" }}>
                <a href="#home" style={{ textDecoration: "none", color: "#000" }}>
                    Back to Top
                </a>
            </div>
            <div style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#6c757d" }}>
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </div>
    );
}


export default function Template1() {
    const [showCard, setShowCard] = useState(false);

    // Trigger the card visibility after the typing animation finishes
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowCard(true);
        }, 3000); // 3000ms corresponds to the duration of the typing animation
        return () => clearTimeout(timer); // Cleanup on component unmount
    }, []);

    return (
        
        <>
        <div className="main">
            <Navbar />
            <div className="bg">
                <div className="text-overlay">
                    Hi, I am Amaya!
                </div>
                <div><button class='bg-btn btn-align'>Connect with Me!</button></div>
                {showCard && (
                   <>

<div class="text-card">
  <div class="content">
    <h2>Welcome to My Profile</h2><br />
    <p>
      I am a passionate Event Manager with expertise in organizing large-scale events,
      managing logistics, and creating memorable experiences. I specialize in handling all
      aspects of events, from planning to execution, ensuring seamless and successful outcomes.
    </p>
    <p>
      I thrive on bringing ideas to life, working with diverse teams, and adapting to new
      challenges. Let's make your event unforgettable!
    </p>
    <p>
      I thrive on bringing ideas to life, working with diverse teams, and adapting to new
      challenges. Let's make your event unforgettable!
    </p><br />
    <button class='bg-btn'>Know More About Me!</button>
  </div>
</div>


                    </>
                )}
            </div><br/>
            <Education id='education'/><br />
        <Container/>
        <br />
           <Contact/>
           </div>
        </>
    );
}
