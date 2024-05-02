export const OurTeam = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-5 gap-1 mt-12  bg-blue-integraIA text-white ">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={member.photo}
            alt={member.name}
            className="w-58 h-58  mb-1 mt-10"
          />
          <div className="text-center">
            <h3 className=" font-bold mb-1 text-2xl">{member.name}</h3>
            <p className="text-lg">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
