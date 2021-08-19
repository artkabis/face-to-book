import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
      <h2>Terms of Service</h2>
      <p>
        LE LOGICIEL EST FOURNI (EN L&apos;ÉTAT), SANS GARANTIE D&apos;AUCUNE
        SORTE, EXPRESSE OU IMPLICITE, Y COMPRIS, MAIS SANS S&apos;Y LIMITER, LES
        GARANTIES DE QUALITÉ MARCHANDE, ADÉQUATION À UN USAGE PARTICULIER ET
        ABSENCE DE CONTREFAÇON. EN AUCUN CAS, LES AUTEURS OU TITULAIRES DE
        DROITS D&apos;AUTEUR NE SERONT RESPONSABLES DE RÉCLAMATION, DOMMAGES OU
        AUTRE RESPONSABILITÉ, QUE CE SOIT DANS UNE ACTION DE CONTRAT, DÉLIT OU
        AUTRE, DÉCOULANT DE, DE OU EN RELATION AVEC LE LOGICIEL OU
        L&apos;UTILISATION OU D&apos;AUTRES OPÉRATIONS DANS LE LOGICIEL.
      </p>
      <h2>Privacy Policy</h2>
      <p>
        This site uses JSON Web Tokens and an in-memory database which resets
        every ~2 hours.
      </p>
      <p>
        Data provided to this site is exclusively used to support signing in and
        is not passed to any third party services, other than via SMTP or OAuth
        for the purposes of authentication.
      </p>
    </Layout>
  );
}
