import { Link } from "wouter";
import portfolioData from "@/lib/portfolio-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/">
              <a className="text-2xl font-bold text-gradient">DevfolioX</a>
            </Link>
            <p className="text-muted-foreground mt-2">
              Full Stack Developer Portfolio
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-muted-foreground mb-2">
              © {currentYear} Sahil Hossain. All rights reserved.
            </p>
            <a
              href={portfolioData.resumeUrl}
              download
              className="text-primary hover:underline"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
