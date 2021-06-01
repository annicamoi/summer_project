import React from 'react';
import InstructorCard from "./InstructorCard";

const InstructorList = ({ instructors }) => {
    return (
        <div>
            {instructors.map((instructor) => (
                <InstructorCard
                    key={instructor.id}
                    name={instructor.name}
                    img={instructor.img}
                    title={instructor.title}
                    rank={instructor.rank}
                    desc={instructor.desc}
                    link={`${instructor.id}`}
                />
            ))}
        </div>
    );
};

export default InstructorList;