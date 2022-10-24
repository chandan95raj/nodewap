import Client from "./homeCmp/client";
import Header from "./homeCmp/header";
import Service from "./homeCmp/service";
import PicCarosel from "./homeCmp/picCarosel";
import Contact from "./homeCmp/contact";
import Work from "./homeCmp/work";
import Story from "./homeCmp/story";


const Home = ()=>{
    const design=(
        <>
            <Header />
            <Client />
            <Service />
            <PicCarosel />
            <Contact />
            <Work />
            <Story />
        </>
    );
    return design;
}
export default Home;