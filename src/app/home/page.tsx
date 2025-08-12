"use client"

import { useEffect, useState } from "react"
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
  ArrowDown,
} from "lucide-react"

function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)
    
    // Get all scroll-animate elements except hero section
    const animatedElements = document.querySelectorAll(".scroll-animate:not(.hero-animate)")
    animatedElements.forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])
}

export default function HomePage() {
  const [isClient, setIsClient] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)
  
  useScrollAnimation()
  
  useEffect(() => {
    setIsClient(true)
    // Automatically animate hero section on load
    const timer = setTimeout(() => {
      setHeroLoaded(true)
    }, 100) // Small delay to ensure DOM is ready
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation - Fixed with higher z-index */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-[9999] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                People<span className="text-gray-900">Magnet</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Be a Partner
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Auto-loading animation */}
      <section className="pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-slow delay-1000"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-tr from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-float-slow delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-orange-100/20 to-red-100/20 rounded-full blur-3xl animate-float-slow delay-3000"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-8 animate-bounce-slow delay-1000">
          <div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-36 right-16 animate-bounce-slow delay-2000">
          <div className="w-5 h-5 bg-red-400 rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce-slow delay-3000">
          <div className="w-2 h-2 bg-orange-300 rounded-full opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center hero-animate fade-in ${heroLoaded ? 'animate-in' : ''}`}>
            <div className="flex justify-center mb-5">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 text-sm font-medium rounded-full border-0 flex items-center">
                <Sparkles className="w-3 h-3 mr-1.5" />
                #1 EdTech Marketing Agency
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              We help{" "}
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
                ed tech businesses
              </span>{" "}
              to <br className="hidden md:block" />
              <span className="relative">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Grow, Scale, and Win
                </span>
                <div className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform scale-x-0 animate-pulse-line"></div>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              We help to automate your sales, scale your EdTech business, and skyrocket conversions with Our Potential
              Sales and Marketing Strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-4 text-base font-semibold rounded-full shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 group animate-pulse-glow flex items-center">
                Let's Talk Enrollments
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-4 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent">
                View Our Work
              </button>
            </div>
            {/* Stats */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-xl mx-auto">               
  <div className={`text-center hero-animate fade-up ${heroLoaded ? 'animate-in' : ''}`} style={{ animationDelay: "0.2s" }}>                 
    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">                   
      50+                 
    </div>                 
    <div className="text-gray-600 text-sm font-medium">EdTech Partners</div>               
  </div>               
  <div className={`text-center hero-animate fade-up ${heroLoaded ? 'animate-in' : ''}`} style={{ animationDelay: "0.4s" }}>                 
    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">                   
      300%                 
    </div>                 
    <div className="text-gray-600 text-sm font-medium">Average ROI</div>               
  </div>             
</div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-slow hero-animate fade-in ${heroLoaded ? 'animate-in' : ''}`} style={{ animationDelay: "0.8s" }}>
          <div className="w-5 h-8 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-2.5 bg-gray-400 rounded-full mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to grow your EdTech business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: [Facebook, Instagram],
                title: "Meta Ads",
                description:
                  "Reach and convert your ideal audience across Facebook and Instagram with data-driven campaigns.",
                color: "from-blue-500 to-pink-500",
                delay: "0.1s",
              },
              {
                icon: [Search],
                title: "Google Ads",
                description: "Capture high-intent leads with precision-targeted search and display advertising.",
                color: "from-green-500 to-blue-500",
                delay: "0.2s",
              },
              {
                icon: [Globe],
                title: "Social Media Marketing",
                description: "Build your brand and engage your audience across all major social platforms.",
                color: "from-purple-500 to-pink-500",
                delay: "0.3s",
              },
              {
                icon: [TrendingUp],
                title: "CRO - Conversion Rate Optimization",
                description: "Turn more visitors into customers with strategic UX and funnel improvements.",
                color: "from-red-500 to-orange-500",
                delay: "0.4s",
              },
              {
                icon: [BarChart3],
                title: "Sales Funnel & Marketing",
                description: "Design high-converting funnels that guide leads from interest to purchase.",
                color: "from-yellow-500 to-red-500",
                delay: "0.5s",
              },
              {
                icon: [UserPlus],
                title: "Lead Generation",
                description: "Fill your pipeline with qualified leads ready to convert.",
                color: "from-indigo-500 to-purple-500",
                delay: "0.6s",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-103 scroll-animate fade-up overflow-hidden relative rounded-lg shadow-md"
                style={{ animationDelay: service.delay }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-3">
                    {service.icon.map((Icon, iconIndex) => (
                      <div key={iconIndex} className={`p-2.5 rounded-full bg-gradient-to-br ${service.color} mr-1.5`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">The principles that drive our success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Impact-Driven Growth",
                description:
                  "We're here to help you do more than just generate leads - we help you enroll students, scale programs, and transform education through results that matter.",
                delay: "0.1s",
              },
              {
                icon: Users,
                title: "Student-Centric Thinking",
                description:
                  "Just like you, we put learners at the heart of every strategy. Our campaigns are designed to attract, engage, and convert the right students for your courses.",
                delay: "0.2s",
              },
              {
                icon: BarChart3,
                title: "Data-Led Decisions",
                description:
                  "We analyze every click, scroll, and signup to optimize campaigns for maximum performance.",
                delay: "0.3s",
              },
              {
                icon: Lightbulb,
                title: "Creative That Connects",
                description:
                  "In EdTech, storytelling matters. We craft compelling, student-focused campaigns that speak to aspirations and drive real enrollment outcomes.",
                delay: "0.4s",
              },
              {
                icon: MessageCircle,
                title: "Clarity & Communication",
                description:
                  "We believe in radical transparency. From budget usage to performance updates, we keep you informed every step of the way.",
                delay: "0.5s",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-103 scroll-animate slide-left border border-gray-100/50 group"
                style={{ animationDelay: value.delay }}
              >
                <div className="flex items-center mb-5">
                  <div className="p-3 rounded-full bg-gradient-to-br from-orange-500 to-red-500 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 ml-3">{value.title}</h3>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Journey Section - Updated with Vertical Design */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-red-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-orange-200/15 to-red-200/15 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Your Success Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey Together</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From first contact to scaling success - here's how we transform your EdTech business</p>
          </div>
          
          {/* Vertical Journey Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-orange-500 rounded-full opacity-30"></div>
            
            <div className="space-y-16">
              {[
                { 
                  step: 1, 
                  title: "Strategic Discovery Call", 
                  icon: Phone, 
                  color: "from-blue-500 to-cyan-500",
                  description: "We dive deep into your business goals, target audience, and current challenges. This 60-minute session helps us understand your unique position in the EdTech market and identify the biggest opportunities for growth.",
                  features: ["Business audit", "Competitor analysis", "Goal setting", "Success metrics definition"]
                },
                { 
                  step: 2, 
                  title: "Strategic Onboarding", 
                  icon: CheckCircle, 
                  color: "from-green-500 to-emerald-500",
                  description: "We set up all necessary tools, tracking systems, and integrations. Our team creates detailed customer personas and maps out the entire student journey from awareness to enrollment.",
                  features: ["Tool setup & integration", "Tracking implementation", "Persona development", "Journey mapping"]
                },
                { 
                  step: 3, 
                  title: "Go-To-Market Strategy", 
                  icon: Target, 
                  color: "from-purple-500 to-pink-500",
                  description: "Based on our research, we develop a comprehensive marketing strategy tailored to your EdTech niche. This includes channel selection, messaging framework, and campaign roadmap.",
                  features: ["Channel strategy", "Messaging framework", "Creative concepts", "Campaign timeline"]
                },
                { 
                  step: 4, 
                  title: "Quality Lead Generation", 
                  icon: UserPlus, 
                  color: "from-orange-500 to-red-500",
                  description: "We launch targeted campaigns across Meta, Google, and other platforms to attract high-intent prospects. Our focus is on quality over quantity - bringing you leads that are ready to engage and convert.",
                  features: ["Campaign launch", "A/B testing", "Lead qualification", "Performance monitoring"]
                },
                { 
                  step: 5, 
                  title: "Sales & Scale", 
                  icon: TrendingUp, 
                  color: "from-red-500 to-pink-500",
                  description: "With qualified leads flowing in, we optimize the entire funnel for maximum conversions. We continuously refine targeting, messaging, and user experience to scale your enrollments exponentially.",
                  features: ["Conversion optimization", "Funnel refinement", "Scale planning", "ROI maximization"]
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative scroll-animate ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.color} shadow-lg border-4 border-white z-10 relative`}>
                      <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8 md:pr-16' : 'justify-end pl-8 md:pl-16'}`}>
                    <div className="w-full md:w-5/12">
                      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 group hover:scale-103">
                        {/* Header */}
                        <div className={`bg-gradient-to-br ${item.color} p-6 text-white relative`}>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                          <div className="relative z-10 flex items-center">
                            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm mr-4">
                              <item.icon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium opacity-90 mb-1">Step {item.step}</div>
                              <h3 className="text-xl font-bold">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-600 leading-relaxed mb-6 text-base">
                            {item.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Key Activities</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-2">
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}></div>
                                  <span className="text-gray-600 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow for next step */}
                  {index < 4 && (
                    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 z-20">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg animate-bounce-slow`}>
                        <ArrowDown className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action at the end */}
          <div className="text-center mt-20 scroll-animate zoom-in">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join 50+ EdTech businesses that have transformed their growth with our proven methodology.
              </p>
              <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 group">
                Book Your Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50/30 to-orange-50 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Build Your Growth Engine",
                description:
                  "We create high-converting marketing funnels tailored to the student journey, from awareness to enrollment.",
                delay: "0.1s",
              },
              {
                icon: Target,
                title: "Drive Targeted Traffic",
                description:
                  "Our ad specialists run laser-focused Meta and Google ad campaigns that reach your ideal learners with the right message at the right time.",
                delay: "0.2s",
              },
              {
                icon: Award,
                title: "Generate Quality Leads",
                description:
                  "We attract and qualify students who are actively looking for what you offer, so your sales or admissions team talks only to people who are ready to enroll.",
                delay: "0.3s",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:scale-103 scroll-animate slide-up border-0 group overflow-hidden relative rounded-lg shadow-md"
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-6">
                  <div className="p-3.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500 w-fit mb-5 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why People Magnet Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why People Magnet?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-animate fade-up">
            {[
              "Specialized in EdTech marketing",
              "End-to-end funnel building and ad execution",
              "Performance-focused: leads, enrollments, and ROI",
              "Data-driven strategies and continuous optimization",
              "Smart automation for lead nurturing and engagement",
              "Deep understanding of the student decision journey",
              "Transparent reporting and clear communication",
              "Collaborative, growth-focused partnership",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-orange-50/50 transition-colors duration-300 group"
              >
                <div className="p-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sales Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sales Process</h2>
          </div>
          <div className="space-y-6">
            {[
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
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-5 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-103 scroll-animate slide-right group border border-gray-100/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`bg-gradient-to-br ${item.color} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-base flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse-slow"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse-slow delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate zoom-in relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Scale Your EdTech Brand?
          </h2>
          <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Turn leads into enrollments with full-funnel marketing and Sales built for education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-5 text-lg font-bold rounded-full shadow-xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 group flex items-center">
              Contact Us
              <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-5 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 bg-transparent">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate fade-up">
            <div className="bg-orange-100 text-orange-600 px-3 py-1.5 text-sm font-medium rounded-full border-0 mb-3 inline-block">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate slide-left">
              <div className="bg-gradient-to-br from-orange-50 to-red-50/30 p-7 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-7">Send us a message</h3>
                {isClient && (
                  <form className="space-y-5">
                    <div>
                      <input
                        placeholder="Your Name"
                        className="w-full h-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg px-4 border"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full h-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg px-4 border"
                      />
                    </div>
                    <div>
                      <input
                        placeholder="Subject"
                        className="w-full h-10 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg px-4 border"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg resize-none px-4 py-2 border"
                      />
                    </div>
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-10 text-base font-semibold rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                      Send Message
                    </button>
                  </form>
                )}
                {!isClient && (
                  <div className="space-y-5">
                    <div className="w-full h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                    <div className="w-full h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                    <div className="w-full h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                    <div className="w-full h-20 bg-gray-100 rounded-lg animate-pulse"></div>
                    <div className="w-full h-10 bg-gray-100 rounded-lg animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
            {/* Contact Information */}
            <div className="scroll-animate slide-right">
              <h3 className="text-xl font-bold text-gray-900 mb-7">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-orange-50 to-red-50/30 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="p-2.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">Contact us for phone details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-5 bg-gradient-to-br from-orange-50 to-red-50/30 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="p-2.5 rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      No 107, Aztech, 2nd Floor,
                      <br />
                      Thiruvenkatasamy Rd W, R.S. Puram,
                      <br />
                      Coimbatore, Tamil Nadu 641008
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-2xl font-bold mb-5">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">People</span>{" "}
              <span className="text-white">Magnet</span>
            </div>
            <p className="text-gray-400 mb-7 text-base max-w-xl mx-auto">
              Helping EdTech businesses grow, scale, and win through strategic marketing and sales.
            </p>
            <div className="border-t border-gray-800 pt-7">
              <p className="text-gray-400 text-sm">© 2024 People Magnet. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom styles for animations */}
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
          0%, 100% { opacity: 0.3; }
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
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.3); }
          50% { box-shadow: 0 0 30px rgba(249, 115, 22, 0.5); }
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
        
        .hover\\:scale-103:hover {
          transform: scale(1.03);
        }
        
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
        
        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }
        
        /* Hero section animations - auto-load */
        .hero-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Scroll-triggered animations */
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-up {
          transform: translateY(50px);
        }
        
        .fade-up.animate-in {
          transform: translateY(0);
        }
        
        .slide-left {
          transform: translateX(-50px);
        }
        
        .slide-left.animate-in {
          transform: translateX(0);
        }
        
        .slide-right {
          transform: translateX(50px);
        }
        
        .slide-right.animate-in {
          transform: translateX(0);
        }
        
        .slide-up {
          transform: translateY(30px);
        }
        
        .slide-up.animate-in {
          transform: translateY(0);
        }
        
        .zoom-in {
          transform: scale(0.9);
        }
        
        .zoom-in.animate-in {
          transform: scale(1);
        }
        
        .fade-in {
          opacity: 0;
        }
        
        .fade-in.animate-in {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}