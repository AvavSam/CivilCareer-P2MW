import {
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";

interface FeatureData {
  icon: any;
  title: string;
  description: string;
}

interface PricingData {
  title: string;
  price: string;
  icon: any;
  features: string[];
}

interface TestimonialData {
  name: string;
  role: string;
  image: string;
  content: string;
}

interface FooterLinkData {
  label: string;
  href: string;
}

interface FooterContactData {
  label: string;
}

interface SocialMediaData {
  icon: any;
  href: string;
}

interface NavLinkData {
  label: string;
  href: string;
}

export const FEATURES_DATA: FeatureData[] = [
  {
    icon: GraduationCap,
    title: "Materi Berkualitas",
    description: "Dikembangkan oleh praktisi dan akademisi berpengalaman",
  },
  {
    icon: Users,
    title: "Belajar Bersama",
    description: "Diskusi interaktif dengan sesama pembelajar",
  },
  {
    icon: BookOpen,
    title: "Akses Dimana Saja",
    description: "Pelajari materi kapanpun dan dimanapun",
  },
];

export const PRICING_DATA: PricingData[] = [
  {
    title: "Basic Plan",
    price: "125.000",
    icon: BookOpen,
    features: ["Akses video pembelajaran", "Latihan soal dasar", "Forum diskusi", "Sertifikat"],
  },
  {
    title: "Premium Plan",
    price: "250.000",
    icon: GraduationCap,
    features: ["Semua fitur Basic Plan", "Sesi mentoring", "Proyek praktik", "Konsultasi pribadi"],
  },
  {
    title: "Quiz Plan",
    price: "50.000",
    icon: MessageSquare,
    features: ["Bank soal lengkap", "Pembahasan detail", "Progress tracking", "Analisis kemampuan"],
  },
];

export const TESTIMONIAL_DATA: TestimonialData[] = [
  {
    name: "Budi Santoso",
    role: "Mahasiswa Teknik Sipil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content:
      "Platform ini sangat membantu saya dalam memahami konsep-konsep teknik sipil yang kompleks. Materinya lengkap dan mudah dipahami.",
  },
  {
    name: "Siti Rahayu",
    role: "Fresh Graduate",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content:
      "Saya berhasil lulus ujian insinyur berkat latihan soal yang disediakan. Pembahasan sangat detail dan aplikatif.",
  },
  {
    name: "Ahmad Hidayat",
    role: "Praktisi Konstruksi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    content: "Sebagai praktisi, saya menemukan banyak insight baru dari course yang disediakan. Sangat worth it!",
  },
];

export const QUICK_LINKS: FooterLinkData[] = [
  { label: "Tentang Kami", href: "#" },
  { label: "Kursus", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Kontak", href: "#" },
];

export const CONTACT_INFO: FooterContactData[] = [
  { label: "Email: info@civillearn.id" },
  { label: "Phone: (021) 1234-5678" },
  { label: "Alamat: Jakarta, Indonesia" },
];

export const SOCIAL_MEDIA: SocialMediaData[] = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: LinkedIn, href: "#" },
];

export const NAV_LINKS: NavLinkData[] = [
  { label: "Beranda", href: "/" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
];
