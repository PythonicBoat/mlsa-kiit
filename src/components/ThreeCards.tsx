import { Image as Image3d, ScrollControls, Text, useScroll, useTexture } from '@react-three/drei';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import * as THREE from 'three';
import "../lib/threeUtil";


const data = [{
  name: "Dawar Shafaque",
  designation: "EX CONTENT LEAD",
  testimonial: "MLSA was one of the most beautiful chapters of my college life. This community helped me grow as a person, and I will definitely cherish the memories I made here. It's been an epic adventure that I’ll always look back on with a smile!",
  image: "/Current_Leads/dawar.png"
},
{
  name: "Anunay Kumar",
  designation: "EX YOUTUBE-HOSTING LEAD",
  testimonial: "From joining MLSA right in my first year till the day, the journey has been amazing. I have enjoyed each and every moment here, and it has truly been a very cherishing experience. The events were always filled with fun and laughter, creating a very vibrant atmosphere. I have made some amazing friends here and have cherished every memory that we have created together and I will always hold these very close to my heart .",
  image: "/Current_Leads/anunay.png"
},
{
  name: "Pritam Kumar Paul",
  designation: "EX AR/VR LEAD",
  testimonial: "I used to be hesitant about joining a tech society, thinking I didn't have enough to offer. But MLSA proved me wrong. The supportive environment encouraged me to step outside my comfort zone. I've made lifelong friends, organized successful events, and even contributed to spreading awareness about XR technology. It's been an incredible journey of personal and professional growth.",
  image: "/Current_Leads/preetam.png"
},
{
  name: "Samriddhi Sharma",
  designation: "EX CREATIVE LEAD",
  testimonial: `My time at MLSA has been an invaluable experience that I will cherish forever, from overcoming the challenges together to creating unforgettable memories in person, my experiences at MLSA have shaped me into the person I am today. Starting our journey amidst Covid and then meeting the community members in-person at college soon after, and the subsequent building of deep connections with the community members has been impactful. Huge shoutout to my core team for those late-night laughs and support.
I wholeheartedly wish the MLSA community continued success and fulfillment. Here’s to MLSA, and to all those who will call it home in the future. May your experiences be as enriching and unforgettable as mine.`,
  image: "/Current_Leads/samridhi.png"
},
{
  name: "Harshit Yadav",
  designation: "EX TECH LEAD",
  testimonial: `'The' MLSA has been pivotal in my journey, offering countless opportunities for self discovery and growth. It has enabled me to start contributing to both technical and non technical events and ultimately rise to challenge of leading the technical team, enriching my skills and broadening my horizons.`,
  image: "/Current_Leads/harshit1.jpg"
},
{
  name: "Parivesh Srivastava",
  designation: "EX VIDEO EDITING LEAD",
  testimonial: "MLSA encouraged me to do Video editing in a dedicated manner, because before that i never took it seriously. it helped me analyse my potential and interest in creative field. and now bcs of the spark that it lit in me , my whole career is established. being praised for my work all the time by every senior , junior and co-members was the biggest ego boost i have ever received in my life. and i will always cherish those memories.",
  image: "/Current_Leads/parivesh.png"
},
{
  name: "Pranshu Sahay",
  designation: "EX UIUX LEAD",
  testimonial: "MLSA is such a huge part of my college journey! It feels like a family where the connections I've made are priceless. From late-night meetings to epic events, every moment has been a blast. I’ll always treasure the laughs and memories we’ve shared. Here’s to the best time together! 3…2…1… MLSA Forever!",
  image: "/Current_Leads/pranshu.png"
},
{
  name: "Shashank Deepak",
  designation: "EX APP DEV LEAD",
  testimonial: "Leading the Mobile Development team at MLSA was more like being a captain of a tech-savvy pirate ship, hurdling accross the oceans with waves taking us up and down. Though with my brilliant crewmates it was really a fun journey.",
  image: "/Current_Leads/shashank.png"
},
{
  name: "Arunopal Dutta",
  designation: "EX AIML LEAD",
  testimonial: "Leading the Mobile Development team at MLSA was more like being a captain of a tech-savvy pirate ship, hurdling accross the oceans with waves taking us up and down. Though with my brilliant crewmates it was really a fun journey.",
  image: "/members/ArunopalDutta.png"
},
{
  name: "Subandhu",
  designation: "EX CLOUD LEAD",
  testimonial: "My time at MLSA KIIT was transformative, providing opportunities to lead a talented team, drive impactful projects, and build meaningful connections with like-minded peers. This experience not only enhanced my technical skills but also fostered a deep sense of camaraderie and professional development that I will cherish forever.",
  image: "/Current_Leads/subandhu.png"
},
{
  name: "Sachi Verma",
  designation: "EX VICE LEAD",
  testimonial: `A journey is usually defined by the progressing footsteps. MLSA KIIT has been a catalyst to my journey. It has not only accelerated my growth but also gave me the best of friends who were never less than family.
I’m so grateful for the experience, loved every minute of it!! ❤️`,
  image: "/Current_Leads/sachi.png"
},
{
  name: "Amaan Bhati",
  designation: "EX WEB DEV LEAD",
  testimonial: `I joined the MLSA back in my first year of college when it was still known as the Microsoft Student Community (MSC). Ever since then, it has been one of the best part of my college journey. The experiences I've had here, both technical and personal, have truly brought out the best in me. From the knowledge I gained to the friendships I forged, every event, GBM, ideation session, and even the ups and downs have been memorable. MLSA has left a lasting impact on me, and I am deeply grateful for the opportunities and growth it provided. This community will always hold a special place in my heart, and I’m confident it will continue to inspire and elevate its members in the best way possible.`,
  image: "/Current_Leads/amaan.png"
},
// {
//   name: "Anand",
//   designation: "EX UIUX LEAD",
//   testimonial: `My time at MLSA was an extraordinary adventure, leading a dream team of talented individuals who became an unstoppable force. Together, we built a domain renowned for exceptional teamwork, seamless collaboration, and commitment to ethics. I'm grateful for the invaluable lessons, unforgettable experiences, and lifelong friendships forged during this journey. MLSA will always be a shining example of what can be achieved when teamwork, ethics, and passion come together. This experience will forever be a highlight of my college life.`,
//   image: "/Current_Leads/arunopal.png"
// },
{
  name: "Paarth Pareek",
  designation: "EX LEAD",
  testimonial: `Being in MLSA defined a large part of my college life, developing new skills be it technical, or in general, be it the seniors I got to interact with, or the juniors we led, we lived through the full circle of college. The most difficult part however, is trying to fit it all in a simple text box because the sheer number of experiences I had doesn’t make it possible for me to talk about each and every single one of them here. That’s what MLSA is, a place where you’ll meet people that you won’t forget for life, experiences that will quite literally define you, and the most important part, you make genuine connections for life. Wishing the next batch of leads even more success, cheers!`,
  image: "/Current_Leads/parth.png"
},
{
  name: "Ayush bachan",
  designation: "EX UIUX LEAD",
  testimonial: `My journey started a bit late at MLSA. But I got a lot of experience and exposure which are helping me in my internships. Being the lead of the design team help me to gain a lot of experience in managing team. As a whole the experience was amazing and made a good team which I know is going to stay with me even after the college.`,
  image: "/Current_Leads/ayush.png"
},
{
  name: "Archit Gupta",
  designation: "EX EXECUTIONER",
  testimonial: `He is an incredible friend with unmatched communication skills and a fantastic sense of humor that lights up every room.`,
  image: "/Current_Leads/archit.png"
},
{
  name: "Aaryan Jordan ",
  designation: "EX TECH LEAD",
  testimonial: `He is an incredible friend with unmatched communication skills and a fantastic sense of humor that lights up every room.`,
  image: "/Current_Leads/jordan.png"
},
]

