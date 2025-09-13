
import { 
    User,
    ShoppingBag,
    XCircle,
    Star,
    LogOut
} from "lucide-react";

const DropDownMenu = ({open}) => {
  return (
    <>
    {open && (
        <div className="absolute flex flex-col justify-evenly right-0 mt-2 ">
            <User size={24}/>
            <ShoppingBag />
            <XCircle />
            <Star />
            <LogOut />
        </div>
    )}
    </>
  )
}
export default DropDownMenu