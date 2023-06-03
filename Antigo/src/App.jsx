import "./App.css";

import artur from "./assets/artur.png";
import crystian from "./assets/crystian.png";
import samuel from "./assets/samuel.png";
import arduino from "./assets/arduino.png";
import logo from "./assets/logo.png";

import Footer from "./components/Footer/Footer";
import MemberProfile from "./components/MemberProfile/MemberProfile";
import Section from "./components/Section/Section";
import Kit from "./components/Kit/Kit";
import Header from "./components/Header/Header";
import Highlight from "./components/Highlight/Highlight";
import Info from "./components/Info/Info";

const App = () => {
  return (
    <div className="App">

      {/* <div id="spot1">
        <img src="/assets/svg/spot.svg" alt="" />
      </div>

      <div id="spot2">
        <img src="/assets/svg/spot2.svg" alt="" />
      </div>

      <div id="spot3">
        <img src="/assets/svg/spotmarrom.svg" alt="" />
      </div> */}

      <Header
        pages={["Contato", "Suporte", "Produtos", "Nossa história"]}
        logo={logo}
      />
      <Highlight
        title="Water (Re)Cycle"
        text="Preservando a água para um futuro sutentável"
        link="#"
      />
      <Info
        title="Quem somos?"
        text="Uma startup de estudantes para estudantes que busca revolucionar o cenário da Educação 4.0! Surgimos em meio a uma competição de nível nacional chamada Grand Prix Senai de Inovação, ao qual conquistamos o primeiro lugar com uma solução que visa expandir os horizontes das salas de aulas com a inserção mais ativa de simuladores, vídeos educativos e visitas virtuais em realidade virtual e aumentada no ensino brasileiro por intermédio de Google CardBoards. "
      />
      <Info
        title="Quem somos?"
        text="Uma startup de estudantes para estudantes que busca revolucionar o cenário da Educação 4.0! Surgimos em meio a uma competição de nível nacional chamada Grand Prix Senai de Inovação, ao qual conquistamos o primeiro lugar com uma solução que visa expandir os horizontes das salas de aulas com a inserção mais ativa de simuladores, vídeos educativos e visitas virtuais em realidade virtual e aumentada no ensino brasileiro por intermédio de Google CardBoards. "
        direction="reverse"
      />
      <Section title="Kits" color="blue">
        <Kit
          image={arduino}
          name="Aratú"
          price="174,99"
          description="O com o melhor preço, tem todas as funcionalidades básicas."
          availableFeatures={[0, 1]}
        />
        <Kit
          image={arduino}
          name="Aratú"
          price="174,99"
          description="O com o melhor preço, tem todas as funcionalidades básicas."
          availableFeatures={[0, 1, 2, 3]}
        />
        <Kit
          image={arduino}
          name="Aratú"
          price="174,99"
          description="O com o melhor preço, tem todas as funcionalidades básicas."
          availableFeatures={[0, 1]}
        />
      </Section>
      <Section title="Colaboradores">
        <MemberProfile
          icon={artur}
          name="Artur Machado"
          description="bla bla blaasjdhfjklahsdkljfhlajkhsdfkljhaskljdfhkljahsfjklhaskjldfhjklsf"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
        <MemberProfile
          icon={crystian}
          name="Artur Machado"
          description="bla bla bla"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
        <MemberProfile
          icon={artur}
          name="Artur Machado"
          description="bla bla bla"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
        <MemberProfile
          icon={artur}
          name="Artur Machado"
          description="bla bla bla"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
        <MemberProfile
          icon={artur}
          name="Artur Machado"
          description="bla bla bla"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
        <MemberProfile
          icon={artur}
          name="Artur Machado"
          description="bla bla bla"
          socialMedia={{
            github: "https://github.com/Artur-Mac",
            instagram: "https://www.instagram.com/arturmxx/",
            linkedin: "https://www.instagram.com/arturmxx/",
          }}
        />
      </Section>
      <Footer>
        <h1>Contatos</h1>
        <a href="mailto: manguebit1@gmail.com">manguebit1@gmail.com</a>
      </Footer>
    </div>
  );
};

export default App;
