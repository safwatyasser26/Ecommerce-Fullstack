import NextAuthOptions from "@/lib/nextAuth";
import  {getServerSession} from "next-auth";
import MainHome from "@/components/MainHome";

const Home = async () => {
    const {user} = await getServerSession(NextAuthOptions);
    console.log("user", user);
    return (
            <MainHome />
    )
}

export default Home;