import Screw from "./screw";

function Panel({units, children, filler}: {units: number, children?: React.ReactNode, filler?: boolean}) {
    return ( 
        <div className={`bg-white w-full h-${units * 32} rounded-md px-12 flex flex-row justify-between items-center${filler ? " invisible" : ""}`}>
            <div className={"flex flex-col h-full py-5" + (units > 1 ? " justify-between" : " justify-center")}>{Array.from({ length: units }, (_, i) => <Screw key={i} />)}</div>
            <div className="w-full h-full">{children}</div>
            <div className={"flex flex-col h-full py-5" + (units > 1 ? " justify-between" : " justify-center")}>{Array.from({ length: units }, (_, i) => <Screw key={i} />)}</div>
        </div>
     );
}

export default Panel;