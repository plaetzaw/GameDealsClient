import React from "react";
import { layoutGenerator } from "react-break";

export default function breakpointtest() {
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });

  const OnMobile = layout.is("mobile");
  const OnAtLeastTablet = layout.isAtLeast("tablet");
  const OnAtMostPhablet = layout.isAtMost("phablet");
  const OnDesktop = layout.is("desktop");
  const OnNotMobile = layout.isAtLeast("phablet");
  return (
    <>
      <div>
        <OnMobile>Displayed on mobile layout only</OnMobile>

        <OnAtLeastTablet>
          Displayed on tablet and desktop layouts
        </OnAtLeastTablet>

        <OnAtMostPhablet>
          Displayed on mobile and phablet layouts
        </OnAtMostPhablet>

        <OnDesktop>Displayed on desktop layout only</OnDesktop>
      </div>
      <div style={{ backgroundColor: "red" }}>
        <OnMobile>Displayed on mobile layout only</OnMobile>
        <OnNotMobile>Anything that isn't mobile</OnNotMobile>
      </div>
    </>
  );
}
