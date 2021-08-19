import Link from "next/link";

export const connexionVerfication = () => {
  return (
    <div>
      Vous êtes désormais Connecté<br></br>
      <Link alt="revenir à face-to-book" href="/">
        <a>revenir en arrière</a>
      </Link>
    </div>
  );
};
