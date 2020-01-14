export const canUseDOM = () => !(typeof window === "undefined" ||
    window.document === undefined ||
    window.document.createElement === undefined);
export const combineRefs = (...refs) => {
    return (instance) => {
        for (const item of refs) {
            if (item === null || item === undefined) {
                continue;
            }
            if (typeof item === "object") {
                item.current = instance;
            }
            else {
                item(instance);
            }
        }
    };
};
export const noop = () => { };
//# sourceMappingURL=utils.js.map