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
} from "lucide-react"

export default function LawyerWebsite() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)
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
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed top-6 left-6 z-50 animate-in slide-in-from-left-5 duration-1000 delay-500">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
          onClick={() => setActiveSection("contact")}
        >
          <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          احجز استشارة الآن
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-card/95 backdrop-blur-xl border-l border-border/50 p-8 overflow-y-auto transition-all duration-1000 ${isLoaded ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full animate-pulse" />
              <div className="relative w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Scale className="w-12 h-12 text-primary animate-in zoom-in duration-1000 delay-700" />
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-balance bg-gradient-to-l from-primary to-foreground bg-clip-text text-transparent">
                خالد يحيى محمد الناصر
              </h1>
              <p className="text-muted-foreground font-medium">محامي ومستشار قانوني</p>
              <p className="text-sm text-primary">مترافع أمام المحكمة العليا</p>
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
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-right transition-all duration-300 group animate-in slide-in-from-right-4 ${
                  activeSection === item.id
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground hover:scale-102"
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="space-y-3 pt-4 border-t border-border/50 animate-in fade-in duration-1000 delay-800">
            <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>770461195</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>Khalid77791@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group">
              <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>صنعاء - شارع النصر</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mr-80 min-h-screen">
        <div className="max-w-6xl mx-auto p-8 space-y-12">
          {activeSection === "home" && (
            <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              {/* Hero Section */}
              <div className="relative min-h-[80vh] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl" />
                <div className="relative text-center space-y-8 max-w-4xl">
                  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <h1 className="text-6xl md:text-7xl font-bold text-balance">
                      <span className="bg-gradient-to-l from-primary via-foreground to-primary bg-clip-text text-transparent">
                        العدالة
                      </span>
                      <br />
                      <span className="text-foreground">هي هدفنا</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
                      محامي ومستشار قانوني متخصص في الشريعة والقانون، مترافع أمام المحكمة العليا
                      <br />
                      <span className="text-primary font-semibold">خبرة تزيد عن 15 عاماً في خدمة العدالة</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                      onClick={() => setActiveSection("contact")}
                    >
                      <Phone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                      احجز استشارة مجانية
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group bg-transparent"
                      onClick={() => setActiveSection("services")}
                    >
                      <ArrowLeft className="w-5 h-5 ml-2 group-hover:-translate-x-1 transition-transform" />
                      تعرف على خدماتنا
                    </Button>
                  </div>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
                {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-card/50 border-primary/20 hover:bg-card/80 transition-all duration-300 hover:scale-105 group"
                  >
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Services Preview */}
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-900">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-balance">خدماتنا القانونية</h2>
                  <p className="text-lg text-muted-foreground text-pretty">
                    نقدم مجموعة شاملة من الخدمات القانونية المتخصصة
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.slice(0, 4).map((service, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 border-primary/20 hover:border-primary/40 cursor-pointer"
                      onClick={() => setActiveSection("services")}
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-balance">من أنا</h2>
                <div className="text-lg leading-relaxed space-y-4 text-pretty">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <Award className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold">خبرة متميزة</h3>
                    <p className="text-sm text-muted-foreground">سنوات من الخبرة في المجال القانوني</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <Scale className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold">العدالة والنزاهة</h3>
                    <p className="text-sm text-muted-foreground">التزام كامل بقيم العدالة والمهنية</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-primary/20 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3">
                    <Shield className="w-8 h-8 text-primary mx-auto" />
                    <h3 className="font-semibold">حماية الحقوق</h3>
                    <p className="text-sm text-muted-foreground">الدفاع عن حقوق العملاء بكل قوة</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          )}

          {/* Services Section */}
          {activeSection === "services" && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">الخدمات القانونية</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  أقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتكم القانونية
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-card/50 border-primary/20 hover:border-primary/40"
                  >
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/30 hover:scale-[1.01] transition-all duration-300">
                <CardContent className="p-8 text-center space-y-6">
                  <Scale className="w-16 h-16 text-primary mx-auto animate-pulse" />
                  <h3 className="text-3xl font-bold">هل تحتاج استشارة قانونية؟</h3>
                  <p className="text-muted-foreground text-lg">
                    احجز موعداً للحصول على استشارة قانونية متخصصة وحلول قانونية فعالة
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 px-8 py-4 text-lg shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105 group"
                    onClick={() => setActiveSection("contact")}
                  >
                    <Phone className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                    احجز استشارة الآن
                  </Button>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Qualifications Section */}
          {activeSection === "qualifications" && (
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">المؤهلات والخبرات</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  مؤهلات علمية ومهنية متقدمة في مجال القانون والشريعة
                </p>
              </div>

              <div className="space-y-6">
                <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">المؤهلات العلمية</h3>
                    </div>
                    <ul className="space-y-3">
                      {qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-start gap-3 hover:text-primary transition-colors">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold">المهارات المهنية</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
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
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold">العضويات</h3>
                      </div>
                      <ul className="space-y-2 text-sm">
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
            <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-balance">التواصل واحجز استشارتك</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  للحصول على استشارة قانونية متخصصة أو لمناقشة قضيتكم القانونية
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-semibold">الهاتف</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          770461195
                        </p>
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          773611056
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          Khalid77791@gmail.com
                        </p>
                        <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                          Khalid99661@yahoo.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-primary/20 hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-semibold">العنوان</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
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
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3">
                        <Scale className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold">ساعات العمل</h3>
                      </div>
                      <div className="space-y-2 text-sm">
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

      {/* Added developer footer */}
      <footer className="mr-80 bg-card/30 border-t border-border/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto p-6">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">تم التطوير بواسطة:</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">المهندس أحمد فايز</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  780138083
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
