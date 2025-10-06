"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTransform, motion, MotionValue, useMotionValue } from 'framer-motion';
import { useLenisScroll } from '@/hooks/useLenisScroll';
import Image from "next/image";
import DiscordServer from '../../../public/assets/DiscordServer.png'
export const  ContainerScroll = ({
  titleComponent,
  children,
  discordRef,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  discordRef?: React.RefObject<HTMLDivElement>;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollYProgress = useLenisScroll(containerRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.6, 0.9] : [1.1, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.6, 1], [85, -1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [...scaleDimensions(), scaleDimensions()[1]]);
  const translate = useTransform(scrollYProgress, [0, 1, 1], [0, -100, -150]);

  return (
    <div
      className=" flex items-center justify-center  p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} discordRef={discordRef}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  discordRef,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  discordRef?: React.RefObject<HTMLDivElement>;
}) => {
  const [activeServer, setActiveServer] = useState(0);
  const [activeChannel, setActiveChannel] = useState('general');
  const [showMembers, setShowMembers] = useState(false);
  const [message, setMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number, user: string, content: string, timestamp: string}>>([]);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Function to send a message
  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: Date.now(),
        user: "You",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
      // Scroll to bottom after message is sent
      setTimeout(scrollToBottom, 100);
    }
  };

  const servers = [
    { name: 'Gaming Hub', initial: 'G', color: '#ff6b6b', notifications: 3 },
    { name: 'Dev Team', initial: 'D', color: '#4ecdc4', notifications: 0 },
    { name: 'Friends', initial: 'F', color: '#45b7d1', notifications: 12 }
  ];

  const channels = {
    'Gaming Hub': {
      text: [
        { name: 'general', notifications: 0 },
        { name: 'random', notifications: 5 },
        { name: 'announcements', notifications: 1 },
        { name: 'memes', notifications: 0 }
      ],
      voice: [
        { name: 'General', users: 3, limit: 10 },
        { name: 'Gaming Session', users: 7, limit: 10 },
        { name: 'AFK', users: 1, limit: null }
      ]
    },
    'Dev Team': {
      text: [
        { name: 'general', notifications: 0 },
        { name: 'code-review', notifications: 3 },
        { name: 'bugs', notifications: 7 },
        { name: 'resources', notifications: 0 }
      ],
      voice: [
        { name: 'Daily Standup', users: 5, limit: 15 },
        { name: 'Pair Programming', users: 2, limit: 4 }
      ]
    },
    'Friends': {
      text: [
        { name: 'general', notifications: 12 },
        { name: 'photos', notifications: 3 },
        { name: 'events', notifications: 2 }
      ],
      voice: [
        { name: 'Hangout', users: 8, limit: 20 },
        { name: 'Music', users: 3, limit: 10 }
      ]
    }
  };

  return (
    <motion.div
      ref={discordRef}
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-4 mx-auto  w-full  bg-[#222222] rounded-[40px] shadow-2xl relative"
    >
      {/* Dark purple background glow - larger and behind */}

      {/* Bright purple glowing gradient at top border */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[30px] z-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(88, 28, 135, 0.4) 20%, rgba(255, 255, 255, 0.9) 50%, rgba(88, 28, 135, 0.4) 80%, transparent 100%)",
          boxShadow: "0 -10px 30px rgba(88, 28, 135, 0.8), 0 -20px 50px rgba(88, 28, 135, 0.6), 0 -30px 70px rgba(88, 28, 135, 0.4), 0 -40px 90px rgba(88, 28, 135, 0.2)"
        }}
      />
     <Image src={DiscordServer} alt="Discord Logo" />
    </motion.div>
  );
};
