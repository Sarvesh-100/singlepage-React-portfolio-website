import React from 'react'

const Skillbar = () => {
    const skills = [
        { name: 'JavaScript', level: 80 },
        { name: 'HTML', level: 85 },
        { name: 'CSS', level: 75 },
        { name: 'React-js', level: 90 },
        { name: 'Node.js', level: 70 },
        { name: 'Mongo-DB', level: 75 }
    ];
return (
    <div id='Skills' className='s-heading'>
        <h1> My Skills</h1>
        <br/><br/><br/>
        {skills.map((skill) => (
    <div key={skill.name} className="skill">
        <h3 className='h3'>{skill.name}</h3>
        <div className="skill-level" style={{ width: `${skill.level}%` }}>
            {skill.level}%
        </div>
        </div>
    ))}
    <br/><br/><br/><br/>
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