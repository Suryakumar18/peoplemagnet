"use client"

import { type JSX, useEffect, useState, useRef } from "react"
import { motion, type Variants, useScroll, useAnimation } from "framer-motion"
import {
  Facebook,
  Instagram,
  Search,
  Users,
  TrendingUp,
  Target,
  UserPlus,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Lightbulb,
  MessageCircle,
  Zap,
  Award,
  Globe,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  ArrowDown,
  type LucideIcon,
} from "lucide-react"

// Types
interface ServiceItem {
  icon: LucideIcon[]
  title: string
  description: string
  color: string
}

interface ValueItem {
  icon: LucideIcon
  title: string
  description: string
}

interface WhatWeDoItem {
  icon: LucideIcon
  title: string
  description: string
}

interface JourneyStep {
  step: number
  title: string
  icon: LucideIcon
  color: string
  description: string
  features: string[]
}

interface ProcessStep {
  step: number
  title: string
  description: string
  color: string
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

// Data arrays with proper typing
const services: ServiceItem[] = [
  {
    icon: [Facebook, Instagram],
    title: "Meta Ads",
    description: "Reach and convert your ideal audience across Facebook and Instagram with data-driven campaigns.",
    color: "from-blue-500 to-pink-500",
  },
  {
    icon: [Search],
    title: "Google Ads",
    description: "Capture high-intent leads with precision-targeted search and display advertising.",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: [Globe],
    title: "Social Media Marketing",
    description: "Build your brand and engage your audience across all major social platforms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: [TrendingUp],
    title: "CRO - Conversion Rate Optimization",
    description: "Turn more visitors into customers with strategic UX and funnel improvements.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: [BarChart3],
    title: "Sales Funnel & Marketing",
    description: "Design high-converting funnels that guide leads from interest to purchase.",
    color: "from-yellow-500 to-red-500",
  },
  {
    icon: [UserPlus],
    title: "Lead Generation",
    description: "Fill your pipeline with qualified leads ready to convert.",
    color: "from-indigo-500 to-purple-500",
  },
]

const values: ValueItem[] = [
  {
    icon: TrendingUp,
    title: "Impact-Driven Growth",
    description:
      "We're here to help you do more than just generate leads - we help you enroll students, scale programs, and transform education through results that matter.",
  },
  {
    icon: Users,
    title: "Student-Centric Thinking",
    description:
      "Just like you, we put learners at the heart of every strategy. Our campaigns are designed to attract, engage, and convert the right students for your courses.",
  },
  {
    icon: BarChart3,
    title: "Data-Led Decisions",
    description: "We analyze every click, scroll, and signup to optimize campaigns for maximum performance.",
  },
  {
    icon: Lightbulb,
    title: "Creative That Connects",
    description:
      "In EdTech, storytelling matters. We craft compelling, student-focused campaigns that speak to aspirations and drive real enrollment outcomes.",
  },
  {
    icon: MessageCircle,
    title: "Clarity & Communication",
    description:
      "We believe in radical transparency. From budget usage to performance updates, we keep you informed every step of the way.",
  },
]

const journeySteps: JourneyStep[] = [
  {
    step: 1,
    title: "Strategic Discovery Call",
    icon: Phone,
    color: "from-orange-400 to-orange-600",
    description:
      "We dive deep into your business goals, target audience, and current challenges. This 60-minute session helps us understand your unique position in the EdTech market and identify the biggest opportunities for growth.",
    features: ["Business audit", "Competitor analysis", "Goal setting", "Success metrics definition"],
  },
  {
    step: 2,
    title: "Strategic Onboarding",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    description:
      "We set up all necessary tools, tracking systems, and integrations. Our team creates detailed customer personas and maps out the entire student journey from awareness to enrollment.",
    features: ["Tool setup & integration", "Tracking implementation", "Persona development", "Journey mapping"],
  },
  {
    step: 3,
    title: "Go-To-Market Strategy",
    icon: Target,
    color: "from-red-400 to-red-600",
    description:
      "Based on our research, we develop a comprehensive marketing strategy tailored to your EdTech niche. This includes channel selection, messaging framework, and campaign roadmap.",
    features: ["Channel strategy", "Messaging framework", "Creative concepts", "Campaign timeline"],
  },
  {
    step: 4,
    title: "Quality Lead Generation",
    icon: UserPlus,
    color: "from-orange-600 to-red-500",
    description:
      "We launch targeted campaigns across Meta, Google, and other platforms to attract high-intent prospects. Our focus is on quality over quantity - bringing you leads that are ready to engage and convert.",
    features: ["Campaign launch", "A/B testing", "Lead qualification", "Performance monitoring"],
  },
  {
    step: 5,
    title: "Sales & Scale",
    icon: TrendingUp,
    color: "from-red-500 to-orange-500",
    description:
      "With qualified leads flowing in, we optimize the entire funnel for maximum conversions. We continuously refine targeting, messaging, and user experience to scale your enrollments exponentially.",
    features: ["Conversion optimization", "Funnel refinement", "Scale planning", "ROI maximization"],
  },
]

const whatWeDo: WhatWeDoItem[] = [
  {
    icon: Zap,
    title: "Build Your Growth Engine",
    description:
      "We create high-converting marketing funnels tailored to the student journey, from awareness to enrollment.",
  },
  {
    icon: Target,
    title: "Drive Targeted Traffic",
    description:
      "Our ad specialists run laser-focused Meta and Google ad campaigns that reach your ideal learners with the right message at the right time.",
  },
  {
    icon: Award,
    title: "Generate Quality Leads",
    description:
      "We attract and qualify students who are actively looking for what you offer, so your sales or admissions team talks only to people who are ready to enroll.",
  },
]

const whyReasons: string[] = [
  "Specialized in EdTech marketing",
  "End-to-end funnel building and ad execution",
  "Performance-focused: leads, enrollments, and ROI",
  "Data-driven strategies and continuous optimization",
  "Smart automation for lead nurturing and engagement",
  "Deep understanding of the student decision journey",
  "Transparent reporting and clear communication",
  "Collaborative, growth-focused partnership",
]

const salesProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Introduction and Rapport Building",
    description: "Make them feel comfortable and humanized",
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    title: "Qualification and Profiling",
    description: "Understand if they are the right fit",
    color: "from-green-500 to-emerald-500",
  },
  {
    step: 3,
    title: "Pain Point Exploration",
    description: "Uncover the emotional 'why' of the leads",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: 4,
    title: "Position the Solution",
    description: "Presenting program or course as the personalized solution",
    color: "from-orange-500 to-red-500",
  },
  {
    step: 5,
    title: "Call to Action",
    description: "Asking for the payment",
    color: "from-red-500 to-pink-500",
  },
]

