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
  const replacePlaceholdUrl = () => {};
  return (
    <>
      <picture>
        {_xxl && (_xxl['1x'] || _xxl['2x']) ? (
          <source media="(min-width: 102em)" srcSet={srcsetGenerator(_xxl)} />
        ) : (
          <></>
        )}
        {_xl && (_xl['1x'] || _xl['2x']) ? (
          <source media="(min-width: 73.25em)" srcSet={srcsetGenerator(_xl)} />
        ) : (
          <></>
        )}
        {_lg && (_lg['1x'] || _lg['2x']) ? (
          <source media="(max-width: 62em)" srcSet={srcsetGenerator(_lg)} />
        ) : (
          <></>
        )}
        {_md && (_md['1x'] || _md['2x']) ? (
          <source media="(max-width: 46.375em)" srcSet={srcsetGenerator(_md)} />
        ) : (
          <></>
        )}
        {_sm && (_sm['1x'] || _sm['2x']) ? (
          <source media="(max-width: 35.75em)" srcSet={srcsetGenerator(_sm)} />
        ) : (
          <></>
        )}
        {_default && (_default['1x'] || _default['2x']) ? (
          <source media="(max-width: 0)" srcSet={srcsetGenerator(_default)} />
        ) : (
          <></>
        )}
        <img
          className={className}
          src={srcsetGenerator(_default, true)}
          alt={`${alt}`}
        />
      </picture>
    </>
  );
}
