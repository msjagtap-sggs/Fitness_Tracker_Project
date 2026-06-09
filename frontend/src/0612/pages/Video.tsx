import { Button } from "flowbite-react";
import { VideoComp } from "../components/VideoComp";

const video = [
  {
    Image:
      "https://media.istockphoto.com/id/1280587810/photo/healthy-eating-exercising-weight-and-blood-pressure-control.jpg?s=612x612&w=0&k=20&c=iCQnBHXhRf6HIzPGMUMwjnBDtIZDuE5UzrPG6AeKMZE=",
    Title: "Nutrition for a Healthy Life",
    Description:
      "Constant exposure to our environment, the things we eat, and stresses from both ......",
    link: "https://www.youtube.com/watch?v=c06dTj0v0sM",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    Title: "Healthy Aging with Nutrition",
    Description:
      "A well-balanced diet full of essential nutrients can help support a healthy life. However, people......",
    link: "https://www.youtube.com/watch?v=KD-FmeueFUo",
  },
  {
    Image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1503305991i/35397325.jpg",
    Title: "Diet and nutrition advice .....",
    Description:
      "With all the fad diets and varying nutrition guidelines, deciding what's good for you to eat can be confusing......",
    link: "https://www.youtube.com/watch?v=prFUgbyfPXk",
  },
  {
    Image:
      "https://www.pcrm.org/sites/default/files/2022-03/ERP_Happiness_In_Every_Bite.jpg",
    Title: "What Foods Help You Sleep? | Dr. Neal...",
    Description:
      "What are the foods that will help you sleep better? Discover the best and worst options for fighting insomnia .....",
    link: "https://www.youtube.com/watch?v=pEhLKNznTC8",
  },
  {
    Image:
      "https://greenhealthycooking.com/wp-content/uploads/2021/01/Easy-Healthy-Meals.jpg",
    Title: "Easy Healthy Meals You",
    Description:
      "These are 4 easy healthy meals I eat practically on a weekly basis. They are amazing base recipes....",
    link: "youtube.com/watch?v=UgA_5V3Jro0",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80",
    Title: "Essential Nutrients",
    Description: "Video created by Peer Health Educator, Rebecca Rinck.",
    link: "https://www.youtube.com/watch?v=Urr-MKKs8zc",
  },
  {
    Image:
      "https://www.mygnp.com/wp-content/uploads/2019/11/A-variety-of-fruits-vegetables-fish-and-grain.jpg",
    Title: "Every Vitamin & Mineral th..",
    Description: "Every Vitamin & Mineral th",
    link: "https://www.youtube.com/watch?v=gwGr4N1BcLI",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    Title: "How do vitamins work?",
    Description: "How do vitamins work?.....",
    link: "https://www.youtube.com/watch?v=ISZLTJH5lYg",
  },
  {
    Image:
      "https://talkstar-assets.s3.amazonaws.com/production/playlists/playlist_792/ae3d787f-e390-4552-84d0-0b1e179fa545/06+TED_BS_Series_banner_1600x480_Dry.jpg",
    Title: "Why healthy bones are about so...",
    Description: "Why healthy bones are about so...",
    link: "Why healthy bones are about so",
  },
  {
    Image:
      "https://www.shutterstock.com/image-photo/chalk-hand-drawn-brain-assorted-260nw-1896956995.jpg",
    Title: "How the food you eat affects....",
    Description:
      "When it comes to what you bite, chew and swallow, your choices have a direct and ...",
    link: "https://www.youtube.com/watch?v=xyQY8a-ng6g",
  },
  {
    Image:
      "https://img.freepik.com/free-vector/vitamin-food-infographic_52683-35565.jpg",
    Title: "How do vitamins work?...",
    Description: "How do vitamins work?.....",
    link: "https://www.youtube.com/watch?v=ISZLTJH5lYg",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
    Title: "What is a calorie....",
    Description:
      "We hear about calories all the time: How many calories are....",
    link: "https://www.youtube.com/watch?v=VEQaH4LruUo",
  },
  {
    Image:
      "https://www.shutterstock.com/image-photo/health-wellness-conceptual-260nw-535175641.jpg",
    Title: "Are Health and Wellness...",
    Description:
      "Have you ever wondered what the relationship is between health and wellness...",
    link: "https://www.youtube.com/watch?v=Nr9hqY6q_qY",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80",
    Title: "Nutrients",
    Description: "This video contains information about......",
    link: "https://www.youtube.com/watch?v=5izNgcww67Y",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    Title: "Balance Diet & Nutrition",
    Description: "Balance Diet & Nutrition...",
    link: "https://www.youtube.com/watch?v=NCYB1mpLxY0",
  },
  {
    Image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80",
    Title: "Importance of Health...",
    Description: "Join Meg Green a dietician from VA's...",
    link: "https://www.youtube.com/watch?v=a2NIwkkwSf4",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=600&q=80",
    Title: "Health and Wellness: My Plate",
    Description:
      "Join Meg Green a dietician from VA's Arkansas Healthcare System as she discusses...",
    link: "https://www.youtube.com/watch?v=0KvgX_2Jfss",
  },
  {
    Image:
      "https://img.freepik.com/premium-photo/man-sits-lotus-pose-person-practices-yoga-meditation-radiating-energy-generative-ai_788189-3992.jpg",
    Title: "The Scientific Power of Meditation",
    Description: "The Scientific Power of Meditation..",
    link: "https://www.youtube.com/watch?v=Aw71zanwMnY",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    Title: "The Five Ways to Wellbeing...",
    Description: "The Five Ways to Wellbeing...",
    link: "https://www.youtube.com/watch?v=_gJ5V525SCk",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
    Title: "Morning Exercise = Mental Health",
    Description:
      "Whiteboard animations are incredible for delivering any message. There are absolutely NO...",
    link: "https://www.youtube.com/watch?v=3ZBXldCxZEA",
  },
];

export const Video = () => {
  return (
    <div className='p-10 grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
      {
        video.map((el, index)=><VideoComp key={index} Image={el.Image} link={el.link} Title={el.Title} Description={el.Description}/>)
      }
    </div>
  );
};