export default function HomePage(): JSX.Element {
  const [isClient, setIsClient] = useState<boolean>(false)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [isCarouselView, setIsCarouselView] = useState<boolean>(true)
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true)

  // Arrow animation states
  const [arrowProgress, setArrowProgress] = useState<number>(0)
  const [isJourneySectionVisible, setIsJourneySectionVisible] = useState<boolean>(false)
  const [showBlastAnimation, setShowBlastAnimation] = useState<boolean>(false)
  const journeySectionRef = useRef<HTMLDivElement>(null)
  const arrowControls = useAnimation()

  const { scrollYProgress } = useScroll()

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      if (journeySectionRef.current) {
        const rect = journeySectionRef.current.getBoundingClientRect()
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0
        setIsJourneySectionVisible(isVisible)

        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / rect.height))
          setArrowProgress(scrollProgress)

          if (scrollProgress > 0.9 && !showBlastAnimation) {
            setShowBlastAnimation(true)
            setTimeout(() => setShowBlastAnimation(false), 2000)
          }

          const maxDistance = journeySteps.length * 400 - 100
          const currentY = 20 + scrollProgress * maxDistance

          arrowControls.start({
            y: currentY,
            transition: { type: "spring", stiffness: 100, damping: 20 },
          })
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [arrowControls, showBlastAnimation])

  useEffect(() => {
    if (!isAutoPlaying || !isCarouselView) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % salesProcess.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isCarouselView])

  // Intersection Observer for Journey Section
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //   (entries) => {
  //   entries.forEach((entry) => {
  //   if (entry.isIntersecting && !isJourneySectionVisible) {
  //   setIsJourneySectionVisible(true)
  //   // Start arrow animation from top to bottom
  //   arrowControls.start({
  //   y: [20, journeySteps.length * 400 - 80],
  //   transition: {
  //   duration: 4,
  //   ease: "easeInOut",
  //   onComplete: () => {
  //   // Reset for next time
  //   setTimeout(() => {
  //   setIsJourneySectionVisible(false)
  //   arrowControls.set({ y: 20 })
  //   }, 1000)
  //   },
  //   },
  //   })
  //   }
  //   })
  //   },
  //   {
  //   threshold: 0.1,
  //   rootMargin: "-10% 0px -10% 0px",
  //   },
  //   )

  //   if (journeySectionRef.current) {
  //   observer.observe(journeySectionRef.current)
  //   }

  //   return () => {
  //   if (journeySectionRef.current) {
  //   observer.unobserve(journeySectionRef.current)
  //   }
  //   }
  //   }, [isJourneySectionVisible, arrowControls])

  if (!isClient) return <div></div>; // Prevents hydration mismatch

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Navigation - Enhanced dark theme */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 z-[9999] shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/images/people-magnet-logo.jpg" alt="People Magnet" className="h-10 w-auto" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#services"
                  className="text-gray-300 hover:text-[#d81333] px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#d81333] px-3 py-2 text-sm font-medium transition-all duration-300"
                >
                  Be a Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Dark theme with enhanced visuals */}
      <section className="pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#d81333]/20 to-red-500/20 rounded-full blur-3xl animate-float-slow delay-1000"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-[#d81333]/15 to-red-500/15 rounded-full blur-3xl animate-float-slow delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-[#d81333]/10 to-red-400/10 rounded-full blur-3xl animate-float-slow delay-3000"></div>
          {/* Additional atmospheric elements */}
          <div className="absolute top-20 right-20 w-2 h-2 bg-[#d81333] rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute bottom-40 left-40 w-1 h-1 bg-red-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute top-60 left-20 w-1.5 h-1.5 bg-[#d81333] rounded-full opacity-50 animate-pulse delay-2000"></div>
        </div>

        {/* Floating Elements - Enhanced */}
        <div className="absolute top-20 left-8 animate-bounce-slow delay-1000">
          <div className="w-3 h-3 bg-[#d81333] rounded-full opacity-80 shadow-lg shadow-[#d81333]/50"></div>
        </div>
        <div className="absolute top-36 right-16 animate-bounce-slow delay-2000">
          <div className="w-5 h-5 bg-red-400 rounded-full opacity-60 shadow-lg shadow-red-400/50"></div>
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce-slow delay-3000">
          <div className="w-2 h-2 bg-[#d81333] rounded-full opacity-70 shadow-lg shadow-[#d81333]/50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.div className="flex justify-center mb-5" variants={fadeIn}>
              <div className="bg-gradient-to-r from-[#d81333] to-red-500 text-white px-3 py-1.5 text-sm font-medium rounded-full border-0 flex items-center shadow-lg shadow-[#d81333]/25">
                <Sparkles className="w-3 h-3 mr-1.5" />
                #1 EdTech Marketing Agency
              </div>
            </motion.div>
            <motion.h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" variants={fadeInUp}>
              We help{" "}
              <span className="bg-gradient-to-r from-[#d81333] via-red-400 to-[#d81333] bg-clip-text text-transparent animate-gradient">
                ed tech businesses
              </span>{" "}
              to <br className="hidden md:block" />
              <span className="relative">
                <span className="bg-gradient-to-r from-[#d81333] to-red-400 bg-clip-text text-transparent">
                  Grow, Scale, and Win
                </span>
                <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d81333] to-red-400 rounded-full transform scale-x-0 animate-pulse-line"></div>
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
              variants={fadeInUp}
            >
              We help to automate your sales, scale your EdTech business, and skyrocket conversions with Our Potential
              Sales and Marketing Strategies.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center" variants={fadeInUp}>
              <button className="bg-gradient-to-r from-[#d81333] to-red-500 hover:from-[#b8112b] hover:to-red-600 text-white px-6 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-[#d81333]/25 transition-all duration-300 group animate-pulse-glow flex items-center">
                Let's Talk Enrollments
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#d81333] text-[#d81333] hover:bg-[#d81333] hover:text-white px-6 py-4 text-base font-semibold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm">
                View Our Work
              </button>
            </motion.div>
            {/* Stats - Enhanced for dark theme */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-xl mx-auto" variants={staggerFast}>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d81333] to-red-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-400 text-sm font-medium">EdTech Partners</div>
              </motion.div>
              <motion.div className="text-center" variants={fadeInUp}>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#d81333] to-red-400 bg-clip-text text-transparent">
                  300%
                </div>
                <div className="text-gray-400 text-sm font-medium">Average ROI</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative group cursor-pointer">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-[#d81333] to-red-500 rounded-full blur-md opacity-30 animate-pulse-glow group-hover:opacity-50 transition-opacity"></div>

            {/* Main indicator */}
            <div className="relative w-12 h-12 border-2 border-[#d81333] rounded-full flex items-center justify-center bg-gray-900/50 backdrop-blur-sm group-hover:border-red-400 transition-colors">
              {/* Animated dots */}
              <div className="flex flex-col space-y-1">
                <div className="w-1 h-1 bg-[#d81333] rounded-full animate-bounce-slow"></div>
                <div className="w-1 h-1 bg-[#d81333] rounded-full animate-bounce-slow delay-200"></div>
                <div className="w-1 h-1 bg-[#d81333] rounded-full animate-bounce-slow delay-400"></div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-1 h-1 bg-[#d81333] rounded-full opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-1 h-1 bg-red-400 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Scroll text */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Scroll to explore
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section - Dark theme */}
      <section id="services" className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-orange-500/20 text-orange-400 px-3 py-1.5 text-sm font-medium rounded-full border border-orange-500/30 mb-3 inline-block backdrop-blur-sm">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to grow your EdTech business
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group hover:shadow-xl hover:shadow-black/20 transition-all duration-500 border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm overflow-hidden relative rounded-lg shadow-lg"
                variants={fadeIn}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-3">
                    {service.icon.map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className={`p-2.5 rounded-full bg-gradient-to-br ${service.color} mr-1.5 shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Dark theme */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-orange-500/20 text-orange-400 px-3 py-1.5 text-sm font-medium rounded-full border border-orange-500/30 mb-3 inline-block backdrop-blur-sm">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">The principles that drive our success</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-500 group"
                variants={fadeIn}
              >
                <div className="flex items-center mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 transition-transform duration-300 shadow-lg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-300 text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Together Section - Enhanced with blast animation */}
      <section
        ref={journeySectionRef}
        className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#d81333]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-[#d81333]/20 text-[#d81333] px-3 py-1.5 text-sm font-medium rounded-full border border-[#d81333]/30 mb-3 inline-block backdrop-blur-sm">
              Your Success Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Journey Together</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From first contact to scaling success - here's how we transform your EdTech business
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line - Extended */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#d81333]/30 to-red-500/30 rounded-full"
              style={{ height: `${journeySteps.length * 400}px` }}
            ></div>

            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
              initial={{ y: 20 }}
              animate={arrowControls}
            >
              <div className="relative">
                {/* Blast Animation */}
                {showBlastAnimation && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Explosion rings */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#d81333] to-red-500 rounded-full animate-blast-ring-1 opacity-80"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-blast-ring-2 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full animate-blast-ring-3 opacity-40"></div>

                    {/* Particle effects */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#d81333] rounded-full animate-blast-particle"
                        style={{
                          transform: `rotate(${i * 45}deg) translateY(-20px)`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      ></div>
                    ))}

                    {/* Sparkle effects */}
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={`sparkle-${i}`}
                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full animate-blast-sparkle"
                        style={{
                          transform: `rotate(${i * 30}deg) translateY(-30px)`,
                          animationDelay: `${i * 0.05}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}

                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d81333] to-red-500 rounded-full blur-md opacity-60 scale-150 animate-pulse-glow"></div>
                {/* Main arrow container */}
                <div className="relative bg-gradient-to-r from-[#d81333] to-red-500 p-3 rounded-full shadow-2xl shadow-[#d81333]/50 animate-floating-arrow">
                  <ArrowDown className="w-5 h-5 text-white animate-bounce-arrow" />
                </div>
                {/* Trailing effect */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-8 bg-gradient-to-b from-[#d81333]/30 to-transparent rounded-full"></div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {journeySteps.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} relative`}
                  variants={fadeInUp}
                  style={{ height: "400px" }}
                >
                  <div
                    className={`w-full max-w-md ${
                      index % 2 === 0 ? "md:mr-8" : `md:ml-8 ${index > 0 ? "md:mt-8" : ""}`
                    }`}
                  >
                    <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl shadow-xl transition-all duration-500 overflow-hidden border border-orange-500/20 group">
                      {/* Header - Enhanced with orange gradients */}
                      <div className={`bg-gradient-to-br ${item.color} p-6 text-white relative`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                        <div className="relative z-10 flex items-center">
                          <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm mr-4 shadow-lg">
                            <item.icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium opacity-90 mb-1">Step {item.step}</div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 bg-gray-800/50">
                        <p className="text-gray-300 leading-relaxed mb-6 text-base">{item.description}</p>

                        {/* Features */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-white text-sm uppercase tracking-wide">Key Activities</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} shadow-sm`}></div>
                                <span className="text-gray-300 text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action at the end - Dark theme */}
          <motion.div
            className="text-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600/50 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join 50+ EdTech businesses that have transformed their growth with our proven methodology.
              </p>
              <button className="bg-gradient-to-r from-[#d81333] to-red-500 hover:from-[#b8112b] hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-[#d81333]/25 transition-all duration-300 group flex items-center justify-center mx-auto">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Dark theme */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-orange-500/20 text-orange-400 px-3 py-1.5 text-sm font-medium rounded-full border border-orange-500/30 mb-3 inline-block backdrop-blur-sm">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-500 group"
                variants={fadeInUp}
              >
                <div className="text-orange-400 mb-6 group-hover:text-orange-300 transition-colors">
                  <item.icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Sales Process Section - Enhanced carousel */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-orange-500/20 text-orange-400 px-3 py-1.5 text-sm font-medium rounded-full border border-orange-500/30 mb-3 inline-block backdrop-blur-sm">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Sales Process</h2>

            {/* View Toggle Button */}
            <div className="flex justify-center mt-8 mb-8">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-1 border border-gray-700/50">
                <button
                  onClick={() => setIsCarouselView(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isCarouselView
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Carousel View
                </button>
                <button
                  onClick={() => setIsCarouselView(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isCarouselView
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Grid3X3 className="w-4 h-4 inline mr-1" />
                  All Steps
                </button>
              </div>
            </div>
          </motion.div>

          {isCarouselView ? (
            /* Carousel View */
            <div className="relative">
              {/* Step Indicators */}
              <div className="flex justify-center mb-8 space-x-2">
                {salesProcess.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentStep(index)
                      setIsAutoPlaying(false)
                      setTimeout(() => setIsAutoPlaying(true), 5000)
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep
                        ? "bg-gradient-to-r from-orange-500 to-red-500 scale-125"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <motion.div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                  {salesProcess.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <div className="bg-gray-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700/50 text-center max-w-2xl mx-auto">
                        <div
                          className={`bg-gradient-to-br ${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg`}
                        >
                          {item.step}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => {
                  setCurrentStep((prev) => (prev - 1 + salesProcess.length) % salesProcess.length)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-600/50"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => {
                  setCurrentStep((prev) => (prev + 1) % salesProcess.length)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 5000)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-gray-600/50"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Auto-play indicator */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                    isAutoPlaying
                      ? "text-orange-400 bg-orange-500/20 border border-orange-500/30"
                      : "text-gray-400 bg-gray-800/50 border border-gray-600/30"
                  }`}
                >
                  {isAutoPlaying ? "Auto-playing..." : "Click to auto-play"}
                </button>
              </div>
            </div>
          ) : (
            /* All Steps View - Horizontal Layout with Loop Animation */
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {salesProcess.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-black/20 transition-all duration-500 group border border-gray-700/50 relative animate-process-loop"
                  variants={fadeInUp}
                  style={{
                    animationDelay: `${index * 0.5}s`,
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${item.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mb-4 mx-auto shadow-lg animate-step-pulse`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{item.description}</p>

                  {/* Connecting Arrow - except for last item */}
                  {index < salesProcess.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="flex items-center">
                        <div className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 animate-arrow-flow"></div>
                        <ArrowRight className="w-4 h-4 text-orange-500 animate-arrow-point" />
                      </div>
                    </div>
                  )}

                  {/* Loop back arrow for last item */}
                  {index === salesProcess.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-red-500 to-orange-500 animate-arrow-flow-vertical"></div>
                        <div className="text-orange-500 text-xs font-medium animate-pulse">Loop continues...</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section - Enhanced dark theme */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" variants={fadeInUp}>
              Ready to Scale Your EdTech Brand?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Turn leads into enrollments with full-funnel marketing and Sales built for education.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={fadeInUp}>
              <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-5 text-lg font-bold rounded-full shadow-xl hover:shadow-white/25 transition-all duration-300 group flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-5 text-lg font-bold rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm">
                Schedule a Call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-[#d81333]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="bg-[#d81333]/20 text-[#d81333] px-3 py-1.5 text-sm font-medium rounded-full border border-[#d81333]/30 mb-3 inline-block backdrop-blur-sm">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your EdTech Business?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you scale your enrollments and grow your business.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={fadeInUp}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#d81333] to-red-500 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email us at</p>
                      <a
                        href="mailto:suryareigns18@gmail.com"
                        className="text-[#d81333] hover:text-red-400 font-medium transition-colors"
                      >
                       marketing@peoplemagnet.in
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#d81333] to-red-500 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Call us</p>
                      <p className="text-white font-medium">7904898244</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-[#d81333] to-red-500 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Visit us</p>
                      <p className="text-white font-medium">Remote Team, Global Reach</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d81333] focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d81333] focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d81333] focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d81333] focus:border-transparent transition-all"
                      placeholder="Your EdTech Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d81333] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your EdTech business and goals..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#d81333] to-red-500 hover:from-[#b8112b] hover:to-red-600 text-white px-6 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-[#d81333]/25 transition-all duration-300 group flex items-center justify-center"
                  >
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Enhanced dark theme */}
      <footer className="bg-black text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="text-2xl font-bold mb-5">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">People</span>{" "}
              <span className="text-white">Magnet</span>
            </div>
            <p className="text-gray-400 mb-7 text-base max-w-xl mx-auto">
              Helping EdTech businesses grow, scale, and win through strategic marketing and sales.
            </p>
            <div className="border-t border-gray-800 pt-7">
              <p className="text-gray-500 text-sm">© 2024 People Magnet. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-line {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(216, 19, 51, 0.4); }
          50% { box-shadow: 0 0 30px rgba(216, 19, 51, 0.6); }
          100% { box-shadow: 0 0 20px rgba(216, 19, 51, 0.4); }
        }

        @keyframes floating-arrow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Blast Animation Keyframes */
        @keyframes blast-ring-1 {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(3); opacity: 0.4; }
          100% { transform: scale(5); opacity: 0; }
        }

        @keyframes blast-ring-2 {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(4); opacity: 0.3; }
          100% { transform: scale(7); opacity: 0; }
        }

        @keyframes blast-ring-3 {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(5); opacity: 0.2; }
          100% { transform: scale(9); opacity: 0; }
        }

        @keyframes blast-particle {
          0% { transform: rotate(var(--rotation, 0deg)) translateY(-20px) scale(1); opacity: 1; }
          100% { transform: rotate(var(--rotation, 0deg)) translateY(-60px) scale(0); opacity: 0; }
        }

        @keyframes blast-sparkle {
          0% { transform: rotate(var(--rotation, 0deg)) translateY(-30px) scale(1); opacity: 1; }
          50% { transform: rotate(var(--rotation, 0deg)) translateY(-50px) scale(1.5); opacity: 0.8; }
          100% { transform: rotate(var(--rotation, 0deg)) translateY(-80px) scale(0); opacity: 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-floating-arrow {
          animation: floating-arrow 2s ease-in-out infinite;
        }

        .animate-bounce-arrow {
          animation: bounce-arrow 1s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-blast-ring-1 {
          animation: blast-ring-1 1s ease-out forwards;
        }

        .animate-blast-ring-2 {
          animation: blast-ring-2 1.2s ease-out forwards;
        }

        .animate-blast-ring-3 {
          animation: blast-ring-3 1.4s ease-out forwards;
        }

        .animate-blast-particle {
          animation: blast-particle 1s ease-out forwards;
        }

        .animate-blast-sparkle {
          animation: blast-sparkle 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
