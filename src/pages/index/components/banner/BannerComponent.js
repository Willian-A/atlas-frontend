import React from "react";

import * as component from "./component";
import * as text from "../../../../components/text";
import DivPlaceholder from "../../../../components/Placeholder";
import Button from "../../../../styled/button";
import { ReactComponent as ArrowDown } from "../../../../assets/images/icons/arrowDown.svg";

function BannerComponent(props) {
  return props.content.map((value) => {
    return (
      <component.BannerSlideBox
        id="banner-container"
        top={`-${props.top}px`}
        key={value.name}
      >
        <DivPlaceholder img={value.img} alt={value.name} />
        <component.BannerDescBox>
          <component.BannerDesc>
            <text.BigBold>{value.name}</text.BigBold>
            <text.SmallLight>{value.description}</text.SmallLight>
          </component.BannerDesc>
          <component.BannerButtonsBox>
            <Button>Comprar</Button>
            <div onClick={props.moveUp}>
              <ArrowDown />
            </div>
          </component.BannerButtonsBox>
        </component.BannerDescBox>
      </component.BannerSlideBox>
    );
  });
}

export default BannerComponent;
