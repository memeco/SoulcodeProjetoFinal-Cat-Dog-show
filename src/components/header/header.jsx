import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import "./header.css";

export default function Headers() {
  const [buttonStyle, setButtonStyle] = useState({
    color: "#7c67079b",
  });

  const customButtonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "white",
  };
  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to="/home">
            <img
              src="./logo.jpg"
              alt="Logo da Loja"
              width="200px"
              height="150px"
            />
          </Link>
        </div>
        <div className="pesquisa">
          <TextField
            id="outlined-textarea"
            label="Produtos"
            placeholder="o que seu pet precisa?"
            style={{ width: "50%" }}
          />
          <Button className="lupa">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBCZ3_Wo5bKmIWQSTTN8TRTMyl2qp6nosRA&usqp=CAU"
              alt="lupinha"
              width="40px"
            />
          </Button>

          <Button className="shopping">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqeQKC741sH_vTY7iY5_N2iXvO3SERNX4qg&usqp=CAU"
              alt="carrinho_de_compra"
              width="45px"
            />
          </Button>
        </div>
      </header>
      <div className="menu">
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            home
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            Cachorro
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            Gato
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            Répteis e Insetos
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            Compras
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle}
            onMouseEnter={() => setButtonStyle(customButtonHoverStyle)}
            onMouseLeave={() => setButtonStyle({ color: "#7c67079b" })}
            size="small"
            variant="text"
          >
            Nos deixe um card
          </Button>
        </div>
      </div>
      <div className="banner">
        <img
          src="https://www2.itanhaem.sp.gov.br/wp-content/uploads/2017/06/adote-animal_foto-site-750x450px.png"
          alt="adoto_um_pet"
          width="90%"
          height="600px"
        />
      </div>
    </>
  );
}