"use client"

import type React from "react"
import ConsultationForm from "@/components/consultation-form"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Users,
  FileText,
  Gavel,
  Shield,
  Building,
  MessageCircle,
  Star,
  CheckCircle,
  ArrowLeft,
  Sparkles,
  Menu,
  X,
  BookOpen,
  Briefcase,
  Eye,
  Heart,
} from "lucide-react"

export default function LawyerWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const services = [
    {
      icon: <Gavel className="w-8 h-8 text-primary" />,
      title: "الاستشارات القانونية",
      description: "استشارات قانونية شاملة في جميع المجالات القانونية والشرعية مع ضمان السرية التامة",
      features: ["استشارة فورية", "سرية تامة", "خبرة متخصصة"],
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "المرافعة أمام المحاكم",
      description: "تمثيل قانوني احترافي أمام جميع درجات المحاكم بما فيها المحكمة العليا",
      features: ["تمثيل قانوني", "خبرة واسعة", "نتائج مضمونة"],
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "التحكيم التجاري",
      description: "خدمات التحكيم التجاري الدولي وفض المنازعات التجارية بكفاءة عالية",
      features: ["تحكيم دولي", "حلول سريعة", "توفير التكاليف"],
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "الصياغة القانونية",
      description: "صياغة العقود والوثائق القانونية بدقة واحترافية عالية وفقاً للمعايير الدولية",
      features: ["صياغة دقيقة", "مراجعة شاملة", "ضمان قانوني"],
    },
  ]

  const qualifications = [
    "ليسانس شريعة وقانون - جامعة صنعاء (2008)",
    "دورة إدارة القضية والصياغة القانونية",
    "دورة التحكيم التجاري الدولي - المركز العربي لإعداد المحكمين",
    "عضو نقابة المحامين اليمنيين",
    "محكم تجاري دولي معتمد",
  ]

  const stats = [
    { number: "15+", label: "سنوات خبرة", icon: <Award className="w-6 h-6" /> },
    { number: "500+", label: "قضية ناجحة", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "معدل النجاح", icon: <Star className="w-6 h-6" /> },
    { number: "24/7", label: "دعم متواصل", icon: <Phone className="w-6 h-6" /> },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <div className="fixed inset-0 pointer-events-none">
        {/* Legal pattern background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-32 right-20 w-24 h-24 border border-primary/10 rotate-45" />
          <div className="absolute bottom-20 left-20 w-40 h-40 border border-primary/10 rounded-full" />
          <div className="absolute bottom-40 right-40 w-20 h-20 border-2 border-primary/20 rotate-12" />
        </div>

        {/* Floating legal icons */}
        <div className="absolute top-1/4 left-1/4 opacity-5 animate-float">
          <Scale className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-3/4 right-1/4 opacity-5 animate-float" style={{ animationDelay: "1s" }}>
          <Gavel className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute top-1/2 left-1/6 opacity-5 animate-float" style={{ animationDelay: "2s" }}>
          <BookOpen className="w-14 h-14 text-primary" />
        </div>
      </div>

      <div className="fixed top-4 left-4 z-50 animate-in slide-in-from-left-5 duration-1000 delay-500">
        <Button
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-3 animate-glow"
          onClick={() => setActiveSection("contact")}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">احجز استشارة الآن</span>
          <span className="sm:hidden">استشارة</span>
        </Button>
      </div>

      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-card/95 backdrop-blur-xl border-primary/30 hover:bg-primary/10"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-80 lg:w-80 bg-card/95 backdrop-blur-xl border-l border-border/50 p-4 sm:p-8 overflow-y-auto transition-all duration-1000 z-40 ${
          isLoaded ? "translate-x-0" : "translate-x-full"
        } ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}`}
      >
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Section */}
          <div className="text-center space-y-3 sm:space-y-4 animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full animate-pulse" />
              <div
                className="absolute -inset-2 border border-primary/30 rounded-full animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-in zoom-in duration-1000 delay-700 drop-shadow-lg" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-xl sm:text-2xl font-bold text-balance bg-gradient-to-l from-primary via-foreground to-primary bg-clip-text text-transparent">
                خالد يحيى محمد الناصر
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">محامي ومستشار قانوني</p>
              <p className="text-xs sm:text-sm text-primary font-semibold">مترافع أمام المحكمة العليا</p>
              <div className="flex flex-wrap gap-1 justify-center mt-2">
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                  <Briefcase className="w-3 h-3 ml-1" />
                  محكم دولي
                </Badge>
                <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                  <Shield className="w-3 h-3 ml-1" />
                  15+ سنة خبرة
                </Badge>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { id: "home", label: "الرئيسية", icon: <Scale className="w-4 h-4" /> },
              { id: "about", label: "من أنا", icon: <Users className="w-4 h-4" /> },
              { id: "services", label: "الخدمات", icon: <Gavel className="w-4 h-4" /> },
              { id: "qualifications", label: "المؤهلات", icon: <GraduationCap className="w-4 h-4" /> },
              { id: "contact", label: "التواصل", icon: <MessageCircle className="w-4 h-4" /> },
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-xl text-right transition-all duration-300 group animate-in slide-in-from-right-4 text-sm sm:text-base relative overflow-hidden ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground hover:scale-102"
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1 right-1 w-2 h-2 border border-primary-foreground/30 rotate-45" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border border-primary-foreground/30 rounded-full" />
                  </div>
                )}
                <div className="group-hover:scale-110 transition-transform duration-300 relative z-10">{item.icon}</div>
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="space-y-3 pt-4 border-t border-border/50 animate-in fade-in duration-1000 delay-800">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>770461195</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="break-all">Khalid77791@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>صنعاء - شارع النصر</span>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className="lg:mr-80 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 sm:space-y-12">
          {activeSection === "home" && (
            <section className="space-y-8 sm:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* Hero Section */}
              <div className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-2xl sm:rounded-3xl" />

                {/* Legal decorative elements */}
                <div className="absolute top-10 left-10 opacity-10">
                  <div className="w-20 h-20 border-2 border-primary rounded-full flex items-center justify-center">
                    <Scale className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-10 right-10 opacity-10">
                  <div className="w-16 h-16 border border-primary rotate-45 flex items-center justify-center">
                    <Gavel className="w-6 h-6 text-primary -rotate-45" />
                  </div>
                </div>

                <div className="relative text-center space-y-6 sm:space-y-8 max-w-4xl px-4">
                  <div className="space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center animate-pulse">
                        <Scale className="w-6 h-6 text-primary" />
                      </div>
                      <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <div className="w-8 h-8 border border-primary rotate-45" />
                      <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <div className="w-12 h-12 border-2 border-primary rounded-full flex items-center justify-center animate-pulse">
                        <Gavel className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
                      <span className="bg-gradient-to-l from-primary via-foreground to-primary bg-clip-text text-transparent">
                        العدالة
                      </span>
                      <br />
                      <span className="text-foreground">هي هدفنا</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                      محامي ومستشار قانوني متخصص في الشريعة والقانون، مترافع أمام المحكمة العليا
                      <br />
                      <span className="text-primary font-semibold flex items-center justify-center gap-2 mt-2">
                        <Eye className="w-5 h-5" />
                        خبرة تزيد عن 15 عاماً في خدمة العدالة
                        <Heart className="w-5 h-5" />
                      </span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group animate-glow"
                      onClick={() => setActiveSection("contact")}
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-12 transition-transform" />
                      احجز استشارة مجانية
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group bg-transparent"
                      onClick={() => setActiveSection("services")}
                    >
                      <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
                      تعرف على خدماتنا
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-primary/20 hover:bg-card/80 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  >
                    <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3 relative z-10">
                      {/* Legal pattern background */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-1 right-1 w-3 h-3 border border-primary/50 rotate-45" />
                        <div className="absolute bottom-1 left-1 w-2 h-2 border border-primary/50 rounded-full" />
                      </div>
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
                    <Scale className="w-6 h-6 text-primary animate-pulse" />
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-balance">خدماتنا القانونية</h2>
                  <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                    نقدم مجموعة شاملة من الخدمات القانونية المتخصصة
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {services.slice(0, 4).map((service, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 border-primary/20 hover:border-primary/40 cursor-pointer relative overflow-hidden"
                      onClick={() => setActiveSection("services")}
                    >
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-2 right-2 w-4 h-4 border border-primary/30 rotate-45" />
                        <div className="absolute bottom-2 left-2 w-3 h-3 border border-primary/30 rounded-full" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-primary/20 rounded-full" />
                      </div>
                      <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4 relative z-10">
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {activeSection === "about" && (
            <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">من أنا</h2>
                <div className="text-base sm:text-lg leading-relaxed space-y-3 sm:space-y-4 text-pretty">
                  <p>
                    أنا محامي ومستشار قانوني مترافع أمام المحكمة العليا، متخصص في الشريعة والقانون مع خبرة واسعة في مجال
                    التحكيم التجاري الدولي والاستشارات القانونية الشاملة.
                  </p>
                  <p>
                    أقدم خدمات قانونية احترافية تشمل المرافعة أمام المحاكم، الاستشارات القانونية، الصياغة القانونية، وفض
                    المنازعات التجارية. أؤمن بأهمية تقديم خدمة قانونية متميزة تحقق العدالة وتحمي حقوق العملاء.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg font-semibold">خبرة متميزة</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">سنوات من الخبرة في المجال القانوني</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                    <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg font-semibold">العدالة والنزاهة</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">التزام كامل بقيم العدالة والمهنية</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto" />
                    <h3 className="text-base sm:text-lg font-semibold">حماية الحقوق</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">الدفاع عن حقوق العملاء بكل قوة</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* Services Section */}
          {activeSection === "services" && (
            <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">الخدمات القانونية</h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                  أقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتكم القانونية
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 border-primary/20 hover:border-primary/40"
                  >
                    <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                        <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 text-xs sm:text-sm"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 hover:scale-[1.01] transition-all duration-300">
                <CardContent className="p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                  <Scale className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto animate-pulse" />
                  <h3 className="text-2xl sm:text-3xl font-bold">هل تحتاج استشارة قانونية؟</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">
                    احجز موعداً للحصول على استشارة قانونية متخصصة وحلول قانونية فعالة
                  </p>
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                    onClick={() => setActiveSection("contact")}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    احجز استشارة الآن
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Qualifications Section */}
          {activeSection === "qualifications" && (
            <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">المؤهلات والخبرات</h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                  مؤهلات علمية ومهنية متقدمة في مجال القانون والشريعة
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300">
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-lg sm:text-xl font-semibold">المؤهلات العلمية</h3>
                    </div>
                    <ul className="space-y-2 sm:space-y-3">
                      {qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-start gap-3 hover:text-primary transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        <h3 className="text-base sm:text-lg font-semibold">المهارات المهنية</h3>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="hover:text-primary transition-colors cursor-default">
                          • خبرة في التدريب والتأهيل
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">
                          • مهارات التواصل والعلاقات
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">
                          • استخدام التكنولوجيا القانونية
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">
                          • الالتزام بأخلاقيات المهنة
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        <h3 className="text-base sm:text-lg font-semibold">العضويات</h3>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm">
                        <li className="hover:text-primary transition-colors cursor-default">
                          • عضو نقابة المحامين اليمنيين
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">
                          • عضو اتحاد الشباب العربي
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">
                          • نائب رئيس لجنة الرقابة والتفتيش
                        </li>
                        <li className="hover:text-primary transition-colors cursor-default">• ناشط حقوقي</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          )}

          {activeSection === "contact" && (
            <section className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-balance">التواصل واحجز استشارتك</h2>
                <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                  للحصول على استشارة قانونية متخصصة أو لمناقشة قضيتكم القانونية
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
                {/* Contact Information */}
                <div className="space-y-4 sm:space-y-6">
                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-base sm:text-lg font-semibold">الهاتف</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base">
                          770461195
                        </p>
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base">
                          773611056
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-base sm:text-lg font-semibold">البريد الإلكتروني</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base break-all">
                          Khalid77791@gmail.com
                        </p>
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm sm:text-base break-all">
                          Khalid99661@yahoo.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-base sm:text-lg font-semibold">العنوان</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                        اليمن - صنعاء - شارع النصر
                        <br />
                        أمام مستشفى المتحدون
                        <br />
                        فوق بن عامر للصرافة
                      </p>
                    </CardContent>
                  </Card>

                  {/* Consultation Hours Card */}
                  <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center gap-3">
                        <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        <h3 className="text-base sm:text-lg font-semibold">ساعات العمل</h3>
                      </div>
                      <div className="space-y-2 text-xs sm:text-sm">
                        <p className="text-muted-foreground">السبت - الخميس: 8:00 ص - 6:00 م</p>
                        <p className="text-muted-foreground">الجمعة: 2:00 م - 6:00 م</p>
                        <p className="text-primary font-medium">استشارات طارئة: 24/7</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Consultation Form */}
                <ConsultationForm />
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="lg:mr-80 bg-card/30 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-muted-foreground">تم التطوير بواسطة:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-primary/20 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <span className="font-medium text-foreground text-sm sm:text-base">المهندس أحمد فايز</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    780138083
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-primary/20 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <span className="font-medium text-foreground text-sm sm:text-base">المهندس يعقوب السامدي</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    777352501
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-card/50 border border-primary/20 hover:bg-card/80 transition-all duration-300 hover:scale-105">
                <span className="font-medium text-foreground text-sm sm:text-base">المهندس إبراهيم بجاش</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    775121130
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
