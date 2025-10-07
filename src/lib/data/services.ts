import { 
  Database, 
  Cloud, 
  Heart, 
  Factory, 
  Network, 
  Brain, 
  Mic, 
  Sparkles, 
  MessageSquare, 
  Languages, 
  Shield, 
  TrendingUp 
} from 'lucide-react';

export interface Service {
  category: string;
  icon: React.ElementType;
  image: string;
  description: string;
  features: string[];
  detailedContent: {
    overview: string;
    benefits: string[];
    technologies: string[];
    useCases: string[];
    implementation: string;
  };
}

export const services: Service[] = [
  {
    category: "ERP Solutions",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    description: "Comprehensive enterprise resource planning systems tailored to your business needs.",
    features: ["Custom ERP Development", "System Integration", "Data Migration", "Process Automation", "Financial Management", "Inventory Control"],
    detailedContent: {
      overview: "Our ERP solutions integrate all core business processes into a unified system, providing real-time visibility and control over your entire organization. From finance to operations, our platform scales with your business needs.",
      benefits: [
        "Reduce operational costs by up to 30%",
        "Improve data accuracy and eliminate silos",
        "Enhance decision-making with real-time insights",
        "Streamline workflows and automate processes",
        "Ensure regulatory compliance and audit trails",
        "Scale seamlessly as your business grows"
      ],
      technologies: ["SAP", "Oracle NetSuite", "Microsoft Dynamics", "Odoo", "Custom Solutions", "Cloud Integration"],
      useCases: [
        "Manufacturing companies managing complex supply chains",
        "Retail businesses tracking inventory across multiple locations",
        "Service companies managing projects and resources",
        "Healthcare organizations coordinating patient care"
      ],
      implementation: "Our implementation process includes thorough business analysis, system design, data migration, user training, and ongoing support. We ensure minimal disruption to your operations while maximizing the benefits of your new ERP system."
    }
  },
  {
    category: "DevOps Services",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop&crop=center",
    description: "Streamline your development and deployment processes with modern DevOps practices.",
    features: ["CI/CD Pipelines", "Cloud Infrastructure", "Container Orchestration", "Monitoring & Analytics", "Security Integration", "Performance Optimization"],
    detailedContent: {
      overview: "Transform your development lifecycle with our comprehensive DevOps solutions. We implement automated pipelines, cloud-native architectures, and monitoring systems that enable rapid, reliable software delivery.",
      benefits: [
        "Reduce deployment time from hours to minutes",
        "Increase deployment frequency by 200x",
        "Achieve 99.9% uptime with automated monitoring",
        "Lower infrastructure costs through optimization",
        "Improve security with automated compliance checks",
        "Enable faster time-to-market for new features"
      ],
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "Terraform", "AWS/Azure/GCP", "Prometheus", "Grafana"],
      useCases: [
        "Startups scaling their infrastructure rapidly",
        "Enterprise companies modernizing legacy systems",
        "SaaS platforms requiring high availability",
        "E-commerce sites handling traffic spikes"
      ],
      implementation: "We start with an assessment of your current infrastructure, design a tailored DevOps strategy, implement automated pipelines, and provide training to your team. Our approach ensures smooth transition and continuous improvement."
    }
  },
  {
    category: "Health Care Solutions",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop&crop=center",
    description: "HIPAA-compliant healthcare technology solutions for modern medical practices.",
    features: ["Patient Management Systems", "Telemedicine Platforms", "Medical Records", "Compliance Tools", "Appointment Scheduling", "Billing Integration"],
    detailedContent: {
      overview: "Our healthcare systems are designed with patient care and regulatory compliance at the forefront. We provide comprehensive solutions that improve patient outcomes while reducing administrative burden on healthcare providers.",
      benefits: [
        "Improve patient care coordination",
        "Reduce medical errors by 40%",
        "Streamline billing and reduce claim denials",
        "Enhance patient engagement and satisfaction",
        "Ensure HIPAA and regulatory compliance",
        "Increase operational efficiency by 35%"
      ],
      technologies: ["HL7 FHIR", "Epic Integration", "Cerner", "Allscripts", "Telehealth APIs", "Blockchain for Security"],
      useCases: [
        "Hospitals managing complex patient workflows",
        "Clinics streamlining appointment scheduling",
        "Telemedicine platforms connecting patients and providers",
        "Specialty practices managing specific treatment protocols"
      ],
      implementation: "Our healthcare implementations follow strict security protocols and compliance requirements. We work closely with medical staff to ensure the system enhances rather than disrupts patient care workflows."
    }
  },
  {
    category: "Manufacturing Industry Support",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop&crop=center",
    description: "Industrial IoT and automation solutions for manufacturing excellence.",
    features: ["Production Monitoring", "Quality Control Systems", "Supply Chain Management", "Predictive Maintenance", "Real-time Analytics", "Equipment Integration"],
    detailedContent: {
      overview: "Our smart manufacturing solutions leverage IoT, AI, and advanced analytics to create intelligent production environments. We help manufacturers achieve Industry 4.0 transformation with connected, automated systems.",
      benefits: [
        "Increase production efficiency by 25%",
        "Reduce equipment downtime by 50%",
        "Improve product quality and reduce defects",
        "Optimize inventory levels and reduce waste",
        "Enable predictive maintenance strategies",
        "Enhance worker safety and compliance"
      ],
      technologies: ["IoT Sensors", "SCADA Systems", "MES Integration", "Machine Learning", "Digital Twins", "Edge Computing"],
      useCases: [
        "Automotive manufacturers optimizing assembly lines",
        "Food processing plants ensuring quality control",
        "Pharmaceutical companies maintaining compliance",
        "Electronics manufacturers managing complex supply chains"
      ],
      implementation: "We begin with a comprehensive assessment of your manufacturing processes, design custom solutions that integrate with existing systems, and provide training to ensure successful adoption across your organization."
    }
  },
  {
    category: "Micro-services Architecture",
    icon: Network,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop&crop=center",
    description: "Scalable and maintainable microservices architecture for enterprise applications.",
    features: ["Service Design", "API Gateway", "Load Balancing", "Service Mesh", "Container Deployment", "Distributed Tracing"],
    detailedContent: {
      overview: "Transform monolithic applications into scalable, maintainable microservices architectures. Our approach enables independent development, deployment, and scaling of application components while maintaining system reliability.",
      benefits: [
        "Enable independent team development",
        "Improve system scalability and performance",
        "Reduce deployment risks and downtime",
        "Enhance fault tolerance and resilience",
        "Accelerate feature development cycles",
        "Optimize resource utilization and costs"
      ],
      technologies: ["Docker", "Kubernetes", "Istio", "Kong API Gateway", "Apache Kafka", "Consul", "Jaeger", "Prometheus"],
      useCases: [
        "E-commerce platforms handling high traffic",
        "Financial services requiring high availability",
        "Media streaming services scaling globally",
        "SaaS applications with diverse feature sets"
      ],
      implementation: "We analyze your existing architecture, identify service boundaries, implement gradual migration strategies, and establish monitoring and governance practices to ensure successful microservices adoption."
    }
  },
  {
    category: "AI & Advanced Technologies",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center",
    description: "Cutting-edge AI solutions that transform data into actionable business insights.",
    features: ["Machine Learning Models", "Predictive Analytics", "Computer Vision", "Natural Language Processing", "Automated Decision Making", "Model Deployment"],
    detailedContent: {
      overview: "Harness the power of artificial intelligence to transform your business operations. Our AI solutions range from predictive analytics to computer vision, helping you automate processes and gain competitive advantages.",
      benefits: [
        "Increase operational efficiency by 40%",
        "Improve decision accuracy with data-driven insights",
        "Automate repetitive tasks and reduce costs",
        "Enhance customer experiences with personalization",
        "Identify new revenue opportunities",
        "Gain competitive advantage through innovation"
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Hugging Face", "MLflow", "Kubeflow", "AWS SageMaker"],
      useCases: [
        "Retail companies optimizing inventory and pricing",
        "Financial institutions detecting fraud",
        "Healthcare providers improving diagnostics",
        "Manufacturing companies predicting equipment failures"
      ],
      implementation: "Our AI implementation process includes data assessment, model development, testing and validation, deployment, and continuous monitoring. We ensure your AI solutions deliver measurable business value."
    }
  },
  {
    category: "Voice AI Solutions",
    icon: Mic,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&h=300&fit=crop&crop=center",
    description: "Intelligent voice interfaces and speech recognition systems for enhanced user experiences.",
    features: ["Speech Recognition", "Voice Synthesis", "Natural Language Understanding", "Voice Biometrics", "Multi-language Support", "Real-time Processing"],
    detailedContent: {
      overview: "Create natural, intuitive voice interfaces that enhance user experiences across devices and platforms. Our voice AI solutions enable hands-free interaction, accessibility improvements, and innovative user interfaces.",
      benefits: [
        "Improve accessibility for all users",
        "Enable hands-free operation in various environments",
        "Reduce user interface complexity",
        "Enhance customer service automation",
        "Support multiple languages and dialects",
        "Provide secure voice-based authentication"
      ],
      technologies: ["Google Speech API", "Amazon Alexa", "Azure Cognitive Services", "Whisper", "Wav2Vec", "SpeechBrain"],
      useCases: [
        "Smart home devices and IoT applications",
        "Customer service and call center automation",
        "Automotive voice control systems",
        "Healthcare applications for hands-free documentation"
      ],
      implementation: "We design voice interfaces tailored to your specific use cases, integrate with existing systems, optimize for accuracy and performance, and provide ongoing improvements based on user feedback."
    }
  },
  {
    category: "Generative AI",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&h=300&fit=crop&crop=center",
    description: "Advanced generative AI solutions for content creation and creative automation.",
    features: ["Content Generation", "Image Synthesis", "Code Generation", "Creative Automation", "Personalization", "Multi-modal AI"],
    detailedContent: {
      overview: "Leverage the latest in generative AI technology to create content, automate creative processes, and build innovative applications. Our solutions span text, image, code, and multi-modal generation capabilities.",
      benefits: [
        "Accelerate content creation by 10x",
        "Reduce creative production costs",
        "Enable personalized content at scale",
        "Automate repetitive creative tasks",
        "Generate diverse, high-quality outputs",
        "Enhance human creativity with AI assistance"
      ],
      technologies: ["GPT-4", "DALL-E", "Midjourney", "Stable Diffusion", "CodeT5", "LangChain", "Vector Databases"],
      useCases: [
        "Marketing agencies creating personalized campaigns",
        "E-commerce platforms generating product descriptions",
        "Software companies automating code generation",
        "Media companies producing diverse content"
      ],
      implementation: "We develop custom generative AI solutions tailored to your content needs, implement quality control measures, ensure ethical AI practices, and provide tools for human oversight and refinement."
    }
  },
  {
    category: "Chat AI & Chatbots",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop&crop=center",
    description: "Intelligent conversational AI systems for customer support and engagement.",
    features: ["Natural Language Processing", "Multi-channel Support", "Intent Recognition", "Context Management", "Integration APIs", "Analytics Dashboard"],
    detailedContent: {
      overview: "Build sophisticated conversational AI systems that understand context, maintain engaging dialogues, and provide valuable customer support across multiple channels. Our chatbots learn and improve over time.",
      benefits: [
        "Reduce customer support costs by 60%",
        "Provide 24/7 customer assistance",
        "Improve response times and satisfaction",
        "Handle multiple conversations simultaneously",
        "Gather valuable customer insights",
        "Scale support operations efficiently"
      ],
      technologies: ["Dialogflow", "Microsoft Bot Framework", "Rasa", "OpenAI GPT", "Amazon Lex", "IBM Watson"],
      useCases: [
        "E-commerce platforms handling customer inquiries",
        "Financial services providing account support",
        "Healthcare systems scheduling appointments",
        "Educational platforms offering student assistance"
      ],
      implementation: "We design conversational flows, train AI models on your specific domain, integrate with existing systems, and continuously optimize based on user interactions and feedback."
    }
  },
  {
    category: "Multi-language Support",
    icon: Languages,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    description: "Comprehensive internationalization and localization solutions for global reach.",
    features: ["Translation Management", "Cultural Adaptation", "RTL Support", "Currency Localization", "Date/Time Formatting", "Content Management"],
    detailedContent: {
      overview: "Expand your global reach with comprehensive multi-language support solutions. We handle everything from translation management to cultural adaptation, ensuring your applications resonate with users worldwide.",
      benefits: [
        "Reach global markets effectively",
        "Improve user experience across cultures",
        "Increase conversion rates in international markets",
        "Maintain brand consistency globally",
        "Reduce time-to-market for new regions",
        "Ensure cultural sensitivity and compliance"
      ],
      technologies: ["i18next", "React Intl", "Angular i18n", "Vue I18n", "Translation APIs", "Content Management Systems"],
      useCases: [
        "E-commerce platforms expanding internationally",
        "SaaS applications serving global customers",
        "Educational platforms reaching diverse audiences",
        "Healthcare systems supporting multilingual patients"
      ],
      implementation: "We analyze your target markets, implement internationalization frameworks, manage translation workflows, and provide ongoing localization support to ensure consistent global experiences."
    }
  },
  {
    category: "Cyber Security",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center",
    description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",
    features: ["Threat Detection", "Vulnerability Assessment", "Security Audits", "Compliance Management", "Incident Response", "Security Training"],
    detailedContent: {
      overview: "Protect your organization with comprehensive cybersecurity solutions that address modern threats. Our approach combines advanced technology, best practices, and continuous monitoring to safeguard your digital assets.",
      benefits: [
        "Prevent data breaches and cyber attacks",
        "Ensure regulatory compliance",
        "Protect customer trust and reputation",
        "Reduce security-related downtime",
        "Enable secure remote work",
        "Minimize financial losses from security incidents"
      ],
      technologies: ["SIEM Tools", "Endpoint Protection", "Firewalls", "Encryption", "Multi-factor Authentication", "Security Orchestration"],
      useCases: [
        "Financial institutions protecting sensitive data",
        "Healthcare organizations ensuring HIPAA compliance",
        "E-commerce platforms securing customer information",
        "Government agencies protecting classified information"
      ],
      implementation: "We conduct comprehensive security assessments, implement layered security measures, provide staff training, and establish ongoing monitoring and incident response procedures."
    }
  },
  {
    category: "Business Intelligence",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
    description: "Transform your data into actionable insights with advanced business intelligence solutions.",
    features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Report Automation", "Data Integration", "Performance Metrics"],
    detailedContent: {
      overview: "Turn your data into a competitive advantage with our comprehensive business intelligence solutions. We help you collect, analyze, and visualize data to make informed decisions and drive business growth.",
      benefits: [
        "Make data-driven decisions confidently",
        "Identify trends and opportunities early",
        "Improve operational efficiency",
        "Reduce costs through optimization",
        "Enhance customer understanding",
        "Accelerate business growth"
      ],
      technologies: ["Power BI", "Tableau", "Qlik Sense", "Apache Spark", "Elasticsearch", "Data Warehousing"],
      useCases: [
        "Retail companies analyzing customer behavior",
        "Manufacturing firms optimizing production",
        "Financial services managing risk",
        "Healthcare organizations improving patient outcomes"
      ],
      implementation: "We assess your data landscape, design analytics architecture, implement visualization tools, and provide training to ensure your team can leverage insights effectively."
    }
  }
];