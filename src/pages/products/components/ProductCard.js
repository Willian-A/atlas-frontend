import React from "react";
import { A } from "hookrouter";
import ProgressiveImage from "react-progressive-image";

import Placeholder from "../../../assets/images/placeholders/CardPlaceholder.jpg";
import * as component from "./component";
import * as text from "../../../components/text";
import Button from "../../../styled/button";

export default function ProductCard(props) {
  return (
    <component.CardBox>
      <A href={`/produto/${props.id_product}`}>
        <ProgressiveImage
          delay={1000}
          src={props.img}
          placeholder={Placeholder}
        >
          {(src, loading) => (
            <img
              style={{ opacity: loading ? 0.5 : 1 }}
              src={src}
              alt={props.name}
            />
          )}
        </ProgressiveImage>
        <component.CardBio>
          <text.SmallSemiBold>{props.name}</text.SmallSemiBold>
          <text.MediumSemiBold>R$ {props.price}</text.MediumSemiBold>
          <Button width="100%">Ver Produto</Button>
        </component.CardBio>
      </A>
    </component.CardBox>
  );
}
