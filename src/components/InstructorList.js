import React from 'react';
import InstructorCard from "./InstructorCard";

const InstructorList = ({ instructors }) => {
    return (
        <div className="cardlist">
            {instructors.map((instructor) => (
                <InstructorCard
                    key={instructor._id}
                    name={instructor.name}
                    img={instructor.img}
                    title={instructor.title}
                    rank={instructor.rank}
                    desc={instructor.desc}
                    email={instructor.email}
                    phone={instructor.phone}
                    link={`${instructor._id}`}
                />
            ))}
        </div>
    );
};

export default InstructorList;