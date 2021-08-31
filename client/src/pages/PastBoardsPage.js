import React from 'react'

const placeholder = [
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    }, 
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    }, 
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    },
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    }, 
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    }, 
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: ['Grady Arnott']
            },
            {
                title: 'Publications Editors',
                members: ['Lucas Adomeit', 'Sarah Kristoffersen', 'Lubaba Samin']
            },
            {
                title: 'Management Editors',
                members: ['Pavlina Draganova', 'Lora Izvorova']
            },
            {
                title: 'Articles Editors',
                members: ['Florence Eicher', 'Claire Morris', 'Shukri Ahmad Shahizam', 'Shan Patel']
            },
            {
                title: 'Junior Editors',
                members: ['Kelly Sim', 'Marcus Liang', 'May Quin Pau', 'Gloria Schiavo']
            }
        ]
    }
]

export default function PastBoardsPage() {
    return (
        <div className="page-container">
            <div className="page-heading">
                Former Editorial Boards
            </div>

            <div className="d-flex flex-wrap justify-content-center p-2" style={{alignItems: 'flex-start'}}>
            {placeholder.map(board => (
                <div style={{fontFamily: 'Arial', fontSize: '1.1rem', margin: '10px', backgroundColor: 'rgba(0,0,0,0.05)', width: '300px', border: '1px solid transparent', borderRadius: '5px'}} key={board.name}>
                    <div style={{color: 'white', backgroundColor: 'hsla(280, 50%, 50%, 1)', padding: '10px 5px', fontWeight: 'bold', fontSize: '1.3rem', textAlign: 'center', borderRadius: '5px 5px 0 0'}}>{board.name}</div>
                    {board.roles.map(role => (
                        <div style={{padding: '10px 20px', borderTop: '1px solid hsla(280, 50%, 80%, 1)'}} key={role.title}>
                            <div style={{margin: '5px 0'}}>
                                <strong>{role.title}</strong>
                            </div>
                            <div >
                                {role.members.map(member => (
                                    <div key={member}>
                                        <div>{member}</div> 
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
            </div>
        </div>
    )
}
