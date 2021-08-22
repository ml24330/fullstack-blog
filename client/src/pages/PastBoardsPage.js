import React from 'react'

const placeholder = [
    {
        name: 'Editorial Board 2017-2018',
        roles: [
            {
                title: 'Editor in Chief',
                members: [{name: 'Grady Arnott', bio: 'LLB \'18'}]
            },
            {
                title: 'Publications Editors',
                members: [
                    {name: 'Lucas Adomeit', bio: 'LLB \'18'},
                    {name: 'Sarah Kristoffersen', bio: 'LLM \'18'},
                    {name: 'Lubaba Samin', bio: 'LLB \'19'}
                ]
            },
            {
                title: 'Management Editors',
                members: [
                    {name: 'Pavlina Draganova', bio: 'LLM \'18'},
                    {name: 'Lora Izvorova', bio: 'LLB \'18'}
                ]
            },
            {
                title: 'Articles Editors',
                members: [
                    {name: 'Florence Eicher', bio: 'LLM \'18'},
                    {name: 'Claire Morris', bio: 'LLM \'18'},
                    {name: 'Shukri Ahmad Shahizam', bio: 'LLB \'19'},
                    {name: 'Shan Patel', bio: 'MSc \'18'}
                ]
            },
            {
                title: 'Junior Editors',
                members: [
                    {name: 'Kelly Sim', bio: 'LLB \'20'},
                    {name: 'Marcus Liang', bio: 'LLB \'20'},
                    {name: 'May Quin Pau', bio: 'LLB \'20'},
                    {name: 'Gloria Schiavo', bio: 'LLB \'20'}
                ]
            }
        ]
    }, 
    {
        name: '2015 Summer Board',
        roles: [
            {
                title: 'Editor in Chief',
                members: [{name: 'John Doe', bio: 'LLM \'16'}]
            },
            {
                title: 'Notes Editors',
                members: [
                    {name: 'John Doe', bio: 'LLM \'17'},
                    {name: 'Jane Doe', bio: 'LLB \'18'}
                ]
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

            {placeholder.map(board => (
                <div key={board.name}>
                    <div className="page-heading-small">{board.name}</div>
                    {board.roles.map(role => (
                        <div key={role.title}>
                            <div style={{marginTop: '5px'}}>
                                <strong>{role.title}</strong>
                            </div>
                            <div className="d-flex flex-wrap p-1">
                                {role.members.map(member => (
                                    <div key={member} className="text-center" style={{margin: '2px 30px 12px 0'}}>
                                        <div>{member.name}</div> 
                                        <div style={{fontStyle: 'italic', fontWeight: '300'}}>{member.bio}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
