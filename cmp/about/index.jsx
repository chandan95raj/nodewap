import ItService from './itservice';
import Story from './story';
import CostomerField from './costomerField';
import OurGoal from './ourgoal';
import Solution from './solution';
import Team from './team';
import {
  Container
} from "react-bootstrap";
const About = ()=>{
  return(
    <>
     <ItService />
     <Story />
     <CostomerField />
     <OurGoal />
     <Solution />
     <Team />
    </>
  );
}
export default About;
