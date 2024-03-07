import React from "react";
import ApiCall from "../../products/Cards/";

function Home() {
  return (
    <React.Fragment>
      <main>
        <h1>This is the Home page!</h1>
        <h2>This is lorem on home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, atque
          facilis unde dignissimos possimus molestias a vel at eveniet numquam
          magnam ea, aliquid, reiciendis voluptas quia eius iste. Libero, nam?
        </p>
        <ApiCall />
      </main>
    </React.Fragment>
  );
}

export default Home;
