import CardLine from "../Chart/CardLine";

const Cardinfo = ({ children }) => {
  return (
    <div className="bg-white h-auto  p-6 rounded-md border ">
      <h1>{children.title}</h1>
      <div className="flex gap-4">
        <span className="-z-0">{children.icon}</span>
        <h1>
          {children.dollor}
          {children.number}
        </h1>
        <CardLine></CardLine>
      </div>
    </div>
  );
};

export default Cardinfo;
