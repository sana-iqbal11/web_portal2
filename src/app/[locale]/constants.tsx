export const NAVBAR_HEIGHT = "64px";
export const BASE_URL = "https://shwraapidevops.azurewebsites.net/api/";
export const COOKIE_NAME_JWT_TOKEN = "";
import stamp from "../../../public/stamp.png";
import writtext from "../../../public/textwrite.png";
import phone from "../../../public/phone.png";
import istarat from "../../../public/istarat.png";
import law from "../../../public/otherlaw.png";

export const ServicesCards = [
  {
    id: 1,
    imgsrc: stamp,
    title: "contracts",
    description: "contract_desc",
    image: "image1.jpg",
    more: "contract_more",
    link:'pages/services/ServiceForm'
  },
  {
    id: 2,
    imgsrc: writtext,
    title: "memoirs",
    description: "contract_desc",
    image: "image2.jpg",
    more: "memoirs_legal_more",
    link:'pages/services/DairyForm'
  },
  {
    id: 3,
    imgsrc: istarat,
    title: "hire",
    description: "contract_desc",
    image: "image3.jpg",
    more: "issues_more",
    link:'pages/services/HireALawyer'
  },
  {
    id: 4,
    imgsrc: law,
    title: "issues",
    description: "contract_desc",
    image: "image3.jpg",
    more: "issues_more",
    link:'pages/services/AnotherServices'
  },
];
