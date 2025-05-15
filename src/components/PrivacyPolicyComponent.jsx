import React, { useState } from 'react';

const PrivacyPolicyComponent = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState('cookies');

  // Custom styles to enhance the component appearance
  const styles = {
    container: {
      maxHeight: '80vh',
      overflow: 'auto',
      maxWidth: '1140px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
      padding: '25px',
      margin: '0 auto'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
      paddingBottom: '15px',
      borderBottom: '1px solid #e9ecef'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#2c3e50',
      margin: 0
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#6c757d'
    },
    tabsContainer: {
      marginBottom: '25px',
      borderBottom: '1px solid #dee2e6'
    },
    tabList: {
      display: 'flex',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    tabItem: {
      marginRight: '5px'
    },
    tabButton: {
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderBottom: 'none',
      borderRadius: '5px 5px 0 0',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      position: 'relative',
      bottom: '-1px'
    },
    activeTabButton: {
      backgroundColor: '#fff',
      borderBottomColor: '#fff',
      color: '#007bff',
      fontWeight: 'bold'
    },
    contentSection: {
      marginBottom: '30px'
    },
    sectionTitle: {
      color: '#2c3e50',
      marginTop: '25px',
      marginBottom: '15px',
      fontWeight: 'bold'
    },
    sectionSubtitle: {
      color: '#34495e',
      marginTop: '20px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    timestamp: {
      fontSize: '14px',
      color: '#6c757d',
      marginBottom: '20px'
    },
    paragraph: {
      lineHeight: '1.6',
      marginBottom: '15px',
      color: '#333'
    },
    list: {
      paddingLeft: '20px',
      marginBottom: '20px'
    },
    listItem: {
      marginBottom: '10px',
      lineHeight: '1.5'
    },
    borderSection: {
      borderLeft: '4px solid #007bff',
      paddingLeft: '15px',
      marginTop: '15px',
      marginBottom: '15px',
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '0 5px 5px 0'
    },
    twoColumnContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '0 -15px'
    },
    column: {
      flex: '0 0 50%',
      padding: '0 15px',
      boxSizing: 'border-box'
    },
    contactSection: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '5px',
      marginTop: '25px'
    },
    link: {
      color: '#007bff',
      textDecoration: 'none'
    }
  };

  // Media query handling for mobile
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    styles.column.flex = '0 0 100%';
  }

  return (
    <div style={styles.container}>
      {/* Header with close button */}
      <div style={styles.header}>
        <h2 style={styles.title}>
          {activeTab === 'cookies' ? 'Politica privind cookie-urile' : 'Politica de confidențialitate și GDPR'}
        </h2>
        {closeModal && (
          <button 
            onClick={closeModal} 
            style={styles.closeButton}
            aria-label="Close"
          >
            &times;
          </button>
        )}
      </div>
  
      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <ul style={styles.tabList}>
          <li style={styles.tabItem}>
            <button 
              style={{
                ...styles.tabButton,
                ...(activeTab === 'cookies' ? styles.activeTabButton : {})
              }}
              onClick={() => setActiveTab('cookies')}
            >
              Cookie-uri
            </button>
          </li>
          <li style={styles.tabItem}>
            <button 
              style={{
                ...styles.tabButton,
                ...(activeTab === 'gdpr' ? styles.activeTabButton : {})
              }}
              onClick={() => setActiveTab('gdpr')}
            >
              GDPR
            </button>
          </li>
        </ul>
      </div>
  
      {/* Content */}
      <div>
        {activeTab === 'cookies' ? (
          <div>
            <p style={styles.timestamp}>Ultima actualizare: 5 mai 2025</p>
            
            <p style={styles.paragraph}>
              Această Politică privind cookie-urile explică ce sunt cookie-urile și cum le folosim. 
              Ar trebui să citiți această politică pentru a înțelege ce tip de cookie-uri folosim sau 
              informațiile pe care le colectăm folosind cookie-uri și cum sunt utilizate aceste informații.
            </p>
            
            <p style={styles.paragraph}>
              Cookie-urile nu conțin de obicei nicio informație care să identifice personal un utilizator, 
              dar informațiile personale pe care le stocăm despre dvs. pot fi legate de informațiile stocate 
              în și obținute prin intermediul cookie-urilor. Pentru informații suplimentare despre modul în 
              care utilizăm, stocăm și păstrăm în siguranță datele dvs. personale, consultați Politica noastră 
              de confidențialitate.
            </p>
            
            <p style={styles.paragraph}>
              Nu stocăm informații personale sensibile, cum ar fi adrese poștale, parole de cont etc. 
              în modulele cookie pe care le folosim.
            </p>
            
            <h3 style={styles.sectionTitle}>Interpretare și definiții</h3>
            
            <h4 style={styles.sectionSubtitle}>Interpretare</h4>
            <p style={styles.paragraph}>
              Cuvintele a căror inițială este scrisă cu majusculă au înțelesuri definite în următoarele 
              condiții. Următoarele definiții vor avea același înțeles indiferent dacă apar la singular sau la plural.
            </p>
            
            <h4 style={styles.sectionSubtitle}>Definiții</h4>
            <p style={styles.paragraph}>În sensul prezentei Politici privind modulele cookie:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Companie</strong> (denumită în continuare „Compania", „Noi", „Nouă" sau „Al nostru/a noastră/ai
                noștri/ale noastre" în această Politică privind cookie-urile) se referă la CIMA DATA ANALYTICS SA, 
                București, B-dul Dacia, nr. 20, etaj 6, sector 1.
              </li>
              <li style={styles.listItem}>
                <strong>Cookie-uri</strong> înseamnă fișiere mici care sunt plasate pe computerul, dispozitivul 
                mobil sau orice alt dispozitiv de către un site web, conținând detalii despre istoricul dvs. 
                de navigare pe site-ul respectiv, printre numeroasele sale utilizări.
              </li>
              <li style={styles.listItem}>
                <strong>Site web</strong> se referă la CimaData, accesibilă de la https://www.cimadata.ro/
              </li>
              <li style={styles.listItem}>
                <strong>Tu</strong> înseamnă persoana care accesează sau utilizează Site-ul Web sau o 
                companie sau orice entitate juridică în numele căreia respectiva persoană accesează sau 
                utilizează Site-ul Web, după caz.
              </li>
            </ul>
            
            <h3 style={styles.sectionTitle}>Utilizarea cookie-urilor</h3>
            
            <h4 style={styles.sectionSubtitle}>Tipul de cookie-uri pe care le folosim</h4>
            <p style={styles.paragraph}>
              Cookie-urile pot fi „Persistente" sau „De Sesiune". Cookie-urile persistente rămân pe 
              computerul personal sau pe dispozitivul mobil atunci când vă deconectați, în timp ce 
              cookie-urile de sesiune sunt șterse imediat ce închideți browserul web.
            </p>
            
            <p style={styles.paragraph}>
              Folosim atât cookie-uri de sesiune, cât și cookie-uri persistente în scopurile prezentate mai jos:
            </p>
            
            <div style={{...styles.contentSection, backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px'}}>
              <h5 style={{...styles.sectionSubtitle, marginTop: '0'}}>Cookie-uri necesare / esențiale</h5>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Tip:</strong> Cookie-uri de sesiune</li>
                <li style={styles.listItem}><strong>Administrat de:</strong> Noi</li>
                <li style={styles.listItem}>
                  <strong>Scop:</strong> Aceste cookie-uri sunt esențiale pentru a vă oferi serviciile 
                  disponibile prin intermediul site-ului web și pentru a vă permite să utilizați unele 
                  dintre funcțiile acestuia. Acestea ajută la autentificarea utilizatorilor și la 
                  prevenirea utilizării frauduloase a conturilor de utilizator. Fără aceste cookie-uri, 
                  serviciile pe care le-ați solicitat nu pot fi furnizate și folosim aceste cookie-uri 
                  doar pentru a vă oferi aceste servicii.
                </li>
              </ul>
            </div>
            
            <div style={{...styles.contentSection, backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '5px', marginTop: '20px'}}>
              <h5 style={{...styles.sectionSubtitle, marginTop: '0'}}>Cookie-uri funcționale</h5>
              <ul style={styles.list}>
                <li style={styles.listItem}><strong>Tip:</strong> Cookie-uri persistente</li>
                <li style={styles.listItem}><strong>Administrat de:</strong> Noi</li>
                <li style={styles.listItem}>
                  <strong>Scop:</strong> Aceste cookie-uri ne permit să ne amintim alegerile pe care le 
                  faceți atunci când utilizați site-ul web, cum ar fi amintirea datelor de conectare sau 
                  a preferințelor lingvistice. Scopul acestor cookie-uri este de a vă oferi o experiență 
                  mai personalizată și de a evita reintroducerea preferințelor de fiecare dată când 
                  utilizați site-ul web.
                </li>
              </ul>
            </div>
            
            <h3 style={styles.sectionTitle}>Opțiunile dumneavoastră privind cookie-urile</h3>
            <p style={styles.paragraph}>
              Dacă preferați să evitați utilizarea cookie-urilor pe site-ul web, trebuie mai întâi să 
              dezactivați utilizarea cookie-urilor în browserul dvs. și apoi să ștergeți cookie-urile 
              salvate în browserul dvs. asociate cu acest site web. Puteți utiliza această opțiune 
              pentru a împiedica utilizarea cookie-urilor în orice moment.
            </p>
            
            <p style={styles.paragraph}>
              Dacă nu acceptați modulele noastre cookie, este posibil să întâmpinați unele inconveniente 
              în utilizarea site-ului web și este posibil ca unele funcții să nu funcționeze corect.
            </p>
            
            <p style={styles.paragraph}>
              Dacă doriți să ștergeți modulele cookie sau să instruiți browserul dvs. web să șteargă 
              sau să refuze modulele cookie, vă rugăm să accesați paginile de ajutor ale browserului dvs. web.
            </p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Pentru browserul web Chrome, vă rugăm să accesați această pagină de la Google: 
                <a href="https://support.google.com/accounts/answer/32050" style={{...styles.link, marginLeft: '5px'}}>
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li style={styles.listItem}>
                Pentru browserul web Internet Explorer, vă rugăm să vizitați această pagină de la Microsoft: 
                <a href="http://support.microsoft.com/kb/278835" style={{...styles.link, marginLeft: '5px'}}>
                  http://support.microsoft.com/kb/278835
                </a>
              </li>
              <li style={styles.listItem}>
                Pentru browserul web Firefox, vă rugăm să vizitați această pagină de la Mozilla: 
                <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" style={{...styles.link, marginLeft: '5px'}}>
                  https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored
                </a>
              </li>
              <li style={styles.listItem}>
                Pentru browserul web Safari, vă rugăm să vizitați această pagină de la Apple: 
                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" style={{...styles.link, marginLeft: '5px'}}>
                  https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </a>
              </li>
              <li style={styles.listItem}>
                Pentru orice alt browser web, vă rugăm să vizitați paginile web oficiale ale browserului dvs. web.
              </li>
            </ul>
            
            <h3 style={styles.sectionTitle}>Mai multe informații despre cookie-uri</h3>
            <p style={styles.paragraph}>
              Puteți afla mai multe despre cookie-uri: 
              <a href="#" style={{...styles.link, marginLeft: '5px'}}>Cookie-urile: Ce fac?</a>.
            </p>
            
            <h3 style={styles.sectionTitle}>Contactați-ne</h3>
            <p style={styles.paragraph}>Dacă aveți întrebări despre această Politică privind cookie-urile, ne puteți contacta:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                Prin e-mail: 
                <a href="mailto:office@cimadata.ro" style={{...styles.link, marginLeft: '5px'}}>
                  office@cimadata.ro
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h3 style={{...styles.sectionTitle, textAlign: 'center'}}>INFORMARE</h3>
            <p style={{...styles.paragraph, fontWeight: 'bold', textAlign: 'center'}}>
              privind condițiile de prelucrare a datelor cu caracter personal
            </p>
            
            <p style={styles.paragraph}>
              In conformitate cu prevederile Regulamentului U.E. nr. 679/2016 privind protecția persoanelor 
              fizice în ceea ce privește prelucrarea datelor cu caracter personal și privind libera circulație 
              a acestor date și de abrogare a Directivei 95/46/CE (denumit în continuare "Regulament"), 
              prin prezenta vă informăm asupra faptului că CIMA DATA ANALYTICS S.A (denumită în continuare "CIMA") 
              prelucrează datele cu caracter personal ale clienților finali în scopul desfășurării activității CIMA, 
              respectiv furnizarea de energie electrică și/sau gaze naturale.
            </p>
            
            <h4 style={styles.sectionSubtitle}>Definiții</h4>
            <p style={styles.paragraph}>În contextul prezentei note de informare, termenii și expresiile de mai jos vor avea următorul înțeles:</p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <strong>Client:</strong> persoană fizică sau juridică care este parte într-un contract încheiat cu CIMA; 
                sunt asimilați de asemenea clienților și acele persoane fizice și/sau juridice care își manifestă 
                în mod liber și expres interesul cât privește desfășurarea activității CIMA.
              </li>
              <li style={styles.listItem}>
                <strong>Date cu caracter personal:</strong> înseamnă orice informații privind o persoană fizică 
                identificată sau identificabilă (denumită în cele ce urmează "Persoană vizată"); o persoană fizică 
                identificabilă este o persoană care poate fi identificată, direct sau indirect, în special prin 
                referire la un element de identificare.
              </li>
              <li style={styles.listItem}>
                <strong>Destinatar:</strong> persoană fizică sau juridică, autoritate publică, agenție sau alt 
                organism, căruia/căreia îi sunt divulgate datele cu caracter personal, indiferent dacă este o 
                terță parte.
              </li>
              <li style={styles.listItem}><strong>Operator de date cu caracter personal:</strong> CIMA.</li>
              <li style={styles.listItem}>
                <strong>Persoană împuternicită:</strong> persoană fizică sau juridică autoritate publică, 
                agenție sau alt organism care prelucrează datele cu caracter personal în numele CIMA.
              </li>
              <li style={styles.listItem}>
                <strong>Persoană vizată:</strong> orice persoană fizică identificată sau identificabilă ale 
                cărei date cu caracter personal sunt prelucrate, respectiv Clienții și/sau Potențialii clienți.
              </li>
              <li style={styles.listItem}>
                <strong>Prelucrare de date cu caracter personal:</strong> reprezintă orice operațiune sau set 
                de operațiuni efectuate asupra datelor cu caracter personal sau asupra seturilor de date cu 
                caracter personal, cu sau fără utilizarea de mijloace automatizate.
              </li>
              <li style={styles.listItem}>
                <strong>Potențialul client:</strong> este acea persoană care și-a manifestat interesul pentru 
                primirea de comunicări în scop de marketing direct.
              </li>
            </ul>
            
            <h4 style={styles.sectionSubtitle}>Scopul prelucrării datelor cu caracter personal</h4>
            <p style={styles.paragraph}>CIMA prelucrează datele cu caracter personal în următoarele scopuri specifice:</p>
            
            <div style={styles.borderSection}>
              <p style={{fontWeight: 'bold'}}>Pentru executarea unui contract:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Desfășurarea activității CIMA, respectiv prestarea serviciului de furnizare a energiei 
                  electrice și/sau a gazelor naturale, precum și a altor servicii conexe/similare.
                </li>
                <li style={styles.listItem}>
                  Elaborarea și transmiterea de rapoarte către alte entități ce își desfășoară activitatea 
                  în domeniul energiei electrice și/sau a gazelor naturale.
                </li>
                <li style={styles.listItem}>
                  Transferul datelor cu caracter personal către alți destinatari exclusiv în scopul ducerii 
                  la îndeplinire a obiectului contractului.
                </li>
              </ul>
            </div>
            
            <div style={styles.borderSection}>
              <p style={{fontWeight: 'bold'}}>Pentru exprimarea consimțământului Clienților:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Transmiterii de către CIMA către Clienți/Potențialii clienți a unor comunicări care au legătură 
                  cu activitățile desfășurate de CIMA.
                </li>
                <li style={styles.listItem}>
                  Ducerea la îndeplinire a mandatului/împuternicirii acordat(e) în scopul intermedierii relației 
                  cu distribuitorul de energie electrică.
                </li>
              </ul>
            </div>
            
            <div style={styles.borderSection}>
              <p style={{fontWeight: 'bold'}}>Pentru îndeplinirea de către CIMA a unor obligații legale:</p>
              <ul style={styles.list}>
                <li style={styles.listItem}>
                  Desfășurarea de către CIMA a activității proprii curente de gestiune economico-financiară, 
                  tehnico-operativă și administrativă.
                </li>
                <li style={styles.listItem}>
                  Îndeplinirea unor obligații legale impuse CIMA de către autoritățile statului.
                </li>
                <li style={styles.listItem}>
                  Punerea în aplicare a hotărârilor judecătorești și/sau a altor sentințe/decizii.
                </li>
                <li style={styles.listItem}>
                  Derularea relației de colaborare dintre producătorul de energie – transportatorul de energie – 
                  furnizorul de energie – distribuitorul de energie.
                </li>
              </ul>
            </div>
            
            <h4 style={styles.sectionSubtitle}>Datele cu caracter personal prelucrate</h4>
            <p style={styles.paragraph}>Datele cu caracter personal prelucrate de CIMA includ:</p>
            
            <div style={styles.twoColumnContainer}>
              <div style={styles.column}>
                <p style={{fontWeight: 'bold', color: '#2c3e50'}}>Date cu caracter general:</p>
                <ul style={styles.list}>
                  <li>Numele și prenumele</li>
                  <li>Data nașterii</li>
                  <li>Locul nașterii</li>
                  <li>Semnătura</li>
                  <li>Date din actele de stare civilă</li>
                  <li>Adresa domiciliu</li>
                  <li>Adresa locului de consum</li>
                  <li>Adresa de corespondență</li>
                  <li>E-mail personal</li>
                  <li>E-mail profesional</li>
                  <li>Nr. telefon personal</li>
                  <li>Nr. telefon profesional</li>
                  <li>Situație economică și financiară</li>
                  <li>Date bancare</li>
                </ul>
              </div>
              
              <div style={styles.column}>
                <p style={{fontWeight: 'bold', color: '#2c3e50'}}>Date referitoare la numere de identificare națională:</p>
                <ul style={styles.list}>
                  <li>Codul numeric personal</li>
                  <li>Alt cod național de identificare</li>
                  <li>Seria și numărul actului de identitate</li>
                  <li>Seria și numărul pașaportului</li>
                </ul>
              </div>
            </div>
            
            <p style={styles.paragraph}>
              Refuzul Clienților de a transmite către CIMA datele cu caracter personal și/sau de a permite prelucrarea de către CIMA 
              a datelor cu caracter personal conduce la imposibilitatea prestării serviciului de furnizare a energiei electrice și/sau 
              a gazelor naturale, precum și a altor servicii conexe/similare.
            </p>
            
            <h4 style={styles.sectionSubtitle}>Drepturile persoanelor vizate</h4>
            <p style={styles.paragraph}>În conformitate cu dispozițiile Regulamentului, beneficiați de următoarele drepturi:</p>
            
            <ul style={styles.list}>
              <li style={styles.listItem}>Dreptul de a avea acces la prelucrarea datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul de rectificare a datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul de ștergere a datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul de restricționare a prelucrării datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul la portabilitatea datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul de a vă opune în orice moment operațiunilor de prelucrare a datelor cu caracter personal</li>
              <li style={styles.listItem}>Dreptul de a nu face obiectul unui proces decizional individual automatizat</li>
              <li style={styles.listItem}>Dreptul de a depune o plângere la autoritatea națională de supraveghere</li>
              <li style={styles.listItem}>Dreptul de a vă adresa justiției</li>
              <li style={styles.listItem}>Dreptul de a fi informat cu privire la încălcarea securității datelor cu caracter personal</li>
            </ul>
            
            <div style={styles.contactSection}>
              <p style={styles.paragraph}>
                Pentru orice informații suplimentare referitoare la prelucrarea datelor cu caracter personal, 
                puteți solicita sprijinul CIMA DATA ANALYTICS S.A:
              </p>
              
              <ul style={{...styles.list, marginBottom: '0'}}>
                <li style={{...styles.listItem, display: 'flex', alignItems: 'center'}}>
                  <strong style={{minWidth: '70px', display: 'inline-block'}}>Adresă:</strong> 
                  <span>București, B-dul Dacia, nr. 20, etaj 6, sector 1</span>
                </li>
                <li style={{...styles.listItem, display: 'flex', alignItems: 'center'}}>
                  <strong style={{minWidth: '70px', display: 'inline-block'}}>Telefon:</strong> 
                  <span>021.202.95.90</span>
                </li>
                <li style={{...styles.listItem, display: 'flex', alignItems: 'center', marginBottom: '0'}}>
                  <strong style={{minWidth: '70px', display: 'inline-block'}}>E-mail:</strong> 
                  <a href="mailto:office@cimadata.ro" style={styles.link}>
                    office@cimadata.ro
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicyComponent;