export const OurTeam = ({ teamMembers }) => {
  return (
    <div className="grid grid-cols-5 gap-1 mt-12 py-100 bg-blue-integraIA text-white ">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={member.photo}
            alt={member.name}
            className="w-58 h-58  mb-6 mt-10"
          />
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-lg">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
