import Image from "next/image";
import Link from "next/link";
import { Container } from "./Common";
import { LogoContainer } from "../../features/home/styled";

export default function Layout({ children }) {
  return (
    <Container>
      <LogoContainer>
        <Link href="/" passHref>
          <a>
            <Image src="/assets/logo.svg" alt="Logo" width={437} height={61} />
          </a>
        </Link>
        <p>Learn code on your free time</p>
      </LogoContainer>
      {children}
    </Container>
  );
}
