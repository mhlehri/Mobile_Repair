import CardLine from "../Chart/CardLine";

const Cardinfo = ({children}) => {
    return (
        <div className="w-full  h-auto bg-[#FFFFFF] p-6 rounded-md space-y-4 border">
            <h1>{children.title}</h1>
            <div className="flex gap-4">
              <span>{children.icon}</span>
              <h1>{children.dollor}{children.number}</h1>
              <CardLine></CardLine>
            </div>
        </div>
    );
};

export default Cardinfo;