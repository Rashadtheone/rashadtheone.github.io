import React, { Component } from 'react';

class SkillS extends Component {
    
    render() {
        var skillsArr = [

            { 
                name: "javascript",
                img: "",
                skill: 7,
                version: 1.5
            },
             { 
                name: "React Native",
                img: "",
                skill: 7,
                version: 1.5
            }
        ]
        
        return (
            <div className = "skills">
            {skillsArr.map(function(skills, index){
                    render( 
                        <div className="skillbox">
                        <Image key={ index } src={img} rounded alt={version}/>
                        <h5 key={ index }>{name}</h5>
                        <h6 key={ index }>{skill}</h6>
                        </div>
                    ) 
                    
                    
                  })}

             </div>
        );
    }
}

export default SkillS;