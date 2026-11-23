import {
  CalendarDays,
  Clapperboard,
  Megaphone,
  PartyPopper,
  PanelsTopLeft,
  Star,
  Tags,
  UsersRound,
} from "lucide-react";
import styles from "./page.module.css";

const navigation = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Berita", href: "#news" },
];

const sampleStats = [
  { value: "8+", label: "Tahun pengalaman", Icon: CalendarDays },
  { value: "35+", label: "Klien & partner", Icon: UsersRound },
  { value: "120+", label: "Event terlaksana", Icon: Star },
];

const sampleServices = [
  {
    title: "Event Management",
    description: "Perencanaan dan pelaksanaan acara dari awal hingga selesai.",
    Icon: CalendarDays,
  },
  {
    title: "Brand Activation",
    description: "Aktivasi kreatif untuk mendekatkan brand dengan audiens.",
    Icon: Megaphone,
  },
  {
    title: "Exhibition & Booth",
    description: "Konsep dan produksi area pameran yang menarik perhatian.",
    Icon: PanelsTopLeft,
  },
  {
    title: "Festival & Bazaar",
    description: "Pengalaman festival dan bazaar yang seru dan tertata.",
    Icon: PartyPopper,
  },
  {
    title: "Promotional Campaign",
    description: "Kampanye promosi untuk memperkuat interaksi dengan brand.",
    Icon: Tags,
  },
  {
    title: "Event Production",
    description: "Dukungan produksi teknis untuk acara yang berjalan lancar.",
    Icon: Clapperboard,
  },
];

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Navigasi utama">
          <a className={styles.brand} href="#home" aria-label="Antariksa Grup, beranda">
            <span className={styles.brandMark} aria-hidden="true">
              A
            </span>
            <span className={styles.brandName}>
              ANTARIKSA
              <br />
              GRUP
            </span>
          </a>

          <div className={styles.navLinks}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className={styles.contactLink} href="mailto:halo@antariksagrup.com">
            Hubungi Kami <span aria-hidden="true">→</span>
          </a>
        </nav>
      </header>

      <main>
        <section className={styles.hero} id="home" aria-labelledby="hero-title">
          <div className={styles.heroImage} role="img" aria-label="Suasana konser dengan panggung dan penonton" />
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>Event Management &amp; Creative Agency</p>
            <h1 className={styles.heroTitle} id="hero-title">
              We Create Experiences.
              <br />
              We Make Moments <span>Matter.</span>
            </h1>
            <p className={styles.heroDescription}>
              Antariksa Grup menghadirkan solusi event yang kreatif, inovatif,
              dan berdampak untuk setiap momen spesial.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="#portfolio">
                Lihat Karya Kami <span aria-hidden="true">→</span>
              </a>
              <a className={styles.secondaryButton} href="#about">
                Tentang Kami
              </a>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about" aria-labelledby="about-title">
          <div className={styles.aboutGrid}>
            <div
              className={styles.aboutImage}
              role="img"
              aria-label="Suasana pengunjung menikmati acara outdoor"
            />

            <div className={styles.aboutCopy}>
              <p className={styles.sectionEyebrow}>Tentang Antariksa Grup</p>
              <h2 className={styles.sectionTitle} id="about-title">
                Bringing Ideas Into Real Experiences
              </h2>
              <p className={styles.aboutDescription}>
                Kami membantu mewujudkan ide menjadi pengalaman acara yang
                berkesan—mulai dari perencanaan hingga setiap detail di hari
                pelaksanaan.
              </p>
              <a className={styles.learnMore} href="#services">
                Kenali layanan kami <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className={styles.stats} aria-label="Contoh statistik perusahaan">
              <p className={styles.sampleNotice}>Angka contoh sementara</p>
              {sampleStats.map(({ value, label, Icon }) => (
                <div className={styles.stat} key={label}>
                  <Icon className={styles.statIcon} aria-hidden="true" />
                  <div>
                    <strong className={styles.statValue}>{value}</strong>
                    <span className={styles.statLabel}>{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className={styles.servicesSection}
          id="services"
          aria-labelledby="services-title">
          <div className={styles.servicesContainer}>
            <p className={styles.sectionEyebrow}>Layanan Kami</p>
            <h2 className={styles.sectionTitle} id="services-title">
              Solusi Event yang Menyeluruh
            </h2>
            <p className={styles.servicesDescription}>
              Dari ide hingga eksekusi, kami membantu menciptakan pengalaman yang sesuai dengan kebutuhan acara dan brand Anda.
            </p>

            <div className={styles.serviceGrid}>
              {sampleServices.map(({ title, description, Icon }) => (
                <article className={styles.serviceCard} key={title}>
                  <Icon className={styles.serviceIcon} aria-hidden="true" />
                  <h3 className={styles.serviceTitle}>{title}</h3>
                  <p className={styles.serviceDescription}>{description}</p>
                </article>
              ))}
            </div>
            <p className={styles.sampleNotice}>
              Kategori dan deskripsi layanan ini masih contoh.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