const Cards: React.FC = () => {
  console.log(data.length);
  const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);

  return (
    <>
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={['#1e293b', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.05]}>
            <Carousel setSelectedCard={setSelectedCard} />
          </Rig>
          <Banner position={[0, -0.15, 0]} />
        </ScrollControls>
      </Canvas>
      {selectedCard && <CardModal card={selectedCard} onClose={() => setSelectedCard(null)} />}
    </>
  );
};

function Rig(props: any) {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    }
    state.events.update && state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

interface CarouselProps {
  radius?: number;
  count?: number;
  setSelectedCard: (card: CardProps) => void;
}

function Carousel({ radius = 1.85, count = 16, setSelectedCard }: CarouselProps) {
  return data.map((member, i) => (
    <Card
      key={member.name}
      url={member.image}
      name={member.name}
      designation={member.designation}
      quote={member.testimonial}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        setSelectedCard({
          url: member.image, name: member.name, designation: member.designation, quote: member.testimonial, position: [0, 0, 0], rotation: [0, 0, 0]
        });
      }}
    />
  ));
}

interface CardProps {
  url: string;
  name: string;
  designation?: string;
  quote: string;
  position: [number, number, number];
  rotation: [number, number, number];
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
}

function Card({ url, name, designation, quote, onClick, ...props }: CardProps) {
  const imageRef = useRef<THREE.Mesh>(null);
  const titleTextRef = useRef<THREE.Mesh>(null);
  const quoteTextRef = useRef<THREE.Mesh>(null);
  const backgroundRef = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const pointerOver = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);

  useFrame((state, delta) => {
    if (imageRef.current && imageRef.current.material instanceof THREE.Material) {
      easing.damp3(imageRef.current.scale, hovered ? 1.05 : 0.9, 0.1, delta);
      easing.damp(imageRef.current.material, 'radius' as any, hovered ? 0.15 : 0.1, 0.2, delta);
      easing.damp(imageRef.current.material, 'zoom' as any, hovered ? 0.98 : 1.2, 0.2, delta);
    }

    const textRefs = [titleTextRef, quoteTextRef];
    textRefs.forEach(ref => {
      if (ref.current && ref.current.material instanceof THREE.Material) {
        easing.damp(ref.current.material, 'opacity', hovered ? 1 : 0, 0.2, delta);
      }
    });

    if (backgroundRef.current && backgroundRef.current.material instanceof THREE.Material) {
      easing.damp(backgroundRef.current.material, 'opacity', hovered ? 0.5 : 0, 0.2, delta);
    }
  });

  return (
    <group {...props}>
      <Image3d
        ref={imageRef}
        url={url}
        zoom={0.95}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={onClick}
      >
        {/* @ts-ignore*/}
        <bentPlaneGeometry args={[0.06, 0.7, 0.9, 20, 20]} />
      </Image3d>
      <group position={[0, 0, 0]} rotation={[0, -Math.PI, 0]}>
        <mesh position={[0, -0.38, 0.14]} scale={[0.52, 0.08, 1]}>
          <planeGeometry />
          <meshBasicMaterial color="white" transparent opacity={0.4} depthTest={false} />
        </mesh>
        <Text
          position={[0, -0.38, 0.14]}
          fontSize={0.044}
          color="black"
          anchorX="center"
          anchorY="middle"
          renderOrder={1}
        >
          {name}
        </Text>
        <Text
          ref={titleTextRef}
          position={[0, -0.45, 0.14]}
          fontSize={0.038}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={0.52}
          textAlign="center"
          renderOrder={1}
        >
          {designation}
        </Text>
      </group>
    </group>
  );
}

