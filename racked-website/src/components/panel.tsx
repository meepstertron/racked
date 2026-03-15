import { cn } from "../lib/utils";
import Screw from "./screw";

function Panel({units, children, filler, className}: {units: number, children?: React.ReactNode, filler?: boolean, className?: string}) {
    return ( 
        <div className={cn(`bg-white w-full rounded-md px-12 flex flex-row justify-between items-center${filler ? " invisible" : ""}`, className)} style={{height: `${units * 8}rem`}}>
            <div className={"flex flex-col h-full py-5" + (units > 1 ? " justify-between" : " justify-center")}>{Array.from({ length: units }, (_, i) => <Screw key={i} />)}</div>
            <div className="w-full h-full">{children}</div>
            <div className={"flex flex-col h-full py-5" + (units > 1 ? " justify-between" : " justify-center")}>{Array.from({ length: units }, (_, i) => <Screw key={i} />)}</div>
        </div>
     );
}

export default Panel;