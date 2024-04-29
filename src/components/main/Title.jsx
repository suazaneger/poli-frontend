export const Title = ({ part1, part2, part3 }) => {
  return (
    <div>
      <h2 className="text-5xl mt-12 text-center text-blue-integraIA ">
        <span className="font-normal">{part1}</span>{" "}
        <span className="font-normal">{part2}</span>{" "}
        <span className="font-bold">{part3}</span>
      </h2>
    </div>
  );
};
