// const defaultKeyFilter = ({ key }) => {
//   const ignoreKeys = ["Tab"];
//   return ignoreKeys.includes(key);
// };
export default function accessibleClick(
  onClick,
  role = "button",
  keys = { whitelist: null, blacklist: ["Tab"] }
) {
  const { whitelist, blacklist } = keys;
  const onKeyDown = (e) => {
    const { key } = e;
    const arrayIncludes = (arr) => arr?.includes?.(key);
    if (arrayIncludes(whitelist) || !arrayIncludes(blacklist)) onClick(e);
  };
  return { onClick, onKeyDown, role, tabIndex: 0 };
}