interface CardModalProps {
  card: CardProps;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4 sm:p-6 md:p-8"
      onClick={onClose}
    >
      <div
        className="bg-black rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square w-full mb-4">
          <Image
            src={card.url}
            alt={card.name}
            layout="fill"
            objectFit="cover"
            className="-scale-x-100 rounded-t-lg"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center mt-2 sm:mt-4">{card.name}</h2>
        <h3 className="text-base sm:text-lg text-center text-gray-600 mt-1 sm:mt-2">{card.designation}</h3>
        <p className="text-center text-gray-500 mt-2 sm:mt-4 text-sm sm:text-base">{card.quote}</p>
        <button
          onClick={onClose}
          className="mt-4 sm:mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 text-sm sm:text-base"
        >
          Close
        </button>
      </div>
    </div>
  );
};


//interface BannerProps extends ThreeElements['mesh'] { }

function Banner(props: any) {
  const ref = useRef<THREE.Mesh>(null)
  const texture = useTexture('/banner.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const scroll = useScroll()
  useFrame(() => {
    if (ref.current && ref.current.material instanceof THREE.ShaderMaterial) {
      ref.current.material.uniforms.time.value += Math.abs(scroll.delta) * 4
      // ref.current.material.map.offset.x += delta / 2
    }
  })
  return (
    <mesh ref={ref} {...props} renderOrder={1}>
      <cylinderGeometry args={[2, 2, 0.14, 128, 16, true]} />
      {/* @ts-ignore */}
      <meshSineMaterial
        map={texture}
        map-anisotropy={16}
        map-repeat={[30, 1]}
        side={THREE.DoubleSide}
        toneMapped={false}
        opacity={0.5}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default Cards;
