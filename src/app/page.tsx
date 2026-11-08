import styles from "./page.module.css";

const navigation = [
  { label: "Tentang", href: "#about" },
  { label: "Layanan", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Berita", href: "#news" },
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
      </main>
    </>
  );
}
