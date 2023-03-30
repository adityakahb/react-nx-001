import { srcsetGenerator, placeholdColors } from '@/utils/common';
export default function ResponsiveImage({
  _xxl,
  _xl,
  _lg,
  _md,
  _sm,
  _default,
  alt,
  className
}) {
  const colors = placeholdColors();
  const replacePlaceholdUrl = (breakpoint, needsSingleImage) => {
    var imgPath = srcsetGenerator(breakpoint, needsSingleImage);
    if (imgPath.includes('place-hold.it')) {
      imgPath = imgPath
        .replaceAll('xxxxxx', colors.text)
        .replaceAll('yyyyyy', colors.backgroundColor);
    }
    return imgPath;
  };
  return (
    <>
      <picture>
        {_xxl && (_xxl['1x'] || _xxl['2x']) ? (
          <source
            media="(min-width: 102em)"
            srcSet={replacePlaceholdUrl(_xxl)}
          />
        ) : (
          <></>
        )}
        {_xl && (_xl['1x'] || _xl['2x']) ? (
          <source
            media="(min-width: 73.25em)"
            srcSet={replacePlaceholdUrl(_xl)}
          />
        ) : (
          <></>
        )}
        {_lg && (_lg['1x'] || _lg['2x']) ? (
          <source media="(min-width: 62em)" srcSet={replacePlaceholdUrl(_lg)} />
        ) : (
          <></>
        )}
        {_md && (_md['1x'] || _md['2x']) ? (
          <source
            media="(min-width: 46.375em)"
            srcSet={replacePlaceholdUrl(_md)}
          />
        ) : (
          <></>
        )}
        {_sm && (_sm['1x'] || _sm['2x']) ? (
          <source
            media="(min-width: 35.75em)"
            srcSet={replacePlaceholdUrl(_sm)}
          />
        ) : (
          <></>
        )}
        <img
          className={className}
          src={replacePlaceholdUrl(_default, true)}
          srcSet={replacePlaceholdUrl(_default)}
          alt={`${alt}`}
        />
      </picture>
    </>
  );
}
