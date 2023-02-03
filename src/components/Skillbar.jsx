import React from 'react'

const Skillbar = () => {
return (
    <div id='Skills' className="skills_section">
    <div className="skills_head">
        <h2>My <span>My Skills</span></h2>
    </div>
<div className="skills_main">
        <div className="skill_bar">
            <div className="info">
                <p>HTML</p>
                <p>90%</p>
            </div>
            <div className="bar">
                <span className="html"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>CSS</p>
                <p>85%</p>
            </div>
            <div className="bar">
                <span className="css"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>My Sql</p>
                <p>80%</p>
            </div>
            <div className="bar">
                <span className="sass"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>Java Script</p>
                <p>80%</p>
            </div>
            <div className="bar">
                <span className="js"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>React js</p>
                <p>75%</p>
            </div>
            <div className="bar">
                <span className="react"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>Node js</p>
                <p>70%</p>
            </div>
            <div className="bar">
                <span className="node"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>Express js</p>
                <p>65%</p>
            </div>
            <div className="bar">
                <span className="express"></span>
            </div>
        </div>
        <div className="skill_bar">
            <div className="info">
                <p>Mongo DB</p>
                <p>60%</p>
            </div>
            <div className="bar">
                <span className="mongo"></span>
            </div>
        </div>
    </div>
    










    </div>
    
)
}

export default Skillbar




// import React from 'react'
// import './Skill.css';

// const Skill = () => {
//     const skills = [
//         { name: 'JavaScript', level: 80 },
//         { name: 'HTML', level: 85 },
//         { name: 'CSS', level: 75 },
//         { name: 'React', level: 90 },
//         { name: 'Node.js', level: 70 },
//         { name: 'MongoDB', level: 75 }
//       ];

//   return (
//     <div className="skills">
//     <br />
//         <div className='head'>
//         <h2>Skills</h2>
//         </div>
//     <br /> 

//     {skills.map((skill) => (
//     <div key={skill.name} className="skill">
//         <h3>{skill.name}</h3>
//         <div className="skill-level" style={{ width: `${skill.level}%` }}>
//             {skill.level}%
//         </div>
//         </div>
//     ))}
//     </div>
// )
// }

// export default Skill