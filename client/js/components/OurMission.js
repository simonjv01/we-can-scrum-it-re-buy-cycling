import missionbike1 from "../../assets/mission-bike1.jpg";
import missionbike2 from "../../assets/mission-bike2.jpg";
import missionbike3 from "../../assets/mission-bike3.jpg";

export default function ourMission() {
  return `
    <div class="ourMission_Title">
    
    </div>
  <div class="missionbody">
    <p id="missionp1"> Our mission at Re-Buy-Cycling to ease the burden on families by providing an easier way to replace bikes.  We understand the high cost that can be encountered when purchasing bikes year after year for young children that are out growing their bikes every year. </p> <img class="mission-image1" src="${missionbike1}" alt="bike"><br><br>
    
    <p id="missionp2">With that in mind, Re-Buy-Cycling  is a resource for parents to utilize and lessen the cost of acquiring new bicycles for their children to enjoy.
    We believe that a child with a bicycle is an extremely important part of childhood. It is a fun activity that promotes having an active lifestyle, encourages children to enjoy the outdoors, and it can give a child confidence to pursue new adventures.</p><img class="mission-image2" src="${missionbike2}" alt="bike"><br>
    <p id="missionp3">"As a kid I had a dream - I wanted to own my own bicycle. When I got the bike I must have been the happiest boy in Liverpool, maybe the world. I lived for that bike. Most kids left their bike in the backyard at night. Not me. I insisted on taking mine indoors and the first night I even kept it in my bed." - John Lennon, British musician </p> <img class="mission-image3" src="${missionbike3}" alt="bike">
  </div>
   `;
}
