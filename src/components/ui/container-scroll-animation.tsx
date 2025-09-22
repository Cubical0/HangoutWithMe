"use client";
import React, { useRef, useState, useEffect } from "react";
import { useTransform, motion, MotionValue, useMotionValue } from 'framer-motion';
import { useLenisScroll } from '@/hooks/useLenisScroll';

export const ContainerScroll = ({
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

  const rotate = useTransform(scrollYProgress, [0, 0.6, 1], [85, -4, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.9, 1], [...scaleDimensions(), scaleDimensions()[1]]);
  const translate = useTransform(scrollYProgress, [0, 1, 1], [0, -100, -150]);

  // Debug: Log scroll progress (remove this in production)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log('Scroll progress:', value);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div
      className=" flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
=
      <div
        className="py-10 md:py-40 w-full relative"
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
      className="max-w-5xl -mt-4 mx-auto h-[35rem] md:h-[40rem] w-full  bg-[#222222] rounded-[30px] shadow-2xl relative"
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
      <div 
        className="h-full w-full overflow-hidden rounded-[30px]"
        style={{
          backgroundColor: "#36393f",
          border: "1px solid #202225",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.24)"
        }}
      >
        {/* Discord title bar */}
        <div 
          className="w-full h-8 flex items-center justify-between px-2"
          style={{
            backgroundColor: "#202225",
            borderBottom: "1px solid #40444b"
          }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            <span className="text-gray-300 text-xs font-medium">Discord</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 flex items-center justify-center hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-400 text-xs">−</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center hover:bg-gray-600 rounded cursor-pointer">
              <span className="text-gray-400 text-xs">□</span>
            </div>
            <div className="w-4 h-4 flex items-center justify-center hover:bg-red-600 rounded cursor-pointer">
              <span className="text-gray-400 text-xs">×</span>
            </div>
          </div>
        </div>

        {/* Mobile overlay */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Discord main interface */}
        <div className="flex relative" style={{ height: 'calc(100% - 2rem)' }}>
          {/* Server sidebar */}
          <div 
            className="hidden md:flex w-16 flex-col items-center py-3 space-y-2"
            style={{ backgroundColor: "#202225" }}
          >
            {/* Discord Home button */}
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:rounded-2xl relative group"
              style={{ backgroundColor: "#5865f2" }}
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              {/* Active indicator */}
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"></div>
            </div>
            
            {/* Separator */}
            <div className="w-8 h-0.5 bg-gray-600 rounded"></div>
            
            {/* Server icons */}
            {servers.map((server, i) => (
              <div key={i} className="relative">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:rounded-2xl relative group ${
                    activeServer === i ? 'rounded-2xl' : ''
                  }`}
                  style={{ backgroundColor: server.color }}
                  onClick={() => setActiveServer(i)}
                >
                  <span className="text-white font-bold text-lg">{server.initial}</span>
                  {/* Active/Hover indicator */}
                  <div className={`absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 bg-white rounded-r-full transition-all duration-200 ${
                    activeServer === i ? 'h-8' : 'h-0 group-hover:h-5'
                  }`}></div>
                </div>
                {/* Notification badge */}
                {server.notifications > 0 && (
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{server.notifications > 9 ? '9+' : server.notifications}</span>
                  </div>
                )}
              </div>
            ))}
            
            {/* Add server button */}
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:rounded-2xl hover:bg-green-600"
              style={{ backgroundColor: "#36393f" }}
            >
              <span className="text-green-500 text-xl font-bold">+</span>
            </div>
          </div>

          {/* Channel sidebar */}
          <div 
            className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex w-full md:w-60 flex-col absolute md:relative z-20 md:z-auto`}
            style={{ backgroundColor: "#2f3136" }}
          >
            {/* Server header */}
            <div 
              className="h-12 flex items-center justify-between px-4 border-b cursor-pointer hover:bg-gray-700 transition-colors"
              style={{ borderColor: "#202225" }}
            >
              <span className="text-white font-semibold text-sm">{servers[activeServer].name}</span>
              <div className="flex items-center space-x-1">
                {/* Mobile close button */}
                <button 
                  className="md:hidden p-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Boost badge */}
                <div className="bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                  BOOST
                </div>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Channels */}
            <div className="flex-1 p-2 space-y-0.5 overflow-y-auto">
              <div className="flex items-center justify-between px-2 py-1">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Text Channels</div>
                <svg className="w-4 h-4 text-gray-400 hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              {channels[servers[activeServer].name as keyof typeof channels].text.map((channel) => (
                <div 
                  key={channel.name}
                  className={`flex items-center justify-between px-2 py-1 rounded hover:bg-gray-600 cursor-pointer group transition-colors ${
                    activeChannel === channel.name ? 'bg-gray-600 text-white' : ''
                  }`}
                  onClick={() => {
                    setActiveChannel(channel.name);
                    setIsMobileMenuOpen(false); // Close mobile menu when channel is selected
                  }}
                >
                  <div className="flex items-center">
                    <span className="text-gray-500 mr-2">#</span>
                    <span className={`text-sm ${activeChannel === channel.name ? 'text-white' : 'text-gray-300'}`}>{channel.name}</span>
                  </div>
                  {channel.notifications > 0 && (
                    <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{channel.notifications}</span>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex items-center justify-between px-2 py-1 mt-4">
                <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Voice Channels</div>
                <svg className="w-4 h-4 text-gray-400 hover:text-gray-300 cursor-pointer" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </div>
              {channels[servers[activeServer].name as keyof typeof channels].voice.map((channel) => (
                <div 
                  key={channel.name}
                  className="flex items-center justify-between px-2 py-1 rounded hover:bg-gray-600 cursor-pointer group transition-colors"
                >
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.776L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.776z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300 text-sm">{channel.name}</span>
                  </div>
                  <div className="text-gray-400 text-xs">
                    {channel.users}{channel.limit ? `/${channel.limit}` : ''}
                  </div>
                </div>
              ))}
            </div>
            
            {/* User area */}
            <div 
              className="h-12 flex items-center px-2 border-t"
              style={{ borderColor: "#202225", backgroundColor: "#292b2f" }}
            >
              <div className="relative mr-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold">G</span>
                </div>
                {/* Online status */}
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-xs font-medium truncate">GamerPro</div>
                <div className="text-gray-400 text-xs truncate">Playing Valorant</div>
              </div>
              <div className="flex space-x-1">
                <div className="w-6 h-6 flex items-center justify-center hover:bg-gray-600 rounded cursor-pointer">
                  <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Main content area */}
<div className="flex-1 flex flex-col w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]">
            {/* Channel header */}
            <div 
              className="h-12 flex items-center justify-between px-4 border-b flex-shrink-0"
              style={{ borderColor: "#202225" }}
            >
              <div className="flex items-center">
                {/* Mobile hamburger menu */}
                <button 
                  className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors mr-2"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <span className="text-gray-500 mr-2">#</span>
                <span className="text-white font-semibold">{activeChannel}</span>
                <div className="hidden lg:block ml-4 text-gray-400 text-sm">
                  {activeChannel === 'general' && `Welcome to ${servers[activeServer].name}! Share your epic moments here 🎮`}
                  {activeChannel === 'random' && 'Random discussions and off-topic conversations 💬'}
                  {activeChannel === 'announcements' && 'Important server announcements 📢'}
                  {activeChannel === 'memes' && 'Share your best memes and funny content 😂'}
                  {activeChannel === 'code-review' && 'Code reviews and technical discussions 💻'}
                  {activeChannel === 'bugs' && 'Bug reports and issue tracking 🐛'}
                  {activeChannel === 'resources' && 'Useful resources and documentation 📚'}
                  {activeChannel === 'photos' && 'Share your photos and memories 📸'}
                  {activeChannel === 'events' && 'Upcoming events and meetups 📅'}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {/* Thread button */}
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Notification bell */}
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </button>
                {/* Pinned messages */}
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Members list */}
                <button 
                  className={`p-2 hover:text-white hover:bg-gray-600 rounded transition-colors ${
                    showMembers ? 'text-white bg-gray-600' : 'text-gray-400'
                  }`}
                  onClick={() => setShowMembers(!showMembers)}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </button>
                {/* Search */}
                <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Content area */}
            <div 
              className="flex-1 flex flex-col"
              style={{
                backgroundColor: "#36393f",
                color: "#dcddde"
              }}
            >
              {/* Chat messages */}
              <div ref={messagesContainerRef} className="flex-1 flex flex-col p-4 overflow-y-auto space-y-3" style={{ minHeight: 0, maxHeight: 'calc(100vh - 200px)' }}>
                {/* Welcome message */}
                <div className="w-full flex flex-col items-center justify-center py-4 min-h-[120px]">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3">
                    <span className="text-white text-2xl font-bold">#</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">Welcome to #{activeChannel}!</h3>
                  <p className="text-gray-400 text-sm text-center max-w-xs">This is the start of the #{activeChannel} channel.</p>
                </div>

                {/* Chat messages */}
                {[
                  {
                    user: "ProGamer2024",
                    avatar: "P",
                    color: "#ff6b6b",
                    time: "Today at 2:30 PM",
                    message: "Hey everyone! Just got the new RTX 4090, this thing is a beast! 🔥",
                    reactions: [{ emoji: "🔥", count: 5 }, { emoji: "💯", count: 3 }]
                  },
                  {
                    user: "DevMaster",
                    avatar: "D",
                    color: "#4ecdc4",
                    time: "Today at 2:32 PM",
                    message: "Nice! What games are you testing it on?",
                    reactions: []
                  },
                  {
                    user: "ProGamer2024",
                    avatar: "P",
                    color: "#ff6b6b",
                    time: "Today at 2:33 PM",
                    message: "Cyberpunk 2077 at 4K with RTX on - getting solid 60fps! Finally can play it properly 😎",
                    reactions: [{ emoji: "🎮", count: 7 }]
                  },
                  {
                    user: "TechNinja",
                    avatar: "T",
                    color: "#45b7d1",
                    time: "Today at 2:35 PM",
                    message: "That's insane! I'm still on my 3070 but it's holding up pretty well",
                    reactions: []
                  },
                  {
                    user: "GameMaster",
                    avatar: "G",
                    color: "#9b59b6",
                    time: "Today at 2:40 PM",
                    message: "Anyone up for some Valorant later? Need a full squad for ranked 🎯",
                    reactions: [{ emoji: "✋", count: 4 }, { emoji: "🎯", count: 2 }]
                  },
                  {
                    user: "CodeWizard",
                    avatar: "C",
                    color: "#e67e22",
                    time: "Today at 2:42 PM",
                    message: "I'm down! What rank are you guys?",
                    reactions: []
                  }
                ].map((msg, i) => (
                  <div key={i} className="flex space-x-3 hover:bg-gray-700 hover:bg-opacity-30 px-2 py-1 rounded group transition-colors">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: msg.color }}
                    >
                      <span className="text-white font-semibold text-sm">{msg.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-white font-medium hover:underline cursor-pointer text-sm">{msg.user}</span>
                        <span className="text-gray-400 text-xs">{msg.time}</span>
                      </div>
                      <p className="text-gray-300 text-sm break-words leading-relaxed">{msg.message}</p>
                      {msg.reactions.length > 0 && (
                        <div className="flex space-x-1 mt-2">
                          {msg.reactions.map((reaction, j) => (
                            <button 
                              key={j}
                              className="flex items-center space-x-1 bg-gray-600 hover:bg-gray-500 rounded px-2 py-1 text-xs transition-colors"
                            >
                              <span>{reaction.emoji}</span>
                              <span className="text-gray-300">{reaction.count}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* Message actions (visible on hover) */}
                    <div className="opacity-0 group-hover:opacity-100 flex items-start space-x-1 transition-opacity">
                      <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button className="p-1 text-gray-400 hover:text-white hover:bg-gray-600 rounded transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                {/* User's sent messages */}
                {messages.map((msg) => (
                  <div key={msg.id} className="flex space-x-3 hover:bg-gray-700 hover:bg-opacity-30 px-2 py-1 rounded group transition-colors">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-500"
                    >
                      <span className="text-white font-semibold text-sm">Y</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-white font-medium hover:underline cursor-pointer text-sm">{msg.user}</span>
                        <span className="text-gray-400 text-xs">Today at {msg.timestamp}</span>
                      </div>
                      <p className="text-gray-300 text-sm break-words leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div className="flex items-center space-x-2 text-gray-400 text-xs px-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span>PixelArtist is typing...</span>
                </div>

                {/* Custom content area */}
                <div className="mt-6">
                  {children}
                </div>
              </div>

              {/* Message input - Always pinned at bottom */}
              <div className="flex-shrink-0 p-3 border-t border-gray-600 sticky bottom-0 z-10" style={{ backgroundColor: "#36393f" }}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={`Message #${activeChannel}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        sendMessage();
                      }
                    }}
                    className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 pr-16 md:pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 text-sm"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-1 md:space-x-2">
                    {/* Gift button - hidden on mobile */}
                    <button className="hidden md:block text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd" />
                        <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                      </svg>
                    </button>
                    {/* GIF button - hidden on mobile */}
                    <button className="hidden md:block text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </button>
                    {/* Emoji button */}
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <span className="text-lg">😀</span>
                    </button>
                    {/* Send button */}
                    <button 
                      onClick={sendMessage}
                      className="text-blue-500 hover:text-blue-400 transition-colors"
                      disabled={!message.trim()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Members sidebar */}
          {showMembers && (
            <div 
              className="hidden lg:flex w-60 flex-col border-l"
              style={{ backgroundColor: "#2f3136", borderColor: "#202225" }}
            >
              {/* Members header */}
              <div className="p-4 border-b" style={{ borderColor: "#202225" }}>
                <h3 className="text-white font-semibold text-sm">Members — 47</h3>
              </div>
              
              {/* Members list */}
              <div className="flex-1 p-2 space-y-4 overflow-y-auto">
                {/* Online members */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide px-2 py-1">
                    Online — 12
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: 'GamerPro', status: 'Playing Valorant', avatar: 'G', color: '#9b59b6', role: 'Owner' },
                      { name: 'ProGamer2024', status: 'Online', avatar: 'P', color: '#ff6b6b', role: 'Admin' },
                      { name: 'DevMaster', status: 'Coding', avatar: 'D', color: '#4ecdc4', role: 'Moderator' },
                      { name: 'TechNinja', status: 'Online', avatar: 'T', color: '#45b7d1', role: 'Member' },
                      { name: 'GameMaster', status: 'In Voice', avatar: 'G', color: '#9b59b6', role: 'Member' },
                      { name: 'CodeWizard', status: 'Online', avatar: 'C', color: '#e67e22', role: 'Member' }
                    ].map((member, i) => (
                      <div key={i} className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer group transition-colors">
                        <div className="relative mr-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: member.color }}
                          >
                            <span className="text-white text-sm font-semibold">{member.avatar}</span>
                          </div>
                          {/* Status indicator */}
                          <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-gray-800 ${
                            member.status === 'In Voice' ? 'bg-green-500' : 
                            member.status === 'Online' ? 'bg-green-500' : 
                            'bg-yellow-500'
                          }`}></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <span className={`text-sm font-medium truncate ${
                              member.role === 'Owner' ? 'text-red-400' :
                              member.role === 'Admin' ? 'text-orange-400' :
                              member.role === 'Moderator' ? 'text-blue-400' :
                              'text-gray-300'
                            }`}>
                              {member.name}
                            </span>
                            {member.role === 'Owner' && <span className="text-red-400 text-xs">👑</span>}
                            {member.role === 'Admin' && <span className="text-orange-400 text-xs">🛡️</span>}
                            {member.role === 'Moderator' && <span className="text-blue-400 text-xs">🔨</span>}
                          </div>
                          <div className="text-gray-400 text-xs truncate">{member.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Offline members */}
                <div>
                  <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide px-2 py-1">
                    Offline — 35
                  </div>
                  <div className="space-y-1">
                    {[
                      { name: 'PixelArtist', avatar: 'P', color: '#95a5a6' },
                      { name: 'SoundMixer', avatar: 'S', color: '#95a5a6' },
                      { name: 'WebDev', avatar: 'W', color: '#95a5a6' }
                    ].map((member, i) => (
                      <div key={i} className="flex items-center px-2 py-1 rounded hover:bg-gray-600 cursor-pointer group transition-colors opacity-50">
                        <div className="relative mr-3">
                          <div 
                            className="w-8 h-8 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: member.color }}
                          >
                            <span className="text-white text-sm font-semibold">{member.avatar}</span>
                          </div>
                          {/* Offline indicator */}
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gray-500 rounded-full border-2 border-gray-800"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-medium text-gray-400 truncate">{member.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
