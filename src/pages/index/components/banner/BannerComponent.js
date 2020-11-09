import React from "react";

import * as component from "./component";
import { P, H1 } from "../../../../components/text/text";
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
            <H1>{value.name}</H1>
            <P>{value.description}</P>
          </component.BannerDesc>
          <component.BannerButtonsBox>
            <Button>Comprar</Button>
            <ArrowDown onClick={props.moveUp} />
          </component.BannerButtonsBox>
        </component.BannerDescBox>
      </component.BannerSlideBox>
    );
  });
}

export default BannerComponent;
